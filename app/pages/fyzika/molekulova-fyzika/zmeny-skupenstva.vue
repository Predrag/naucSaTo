<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/molekulova-fyzika" class="hover:text-emerald-600 transition-colors">Molekulová fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Zmeny skupenstva</span>
    </nav>

    <!-- Header -->
    <div class="bg-sky-600 text-white rounded-2xl p-8 mb-10 shadow-lg">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">🧊 Zmeny skupenstva</h1>
      <p class="text-sky-100 text-lg">Molekulová fyzika a termodynamika</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg leading-relaxed mb-10">
      Hmota sa vyskytuje v troch základných skupenstvách — tuhom, kvapalnom a plynnom. Prechod medzi nimi,
      nazývaný <strong>zmena skupenstva</strong>, vždy súvisí s príjmom alebo odovzdaním skupenského tepla
      bez zmeny teploty látky. Pochopenie týchto procesov je kľúčové pre meteorológiu, chladiarenstvo aj každodennú fyziku.
    </p>

    <!-- Section 1: Prehľad zmien skupenstva -->
    <section aria-label="Prehľad zmien skupenstva" class="mb-12">
      <h2 class="text-2xl font-bold text-sky-700 mb-4 border-b-2 border-sky-200 pb-2">Prehľad zmien skupenstva</h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Každý prechod medzi skupenstvami má vlastný názov a prebieha pri špecifickej teplote (pri danom tlaku).
        Niektoré zmeny skupenstva <strong>absorbujú teplo</strong> (endotermické), iné <strong>uvoľňujú teplo</strong> (exotermické).
      </p>

      <!-- Schéma zmien skupenstva -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6 flex justify-center">
        <svg viewBox="0 0 520 260" class="w-full max-w-xl" aria-label="Schéma zmien skupenstva — topenie, tuhnutie, vyparovanie, kondenzácia, sublimácia, desublimácia">
          <!-- Tuhé skupenstvo -->
          <rect x="20" y="100" width="130" height="60" rx="12" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="85" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="#0c4a6e">TUHÉ</text>
          <text x="85" y="148" text-anchor="middle" font-size="11" fill="#0369a1">skupenstvo</text>

          <!-- Kvapalné skupenstvo -->
          <rect x="195" y="100" width="130" height="60" rx="12" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
          <text x="260" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="#064e3b">KVAPALNÉ</text>
          <text x="260" y="148" text-anchor="middle" font-size="11" fill="#047857">skupenstvo</text>

          <!-- Plynné skupenstvo -->
          <rect x="370" y="100" width="130" height="60" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
          <text x="435" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="#78350f">PLYNNÉ</text>
          <text x="435" y="148" text-anchor="middle" font-size="11" fill="#92400e">skupenstvo</text>

          <!-- Topenie: Tuhé → Kvapalné (hore) -->
          <defs>
            <marker id="arr-right-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0,8 3,0 6" fill="#0284c7"/>
            </marker>
            <marker id="arr-left-sky" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="8 0,0 3,8 6" fill="#7c3aed"/>
            </marker>
            <marker id="arr-right-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0,8 3,0 6" fill="#059669"/>
            </marker>
            <marker id="arr-left-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="8 0,0 3,8 6" fill="#7c3aed"/>
            </marker>
            <marker id="arr-right-orange" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0,8 3,0 6" fill="#d97706"/>
            </marker>
            <marker id="arr-left-orange" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="8 0,0 3,8 6" fill="#2563eb"/>
            </marker>
          </defs>

          <!-- Topenie → -->
          <line x1="152" y1="118" x2="193" y2="118" stroke="#0284c7" stroke-width="2" marker-end="url(#arr-right-blue)"/>
          <text x="172" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">TOPENIE</text>
          <!-- Tuhnutie ← -->
          <line x1="193" y1="142" x2="152" y2="142" stroke="#7c3aed" stroke-width="2" marker-end="url(#arr-left-sky)"/>
          <text x="172" y="158" text-anchor="middle" font-size="10" font-weight="bold" fill="#7c3aed">TUHNUTIE</text>

          <!-- Vyparovanie → -->
          <line x1="327" y1="118" x2="368" y2="118" stroke="#059669" stroke-width="2" marker-end="url(#arr-right-green)"/>
          <text x="348" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">VYPAROVANIE</text>
          <!-- Kondenzácia ← -->
          <line x1="368" y1="142" x2="327" y2="142" stroke="#7c3aed" stroke-width="2" marker-end="url(#arr-left-green)"/>
          <text x="348" y="158" text-anchor="middle" font-size="10" font-weight="bold" fill="#7c3aed">KONDENZÁCIA</text>

          <!-- Sublimácia: Tuhé → Plynné (oblúk nahor) -->
          <path d="M 85,100 Q 260,20 435,100" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr-right-orange)"/>
          <text x="260" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">SUBLIMÁCIA</text>

          <!-- Desublimácia: Plynné → Tuhé (oblúk nadol) -->
          <path d="M 435,160 Q 260,240 85,160" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr-left-orange)"/>
          <text x="260" y="232" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">DESUBLIMÁCIA</text>
        </svg>
      </div>

      <!-- Tabuľka zmien skupenstva -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-sky-700 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Zmena skupenstva</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Smer prechodu</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Teplo</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Príklad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in changeTable" :key="row.name" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-semibold text-sky-700">{{ row.name }}</td>
              <td class="px-5 py-3 text-gray-700">{{ row.direction }}</td>
              <td class="px-5 py-3">
                <span :class="row.heat === 'absorbuje' ? 'text-orange-600 font-medium' : 'text-blue-600 font-medium'">{{ row.heat }}</span>
              </td>
              <td class="px-5 py-3 text-gray-600">{{ row.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 2: Topenie a tuhnutie -->
    <section aria-label="Topenie a tuhnutie" class="mb-12">
      <h2 class="text-2xl font-bold text-sky-700 mb-4 border-b-2 border-sky-200 pb-2">Topenie a tuhnutie</h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        <strong>Topenie</strong> je prechod z tuhého do kvapalného skupenstva. Prebieha pri <strong>teplote topenia</strong>
        <MathFormula formula="T_t" />, ktorá je pre každú látku charakteristická (pri danom tlaku). Počas topenia
        teplota látky <em>zostáva konštantná</em>, hoci látka prijíma teplo.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div class="bg-sky-50 border border-sky-200 rounded-xl p-5">
          <h3 class="font-semibold text-sky-800 mb-3">Teplota topenia</h3>
          <ul class="text-sm text-gray-700 space-y-2">
            <li class="flex gap-2"><span class="text-sky-500 font-bold">•</span> Pre každú látku je charakteristická a závisí od tlaku.</li>
            <li class="flex gap-2"><span class="text-sky-500 font-bold">•</span> Teplota tuhnutia sa rovná teplote topenia — ide o rovnovážnu teplotu.</li>
            <li class="flex gap-2"><span class="text-sky-500 font-bold">•</span> Kryštalické látky majú ostrú teplotu topenia. Amorfné látky (sklo, plasty) sa topia postupne.</li>
          </ul>
        </div>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 class="font-semibold text-amber-800 mb-3">Teploty topenia vybraných látok</h3>
          <div class="space-y-1.5 text-sm">
            <div v-for="m in meltingPoints" :key="m.name" class="flex justify-between items-center">
              <span class="text-gray-700">{{ m.name }}</span>
              <span class="font-semibold text-amber-700">{{ m.temp }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Skupenské teplo topenia -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <h3 class="font-bold text-gray-900 mb-3">Skupenské teplo topenia <MathFormula formula="L_t\;[\text{J/kg}]" /></h3>
        <p class="text-sm text-gray-600 mb-4 leading-relaxed">
          Na roztopenie látky je potrebné dodať teplo, ktoré sa nespotrebuje na zvýšenie teploty, ale na
          narušenie kryštalickej mriežky. Toto teplo sa nazýva <strong>skupenské teplo topenia</strong>.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-sky-50 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Vzorec pre skupenské teplo</p>
            <MathFormula display formula="Q = m \cdot L_t" />
            <div class="text-xs text-gray-500 mt-2 space-y-0.5">
              <p><span class="inline" v-html="km('Q')" /> — teplo [J]</p>
              <p><span class="inline" v-html="km('m')" /> — hmotnosť [kg]</p>
              <p><span class="inline" v-html="km('L_t')" /> — skupenské teplo topenia [J/kg]</p>
            </div>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Skupenské teplo topenia látok</p>
            <div class="space-y-1.5 text-sm">
              <div v-for="lt in latentHeatFusion" :key="lt.name" class="flex justify-between">
                <span class="text-gray-700">{{ lt.name }}</span>
                <span class="font-semibold text-sky-700">{{ lt.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Krivka ohrevu/chladenia -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <h3 class="font-bold text-gray-900 mb-3">Krivka ohrevu (teplota v čase)</h3>
        <p class="text-sm text-gray-500 mb-4">Počas topenia a tuhnutia teplota zostáva konštantná — látka prijíma alebo odovzdáva skupenské teplo.</p>
        <svg viewBox="0 0 480 220" class="w-full" aria-label="Krivka ohrevu ľadu — ohrev, topenie, ohrev vody, var, ohrev pary">
          <defs>
            <marker id="ax-x" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#9CA3AF"/></marker>
            <marker id="ax-y" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#9CA3AF"/></marker>
          </defs>
          <!-- Osy -->
          <line x1="50" y1="190" x2="455" y2="190" stroke="#D1D5DB" stroke-width="1.5" marker-end="url(#ax-x)"/>
          <line x1="50" y1="190" x2="50" y2="15" stroke="#D1D5DB" stroke-width="1.5" marker-end="url(#ax-y)"/>
          <text x="458" y="194" fill="#9CA3AF" font-size="11">t</text>
          <text x="38" y="13" fill="#9CA3AF" font-size="11">T</text>

          <!-- Popisky na osi y -->
          <text x="35" y="172" text-anchor="end" font-size="10" fill="#6B7280">0 °C</text>
          <line x1="47" y1="168" x2="53" y2="168" stroke="#9CA3AF" stroke-width="1"/>
          <text x="35" y="70" text-anchor="end" font-size="10" fill="#6B7280">100 °C</text>
          <line x1="47" y1="66" x2="53" y2="66" stroke="#9CA3AF" stroke-width="1"/>

          <!-- Krivka ohrevu ľadu: stúpanie -->
          <polyline points="60,190 100,168" fill="none" stroke="#0284c7" stroke-width="2.5"/>
          <!-- Topenie: plateau pri 0°C -->
          <polyline points="100,168 170,168" fill="none" stroke="#ef4444" stroke-width="2.5"/>
          <!-- Ohrev vody -->
          <polyline points="170,168 270,66" fill="none" stroke="#0284c7" stroke-width="2.5"/>
          <!-- Var: plateau pri 100°C -->
          <polyline points="270,66 360,66" fill="none" stroke="#ef4444" stroke-width="2.5"/>
          <!-- Ohrev pary -->
          <polyline points="360,66 430,30" fill="none" stroke="#0284c7" stroke-width="2.5"/>

          <!-- Popisky -->
          <text x="78" y="184" text-anchor="middle" font-size="10" fill="#0284c7">ohrev ľadu</text>
          <text x="135" y="158" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">topenie</text>
          <text x="220" y="125" text-anchor="middle" font-size="10" fill="#0284c7">ohrev vody</text>
          <text x="315" y="56" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">var</text>
          <text x="398" y="35" text-anchor="middle" font-size="10" fill="#0284c7">ohrev pary</text>

          <!-- Bodkované čiary na plateaux -->
          <line x1="50" y1="168" x2="100" y2="168" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="50" y1="66" x2="270" y2="66" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="3,2"/>
        </svg>
      </div>

      <!-- Interaktívna kalkulačka -->
      <div class="bg-sky-50 border border-sky-200 rounded-2xl p-6">
        <h3 class="font-bold text-sky-900 mb-4">Kalkulačka skupenského tepla topenia</h3>
        <p class="text-sm text-gray-600 mb-4">Vypočítaj, koľko tepla je potrebné na roztopenie (alebo odobratia na stuhnutie) danej hmotnosti vybranej látky.</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Látka</label>
            <select v-model="calcMaterial" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400">
              <option v-for="m in calcMaterials" :key="m.name" :value="m">{{ m.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Hmotnosť (kg)</label>
            <input v-model.number="calcMass" type="number" min="0.01" step="0.1" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" >
          </div>
          <div class="flex items-end">
            <div class="w-full bg-white border border-sky-300 rounded-xl p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Potrebné teplo</p>
              <p class="text-xl font-bold text-sky-700">{{ calcResult }}</p>
            </div>
          </div>
        </div>
        <p class="text-xs text-gray-400">
          <span v-html="km(`L_t(${calcMaterial.name}) = ${calcMaterial.Lt.toLocaleString('sk')}\\;\\text{J/kg}`)"/>
        </p>
      </div>
    </section>

    <!-- Section 3: Vyparovanie, var a kondenzácia -->
    <section aria-label="Vyparovanie, var a kondenzácia" class="mb-12">
      <h2 class="text-2xl font-bold text-sky-700 mb-4 border-b-2 border-sky-200 pb-2">Vyparovanie, var a kondenzácia</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 class="font-semibold text-orange-800 mb-2">Vyparovanie</h3>
          <ul class="text-sm text-gray-700 space-y-1.5">
            <li class="flex gap-2"><span class="text-orange-500">•</span> Prebieha <strong>len z povrchu</strong> kvapaliny.</li>
            <li class="flex gap-2"><span class="text-orange-500">•</span> Nastáva pri <strong>akejkoľvek teplote</strong>.</li>
            <li class="flex gap-2"><span class="text-orange-500">•</span> Rýchlosť závisí od teploty, povrchu a prúdenia vzduchu.</li>
            <li class="flex gap-2"><span class="text-orange-500">•</span> Z povrchu unikajú molekuly s najväčšou kinetickou energiou → kvapalina sa ochladzuje.</li>
          </ul>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-semibold text-red-800 mb-2">Var</h3>
          <ul class="text-sm text-gray-700 space-y-1.5">
            <li class="flex gap-2"><span class="text-red-500">•</span> Prebieha <strong>z celého objemu</strong> kvapaliny.</li>
            <li class="flex gap-2"><span class="text-red-500">•</span> Nastáva pri <strong>teplote varu</strong> — keď tlak nasýtenej pary = vonkajší tlak.</li>
            <li class="flex gap-2"><span class="text-red-500">•</span> Teplota počas varu zostáva konštantná.</li>
            <li class="flex gap-2"><span class="text-red-500">•</span> Pri <strong>vyššom tlaku</strong> je teplota varu vyššia (tlakový hrniec, parný kotol).</li>
          </ul>
        </div>
      </div>

      <!-- Závislosť teploty varu od tlaku -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <h3 class="font-bold text-gray-900 mb-3">Závislosť teploty varu od tlaku</h3>
        <p class="text-sm text-gray-600 mb-4">
          Teplota varu vody závisí od atmosferického tlaku. Na horách (nižší tlak) voda vrie pri nižšej teplote.
          V tlakovom hrnci (vyšší tlak) vrie pri vyššej teplote.
        </p>
        <div class="overflow-x-auto rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-100">
                <th scope="col" class="text-left px-4 py-2 font-semibold text-gray-700">Miesto / podmienka</th>
                <th scope="col" class="text-left px-4 py-2 font-semibold text-gray-700">Tlak</th>
                <th scope="col" class="text-left px-4 py-2 font-semibold text-gray-700">Teplota varu vody</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in boilingTable" :key="r.place" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-4 py-2 text-gray-700">{{ r.place }}</td>
                <td class="px-4 py-2 text-gray-600">{{ r.pressure }}</td>
                <td class="px-4 py-2 font-semibold text-red-600">{{ r.boilTemp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Skupenské teplo vyparovania -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <h3 class="font-bold text-gray-900 mb-3">Skupenské teplo vyparovania <MathFormula formula="L_v\;[\text{J/kg}]" /></h3>
        <p class="text-sm text-gray-600 mb-4 leading-relaxed">
          Teplo potrebné na vyparovanie (resp. uvoľnené pri kondenzácii) jednotkového množstva kvapaliny
          pri teplote varu. Platí rovnaký vzorec ako pri topení:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-orange-50 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Vzorec</p>
            <MathFormula display formula="Q = m \cdot L_v" />
            <p class="text-xs text-gray-500 mt-2">
              <span v-html="km('L_v')"/> — skupenské teplo vyparovania [J/kg]
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Hodnoty <span v-html="km('L_v')"/></p>
            <div class="space-y-1.5 text-sm">
              <div v-for="lv in latentHeatVap" :key="lv.name" class="flex justify-between">
                <span class="text-gray-700">{{ lv.name }}</span>
                <span class="font-semibold text-orange-700">{{ lv.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nasýtená vs. nenasýtená para -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <h3 class="font-bold text-gray-900 mb-4">Nasýtená vs. nenasýtená para</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="font-semibold text-blue-800 mb-2">Nenasýtená para</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li class="flex gap-2"><span class="text-blue-400">•</span> Môže prijímať ďalšie molekuly — vyparovanie pokračuje.</li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> Správa sa podobne ako ideálny plyn.</li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> Vzniká v uzavretej nádobe, kým sa nedosiahne rovnováha.</li>
            </ul>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-4">
            <p class="font-semibold text-sky-800 mb-2">Nasýtená para</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li class="flex gap-2"><span class="text-sky-400">•</span> Stav rovnováhy — rýchlosť vyparovania = rýchlosť kondenzácie.</li>
              <li class="flex gap-2"><span class="text-sky-400">•</span> Jej tlak závisí len od <strong>teploty</strong>, nie od objemu.</li>
              <li class="flex gap-2"><span class="text-sky-400">•</span> Neplatí Boyle-Mariottov zákon.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Sublimácia, desublimácia, fázový diagram -->
    <section aria-label="Sublimácia, desublimácia a fázový diagram" class="mb-12">
      <h2 class="text-2xl font-bold text-sky-700 mb-4 border-b-2 border-sky-200 pb-2">Sublimácia, desublimácia a fázový diagram</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div class="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <h3 class="font-semibold text-violet-800 mb-2">Sublimácia</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-3">
            Prechod z <strong>tuhého priamo do plynného</strong> skupenstva bez toho, aby látka prešla
            kvapalnou fázou. Nastáva pri nízkych tlakoch.
          </p>
          <div class="bg-white rounded-lg p-3 text-sm text-gray-600 space-y-1">
            <p class="font-medium text-violet-700">Príklady sublimácie:</p>
            <p>• Suchý ľad (CO₂) pri izbovej teplote</p>
            <p>• Jód zahrievaný v uzavretej fľaši</p>
            <p>• Vysychanie snehu pri mrazivom počasí</p>
            <p>• Lyofilizácia (mrazová sušička)</p>
          </div>
        </div>
        <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
          <h3 class="font-semibold text-indigo-800 mb-2">Desublimácia</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-3">
            Opačný proces — prechod z <strong>plynného priamo do tuhého</strong> skupenstva.
            Uvoľňuje sa skupenské teplo.
          </p>
          <div class="bg-white rounded-lg p-3 text-sm text-gray-600 space-y-1">
            <p class="font-medium text-indigo-700">Príklady desublimácie:</p>
            <p>• Námraza (ľad) na studenej okennej tabuli</p>
            <p>• Snehové vločky (vodná para → ľad)</p>
            <p>• Inovatica na vetvičkách stromov</p>
          </div>
        </div>
      </div>

      <!-- Fázový diagram -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
        <h3 class="font-bold text-gray-900 mb-1">Fázový diagram</h3>
        <p class="text-sm text-gray-500 mb-4">
          Fázový diagram zobrazuje, v akom skupenstve sa látka nachádza pri danom tlaku a teplote.
          Krivky oddeľujú oblasti jednotlivých skupenstiev.
        </p>
        <svg viewBox="0 0 480 320" class="w-full max-w-lg mx-auto block" aria-label="Fázový diagram — oblasti tuhého, kvapalného a plynného skupenstva, trojný bod, kritický bod">
          <defs>
            <marker id="fd-ax" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#9CA3AF"/></marker>
            <marker id="fd-ay" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#9CA3AF"/></marker>
          </defs>
          <!-- Pozadie oblasti -->
          <!-- Tuhé: ľavý horný -->
          <polygon points="55,20 55,260 185,180 185,20" fill="#bfdbfe" opacity="0.5"/>
          <!-- Kvapalné: stred -->
          <polygon points="185,180 185,20 390,20 390,120 340,165" fill="#a7f3d0" opacity="0.5"/>
          <!-- Plynné: pravý dolný -->
          <polygon points="55,260 185,180 340,165 390,120 440,260" fill="#fde68a" opacity="0.4"/>

          <!-- Osy -->
          <line x1="55" y1="265" x2="445" y2="265" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#fd-ax)"/>
          <line x1="55" y1="265" x2="55" y2="15" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#fd-ay)"/>
          <text x="448" y="269" fill="#6B7280" font-size="12">T</text>
          <text x="44" y="13" fill="#6B7280" font-size="12">p</text>

          <!-- Krivka sublimácie: trojný bod → smer nadol-vľavo -->
          <line x1="185" y1="180" x2="55" y2="260" stroke="#7c3aed" stroke-width="2.5"/>
          <!-- Krivka topenia: trojný bod → smer nahor (takmer zvislá, mierne doprava) -->
          <line x1="185" y1="180" x2="185" y2="20" stroke="#0284c7" stroke-width="2.5"/>
          <!-- Krivka vyparovania: trojný bod → kritický bod -->
          <line x1="185" y1="180" x2="390" y2="120" stroke="#dc2626" stroke-width="2.5"/>

          <!-- Trojný bod -->
          <circle cx="185" cy="180" r="6" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
          <text x="165" y="200" fill="#92400e" font-size="11" font-weight="bold">Trojný bod</text>

          <!-- Kritický bod -->
          <circle cx="390" cy="120" r="5" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
          <text x="360" y="112" fill="#7f1d1d" font-size="11" font-weight="bold">Kritický bod</text>

          <!-- Popisky oblastí -->
          <text x="105" y="90" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">TUHÉ</text>
          <text x="270" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">KVAPALNÉ</text>
          <text x="310" y="230" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">PLYNNÉ</text>

          <!-- Popisky kriviek -->
          <text x="112" y="210" fill="#7c3aed" font-size="10" transform="rotate(-30,112,210)">sublimácia</text>
          <text x="195" y="110" fill="#0284c7" font-size="10">topenie</text>
          <text x="270" y="168" fill="#dc2626" font-size="10" transform="rotate(-10,270,168)">vyparovanie</text>
        </svg>
      </div>

      <!-- Trojný bod -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 class="font-semibold text-amber-800 mb-2">Trojný bod</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          <strong>Trojný bod</strong> je jediná kombinácia tlaku a teploty, pri ktorej môžu existovať
          všetky tri skupenstvá látky naraz v termodynamickej rovnováhe. Pre vodu je to:
        </p>
        <div class="grid grid-cols-2 gap-4 mt-3">
          <div class="bg-white rounded-lg p-3 text-center">
            <p class="text-xs text-gray-400">Teplota trojného bodu vody</p>
            <p class="text-lg font-bold text-amber-700">273,16 K (0,01 °C)</p>
          </div>
          <div class="bg-white rounded-lg p-3 text-center">
            <p class="text-xs text-gray-400">Tlak trojného bodu vody</p>
            <p class="text-lg font-bold text-amber-700">611,73 Pa</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2">
          <span class="text-sky-500 font-bold">✓</span>
          Zmeny skupenstva: topenie, tuhnutie, vyparovanie, kondenzácia, sublimácia, desublimácia — vždy sprevádzajú príjmom alebo odovzdaním skupenského tepla.
        </li>
        <li class="flex gap-2">
          <span class="text-sky-500 font-bold">✓</span>
          Skupenské teplo: <MathFormula formula="Q = m \cdot L" /> — počas zmeny skupenstva teplota zostáva konštantná.
        </li>
        <li class="flex gap-2">
          <span class="text-sky-500 font-bold">✓</span>
          Var prebieha z celého objemu pri teplote varu. Teplota varu rastie s tlakom (tlakový hrniec) a klesá pri nižšom tlaku (hory).
        </li>
        <li class="flex gap-2">
          <span class="text-sky-500 font-bold">✓</span>
          Nasýtená para je v rovnováhe s kvapalinou — jej tlak závisí len od teploty, nie od objemu.
        </li>
        <li class="flex gap-2">
          <span class="text-sky-500 font-bold">✓</span>
          Fázový diagram ukazuje skupenstvo látky pri danom tlaku a teplote. Trojný bod: všetky tri skupenstvá existujú súčasne.
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz — zmeny skupenstva">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-sky-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-sky-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5">{{ currentQuestion.question }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`quiz-option-${i}`"
            :disabled="selectedAnswer !== null"
            :class="[
              'text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-150',
              selectedAnswer === null
                ? 'border-gray-200 text-gray-700 hover:border-sky-400 hover:bg-sky-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-sky-500 bg-sky-50 text-sky-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-100 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)">
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            {{ option }}
          </button>
        </div>

        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div
              data-testid="quiz-feedback"
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-sky-50 border border-sky-200 text-sky-800'
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
                @click="nextQuestion">
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ── Statický obsah ──────────────────────────────────────────────────────────

const changeTable = [
  { name: 'Topenie',       direction: 'Tuhé → Kvapalné',  heat: 'absorbuje', example: 'Topenie ľadu, vosku, kovov' },
  { name: 'Tuhnutie',      direction: 'Kvapalné → Tuhé',  heat: 'uvoľňuje',  example: 'Tuhnutie vody, odliatkov' },
  { name: 'Vyparovanie',   direction: 'Kvapalné → Plynné', heat: 'absorbuje', example: 'Mokrý povrch, pot na koži' },
  { name: 'Kondenzácia',   direction: 'Plynné → Kvapalné', heat: 'uvoľňuje',  example: 'Hmla, oblaky, rosa' },
  { name: 'Sublimácia',    direction: 'Tuhé → Plynné',    heat: 'absorbuje', example: 'Suchý ľad, sublimácia jódu' },
  { name: 'Desublimácia',  direction: 'Plynné → Tuhé',    heat: 'uvoľňuje',  example: 'Námraza, inovatica' },
]

const meltingPoints = [
  { name: 'Ľad (voda)',  temp: '0 °C' },
  { name: 'Olovo',       temp: '327 °C' },
  { name: 'Hliník',      temp: '660 °C' },
  { name: 'Meď',         temp: '1 085 °C' },
  { name: 'Železo',      temp: '1 538 °C' },
  { name: 'Volfrám',     temp: '3 422 °C' },
]

const latentHeatFusion = [
  { name: 'Ľad (voda)',  value: '334 000 J/kg' },
  { name: 'Olovo',       value: '23 000 J/kg' },
  { name: 'Hliník',      value: '397 000 J/kg' },
  { name: 'Železo',      value: '277 000 J/kg' },
]

const latentHeatVap = [
  { name: 'Voda (100 °C)',  value: '2 260 000 J/kg' },
  { name: 'Etanol',         value: '855 000 J/kg' },
  { name: 'Dusík (−196 °C)', value: '199 000 J/kg' },
  { name: 'Hélium (−269 °C)', value: '20 700 J/kg' },
]

const boilingTable = [
  { place: 'More (hladina mora)',         pressure: '101 325 Pa (1 atm)', boilTemp: '100 °C' },
  { place: 'Tatry — Rysy (2 499 m)',      pressure: '≈ 75 000 Pa',        boilTemp: '≈ 90 °C' },
  { place: 'Mont Everest (8 849 m)',      pressure: '≈ 33 700 Pa',        boilTemp: '≈ 70 °C' },
  { place: 'Tlakový hrniec',             pressure: '≈ 200 000 Pa',       boilTemp: '≈ 120 °C' },
]

// ── Kalkulačka skupenského tepla ────────────────────────────────────────────

interface CalcMaterial {
  name: string
  Lt: number
}

const calcMaterials: CalcMaterial[] = [
  { name: 'Ľad (voda)',  Lt: 334000 },
  { name: 'Olovo',       Lt: 23000 },
  { name: 'Hliník',      Lt: 397000 },
  { name: 'Železo',      Lt: 277000 },
]

const calcMaterial = ref<CalcMaterial>(calcMaterials[0]!)
const calcMass = ref<number>(1)

const calcResult = computed(() => {
  const Q = calcMass.value * calcMaterial.value.Lt
  if (!isFinite(Q) || Q <= 0) return '—'
  if (Q >= 1_000_000) return `${(Q / 1_000_000).toFixed(2)} MJ`
  if (Q >= 1_000) return `${(Q / 1_000).toFixed(1)} kJ`
  return `${Q.toFixed(0)} J`
})

// ── Kvíz ──────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo sa deje s teplotou ľadu pri topení pri 0 °C, ak mu stále dodávame teplo?',
    options: [
      'Teplota stúpa priamo úmerne dodanému teplu',
      'Teplota ostáva konštantná, kým sa všetok ľad neroztopí',
      'Teplota klesá, pretože ľad odovzdáva teplo okoliu',
      'Teplota skočí náhle na 100 °C',
    ],
    correctIndex: 1,
    explanation: 'Počas zmeny skupenstva (topenia) teplota zostáva konštantná. Dodávané teplo sa spotrebuje na narušenie kryštalickej mriežky — ide o skupenské teplo topenia.',
  },
  {
    question: 'Koľko tepla je potrebné na roztopenie 2 kg ľadu pri 0 °C? (Lt = 334 000 J/kg)',
    options: ['167 000 J', '334 000 J', '668 000 J', '1 000 000 J'],
    correctIndex: 2,
    explanation: `${km('Q = m \\cdot L_t = 2\\,\\text{kg} \\cdot 334\\,000\\,\\text{J/kg} = 668\\,000\\,\\text{J} = 668\\,\\text{kJ}')}`,
  },
  {
    question: 'Ako sa zmení teplota varu vody, keď zídeme do hlbokej bane (vyšší tlak)?',
    options: [
      'Teplota varu klesne',
      'Teplota varu zostane rovnaká (100 °C)',
      'Teplota varu vzrastie',
      'Voda pri vyššom tlaku vôbec nevarí',
    ],
    correctIndex: 2,
    explanation: 'Teplota varu závisí od vonkajšieho tlaku. Pri vyššom tlaku musí tlak nasýtenej pary dosiahnuť vyššiu hodnotu, preto musí mať kvapalina vyššiu teplotu. Princíp využíva tlakový hrniec.',
  },
  {
    question: 'Čo je sublimácia?',
    options: [
      'Prechod z kvapalného skupenstva do plynného',
      'Prechod z tuhého skupenstva priamo do plynného',
      'Prechod z plynného skupenstva do tuhého',
      'Prechod z tuhého skupenstva do kvapalného',
    ],
    correctIndex: 1,
    explanation: 'Sublimácia je prechod z tuhého priamo do plynného skupenstva (bez kvapalnej fázy). Príklady: suchý ľad, inovatica. Opačný dej — z plynného do tuhého — je desublimácia.',
  },
  {
    question: 'Čo charakterizuje nasýtenú paru?',
    options: [
      'Správa sa presne ako ideálny plyn',
      'Jej tlak závisí len od objemu nádoby',
      'Je v dynamickej rovnováhe s kvapalinou — rýchlosť vyparovania = kondenzácii',
      'Môže ďalej prijímať molekuly z kvapaliny bez obmedzenia',
    ],
    correctIndex: 2,
    explanation: 'Nasýtená para je v dynamickej rovnováhe: rovnaký počet molekúl vyparí a skondenzuje za jednotku času. Jej tlak závisí len od teploty — nie od objemu. Neplatí preň Boyle-Mariottov zákon.',
  },
  {
    question: 'Čo je trojný bod látky?',
    options: [
      'Teplota, pri ktorej sa látka roztopí',
      'Tlak, pri ktorom var nastáva najrýchlejšie',
      'Jediná kombinácia tlaku a teploty, pri ktorej koexistujú všetky tri skupenstvá',
      'Bod na fázovom diagrame, kde kvapalné a plynné skupenstvo sa stávajú nerozoznateľnými',
    ],
    correctIndex: 2,
    explanation: 'Trojný bod je jediný stav (T, p), pri ktorom môžu tuhé, kvapalné aj plynné skupenstvo existovať súčasne v termodynamickej rovnováhe. Pre vodu: T = 273,16 K (0,01 °C), p = 611,73 Pa.',
  },
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

function selectAnswer(i: number) {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = i
  if (i === currentQuestion.value.correctIndex) quizScore.value++
}

function nextQuestion() {
  if (currentQ.value < quiz.length - 1) {
    currentQ.value++
    selectedAnswer.value = null
  }
  else {
    quizFinished.value = true
  }
}

function resetQuiz() {
  currentQ.value = 0
  selectedAnswer.value = null
  quizScore.value = 0
  quizFinished.value = false
}

const scoreEmoji = computed(() => {
  const r = quizScore.value / quiz.length
  if (r === 1) return '🏆'
  if (r >= 0.7) return '🎉'
  if (r >= 0.4) return '💪'
  return '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length
  if (r === 1) return 'Perfektné! Zvládol si všetky otázky!'
  if (r >= 0.7) return 'Výborne! Látku ovládaš dobre.'
  if (r >= 0.4) return 'Nie je to zlé, ale oplatí sa zopakovať.'
  return 'Prejdi si tému ešte raz a skús to znova.'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
