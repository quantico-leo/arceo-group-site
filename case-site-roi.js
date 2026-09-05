(() => {
  const patches = {
    sv: {
      "hero.lead": "Avertum automatiserar analys, evidensstruktur och ärendeförberedelse i komplexa finansiella ärenden — för att minska behovet av dyr manuell specialisttid och korta vägen från problem till beslut och åtgärd.",
      "hero.thesis": "Mindre specialisttid. Snabbare beslutsunderlag. Samma verifierade ärende kan återanvändas.",
      "trust.1": "Minska dyr specialisttid",
      "trust.2": "Snabbare till beslut",
      "trust.3": "Varje faktum har en källa",
      "trust.4": "Ärende → beslut → återanvändning",
      "commercial.k": "DIREKT EKONOMISKT VÄRDE",
      "commercial.f": "Sparad specialisttid + snabbare handläggning + möjlig återvinning − Avertums avgift",
      "commercial.p": "Avertum används när värdet av att driva ärendet framåt överstiger kostnaden. Varje ärende granskas utifrån grund, tidsfrist, motpart, möjlighet till återvinning och evidens. Avertum garanterar inte utfall.",
      "workflow.kicker": "MINDRE SPECIALISTTID → SNABBARE BESLUT → ÅTERANVÄNDNING",
      "workflow.h2": "Ett spårbart arbetsflöde från inlämning till beslut och åtgärd.",
      "workflow.lead": "Avertum strukturerar och analyserar ärendet, bygger tidslinje och evidensindex, identifierar luckor och tar fram besluts- och åtgärdsunderlag. Plattformen automatiserar arbete som annars kräver omfattande specialisttid. Extern behörig specialist används endast där lag, jurisdiktion eller ärendets art kräver det.",
      "f4.h": "FÖRBERED ÅTGÄRD",
      "f4.p": "Ta fram krav, svar, alternativ och nästa steg utifrån det verifierade underlaget.",
      "f5.p": "Följ beslut, tidsfrister, svar och åtgärder i ett gemensamt ärende. Koppla in extern specialist endast när det faktiskt krävs.",
      "cases.signal": "3 aktiva kundärenden · samma behov av strukturerad evidens, beslut och åtgärd",
      "c1.c": "Ägar- och transaktionsbild, evidensstruktur, realiseringsalternativ och beslutsunderlag",
      "c2.c": "Ärendeanalys, kravförberedelse, evidenspaket och åtgärdsspår",
      "c3.c": "Kronologi, bankkorrespondens, evidens, ansvarspunkter och nästa steg",
      "p3.p": "Evidens · kronologi · motparts-/tillgångskarta · beslut och kravförberedelse",
      "p4.h": "ÅTGÄRD",
      "p4.p": "Krav · bank / försäkringsgivare · återvinning · behörig specialist vid behov",
      "contact.p": "Beskriv kort vilken typ av situation det gäller. Om Avertum ser en rimlig väg framåt visar vi vad som kan automatiseras, vilket underlag som behövs och vilka externa steg som eventuellt krävs.",
      "footer.legal": "<strong>Avertum Group AB</strong><br>Ärendeanalys & finansiell evidens<br>Sverige / EU<br><br>Avertum strukturerar och analyserar verifierbar information, automatiserar ärendeförberedelse och tar fram besluts- och åtgärdsunderlag. När en reglerad juridisk, insolvens- eller finansiell åtgärd kräver behörig extern aktör kopplas sådan in vid behov. Avertum ger inte juridisk rådgivning, fattar inte reglerade beslut och garanterar inte externa utfall."
    },
    en: {
      "hero.lead": "Avertum automates analysis, evidence structuring and case preparation in complex financial cases — reducing expensive manual specialist work and shortening the path from problem to decision and action.",
      "hero.thesis": "Less specialist time. Faster decision-ready work. Reuse the same verified case record.",
      "trust.1": "Reduce specialist time",
      "trust.2": "Faster decisions",
      "trust.3": "Every fact has a source",
      "trust.4": "Case → decision → reuse",
      "commercial.k": "DIRECT ECONOMIC VALUE",
      "commercial.f": "Specialist time saved + faster handling + potential recovery − Avertum fee",
      "commercial.p": "Avertum is used when the value of moving the case forward exceeds the cost. Every case is screened for basis, deadline, counterparty, recoverability and evidence. Avertum does not promise an outcome.",
      "workflow.kicker": "LESS SPECIALIST TIME → FASTER DECISIONS → REUSE",
      "workflow.h2": "One traceable workflow from intake to decision and action.",
      "workflow.lead": "Avertum structures and analyses the case, builds the timeline and evidence index, identifies gaps and produces decision-ready and action-ready outputs. The platform automates work that would otherwise require extensive specialist time. An authorised external specialist is used only where law, jurisdiction or the nature of the case requires it.",
      "f4.h": "PREPARE ACTION",
      "f4.p": "Prepare claims, responses, options and next steps from the verified record.",
      "f5.p": "Track decisions, deadlines, responses and actions in one case. Bring in an external specialist only when it is actually required.",
      "cases.signal": "3 active client cases · the same need for structured evidence, decisions and action",
      "c1.c": "Ownership and transaction picture, evidence structure, realisation options and decision-ready output",
      "c2.c": "Case intelligence, claim preparation, evidence pack and action routes",
      "c3.c": "Chronology, bank correspondence, evidence, accountability points and next steps",
      "p3.p": "Evidence · chronology · counterparty/asset map · decision and claim preparation",
      "p4.h": "ACTION",
      "p4.p": "Claim · bank / insurer · recovery · authorised specialist when required",
      "contact.p": "Briefly describe the type of situation. If Avertum sees a credible route forward, we show what can be automated, what evidence is needed and which external steps, if any, are required.",
      "footer.legal": "<strong>Avertum Group AB</strong><br>Case Intelligence & Financial Evidence<br>Sweden / EU<br><br>Avertum structures and analyses verifiable information, automates case preparation and produces decision-ready and action-ready outputs. Where a regulated legal, insolvency or financial action requires an authorised external party, one is brought in when needed. Avertum does not provide legal advice, make regulated decisions or guarantee external outcomes."
    }
  };

  Object.entries(patches).forEach(([lang, values]) => Object.assign(i18n[lang], values));
  const initial = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'sv';
  applyLanguage(initial);
})();
