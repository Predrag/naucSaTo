import { expect, test } from '@nuxt/test-utils/playwright'

// ── Mechanika — index ────────────────────────────────────────────────────────

test.describe('Mechanika — index stránka', () => {
  test('načíta sa s nadpisom a všetkými kartami', async ({ page, goto }) => {
    await goto('/fyzika/mechanika', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Mechanika' })).toBeVisible()
    const topics = [
      'Kinematika', 'Newtonove zákony pohybu', 'Gravitácia a voľný pád',
      'Vrhy telies', 'Pohyb po kružnici', 'Práca a energia',
      'Mechanika tekutín', 'Hybnosť', 'Trenie a naklonená rovina',
    ]
    for (const t of topics) {
      await expect(page.getByText(t, { exact: true })).toBeVisible()
    }
  })

  test('breadcrumb obsahuje odkaz na Fyziku', async ({ page, goto }) => {
    await goto('/fyzika/mechanika', { waitUntil: 'hydration' })
    await expect(page.getByTestId('breadcrumb').getByRole('link', { name: /Fyzika/ })).toBeVisible()
  })
})

// ── Parametrizované testy pre každú podstránku ────────────────────────────────

const mechPages = [
  { slug: 'kinematika',          heading: 'Kinematika',                    quiz: 7 },
  { slug: 'newtonove-zakony',    heading: /Newtonove zákony/,              quiz: 6 },
  { slug: 'gravitacia',          heading: /Gravitácia/,                    quiz: 6 },
  { slug: 'vrhy',                heading: /Vrhy/,                          quiz: 6 },
  { slug: 'pohyb-po-kruznici',   heading: /Pohyb po kružnici/,             quiz: 6 },
  { slug: 'praca-energia',       heading: /Práca/,                         quiz: 6 },
  { slug: 'mechanika-tekutin',   heading: /Mechanika tekutín/,             quiz: 6 },
  { slug: 'hybnost',             heading: /Hybnosť/,                       quiz: 6 },
  { slug: 'trenie',              heading: /Trenie/,                        quiz: 6 },
]

test.describe('Mechanika — podstránky', () => {
  for (const p of mechPages) {
    test(`${p.slug} — stránka sa načíta`, async ({ page, goto }) => {
      await goto(`/fyzika/mechanika/${p.slug}`, { waitUntil: 'hydration' })
      await expect(page.getByRole('heading', { name: p.heading, level: 1 })).toBeVisible()
    })

    test(`${p.slug} — KaTeX formuly sa vykreslia`, async ({ page, goto }) => {
      await goto(`/fyzika/mechanika/${p.slug}`, { waitUntil: 'hydration' })
      const katexEls = page.locator('.katex')
      await expect(katexEls.first()).toBeVisible()
    })

    test(`${p.slug} — kvíz je prítomný a funguje`, async ({ page, goto }) => {
      await goto(`/fyzika/mechanika/${p.slug}`, { waitUntil: 'hydration' })
      await expect(page.getByTestId('quiz-progress')).toBeVisible()
      await page.getByTestId('quiz-option-0').click()
      await expect(page.getByTestId('quiz-feedback')).toBeVisible()
      await expect(page.getByTestId('quiz-next-btn')).toBeVisible()
    })

    test(`${p.slug} — breadcrumb naviguje späť na Mechaniku`, async ({ page, goto }) => {
      await goto(`/fyzika/mechanika/${p.slug}`, { waitUntil: 'hydration' })
      await page.getByTestId('breadcrumb').getByRole('link', { name: /Mechanika/ }).click()
      await expect(page).toHaveURL(/\/fyzika\/mechanika$/)
    })
  }
})
