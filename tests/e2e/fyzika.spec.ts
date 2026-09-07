import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('Fyzika - navigácia', () => {
  test('hlavná stránka fyziky zobrazuje témy', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Fyzika' })).toBeVisible()
    await expect(page.getByText('Úvod do fyziky')).toBeVisible()
    await expect(page.getByText('Mechanika')).toBeVisible()
    await expect(page.getByText('Optika')).toBeVisible()
  })

  test('klik na Úvod do fyziky presmeruje na /fyzika/uvod', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await page.getByText('Otvoriť →').first().click()
    await expect(page).toHaveURL(/\/fyzika\/uvod$/)
    await expect(page.getByRole('heading', { name: 'Úvod do fyziky' })).toBeVisible()
  })

  test('stránka Úvod do fyziky zobrazuje podsekcie', async ({ page, goto }) => {
    await goto('/fyzika/uvod', { waitUntil: 'hydration' })
    await expect(page.getByText('Medzinárodná sústava jednotiek')).toBeVisible()
    await expect(page.getByText('Meranie fyzikálnych veličín')).toBeVisible()
    await expect(page.getByText('Skalárne a vektorové veličiny')).toBeVisible()
  })

  test('breadcrumb na /fyzika/uvod obsahuje správne odkazy', async ({ page, goto }) => {
    await goto('/fyzika/uvod', { waitUntil: 'hydration' })
    await expect(page.getByTestId('breadcrumb').getByRole('link', { name: /Fyzika/ })).toBeVisible()
  })

  test('klik na Medzinárodná sústava jednotiek presmeruje správne', async ({ page, goto }) => {
    await goto('/fyzika/uvod', { waitUntil: 'hydration' })
    await page.getByText('Otvoriť →').first().click()
    await expect(page).toHaveURL(/\/fyzika\/uvod\/medzinarodna-sustava$/)
    await expect(page.getByRole('heading', { name: 'Medzinárodná sústava jednotiek' })).toBeVisible()
  })

  test('breadcrumb na stránke SI jednotiek má správnu navigáciu späť', async ({ page, goto }) => {
    await goto('/fyzika/uvod/medzinarodna-sustava', { waitUntil: 'hydration' })
    const breadcrumb = page.getByTestId('breadcrumb')
    await expect(breadcrumb.getByRole('link', { name: /Fyzika/ })).toBeVisible()
    const uvod = breadcrumb.getByRole('link', { name: /Úvod do fyziky/ })
    await expect(uvod).toBeVisible()
    await uvod.click()
    await expect(page).toHaveURL(/\/fyzika\/uvod$/)
  })
})

test.describe('Prevodník jednotiek', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/medzinarodna-sustava', { waitUntil: 'hydration' })
  })

  test('prevodník sa zobrazuje na stránke', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Prevodník jednotiek' })).toBeVisible()
    await expect(page.getByTestId('converter-input')).toBeVisible()
  })

  test('kategórie sú zobrazené ako tlačidlá', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Dĺžka/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Hmotnosť/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Čas/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Teplota/ })).toBeVisible()
  })

  test('prepočet dĺžky: 1 km = 1 000 m', async ({ page }) => {
    await page.getByTestId('converter-input').fill('1')
    await expect(page.getByTestId('converter-result')).toHaveText('1 000')
  })

  test('prepočet funguje aj pre iné hodnoty', async ({ page }) => {
    await page.getByTestId('converter-input').fill('5')
    await expect(page.getByTestId('converter-result')).toHaveText('5 000')
  })

  test('tlačidlo ⇄ prehodí jednotky', async ({ page }) => {
    await page.getByTestId('converter-input').fill('1000')
    await page.getByTestId('converter-swap').click()
    // po prehodení: 1000 m → km = 1
    await expect(page.getByTestId('converter-result')).toHaveText('1')
  })

  test('prepínanie kategórie na Hmotnosť', async ({ page }) => {
    await page.getByRole('button', { name: /Hmotnosť/ }).click()
    const select = page.locator('select').first()
    await expect(select).toContainText('t')
  })

  test('prepínanie kategórie na Teplotu', async ({ page }) => {
    await page.getByRole('button', { name: /Teplota/ }).click()
    await page.getByTestId('converter-input').fill('0')
    // 0 °C = 273,15 K
    await expect(page.getByTestId('converter-result')).toHaveText('273,15')
  })

  test('equation hint zobrazuje rovnicu', async ({ page }) => {
    await page.getByTestId('converter-input').fill('1')
    await expect(page.getByTestId('equation-hint')).toContainText('km')
    await expect(page.getByTestId('equation-hint')).toContainText('m')
  })
})

