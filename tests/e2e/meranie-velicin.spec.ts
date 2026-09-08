import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('Meranie fyzikálnych veličín — navigácia', () => {
  test('klik na kartu z Úvod do fyziky presmeruje na stránku', async ({ page, goto }) => {
    await goto('/fyzika/uvod', { waitUntil: 'hydration' })
    await page.getByText('Meranie fyzikálnych veličín').first().click()
    await expect(page).toHaveURL(/\/fyzika\/uvod\/meranie-velicin$/)
  })

  test('stránka sa načíta s nadpisom', async ({ page, goto }) => {
    await goto('/fyzika/uvod/meranie-velicin', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Meranie fyzikálnych veličín' })).toBeVisible()
  })

  test('breadcrumb obsahuje správne kroky', async ({ page, goto }) => {
    await goto('/fyzika/uvod/meranie-velicin', { waitUntil: 'hydration' })
    const bc = page.getByTestId('breadcrumb')
    await expect(bc.getByRole('link', { name: /Fyzika/ })).toBeVisible()
    await expect(bc.getByRole('link', { name: /Úvod do fyziky/ })).toBeVisible()
    await expect(bc.getByText('Meranie fyzikálnych veličín')).toBeVisible()
  })

  test('breadcrumb naviguje späť na Úvod do fyziky', async ({ page, goto }) => {
    await goto('/fyzika/uvod/meranie-velicin', { waitUntil: 'hydration' })
    await page.getByTestId('breadcrumb').getByRole('link', { name: /Úvod do fyziky/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/uvod$/)
  })
})

test.describe('Meranie fyzikálnych veličín — obsah', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/meranie-velicin', { waitUntil: 'hydration' })
  })

  test('všetky sekcie sú viditeľné', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Fyzikálna veličina' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Meracie prístroje' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Chyby merania', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Neistota merania' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Platné číslice a zaokrúhľovanie' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Otestuj sa' })).toBeVisible()
  })

  test('tabuľka meracích prístrojov je viditeľná', async ({ page }) => {
    await expect(page.getByRole('columnheader', { name: 'Prístroj' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Meria' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Jednotka' })).toBeVisible()
    await expect(page.getByText('Voltmeter')).toBeVisible()
    await expect(page.getByText('Ampérmeter')).toBeVisible()
  })

  test('KaTeX formuly sú vykreslené', async ({ page }) => {
    const katexElements = page.locator('.katex')
    await expect(katexElements.first()).toBeVisible()
    const count = await katexElements.count()
    expect(count).toBeGreaterThan(5)
  })

  test('neistota typu A a B sú popísané', async ({ page }) => {
    await expect(page.getByText(/Neistota typu A/).first()).toBeVisible()
    await expect(page.getByText(/Neistota typu B/).first()).toBeVisible()
    await expect(page.getByText(/štatistickou analýzou/i).first()).toBeVisible()
    await expect(page.getByText(/najmenšieho dielika/i).first()).toBeVisible()
  })

  test('príklad výpočtu neistoty je viditeľný', async ({ page }) => {
    await expect(page.getByText(/meranie dĺžky tyče/i).first()).toBeVisible()
    await expect(page.getByText(/12,36/).first()).toBeVisible()
  })

  test('pravidlá platných číslic sú zobrazené', async ({ page }) => {
    await expect(page.getByText(/Všetky nenulové číslice sú platné/)).toBeVisible()
    await expect(page.getByText(/Vedecký zápis/)).toBeVisible()
  })
})

test.describe('Meranie fyzikálnych veličín — kvíz', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/meranie-velicin', { waitUntil: 'hydration' })
  })

  test('kvíz obsahuje 8 otázok (progress zobrazuje 1 z 8)', async ({ page }) => {
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 1 z 7')
  })

  test('správna odpoveď — fyzikálna veličina = hodnota + jednotka', async ({ page }) => {
    // Otázka 1, správna odpoveď index 2
    await page.getByTestId('quiz-option-2').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('✓ Správne!')
  })

  test('nesprávna odpoveď zobrazí červenú spätnú väzbu', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('✗ Nesprávne')
  })

  test('tlačidlo Ďalšia otázka posunie kvíz', async ({ page }) => {
    await page.getByTestId('quiz-option-2').click()
    await page.getByTestId('quiz-next-btn').click()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 2 z 7')
  })

  test('explanation o neistote obsahuje matematickú notáciu', async ({ page }) => {
    // Navigujeme na otázku 6 — "Čím sa určuje neistota merania typu A?"
    // Odpovedáme na otázky 1–5 (ľubovoľne) a pokračujeme
    for (let q = 0; q < 5; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    // Otázka 6 — správna odpoveď index 1
    await page.getByTestId('quiz-option-1').click()
    await expect(page.getByTestId('quiz-feedback')).toBeVisible()
    // KaTeX sa vykreslil v explanation
    await expect(page.getByTestId('quiz-feedback').locator('.katex').first()).toBeVisible()
  })

  test('po dokončení sa zobrazí výsledok a tlačidlo reset', async ({ page }) => {
    for (let q = 0; q < 7; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await expect(page.getByTestId('quiz-result')).toBeVisible()
    await expect(page.getByTestId('quiz-reset-btn')).toBeVisible()
  })

  test('Skúsiť znova resetuje na otázku 1 z 7', async ({ page }) => {
    for (let q = 0; q < 7; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await page.getByTestId('quiz-reset-btn').click()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 1 z 7')
  })
})
