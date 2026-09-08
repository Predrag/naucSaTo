import { describe, expect, it } from 'vitest'
import katex from 'katex'

// Testujeme logiku KaTeX renderingu ktorú používa MathFormula komponent

function renderMath(formula: string, display = false): string {
  return katex.renderToString(formula, {
    displayMode: display,
    throwOnError: false,
    output: 'html',
  })
}

describe('KaTeX rendering (MathFormula logika)', () => {
  it('inline formula obsahuje class katex', () => {
    const result = renderMath('u_A')
    expect(result).toContain('katex')
  })

  it('display formula obsahuje class katex-display', () => {
    const result = renderMath('u_A', true)
    expect(result).toContain('katex-display')
  })

  it('zlomok sa vykreslí správne', () => {
    const result = renderMath('\\frac{s}{\\sqrt{n}}')
    expect(result).toContain('katex')
    expect(result).toContain('mfrac')
  })

  it('sigma so súčtovými hranicami', () => {
    const result = renderMath('\\sum_{i=1}^{n} x_i')
    expect(result).toContain('katex')
    expect(result).toContain('mop')
  })

  it('odmocnina sa vykreslí', () => {
    const result = renderMath('\\sqrt{u_A^2 + u_B^2}')
    expect(result).toContain('katex')
    expect(result).toContain('sqrt')
  })

  it('neplatná formula nehodí výnimku (throwOnError: false)', () => {
    expect(() => renderMath('\\neplatne{')).not.toThrow()
  })

  it('grécke písmená sa vykreslia', () => {
    const result = renderMath('\\Delta x = |x_n - x_s|')
    expect(result).toContain('katex')
  })

  it('percent sa vykreslí', () => {
    const result = renderMath('\\delta x = \\frac{\\Delta x}{x} \\cdot 100\\,\\%')
    expect(result).toContain('katex')
  })
})