test.describe('Kvíz — Medzinárodná sústava jednotiek', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/fyzika/uvod/medzinarodna-sustava', { waitUntil: 'hydration' })
  })

  test('kvíz sekcia je viditeľná', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Otestuj sa' })).toBeVisible()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 1 z 7')
    await expect(page.getByTestId('quiz-question')).toBeVisible()
  })

  test('zobrazujú sa 4 možnosti odpovede', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`quiz-option-${i}`)).toBeVisible()
    }
  })

  test('správna odpoveď zobrazí zelenú spätnú väzbu', async ({ page }) => {
    // Otázka 1: správna odpoveď je index 1 — "meter (m)"
    await page.getByTestId('quiz-option-1').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('✓ Správne!')
    await expect(page.getByTestId('quiz-feedback')).toBeVisible()
  })

  test('nesprávna odpoveď zobrazí červenú spätnú väzbu', async ({ page }) => {
    // Otázka 1: nesprávna odpoveď — index 0 "kilometer (km)"
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('✗ Nesprávne')
  })

  test('vysvetlenie sa zobrazí po odpovedi', async ({ page }) => {
    await page.getByTestId('quiz-option-1').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('Meter (m) je základná jednotka')
  })

  test('po odpovedi nie je možné zmeniť odpoveď', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-option-1')).toBeDisabled()
    await expect(page.getByTestId('quiz-option-2')).toBeDisabled()
  })

  test('tlačidlo Ďalšia otázka posunie na druhú otázku', async ({ page }) => {
    await page.getByTestId('quiz-option-1').click()
    await page.getByTestId('quiz-next-btn').click()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 2 z 7')
    await expect(page.getByTestId('quiz-feedback')).not.toBeVisible()
  })

  test('skóre sa zvýši po správnej odpovedi', async ({ page }) => {
    await page.getByTestId('quiz-option-1').click()
    await page.getByTestId('quiz-next-btn').click()
    await expect(page.getByText('1 správnych')).toBeVisible()
  })

  test('skóre sa nezvýši po nesprávnej odpovedi', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await page.getByTestId('quiz-next-btn').click()
    await expect(page.getByText('0 správnych')).toBeVisible()
  })

  test('po poslednej otázke sa zobrazí obrazovka výsledkov', async ({ page }) => {
    // Správne odpovede: 1, 2, 2, 2, 3, 3, 1
    const correct = [1, 2, 2, 2, 3, 3, 1]
    for (const idx of correct) {
      await page.getByTestId(`quiz-option-${idx}`).click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await expect(page.getByTestId('quiz-result')).toBeVisible()
    await expect(page.getByTestId('quiz-score')).toHaveText('7 / 7')
  })

  test('tlačidlo Skúsiť znova resetuje kvíz', async ({ page }) => {
    // Rýchlo prejdi celý kvíz (ľubovoľné odpovede)
    for (let q = 0; q < 7; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await expect(page.getByTestId('quiz-result')).toBeVisible()
    await page.getByTestId('quiz-reset-btn').click()
    await expect(page.getByTestId('quiz-result')).not.toBeVisible()
    await expect(page.getByTestId('quiz-progress')).toHaveText('Otázka 1 z 7')
  })
})
