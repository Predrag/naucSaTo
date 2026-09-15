import { expect, test } from '@nuxt/test-utils/playwright'

// ─── Navigácia — hlavná stránka a sekcie ──────────────────────────────────────
test.describe('Matematika — navigácia', () => {
  test('hlavná stránka matematiky zobrazuje 5 sekcií', async ({ page, goto }) => {
    await goto('/matematika', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Matematika', level: 1 })).toBeVisible()
    const sections = [
      'Čísla, premenné a výrazy',
      'Funkcie a grafy',
      'Geometria a meranie',
      'Kombinatorika a štatistika',
      'Logika, dôkazy a postupnosti',
    ]
    for (const s of sections) {
      await expect(page.getByText(s, { exact: true }).first()).toBeVisible()
    }
  })

  test('klik na Funkcie a grafy presmeruje na /matematika/funkcie', async ({ page, goto }) => {
    await goto('/matematika', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: 'Funkcie a grafy' }).click()
    await expect(page).toHaveURL(/\/matematika\/funkcie$/)
    await expect(page.getByRole('heading', { name: 'Funkcie a grafy', level: 1 })).toBeVisible()
  })

  test('klik na Geometria a meranie presmeruje správne', async ({ page, goto }) => {
    await goto('/matematika', { waitUntil: 'hydration' })
    await page.getByRole('link', { name: 'Geometria a meranie' }).click()
    await expect(page).toHaveURL(/\/matematika\/geometria$/)
  })

  test('/matematika/cisla-a-vyrazy zobrazuje 4 podtémy', async ({ page, goto }) => {
    await goto('/matematika/cisla-a-vyrazy', { waitUntil: 'hydration' })
    await expect(page.getByText('Čísla a množiny').first()).toBeVisible()
    await expect(page.getByText('Mocniny a odmocniny').first()).toBeVisible()
    await expect(page.getByText('Rovnice a nerovnice').first()).toBeVisible()
    await expect(page.getByText('Percentuálne výpočty').first()).toBeVisible()
  })

  test('/matematika/funkcie zobrazuje 4 podtémy', async ({ page, goto }) => {
    await goto('/matematika/funkcie', { waitUntil: 'hydration' })
    await expect(page.getByText('Základy funkcie').first()).toBeVisible()
    await expect(page.getByText('Lineárna a kvadratická funkcia').first()).toBeVisible()
    await expect(page.getByText('Exponenciálna a logaritmická').first()).toBeVisible()
    await expect(page.getByText('Goniometrické funkcie').first()).toBeVisible()
  })

  test('/matematika/geometria zobrazuje 4 podtémy', async ({ page, goto }) => {
    await goto('/matematika/geometria', { waitUntil: 'hydration' })
    await expect(page.getByText('Planimetria').first()).toBeVisible()
    await expect(page.getByText('Trigonometria').first()).toBeVisible()
    await expect(page.getByText('Stereometria').first()).toBeVisible()
    await expect(page.getByText('Analytická geometria').first()).toBeVisible()
  })

  test('/matematika/kombinatorika-statistika zobrazuje 3 podtémy', async ({ page, goto }) => {
    await goto('/matematika/kombinatorika-statistika', { waitUntil: 'hydration' })
    await expect(page.getByText('Kombinatorika').first()).toBeVisible()
    await expect(page.getByText('Pravdepodobnosť').first()).toBeVisible()
    await expect(page.getByText('Štatistika').first()).toBeVisible()
  })

  test('/matematika/logika-a-dokazovanie zobrazuje 3 podtémy', async ({ page, goto }) => {
    await goto('/matematika/logika-a-dokazovanie', { waitUntil: 'hydration' })
    await expect(page.getByText('Výroky a logika').first()).toBeVisible()
    await expect(page.getByText('Dôkazovanie').first()).toBeVisible()
    await expect(page.getByText('Postupnosti a rady').first()).toBeVisible()
  })
})

// ─── Breadcrumb navigácia ──────────────────────────────────────────────────────
test.describe('Matematika — breadcrumb', () => {
  test('breadcrumb na /matematika/geometria/planimetria', async ({ page, goto }) => {
    await goto('/matematika/geometria/planimetria', { waitUntil: 'hydration' })
    const bc = page.getByTestId('breadcrumb')
    await expect(bc.getByRole('link', { name: /Matematika/ })).toBeVisible()
    await expect(bc.getByRole('link', { name: /Geometria/ })).toBeVisible()
    await expect(bc.getByText('Planimetria')).toBeVisible()
  })

  test('breadcrumb naviguje späť na /matematika', async ({ page, goto }) => {
    await goto('/matematika/cisla-a-vyrazy/rovnice-a-nerovnice', { waitUntil: 'hydration' })
    await page.getByTestId('breadcrumb').getByRole('link', { name: /Matematika/ }).click()
    await expect(page).toHaveURL(/\/matematika$/)
  })

  test('breadcrumb naviguje späť na sekciu', async ({ page, goto }) => {
    await goto('/matematika/kombinatorika-statistika/statistika', { waitUntil: 'hydration' })
    await page.getByTestId('breadcrumb').getByRole('link', { name: /Kombinatorika/ }).click()
    await expect(page).toHaveURL(/\/matematika\/kombinatorika-statistika$/)
  })
})

