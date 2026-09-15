import { expect, test } from '@nuxt/test-utils/playwright'

// ─── Navigácia — hlavná stránka a sekcie ──────────────────────────────────────
test.describe('Chémia — navigácia', () => {
  test('hlavná stránka chémie zobrazuje 5 sekcií', async ({ page, goto }) => {
    await goto('/chemia', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Chémia', level: 1 })).toBeVisible()
    const sections = [
      'Úvod do chémie',
      'Stavba látky a periodická sústava',
      'Chemické reakcie',
      'Anorganická chémia',
      'Organická chémia',
    ]
    for (const s of sections) {
      await expect(page.getByText(s, { exact: true }).first()).toBeVisible()
    }
  })

  test('klik na Úvod do chémie presmeruje na /chemia/uvod', async ({ page, goto }) => {
    await goto('/chemia', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: 'Úvod do chémie' }).click()
    await expect(page).toHaveURL(/\/chemia\/uvod$/)
    await expect(page.getByRole('heading', { name: 'Úvod do chémie', level: 1 })).toBeVisible()
  })

  test('klik na Organická chémia presmeruje správne', async ({ page, goto }) => {
    await goto('/chemia', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: 'Organická chémia' }).click()
    await expect(page).toHaveURL(/\/chemia\/organicka-chemia$/)
  })

  test('/chemia/uvod zobrazuje podsekcie', async ({ page, goto }) => {
    await goto('/chemia/uvod', { waitUntil: 'hydration' })
    await expect(page.getByText('Bezpečnosť v laboratóriu').first()).toBeVisible()
    await expect(page.getByText('Sústava látok').first()).toBeVisible()
  })

  test('/chemia/stavba-latky zobrazuje 4 podtémy', async ({ page, goto }) => {
    await goto('/chemia/stavba-latky', { waitUntil: 'hydration' })
    await expect(page.getByText('Stavba atómu').first()).toBeVisible()
    await expect(page.getByText('Periodická sústava prvkov').first()).toBeVisible()
    await expect(page.getByText('Chemická väzba').first()).toBeVisible()
    await expect(page.getByText('Názvoslovie zlúčenín').first()).toBeVisible()
  })

  test('/chemia/chemicke-reakcie zobrazuje 4 podtémy', async ({ page, goto }) => {
    await goto('/chemia/chemicke-reakcie', { waitUntil: 'hydration' })
    await expect(page.getByText('Chemické rovnice').first()).toBeVisible()
    await expect(page.getByText('Rýchlosť reakcie').first()).toBeVisible()
    await expect(page.getByText('Kyseliny, zásady a pH').first()).toBeVisible()
    await expect(page.getByText('Redoxné reakcie').first()).toBeVisible()
  })
})

// ─── Breadcrumb navigácia ──────────────────────────────────────────────────────
test.describe('Chémia — breadcrumb', () => {
  test('breadcrumb na /chemia/uvod/bezpecnost-laboratorium', async ({ page, goto }) => {
    await goto('/chemia/uvod/bezpecnost-laboratorium', { waitUntil: 'hydration' })
    const bc = page.getByTestId('breadcrumb')
    await expect(bc.getByRole('link', { name: /Chémia/ })).toBeVisible()
    await expect(bc.getByRole('link', { name: /Úvod/ })).toBeVisible()
    await expect(bc.getByText('Bezpečnosť v laboratóriu')).toBeVisible()
  })

  test('breadcrumb naviguje späť na /chemia', async ({ page, goto }) => {
    await goto('/chemia/stavba-latky/chemicka-vazba', { waitUntil: 'hydration' })
    await page.getByTestId('breadcrumb').getByRole('link', { name: /Chémia/ }).click()
    await expect(page).toHaveURL(/\/chemia$/)
  })

  test('breadcrumb naviguje späť na sekciu', async ({ page, goto }) => {
    await goto('/chemia/organicka-chemia/uhlovodiky', { waitUntil: 'hydration' })
    await page.getByTestId('breadcrumb').getByRole('link', { name: /Organická chémia/ }).click()
    await expect(page).toHaveURL(/\/chemia\/organicka-chemia$/)
  })
})

