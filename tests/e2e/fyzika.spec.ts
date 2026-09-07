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
