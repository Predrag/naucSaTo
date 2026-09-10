import { describe, expect, it } from 'vitest'
import { searchIndex } from '../../app/utils/searchIndex'

describe('searchIndex', () => {
  it('obsahuje aspoň 10 záznamov', () => {
    expect(searchIndex.length).toBeGreaterThanOrEqual(10)
  })

  it('každý záznam má povinné polia', () => {
    for (const entry of searchIndex) {
      expect(entry.title, `${entry.path} nemá title`).toBeTruthy()
      expect(entry.description, `${entry.path} nemá description`).toBeTruthy()
      expect(entry.path, `${entry.title} nemá path`).toBeTruthy()
      expect(entry.category, `${entry.path} nemá category`).toBeTruthy()
    }
  })

  it('všetky paths začínajú lomítkom', () => {
    for (const entry of searchIndex) {
      expect(entry.path).toMatch(/^\//)
    }
  })

  it('neobsahuje duplicitné paths', () => {
    const paths = searchIndex.map(e => e.path)
    const unique = new Set(paths)
    expect(unique.size).toBe(paths.length)
  })

  it('obsahuje hlavné predmety', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/fyzika')
    expect(paths).toContain('/matematika')
    expect(paths).toContain('/chemia')
  })

  it('obsahuje stránku SI jednotiek', () => {
    const entry = searchIndex.find(e => e.path === '/fyzika/uvod/medzinarodna-sustava')
    expect(entry).toBeDefined()
    expect(entry?.title).toContain('sústava')
  })

  it('obsahuje stránku Meranie fyzikálnych veličín', () => {
    const entry = searchIndex.find(e => e.path === '/fyzika/uvod/meranie-velicin')
    expect(entry).toBeDefined()
    expect(entry?.keywords).toContain('meranie')
  })

  it('obsahuje všetkých 6 medzinárodných vedcov', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/fyzika/osobnosti/newton')
    expect(paths).toContain('/fyzika/osobnosti/joule')
    expect(paths).toContain('/fyzika/osobnosti/watt')
    expect(paths).toContain('/fyzika/osobnosti/pascal')
    expect(paths).toContain('/fyzika/osobnosti/hertz')
    expect(paths).toContain('/fyzika/osobnosti/coulomb')
  })

  it('obsahuje všetkých 6 slovenských vedcov', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/fyzika/osobnosti/petzval')
    expect(paths).toContain('/fyzika/osobnosti/jedlik')
    expect(paths).toContain('/fyzika/osobnosti/segner')
    expect(paths).toContain('/fyzika/osobnosti/stodola')
    expect(paths).toContain('/fyzika/osobnosti/hell')
    expect(paths).toContain('/fyzika/osobnosti/murgas')
  })

  it('Newton má správnu kategóriu', () => {
    const newton = searchIndex.find(e => e.path === '/fyzika/osobnosti/newton')
    expect(newton?.category).toBe('Osobnosti fyziky')
  })

  it('keywords obsahujú relevantné pojmy', () => {
    const si = searchIndex.find(e => e.path === '/fyzika/uvod/medzinarodna-sustava')
    expect(si?.keywords).toContain('meter')
    expect(si?.keywords).toContain('kilogram')
  })

  it('obsahuje sekciu Mechanika a jej podsekcie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/fyzika/mechanika')
    expect(paths).toContain('/fyzika/mechanika/kinematika')
    expect(paths).toContain('/fyzika/mechanika/newtonove-zakony')
    expect(paths).toContain('/fyzika/mechanika/gravitacia')
    expect(paths).toContain('/fyzika/mechanika/vrhy')
    expect(paths).toContain('/fyzika/mechanika/pohyb-po-kruznici')
    expect(paths).toContain('/fyzika/mechanika/praca-energia')
    expect(paths).toContain('/fyzika/mechanika/mechanika-tekutin')
  })

  it('obsahuje všetky hlavné sekcie fyziky', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/fyzika/molekulova-fyzika')
    expect(paths).toContain('/fyzika/kmity-vlnenie')
    expect(paths).toContain('/fyzika/elektricky-prud')
    expect(paths).toContain('/fyzika/magneticke-pole')
    expect(paths).toContain('/fyzika/optika')
    expect(paths).toContain('/fyzika/atomova-fyzika')
  })

  it('každá sekcia má správnu category', () => {
    const mech = searchIndex.find(e => e.path === '/fyzika/mechanika/kinematika')
    expect(mech?.category).toBe('Fyzika / Mechanika')

    const mol = searchIndex.find(e => e.path === '/fyzika/molekulova-fyzika')
    expect(mol).toBeDefined()
  })
})
