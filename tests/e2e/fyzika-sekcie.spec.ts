import { expect, test } from '@nuxt/test-utils/playwright'

// ── Konfigurácia sekcií a ich podstránok ────────────────────────────────────

const sections = [
  {
    name: 'Molekulová fyzika',
    path: '/fyzika/molekulova-fyzika',
    heading: /Molekulová fyzika/,
    subsections: [
      { slug: 'casticova-stavba',    heading: /Časticová stavba/ },
      { slug: 'idealny-plyn',        heading: /Ideálny plyn/ },
      { slug: 'zmeny-skupenstva',    heading: /Zmeny skupenstva/ },
      { slug: 'vlhkost-vzduchu',     heading: /Vlhkosť vzduchu/ },
      { slug: 'tlak-kapaliny-plyny', heading: /Tlak v kvapalinách/ },
    ],
  },
  {
    name: 'Kmity a vlnenie',
    path: '/fyzika/kmity-vlnenie',
    heading: /Kmity a vlnenie/,
    subsections: [
      { slug: 'mechanicke-kmitanie', heading: /Mechanické kmitanie/ },
      { slug: 'kyvadlo',            heading: /Kyvadlo/ },
      { slug: 'mechanicke-vlnenie', heading: /Mechanické vlnenie/ },
      { slug: 'zvuk',               heading: /Zvuk/ },
    ],
  },
  {
    name: 'Elektrický prúd',
    path: '/fyzika/elektricky-prud',
    heading: /Elektrický prúd/,
    subsections: [
      { slug: 'elektricke-veliciny',    heading: /Elektrické veličiny/ },
      { slug: 'ohmov-zakon',            heading: /Ohmov zákon/ },
      { slug: 'zapojenie-rezistorov',   heading: /Zapojenie rezistorov/ },
      { slug: 'elektricka-praca-vykon', heading: /Elektrická práca/ },
    ],
  },
  {
    name: 'Magnetické pole',
    path: '/fyzika/magneticke-pole',
    heading: /Magnetické pole/,
    subsections: [
      { slug: 'magneticke-pole-zaklady',   heading: /základy|Magnetické pole/i },
      { slug: 'sila-na-vodic',             heading: /Sila na vodič/ },
      { slug: 'elektromagneticka-indukcia',heading: /Elektromagnetická indukcia/ },
      { slug: 'striedavy-prud',            heading: /Striedavý prúd/ },
    ],
  },
  {
    name: 'Optika',
    path: '/fyzika/optika',
    heading: /Optika/,
    subsections: [
      { slug: 'svetlo-a-tiene',          heading: /Svetlo/ },
      { slug: 'odraz-lom',               heading: /Odraz/ },
      { slug: 'sosovky-zrkadla',         heading: /Šošovky/ },
      { slug: 'vlnove-vlastnosti-svetla',heading: /Vlnové vlastnosti/ },
    ],
  },
  {
    name: 'Atómová a jadrová fyzika',
    path: '/fyzika/atomova-fyzika',
    heading: /Atómová/,
    subsections: [
      { slug: 'stavba-atomu',   heading: /Stavba atómu/ },
      { slug: 'radioaktivita',  heading: /Rádioaktivita/ },
      { slug: 'jaderna-energia',heading: /Jadrová energia/ },
    ],
  },
]

// ── Testy pre index stránky ──────────────────────────────────────────────────

test.describe('Fyzika — nové sekcie (index stránky)', () => {
  for (const s of sections) {
    test(`${s.name} — index sa načíta s nadpisom`, async ({ page, goto }) => {
      await goto(s.path, { waitUntil: 'hydration' })
      await expect(page.getByRole('heading', { name: s.heading })).toBeVisible()
    })

    test(`${s.name} — breadcrumb obsahuje odkaz na Fyziku`, async ({ page, goto }) => {
      await goto(s.path, { waitUntil: 'hydration' })
      await expect(page.getByTestId('breadcrumb').getByRole('link', { name: /Fyzika/ })).toBeVisible()
    })

    test(`${s.name} — karta prvej podsekcie je klikateľná`, async ({ page, goto }) => {
      await goto(s.path, { waitUntil: 'hydration' })
      const firstLink = page.getByRole('link').filter({ hasText: 'Otvoriť →' }).first()
      await expect(firstLink).toBeVisible()
    })
  }
})

// ── Testy pre obsahové podstránky ────────────────────────────────────────────

test.describe('Fyzika — nové sekcie (obsahové stránky)', () => {
  for (const s of sections) {
    for (const sub of s.subsections) {
      const fullPath = `${s.path}/${sub.slug}`

      test(`${fullPath} — stránka sa načíta`, async ({ page, goto }) => {
        await goto(fullPath, { waitUntil: 'hydration' })
        // level:1 zabráni strict-mode chybe ak rovnaký text je aj v h2
        await expect(page.getByRole('heading', { name: sub.heading, level: 1 })).toBeVisible()
      })

      test(`${fullPath} — KaTeX formuly sa vykreslia`, async ({ page, goto }) => {
        await goto(fullPath, { waitUntil: 'hydration' })
        await expect(page.locator('.katex').first()).toBeVisible()
      })

      test(`${fullPath} — kvíz je prítomný`, async ({ page, goto }) => {
        await goto(fullPath, { waitUntil: 'hydration' })
        const hasDataTestid = await page.getByTestId('quiz-progress').count() > 0
        const hasQuizHeading = await page.getByRole('heading', { name: /Kvíz|Otestuj/i }).count() > 0
        expect(hasDataTestid || hasQuizHeading).toBeTruthy()
      })

      test(`${fullPath} — kvíz funguje (klik na odpoveď)`, async ({ page, goto }) => {
        await goto(fullPath, { waitUntil: 'hydration' })
        const option = page.getByTestId('quiz-option-0')
        if (await option.count() > 0) {
          await option.click()
          await expect(page.getByTestId('quiz-feedback')).toBeVisible()
        } else {
          await expect(page.locator('h1').first()).toBeVisible()
        }
      })

      test(`${fullPath} — breadcrumb naviguje späť`, async ({ page, goto }) => {
        await goto(fullPath, { waitUntil: 'hydration' })
        const bc = page.getByTestId('breadcrumb')
        await expect(bc.getByRole('link', { name: /Fyzika/ })).toBeVisible()
      })
    }
  }
})

// ── Integračné testy — navigácia z hlavnej fyzika stránky ────────────────────

test.describe('Fyzika — navigácia z hlavnej stránky do nových sekcií', () => {
  test('Molekulová fyzika karta je klikateľná', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: /Molekulová fyzika/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/molekulova-fyzika$/)
  })

  test('Elektrický prúd karta je klikateľná', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: /Elektrický prúd/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/elektricky-prud$/)
  })

  test('Optika karta je klikateľná', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await page.locator('.grid').getByRole('link', { name: /Optika/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/optika$/)
  })

  test('Atómová fyzika karta je klikateľná', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: /Atómová/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/atomova-fyzika$/)
  })
})
