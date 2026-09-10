import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('Vyhľadávanie — SearchModal', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/', { waitUntil: 'hydration' })
  })

  test('search trigger je viditeľný v navbare', async ({ page }) => {
    await expect(page.getByTestId('search-trigger')).toBeVisible()
  })

  test('klik na search trigger otvorí modal', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await expect(page.getByTestId('search-modal')).toBeVisible()
    await expect(page.getByTestId('search-input')).toBeVisible()
  })

  test('Ctrl+K otvori modal', async ({ page }) => {
    await page.keyboard.press('Control+k')
    await expect(page.getByTestId('search-modal')).toBeVisible()
  })

  test('Escape zatvori modal', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await expect(page.getByTestId('search-modal')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByTestId('search-modal')).not.toBeVisible()
  })

  test('klik mimo modal ho zatvori', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await expect(page.getByTestId('search-modal')).toBeVisible()
    // Klik na backdrop mimo modalu — modal je centrovaný, klik vľavo dole je iba na backdrope
    const backdrop = page.getByTestId('search-backdrop')
    const box = await backdrop.boundingBox()
    if (box) {
      await page.mouse.click(box.x + 10, box.y + box.height - 10)
    }
    await expect(page.getByTestId('search-modal')).not.toBeVisible()
  })

  test('vyhladavanie "newton" zobrazí výsledky', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('newton')
    await expect(page.getByTestId('search-results')).toBeVisible()
    await expect(page.getByRole('option', { name: /Newton/ }).first()).toBeVisible()
  })

  test('vyhladavanie "SI" zobrazí stránku jednotiek', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('SI jednotky')
    await expect(page.getByRole('option', { name: /sústava/ })).toBeVisible()
  })

  test('vyhladavanie "petzval" nájde slovenského vedca', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('petzval')
    await expect(page.getByRole('option', { name: /Petzval/ })).toBeVisible()
  })

  test('klik na výsledok naviguje na správnu stránku', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('Isaac Newton')
    await page.getByRole('option', { name: /Isaac Newton/ }).first().click()
    await expect(page).toHaveURL(/\/fyzika\/osobnosti\/newton$/)
    await expect(page.getByTestId('search-modal')).not.toBeVisible()
  })

  test('neexistujúci dotaz zobrazí prázdny stav', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('xyzxyzxyz')
    await expect(page.getByTestId('search-results')).not.toBeVisible()
    await expect(page.getByText(/Žiadne výsledky/)).toBeVisible()
  })

  test('šípky navigujú medzi výsledkami', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('fyzika')
    await expect(page.getByTestId('search-results')).toBeVisible()
    await page.keyboard.press('ArrowDown')
    const secondOption = page.getByRole('option').nth(1)
    await expect(secondOption).toHaveClass(/bg-emerald-50/)
  })

  test('Enter po výbere výsledku naviguje', async ({ page }) => {
    await page.getByTestId('search-trigger').click()
    await page.getByTestId('search-input').fill('Isaac Newton')
    await expect(page.getByTestId('search-results')).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/\/fyzika\/osobnosti\/newton$/)
  })

  test('modal funguje rovnako z inej stránky', async ({ page, goto }) => {
    await goto('/fyzika', { waitUntil: 'hydration' })
    await page.keyboard.press('Control+k')
    await expect(page.getByTestId('search-modal')).toBeVisible()
    await page.getByTestId('search-input').fill('joule')
    await page.getByRole('option', { name: /Joule/ }).first().click()
    await expect(page).toHaveURL(/\/fyzika\/osobnosti\/joule$/)
  })
})
