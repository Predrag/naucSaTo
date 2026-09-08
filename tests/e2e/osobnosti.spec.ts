import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('Osobnosti fyziky — index', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/osobnosti', { waitUntil: 'hydration' })
  })

  test('stránka sa načíta s nadpisom', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Osobnosti fyziky' })).toBeVisible()
  })

  test('zobrazuje 12 kariet vedcov', async ({ page }) => {
    const cards = page.getByRole('link').filter({ hasText: /\d{4}/ })
    await expect(cards).toHaveCount(12)
  })

  test('každá karta obsahuje vlajku', async ({ page }) => {
    await expect(page.getByText('🇬🇧').first()).toBeVisible()
    await expect(page.getByText('🇫🇷').first()).toBeVisible()
    await expect(page.getByText('🇩🇪')).toBeVisible()
    await expect(page.getByText('🇸🇰').first()).toBeVisible()
  })

  test('Watt má škótsku vlajku', async ({ page }) => {
    const wattCard = page.getByRole('link', { name: /James Watt/ })
    await expect(wattCard.getByText('🏴󠁧󠁢󠁳󠁣󠁴󠁿')).toBeVisible()
  })

  test('slovenská sekcia obsahuje Petzvala', async ({ page }) => {
    await expect(page.getByText('Jozef Maximilián Petzval')).toBeVisible()
    const petzvalCard = page.getByRole('link', { name: /Petzval/ })
    await expect(petzvalCard.getByText('🇸🇰')).toBeVisible()
  })

  test('klik na Newtona presmeruje na /fyzika/osobnosti/newton', async ({ page }) => {
    await page.getByRole('link', { name: /Isaac Newton/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/osobnosti\/newton$/)
    await expect(page.getByRole('heading', { name: 'Isaac Newton' })).toBeVisible()
  })

  test('breadcrumb obsahuje odkaz na Fyziku', async ({ page }) => {
    await expect(page.getByTestId('breadcrumb').getByRole('link', { name: /Fyzika/ })).toBeVisible()
  })
})

test.describe('Osobnosti fyziky — jednotlivé stránky', () => {
  const scientists = [
    { slug: 'newton',  name: 'Isaac Newton',                   unit: /newton \(N\)/ },
    { slug: 'joule',   name: 'James Prescott Joule',           unit: /joule \(J\)/ },
    { slug: 'watt',    name: 'James Watt',                     unit: /watt \(W\)/ },
    { slug: 'pascal',  name: 'Blaise Pascal',                  unit: /pascal \(Pa\)/ },
    { slug: 'hertz',   name: 'Heinrich Hertz',                 unit: /hertz \(Hz\)/ },
    { slug: 'coulomb', name: 'Charles-Augustin de Coulomb',    unit: /coulomb \(C\)/ },
  ]

  for (const s of scientists) {
    test(`${s.name} — stránka sa načíta so správnym obsahom`, async ({ page, goto }) => {
      await goto(`/fyzika/osobnosti/${s.slug}`, { waitUntil: 'hydration' })
      await expect(page.getByRole('heading', { name: s.name })).toBeVisible()
      await expect(page.getByText('Hlavné prínosy vede')).toBeVisible()
      await expect(page.getByText('Zaujímavosti')).toBeVisible()
      await expect(page.getByText(s.unit).first()).toBeVisible()
    })
  }

  const skScientists = [
    { slug: 'petzval', name: 'Jozef Maximilián Petzval' },
    { slug: 'jedlik',  name: 'Štefan Anián Jedlík'      },
    { slug: 'segner',  name: 'Ján Andrej Segner'         },
    { slug: 'stodola', name: 'Aurel Bohuslav Stodola'    },
    { slug: 'hell',    name: 'Maximilián Hell'            },
    { slug: 'murgas',  name: 'Jozef Murgaš'              },
  ]

  for (const s of skScientists) {
    test(`${s.name} — stránka sa načíta`, async ({ page, goto }) => {
      await goto(`/fyzika/osobnosti/${s.slug}`, { waitUntil: 'hydration' })
      await expect(page.getByRole('heading', { name: s.name })).toBeVisible()
      await expect(page.getByText('Hlavné prínosy vede')).toBeVisible()
      await expect(page.getByText('Zaujímavosti')).toBeVisible()
      await expect(page.getByTestId('breadcrumb').getByRole('link', { name: /Osobnosti fyziky/ })).toBeVisible()
    })
  }

  test('breadcrumb na Newtonovi naviguje späť na osobnosti', async ({ page, goto }) => {
    await goto('/fyzika/osobnosti/newton', { waitUntil: 'hydration' })
    await page.getByTestId('breadcrumb').getByRole('link', { name: /Osobnosti fyziky/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/osobnosti$/)
  })

  test('Petzval má odkaz na Wikipédiu', async ({ page, goto }) => {
    await goto('/fyzika/osobnosti/petzval', { waitUntil: 'hydration' })
    const wikiLink = page.getByRole('link', { name: /wikipedia/ })
    await expect(wikiLink).toBeVisible()
    await expect(wikiLink).toHaveAttribute('target', '_blank')
  })
})
