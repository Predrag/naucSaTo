import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('Skalárne a vektorové veličiny — navigácia', () => {
  test('karta na /fyzika/uvod je klikateľná a presmeruje správne', async ({ page, goto }) => {
    await goto('/fyzika/uvod', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: 'Skalárne a vektorové veličiny' }).click()
    await expect(page).toHaveURL(/\/fyzika\/uvod\/skalar-vektor$/)
  })

  test('stránka sa načíta s nadpisom', async ({ page, goto }) => {
    await goto('/fyzika/uvod/skalar-vektor', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Skalárne a vektorové veličiny' })).toBeVisible()
  })

  test('breadcrumb má správnu navigáciu späť', async ({ page, goto }) => {
    await goto('/fyzika/uvod/skalar-vektor', { waitUntil: 'hydration' })
    const bc = page.getByTestId('breadcrumb')
    await expect(bc.getByRole('link', { name: /Fyzika/ })).toBeVisible()
    await expect(bc.getByRole('link', { name: /Úvod do fyziky/ })).toBeVisible()
    await bc.getByRole('link', { name: /Úvod do fyziky/ }).click()
    await expect(page).toHaveURL(/\/fyzika\/uvod$/)
  })
})

test.describe('Skalárne a vektorové veličiny — obsah', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/skalar-vektor', { waitUntil: 'hydration' })
  })

  test('všetky sekcie sú viditeľné', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Skalárne vs. vektorové/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Zobrazenie vektora' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Operácie s vektormi' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Rozklad vektora na zložky' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Vyskúšaj si/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Otestuj sa' })).toBeVisible()
  })

  test('tabuľka porovnania skalár vs. vektor je viditeľná', async ({ page }) => {
    await expect(page.getByRole('columnheader', { name: 'Vlastnosť' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Skalár' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Vektor' })).toBeVisible()
  })

  test('príklady skalárnych veličín sú zobrazené', async ({ page }) => {
    await expect(page.getByText('hmotnosť m')).toBeVisible()
    await expect(page.getByText('teplota T')).toBeVisible()
  })

  test('príklady vektorových veličín sú zobrazené', async ({ page }) => {
    await expect(page.getByText('sila F').first()).toBeVisible()
    await expect(page.getByText('rýchlosť v')).toBeVisible()
  })

  test('SVG diagramy sčítania vektorov sú prítomné', async ({ page }) => {
    const svgs = page.locator('svg[aria-label]')
    const count = await svgs.count()
    expect(count).toBeGreaterThan(3)
  })

  test('KaTeX formuly sú vykreslené', async ({ page }) => {
    const katexEls = page.locator('.katex')
    await expect(katexEls.first()).toBeVisible()
    const count = await katexEls.count()
    expect(count).toBeGreaterThan(5)
  })

  test('sekcia špeciálnych prípadov obsahuje 3 karty', async ({ page }) => {
    await expect(page.getByText('Rovnobežné (α = 0°)')).toBeVisible()
    await expect(page.getByText('Kolmé (α = 90°)')).toBeVisible()
    await expect(page.getByText('Protiľahlé (α = 180°)')).toBeVisible()
  })

  test('diagram rozkladu vektora je prítomný', async ({ page }) => {
    await expect(page.locator('svg[aria-label="Rozklad vektora F na zložky Fx a Fy"]')).toBeVisible()
  })
})

test.describe('VectorAdditionDemo — interaktívna animácia', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/skalar-vektor', { waitUntil: 'hydration' })
  })

  test('animačný canvas je viditeľný', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Vyskúšaj si/ })).toBeVisible()
    const canvas = page.locator('svg[aria-label]').last()
    await expect(canvas).toBeVisible()
  })

  test('slidery pre vektor A sú prítomné', async ({ page }) => {
    // KaTeX rozdeľuje text node, hľadáme label text 'Veľkosť' a slider
    await expect(page.getByText('Veľkosť').first()).toBeVisible()
    const sliders = page.locator('input[type="range"]')
    const count = await sliders.count()
    expect(count).toBe(4) // 2 pre A, 2 pre B
  })

  test('rovnica sa zobrazuje pod canvasom', async ({ page }) => {
    await expect(page.getByText('VEĽKOSŤ VÝSLEDNICE').first()).toBeVisible()
    // KaTeX rovnica je vykreslená
    const formulaArea = page.locator('.bg-emerald-50')
    await expect(formulaArea.locator('.katex').first()).toBeVisible()
  })

  test('tlačidlo Animovať je prítomné a klikateľné', async ({ page }) => {
    const btn = page.getByRole('button', { name: /Animovať/ })
    await expect(btn).toBeVisible()
    await expect(btn).not.toBeDisabled()
  })

  test('tlačidlo Zobraziť všetko je prítomné', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Zobraziť všetko' })).toBeVisible()
  })

  test('klik na Animovať spustí animáciu (tlačidlo sa dočasne deaktivuje)', async ({ page }) => {
    const btn = page.getByRole('button', { name: /Animovať/ })
    await btn.click()
    await expect(page.getByRole('button', { name: /Animujem/ })).toBeVisible()
    // Po skončení animácie (3×700ms) sa tlačidlo obnoví
    await expect(page.getByRole('button', { name: /Animovať/ })).toBeVisible({ timeout: 5000 })
  })
})

test.describe('Skalárne a vektorové veličiny — kvíz', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/skalar-vektor', { waitUntil: 'hydration' })
  })

  test('kvíz zobrazuje 6 otázok', async ({ page }) => {
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 1 z 6')
  })

  test('správna odpoveď — hmotnosť je skalárna veličina (index 3)', async ({ page }) => {
    await page.getByTestId('quiz-option-3').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('✓ Správne!')
  })

  test('nesprávna odpoveď zobrazí červenú spätnú väzbu', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('✗ Nesprávne')
  })

  test('Ďalšia otázka posunie na otázku 2', async ({ page }) => {
    await page.getByTestId('quiz-option-3').click()
    await page.getByTestId('quiz-next-btn').click()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 2 z 6')
  })

  test('po dokončení kvízu sa zobrazí výsledok', async ({ page }) => {
    for (let q = 0; q < 6; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await expect(page.getByTestId('quiz-result')).toBeVisible()
  })

  test('Skúsiť znova resetuje na otázku 1 z 6', async ({ page }) => {
    for (let q = 0; q < 6; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await page.getByTestId('quiz-reset-btn').click()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 1 z 6')
  })
})
