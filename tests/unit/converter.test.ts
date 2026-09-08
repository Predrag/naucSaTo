import { describe, expect, it } from 'vitest'
import {
  convertTemp,
  convertLinear,
  toSuperscript,
  formatNumber,
  converterCategories,
} from '../../app/utils/converter'

// Normalizuje nezalomiteľné medzery (U+202F, U+00A0) na bežné medzery
const norm = (s: string) => s.replace(/[  ]/g, ' ')

describe('convertTemp', () => {
  it('°C → K: 0 °C = 273.15 K', () => {
    expect(convertTemp(0, '°C', 'K')).toBeCloseTo(273.15)
  })

  it('°C → K: 100 °C = 373.15 K', () => {
    expect(convertTemp(100, '°C', 'K')).toBeCloseTo(373.15)
  })

  it('K → °C: 273.15 K = 0 °C', () => {
    expect(convertTemp(273.15, 'K', '°C')).toBeCloseTo(0)
  })

  it('°C → °F: 0 °C = 32 °F', () => {
    expect(convertTemp(0, '°C', '°F')).toBeCloseTo(32)
  })

  it('°C → °F: 100 °C = 212 °F', () => {
    expect(convertTemp(100, '°C', '°F')).toBeCloseTo(212)
  })

  it('°F → °C: 32 °F = 0 °C', () => {
    expect(convertTemp(32, '°F', '°C')).toBeCloseTo(0)
  })

  it('°F → K: 32 °F = 273.15 K', () => {
    expect(convertTemp(32, '°F', 'K')).toBeCloseTo(273.15)
  })

  it('rovnaká jednotka vráti pôvodnú hodnotu', () => {
    expect(convertTemp(25, '°C', '°C')).toBeCloseTo(25)
  })
})

describe('convertLinear', () => {
  it('1 km = 1000 m', () => {
    expect(convertLinear(1, 1000, 1)).toBe(1000)
  })

  it('1 m = 100 cm', () => {
    expect(convertLinear(1, 1, 0.01)).toBe(100)
  })

  it('1 kg = 1000 g', () => {
    expect(convertLinear(1, 1, 0.001)).toBe(1000)
  })

  it('1 h = 3600 s', () => {
    expect(convertLinear(1, 3600, 1)).toBe(3600)
  })

  it('1000 m = 1 km', () => {
    expect(convertLinear(1000, 1, 1000)).toBe(1)
  })

  it('rovnaká jednotka (factor 1/1) vráti pôvodnú hodnotu', () => {
    expect(convertLinear(5, 1, 1)).toBe(5)
  })
})

describe('toSuperscript', () => {
  it('kladné číslo', () => {
    expect(toSuperscript(12)).toBe('¹²')
  })

  it('záporné číslo', () => {
    expect(toSuperscript(-6)).toBe('⁻⁶')
  })

  it('nula', () => {
    expect(toSuperscript(0)).toBe('⁰')
  })

  it('veľké číslo', () => {
    expect(toSuperscript(123)).toBe('¹²³')
  })
})

describe('formatNumber', () => {
  it('nula', () => {
    expect(formatNumber(0)).toBe('0')
  })

  it('nekonečno vráti —', () => {
    expect(formatNumber(Infinity)).toBe('—')
    expect(formatNumber(-Infinity)).toBe('—')
  })

  it('NaN vráti —', () => {
    expect(formatNumber(NaN)).toBe('—')
  })

  it('bežné číslo používa slovenský formát', () => {
    expect(norm(formatNumber(1000))).toBe('1 000')
  })

  it('desatinné číslo používa čiarku', () => {
    expect(formatNumber(273.15)).toBe('273,15')
  })

  it('veľké číslo nad 1e13 použije vedecký zápis', () => {
    const result = formatNumber(1e14)
    expect(result).toContain('×')
    expect(result).toContain('10')
  })

  it('malé číslo pod 0.0001 použije vedecký zápis', () => {
    const result = formatNumber(1e-5)
    expect(result).toContain('×')
    expect(result).toContain('10')
  })
})

describe('converterCategories', () => {
  it('obsahuje 4 kategórie', () => {
    expect(converterCategories).toHaveLength(4)
  })

  it('kategória Dĺžka má meter s factor=1', () => {
    const dlzka = converterCategories.find(c => c.name === 'Dĺžka')
    const meter = dlzka?.units.find(u => u.symbol === 'm')
    expect((meter as { factor: number })?.factor).toBe(1)
  })

  it('kategória Teplota má isTemp=true pre všetky jednotky', () => {
    const teplota = converterCategories.find(c => c.name === 'Teplota')
    teplota?.units.forEach(u => expect(u.isTemp).toBe(true))
  })
})