// ─── Obsah stránok ────────────────────────────────────────────────────────────
test.describe('Chémia — obsah stránok', () => {
  test('stavba-atomu má nadpis a KaTeX formuly', async ({ page, goto }) => {
    await goto('/chemia/stavba-latky/stavba-atomu', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Stavba atómu', level: 1 })).toBeVisible()
    const katex = page.locator('.katex')
    await expect(katex.first()).toBeVisible()
    const count = await katex.count()
    expect(count).toBeGreaterThan(3)
  })

  test('periodicka-tabulka zobrazuje tabuľku prvkov', async ({ page, goto }) => {
    await goto('/chemia/stavba-latky/periodicka-tabulka', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Periodická sústava prvkov', level: 1 })).toBeVisible()
    await expect(page.getByText('Vodík').first()).toBeVisible()
    await expect(page.getByText('Kyslík').first()).toBeVisible()
  })

  test('acidobaza-pH obsahuje pH stupnicu', async ({ page, goto }) => {
    await goto('/chemia/chemicke-reakcie/acidobaza-pH', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: /Kyseliny/, level: 1 })).toBeVisible()
    await expect(page.getByText(/pH/).first()).toBeVisible()
  })

  test('nekovy obsahuje informácie o vode', async ({ page, goto }) => {
    await goto('/chemia/anorganicka-chemia/nekovy', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: /Nekovy/, level: 1 })).toBeVisible()
    await expect(page.getByText(/Voda/).first()).toBeVisible()
  })

  test('uhlovodiky obsahuje tabuľku alkánov', async ({ page, goto }) => {
    await goto('/chemia/organicka-chemia/uhlovodiky', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Uhľovodíky', level: 1 })).toBeVisible()
    await expect(page.getByText('Metán').first()).toBeVisible()
    await expect(page.getByText('Etán').first()).toBeVisible()
  })

  test('SVG ilustrácia je prístupná (má aria-label)', async ({ page, goto }) => {
    await goto('/chemia/stavba-latky/chemicka-vazba', { waitUntil: 'hydration' })
    const svgWithLabel = page.locator('svg[aria-label]')
    const count = await svgWithLabel.count()
    expect(count).toBeGreaterThan(0)
  })
})

// ─── Kvíz — generický flow (platí pre všetky chémia stránky) ─────────────────
test.describe('Chémia — kvíz (acidobaza-pH)', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/chemia/chemicke-reakcie/acidobaza-pH', { waitUntil: 'hydration' })
  })

  test('kvíz progress zobrazuje Otázka 1 z 6', async ({ page }) => {
    await expect(page.getByTestId('quiz-progress')).toContainText('1')
    await expect(page.getByTestId('quiz-progress')).toContainText('6')
  })

  test('zobrazujú sa 4 možnosti odpovede', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`quiz-option-${i}`)).toBeVisible()
    }
  })

  test('po kliknutí na možnosť sa zobrazí feedback', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-feedback')).toBeVisible()
  })

  test('po odpovedi sa zobrazia ďalšie tlačidlá', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-next-btn')).toBeVisible()
  })

  test('ďalšia otázka posunie progress na 2', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await page.getByTestId('quiz-next-btn').click()
    await expect(page.getByTestId('quiz-progress')).toContainText('2')
  })

  test('po 6 otázkach sa zobrazí výsledok', async ({ page }) => {
    for (let q = 0; q < 6; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await expect(page.getByTestId('quiz-result')).toBeVisible()
    await expect(page.getByTestId('quiz-score')).toBeVisible()
  })

  test('reset kvízu vráti na otázku 1', async ({ page }) => {
    for (let q = 0; q < 6; q++) {
      await page.getByTestId('quiz-option-0').click()
      await page.getByTestId('quiz-next-btn').click()
    }
    await expect(page.getByTestId('quiz-reset-btn')).toBeVisible()
    await page.getByTestId('quiz-reset-btn').click()
    await expect(page.getByTestId('quiz-result')).not.toBeVisible()
    await expect(page.getByTestId('quiz-progress')).toContainText('1')
  })
})

// ─── Kvíz — kovy (overenie že quiz funguje na inej stránke) ───────────────────
test.describe('Chémia — kvíz (kovy)', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/chemia/anorganicka-chemia/kovy', { waitUntil: 'hydration' })
  })

  test('klik správnej odpovede zobrazí Správne!', async ({ page }) => {
    // Otázka 1: čo vzniká pri reakcii sodíka s vodou → NaOH + H₂ → index 1
    await page.getByTestId('quiz-option-1').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('Správne')
  })

  test('klik nesprávnej odpovede zobrazí Nesprávne', async ({ page }) => {
    await page.getByTestId('quiz-option-2').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('Nesprávne')
  })
})
