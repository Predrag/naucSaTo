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

// ─── Chémia ────────────────────────────────────────────────────────────────────
describe('searchIndex — Chémia', () => {
  it('obsahuje hlavnú stránku chémie', () => {
    const entry = searchIndex.find(e => e.path === '/chemia')
    expect(entry).toBeDefined()
    expect(entry?.title).toContain('Chémia')
  })

  it('obsahuje všetky sekcie chémie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/chemia/uvod')
    expect(paths).toContain('/chemia/stavba-latky')
    expect(paths).toContain('/chemia/chemicke-reakcie')
    expect(paths).toContain('/chemia/anorganicka-chemia')
    expect(paths).toContain('/chemia/organicka-chemia')
  })

  it('obsahuje stránky sekcie Úvod do chémie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/chemia/uvod/bezpecnost-laboratorium')
    expect(paths).toContain('/chemia/uvod/sustava-latkov')
  })

  it('obsahuje stránky sekcie Stavba látky', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/chemia/stavba-latky/stavba-atomu')
    expect(paths).toContain('/chemia/stavba-latky/periodicka-tabulka')
    expect(paths).toContain('/chemia/stavba-latky/chemicka-vazba')
    expect(paths).toContain('/chemia/stavba-latky/nazvoslovie')
  })

  it('obsahuje stránky sekcie Chemické reakcie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/chemia/chemicke-reakcie/chemicke-rovnice')
    expect(paths).toContain('/chemia/chemicke-reakcie/rychlost-rovnovaha')
    expect(paths).toContain('/chemia/chemicke-reakcie/acidobaza-pH')
    expect(paths).toContain('/chemia/chemicke-reakcie/redox')
  })

  it('obsahuje stránky anorganickej chémie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/chemia/anorganicka-chemia/nekovy')
    expect(paths).toContain('/chemia/anorganicka-chemia/kovy')
  })

  it('obsahuje stránky organickej chémie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/chemia/organicka-chemia/uhlovodiky')
    expect(paths).toContain('/chemia/organicka-chemia/derivaty-a-plasty')
  })

  it('chémia záznamy majú správne kategórie', () => {
    const stavba = searchIndex.find(e => e.path === '/chemia/stavba-latky/stavba-atomu')
    expect(stavba?.category).toContain('Stavba látky')

    const reakcie = searchIndex.find(e => e.path === '/chemia/chemicke-reakcie/acidobaza-pH')
    expect(reakcie?.category).toContain('Chemické reakcie')
  })

  it('chémia záznamy majú keywords', () => {
    const vazba = searchIndex.find(e => e.path === '/chemia/stavba-latky/chemicka-vazba')
    expect(vazba?.keywords).toBeTruthy()
    expect(vazba?.keywords).toContain('kovalentna')
  })
})

// ─── Matematika ────────────────────────────────────────────────────────────────
describe('searchIndex — Matematika', () => {
  it('obsahuje hlavnú stránku matematiky', () => {
    const entry = searchIndex.find(e => e.path === '/matematika')
    expect(entry).toBeDefined()
    expect(entry?.title).toContain('Matematika')
  })

  it('obsahuje všetky sekcie matematiky', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/matematika/cisla-a-vyrazy')
    expect(paths).toContain('/matematika/funkcie')
    expect(paths).toContain('/matematika/geometria')
    expect(paths).toContain('/matematika/kombinatorika-statistika')
    expect(paths).toContain('/matematika/logika-a-dokazovanie')
  })

  it('obsahuje stránky Čísla a výrazy', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/matematika/cisla-a-vyrazy/cisla-a-mnoziny')
    expect(paths).toContain('/matematika/cisla-a-vyrazy/mocniny-odmocniny')
    expect(paths).toContain('/matematika/cisla-a-vyrazy/rovnice-a-nerovnice')
    expect(paths).toContain('/matematika/cisla-a-vyrazy/percentualne-vypocty')
  })

  it('obsahuje stránky Funkcie a grafy', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/matematika/funkcie/zaklady-funkcie')
    expect(paths).toContain('/matematika/funkcie/linearna-kvadraticka')
    expect(paths).toContain('/matematika/funkcie/exponencialna-logaritmicka')
    expect(paths).toContain('/matematika/funkcie/goniometricke-funkcie')
  })

  it('obsahuje stránky Geometria', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/matematika/geometria/planimetria')
    expect(paths).toContain('/matematika/geometria/trigonometria')
    expect(paths).toContain('/matematika/geometria/stereometria')
    expect(paths).toContain('/matematika/geometria/analyticka-geometria')
  })

  it('obsahuje stránky Kombinatorika a štatistika', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/matematika/kombinatorika-statistika/kombinatorika')
    expect(paths).toContain('/matematika/kombinatorika-statistika/pravdepodobnost')
    expect(paths).toContain('/matematika/kombinatorika-statistika/statistika')
  })

  it('obsahuje stránky Logika a dôkazovanie', () => {
    const paths = searchIndex.map(e => e.path)
    expect(paths).toContain('/matematika/logika-a-dokazovanie/vyroky-a-logika')
    expect(paths).toContain('/matematika/logika-a-dokazovanie/dokazovanie')
    expect(paths).toContain('/matematika/logika-a-dokazovanie/postupnosti')
  })

  it('matematika záznamy majú správne kategórie', () => {
    const geom = searchIndex.find(e => e.path === '/matematika/geometria/planimetria')
    expect(geom?.category).toContain('Geometria')

    const komb = searchIndex.find(e => e.path === '/matematika/kombinatorika-statistika/kombinatorika')
    expect(komb?.category).toContain('Kombinatorika')
  })

  it('matematika záznamy majú keywords', () => {
    const gonio = searchIndex.find(e => e.path === '/matematika/funkcie/goniometricke-funkcie')
    expect(gonio?.keywords).toBeTruthy()
    expect(gonio?.keywords).toContain('sinus')

    const stat = searchIndex.find(e => e.path === '/matematika/kombinatorika-statistika/statistika')
    expect(stat?.keywords).toContain('priemer')
  })

  it('celkový počet záznamov je aspoň 60', () => {
    // Fyzika ~45 + Chémia ~22 + Matematika ~20 + hlavné = 87+
    expect(searchIndex.length).toBeGreaterThanOrEqual(60)
  })
})
