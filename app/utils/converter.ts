export interface LinearUnit {
  symbol: string
  name: string
  factor: number
  isTemp?: false
}

export interface TempUnit {
  symbol: string
  name: string
  isTemp: true
}

export type ConverterUnit = LinearUnit | TempUnit

export interface ConverterCategory {
  name: string
  icon: string
  units: ConverterUnit[]
}

export const converterCategories: ConverterCategory[] = [
  {
    name: 'Dĺžka', icon: '📏',
    units: [
      { name: 'kilometer',  symbol: 'km',  factor: 1000  },
      { name: 'meter',      symbol: 'm',   factor: 1     },
      { name: 'centimeter', symbol: 'cm',  factor: 0.01  },
      { name: 'milimeter',  symbol: 'mm',  factor: 0.001 },
      { name: 'mikrometer', symbol: 'μm',  factor: 1e-6  },
      { name: 'nanometer',  symbol: 'nm',  factor: 1e-9  },
    ],
  },
  {
    name: 'Hmotnosť', icon: '⚖️',
    units: [
      { name: 'tona',      symbol: 't',   factor: 1000  },
      { name: 'kilogram',  symbol: 'kg',  factor: 1     },
      { name: 'dekagram',  symbol: 'dag', factor: 0.01  },
      { name: 'gram',      symbol: 'g',   factor: 0.001 },
      { name: 'miligram',  symbol: 'mg',  factor: 1e-6  },
    ],
  },
  {
    name: 'Čas', icon: '⏱️',
    units: [
      { name: 'hodina',      symbol: 'h',   factor: 3600  },
      { name: 'minúta',      symbol: 'min', factor: 60    },
      { name: 'sekunda',     symbol: 's',   factor: 1     },
      { name: 'milisekunda', symbol: 'ms',  factor: 0.001 },
    ],
  },
  {
    name: 'Teplota', icon: '🌡️',
    units: [
      { name: 'stupeň Celzia',      symbol: '°C', isTemp: true },
      { name: 'kelvin',             symbol: 'K',  isTemp: true },
      { name: 'stupeň Fahrenheita', symbol: '°F', isTemp: true },
    ],
  },
]

export function convertTemp(val: number, from: string, to: string): number {
  const celsius = from === '°C' ? val : from === 'K' ? val - 273.15 : (val - 32) * 5 / 9
  if (to === '°C') return celsius
  if (to === 'K')  return celsius + 273.15
  return celsius * 9 / 5 + 32
}

export function convertLinear(val: number, fromFactor: number, toFactor: number): number {
  return val * fromFactor / toFactor
}

export function toSuperscript(n: number): string {
  const map: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻',
  }
  return String(n).split('').map(c => map[c] ?? c).join('')
}

export function formatNumber(n: number): string {
  if (!isFinite(n)) return '—'
  if (n === 0) return '0'
  const abs = Math.abs(n)
  if (abs >= 0.0001 && abs < 1e13) {
    return new Intl.NumberFormat('sk-SK', { maximumSignificantDigits: 7 }).format(n)
  }
  const exp = Math.floor(Math.log10(abs))
  const mantissa = n / Math.pow(10, exp)
  const mantissaStr = new Intl.NumberFormat('sk-SK', { maximumSignificantDigits: 4 }).format(mantissa)
  return `${mantissaStr} × 10${toSuperscript(exp)}`
}