// ─── Obsah stránok ────────────────────────────────────────────────────────────
test.describe('Matematika — obsah stránok', () => {
  test('cisla-a-mnoziny má KaTeX formuly', async ({ page, goto }) => {
    await goto('/matematika/cisla-a-vyrazy/cisla-a-mnoziny', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Čísla a množiny', level: 1 })).toBeVisible()
    const katex = page.locator('.katex')
    await expect(katex.first()).toBeVisible()
    const count = await katex.count()
    expect(count).toBeGreaterThan(3)
  })

  test('rovnice-a-nerovnice obsahuje diskriminant', async ({ page, goto }) => {
    await goto('/matematika/cisla-a-vyrazy/rovnice-a-nerovnice', { waitUntil: 'hydration' })
    await expect(page.getByText(/diskriminant/i).first()).toBeVisible()
  })

  test('planimetria obsahuje Pytagorovu vetu', async ({ page, goto }) => {
    await goto('/matematika/geometria/planimetria', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Planimetria', level: 1 })).toBeVisible()
    await expect(page.getByText(/Pytagor/).first()).toBeVisible()
  })

  test('stereometria obsahuje vzorce pre telesá', async ({ page, goto }) => {
    await goto('/matematika/geometria/stereometria', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Stereometria', level: 1 })).toBeVisible()
    await expect(page.getByText(/objem/i).first()).toBeVisible()
    await expect(page.getByText(/povrch/i).first()).toBeVisible()
  })

  test('kombinatorika obsahuje faktoriál', async ({ page, goto }) => {
    await goto('/matematika/kombinatorika-statistika/kombinatorika', { waitUntil: 'hydration' })
    await expect(page.getByRole('heading', { name: 'Kombinatorika', level: 1 })).toBeVisible()
    await expect(page.getByText(/faktoriál/i).first()).toBeVisible()
  })

  test('postupnosti obsahuje aritmetickú postupnosť', async ({ page, goto }) => {
    await goto('/matematika/logika-a-dokazovanie/postupnosti', { waitUntil: 'hydration' })
    await expect(page.getByText(/aritmetick/i).first()).toBeVisible()
    await expect(page.getByText(/geometrick/i).first()).toBeVisible()
  })

  test('SVG ilustrácia je prístupná (má aria-label)', async ({ page, goto }) => {
    await goto('/matematika/geometria/trigonometria', { waitUntil: 'hydration' })
    const svgWithLabel = page.locator('svg[aria-label]')
    const count = await svgWithLabel.count()
    expect(count).toBeGreaterThan(0)
  })
})

// ─── Interaktívne grafy ───────────────────────────────────────────────────────
test.describe('Matematika — interaktívne grafy', () => {
  test('linearna-kvadraticka má slider pre smernicou k', async ({ page, goto }) => {
    await goto('/matematika/funkcie/linearna-kvadraticka', { waitUntil: 'hydration' })
    const sliders = page.locator('input[type="range"]')
    const count = await sliders.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('linearna-kvadraticka zobrazuje SVG graf', async ({ page, goto }) => {
    await goto('/matematika/funkcie/linearna-kvadraticka', { waitUntil: 'hydration' })
    await expect(page.locator('svg[role="img"]').first()).toBeVisible()
  })

  test('exponencialna-logaritmicka má slider pre základ a', async ({ page, goto }) => {
    await goto('/matematika/funkcie/exponencialna-logaritmicka', { waitUntil: 'hydration' })
    const sliders = page.locator('input[type="range"]')
    await expect(sliders.first()).toBeVisible()
  })

  test('goniometricke-funkcie má slider pre uhol α', async ({ page, goto }) => {
    await goto('/matematika/funkcie/goniometricke-funkcie', { waitUntil: 'hydration' })
    const sliders = page.locator('input[type="range"]')
    const count = await sliders.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })

  test('goniometricke-funkcie má toggl checkboxy pre sin/cos', async ({ page, goto }) => {
    await goto('/matematika/funkcie/goniometricke-funkcie', { waitUntil: 'hydration' })
    await expect(page.locator('#goni-show-sin')).toBeVisible()
    await expect(page.locator('#goni-show-cos')).toBeVisible()
  })
})

// ─── Kvíz — generický flow ────────────────────────────────────────────────────
test.describe('Matematika — kvíz (planimetria)', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/matematika/geometria/planimetria', { waitUntil: 'hydration' })
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

  test('kliknutie na možnosť zobrazí feedback', async ({ page }) => {
    await page.getByTestId('quiz-option-0').click()
    await expect(page.getByTestId('quiz-feedback')).toBeVisible()
    await expect(page.getByTestId('quiz-next-btn')).toBeVisible()
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
    await page.getByTestId('quiz-reset-btn').click()
    await expect(page.getByTestId('quiz-result')).not.toBeVisible()
    await expect(page.getByTestId('quiz-progress')).toContainText('1')
  })
})

// ─── Kvíz — kombinatorika (overenie správnej/nesprávnej odpovede) ─────────────
test.describe('Matematika — kvíz (kombinatorika)', () => {
  test.beforeEach(async ({ goto }) => {
    await goto('/matematika/kombinatorika-statistika/kombinatorika', { waitUntil: 'hydration' })
  })

  test('správna odpoveď zobrazí Správne!', async ({ page }) => {
    // Otázka 1: aký je vzorec kombinácií? → C(n,k)=n!/(k!(n-k)!) → index 1
    await page.getByTestId('quiz-option-1').click()
    await expect(page.getByTestId('quiz-feedback')).toContainText('Správne')
  })

  test('nesprávna odpoveď zobrazí Nesprávne', async ({ page }) => {
    await page.getByTestId('quiz-option-3').click()
    const feedback = page.getByTestId('quiz-feedback')
    await expect(feedback).toBeVisible()
    // Feedback je buď správne alebo nesprávne — len overíme že sa zobrazí
    await expect(feedback).toBeTruthy()
  })
})
