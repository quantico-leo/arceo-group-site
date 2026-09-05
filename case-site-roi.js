(() => {
  const patches = {
    sv: {
      "hero.lead": "Avertum strukturerar och analyserar komplexa finansiella ärenden — med mindre manuell specialisttid och snabbare väg till beslut.",
      "hero.thesis": "Mindre specialisttid. Snabbare beslut. Återanvändbart underlag.",
      "trust.1": "Minska dyr specialisttid",
      "trust.2": "Snabbare till beslut",
      "trust.3": "Varje faktum har en källa",
      "trust.4": "Ärende → beslut → återanvändning",
      "commercial.k": "DIREKT EKONOMISKT VÄRDE",
      "commercial.f": "Sparad specialisttid + snabbare handläggning + möjlig återvinning − Avertums avgift",
      "commercial.p": "Avertum används när värdet av snabbare analys, mindre specialisttid och möjlig återvinning överstiger kostnaden. Utfall garanteras inte.",
      "workflow.kicker": "MINDRE SPECIALISTTID → SNABBARE BESLUT → ÅTERANVÄNDNING",
      "workflow.h2": "Ett spårbart arbetsflöde från inlämning till beslut och åtgärd.",
      "workflow.lead": "Plattformen automatiserar ärendeförberedelsen och bygger ett spårbart beslutsunderlag. Extern specialist kopplas in endast när det faktiskt krävs.",
      "f1.p": "Samla relevanta dokument och transaktioner.",
      "f2.p": "Identifiera grund, motparter, tidsfrister och luckor.",
      "f3.p": "Bygg tidslinje, evidensindex och verifierad ärendeakt.",
      "f4.h": "FÖRBERED ÅTGÄRD",
      "f4.p": "Ta fram krav, alternativ och nästa steg.",
      "f5.p": "Följ beslut och åtgärder. Specialist endast vid behov.",
      "f6.p": "Återanvänd underlaget för uppföljning och nya krav.",
      "cases.signal": "3 aktiva kundärenden · samma behov av strukturerad evidens, beslut och åtgärd",
      "c1.c": "Ägar- och transaktionsbild, evidensstruktur, realiseringsalternativ och beslutsunderlag",
      "c2.c": "Ärendeanalys, kravförberedelse, evidenspaket och åtgärdsspår",
      "c3.c": "Kronologi, bankkorrespondens, evidens, ansvarspunkter och nästa steg",
      "p3.p": "Evidens · kronologi · motparts-/tillgångskarta · beslut och kravförberedelse",
      "p4.h": "ÅTGÄRD",
      "p4.p": "Krav · bank / försäkringsgivare · återvinning · behörig specialist vid behov",
      "contact.p": "Beskriv kort vilken typ av situation det gäller. Om Avertum ser en rimlig väg framåt visar vi vad som kan automatiseras, vilket underlag som behövs och vilka externa steg som eventuellt krävs.",
      "footer.legal": "<strong>Avertum Group AB</strong><br>Ärendeanalys & finansiell evidens<br>Sverige / EU<br><br>Avertum strukturerar och analyserar verifierbar information, automatiserar ärendeförberedelse och tar fram besluts- och åtgärdsunderlag. När en reglerad juridisk, insolvens- eller finansiell åtgärd kräver behörig extern aktör kopplas sådan in vid behov. Avertum ger inte juridisk rådgivning, fattar inte reglerade beslut och garanterar inte externa utfall.",
      "problem.lead": "När pengar, tillgångar eller krav fastnar blir underlaget snabbt utspritt mellan dokument, banker, motparter och rådgivare.",
      "platform.kicker":"SÅ ARBETAR PLATTFORMEN",
      "platform.h2":"Från utspridda dokument till ett beslutsklart ärende.",
      "platform.lead":"Avertum samlar underlaget, strukturerar bevisningen och visar vad som saknas, vad som kan automatiseras och vilket nästa steg som är rimligt.",
      "platform.valueLabel":"EKONOMISKT VÄRDE",
      "platform.value":"Mindre specialisttid + snabbare handläggning",
      "platform.demo":"ILLUSTRATIV VY",
      "platform.status":"Ärende aktivt",
      "platform.case":"ÄRENDE",
      "platform.step1":"Underlag","platform.step2":"Analys","platform.step3":"Evidens","platform.step4":"Beslut","platform.step5":"Åtgärd",
      "platform.progress":"PROCESS",
      "platform.progressNote":"Visar arbetsflödet — inte ett löfte om utfall eller besparing.",
      "platform.panel1":"UNDERLAG","platform.panel1note":"Dokument och transaktioner samlas på ett ställe",
      "platform.panel2":"EVIDENS","platform.ev1":"Källa kopplad","platform.ev2":"Tidslinje byggd","platform.ev3":"Luckor synliga",
      "platform.panel3":"NÄSTA STEG","platform.action1":"Kravförberedelse","platform.action2":"Motpart / bank","platform.action3":"Extern specialist vid behov",
      "platform.roi1":"MANUELL SPECIALISTTID","platform.roi1v":"MINSKAS","platform.roi2":"VÄG TILL BESLUT","platform.roi2v":"KORTAS","platform.roi3":"VERIFIERAT UNDERLAG","platform.roi3v":"ÅTERANVÄNDS"
    },
    en: {
      "hero.lead": "Avertum structures and analyses complex financial cases — with less manual specialist work and a faster path to decision.",
      "hero.thesis": "Less specialist time. Faster decisions. Reusable verified work.",
      "trust.1": "Reduce specialist time",
      "trust.2": "Faster decisions",
      "trust.3": "Every fact has a source",
      "trust.4": "Case → decision → reuse",
      "commercial.k": "DIRECT ECONOMIC VALUE",
      "commercial.f": "Specialist time saved + faster handling + potential recovery − Avertum fee",
      "commercial.p": "Avertum is used when the value of faster analysis, less specialist time and potential recovery exceeds the cost. Outcomes are not guaranteed.",
      "workflow.kicker": "LESS SPECIALIST TIME → FASTER DECISIONS → REUSE",
      "workflow.h2": "One traceable workflow from intake to decision and action.",
      "workflow.lead": "The platform automates case preparation and builds a traceable decision-ready record. An external specialist is brought in only when genuinely required.",
      "f1.p": "Bring relevant documents and transactions into one case.",
      "f2.p": "Identify basis, counterparties, deadlines and gaps.",
      "f3.p": "Build the timeline, evidence index and verified case record.",
      "f4.h": "PREPARE ACTION",
      "f4.p": "Prepare claims, options and next steps.",
      "f5.p": "Track decisions and actions. Specialist only when required.",
      "f6.p": "Reuse the verified work for follow-up and further claims.",
      "cases.signal": "3 active client cases · the same need for structured evidence, decisions and action",
      "c1.c": "Ownership and transaction picture, evidence structure, realisation options and decision-ready output",
      "c2.c": "Case intelligence, claim preparation, evidence pack and action routes",
      "c3.c": "Chronology, bank correspondence, evidence, accountability points and next steps",
      "p3.p": "Evidence · chronology · counterparty/asset map · decision and claim preparation",
      "p4.h": "ACTION",
      "p4.p": "Claim · bank / insurer · recovery · authorised specialist when required",
      "contact.p": "Briefly describe the type of situation. If Avertum sees a credible route forward, we show what can be automated, what evidence is needed and which external steps, if any, are required.",
      "footer.legal": "<strong>Avertum Group AB</strong><br>Case Intelligence & Financial Evidence<br>Sweden / EU<br><br>Avertum structures and analyses verifiable information, automates case preparation and produces decision-ready and action-ready outputs. Where a regulated legal, insolvency or financial action requires an authorised external party, one is brought in when needed. Avertum does not provide legal advice, make regulated decisions or guarantee external outcomes.",
      "problem.lead": "When money, assets or claims get stuck, the evidence quickly becomes scattered across documents, banks, counterparties and advisers.",
      "platform.kicker":"HOW THE PLATFORM WORKS",
      "platform.h2":"From scattered documents to a decision-ready case.",
      "platform.lead":"Avertum brings the evidence together, structures it and shows what is missing, what can be automated and what the next sensible action is.",
      "platform.valueLabel":"ECONOMIC VALUE",
      "platform.value":"Less specialist time + faster handling",
      "platform.demo":"ILLUSTRATIVE VIEW",
      "platform.status":"Case active",
      "platform.case":"CASE",
      "platform.step1":"Intake","platform.step2":"Analysis","platform.step3":"Evidence","platform.step4":"Decision","platform.step5":"Action",
      "platform.progress":"PROCESS",
      "platform.progressNote":"Illustrates the workflow — not a promise of outcome or savings.",
      "platform.panel1":"INTAKE","platform.panel1note":"Documents and transactions brought into one case",
      "platform.panel2":"EVIDENCE","platform.ev1":"Source linked","platform.ev2":"Timeline built","platform.ev3":"Gaps visible",
      "platform.panel3":"NEXT STEP","platform.action1":"Claim preparation","platform.action2":"Counterparty / bank","platform.action3":"External specialist if required",
      "platform.roi1":"MANUAL SPECIALIST TIME","platform.roi1v":"REDUCED","platform.roi2":"PATH TO DECISION","platform.roi2v":"SHORTENED","platform.roi3":"VERIFIED RECORD","platform.roi3v":"REUSED"
    }
  };

  Object.entries(patches).forEach(([lang, values]) => Object.assign(i18n[lang], values));

  if (!document.querySelector('link[href^="case-site-visual.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'case-site-visual.css?v=20260905-2145';
    document.head.appendChild(link);
  }

  const trust = document.querySelector('.trust');
  if (trust && !document.getElementById('platform')) {
    trust.insertAdjacentHTML('afterend', `
<section class="section platform-section" id="platform"><div class="container"><div class="platform-intro"><div><div class="kicker" data-i18n="platform.kicker">SÅ ARBETAR PLATTFORMEN</div><div class="h2" data-i18n="platform.h2">Från utspridda dokument till ett beslutsklart ärende.</div><p class="p compact-copy" data-i18n="platform.lead">Avertum samlar underlaget, strukturerar bevisningen och visar vad som saknas, vad som kan automatiseras och vilket nästa steg som är rimligt.</p></div><div class="platform-value"><span data-i18n="platform.valueLabel">EKONOMISKT VÄRDE</span><strong data-i18n="platform.value">Mindre specialisttid + snabbare handläggning</strong></div></div><div class="platform-shell" role="img" aria-label="Illustrativ vy av Avertums arbetsflöde"><div class="platform-topbar"><div class="platform-brand">AVERTUM <span data-i18n="platform.demo">ILLUSTRATIV VY</span></div><div class="platform-status"><span class="status-dot"></span><span data-i18n="platform.status">Ärende aktivt</span></div></div><div class="platform-grid"><aside class="platform-sidebar"><div class="side-title" data-i18n="platform.case">ÄRENDE</div><div class="side-item active"><span>01</span><b data-i18n="platform.step1">Underlag</b></div><div class="side-item"><span>02</span><b data-i18n="platform.step2">Analys</b></div><div class="side-item"><span>03</span><b data-i18n="platform.step3">Evidens</b></div><div class="side-item"><span>04</span><b data-i18n="platform.step4">Beslut</b></div><div class="side-item"><span>05</span><b data-i18n="platform.step5">Åtgärd</b></div></aside><div class="platform-main"><div class="platform-progress"><div class="progress-label"><span data-i18n="platform.progress">PROCESS</span><strong>01 → 05</strong></div><div class="progress-track"><span></span><span></span><span></span><span></span><span></span></div><small data-i18n="platform.progressNote">Visar arbetsflödet — inte ett löfte om utfall eller besparing.</small></div><div class="platform-cards"><div class="mini-panel"><div class="mini-head"><span data-i18n="platform.panel1">UNDERLAG</span><b>•</b></div><div class="doc-line wide"></div><div class="doc-line"></div><div class="doc-line short"></div><small data-i18n="platform.panel1note">Dokument och transaktioner samlas på ett ställe</small></div><div class="mini-panel teal-panel"><div class="mini-head"><span data-i18n="platform.panel2">EVIDENS</span><b>✓</b></div><div class="evidence-row"><span></span><p data-i18n="platform.ev1">Källa kopplad</p></div><div class="evidence-row"><span></span><p data-i18n="platform.ev2">Tidslinje byggd</p></div><div class="evidence-row muted-row"><span></span><p data-i18n="platform.ev3">Luckor synliga</p></div></div><div class="mini-panel"><div class="mini-head"><span data-i18n="platform.panel3">NÄSTA STEG</span><b>→</b></div><div class="action-chip" data-i18n="platform.action1">Kravförberedelse</div><div class="action-chip" data-i18n="platform.action2">Motpart / bank</div><div class="action-chip" data-i18n="platform.action3">Extern specialist vid behov</div></div></div><div class="value-strip"><div><span data-i18n="platform.roi1">MANUELL SPECIALISTTID</span><strong data-i18n="platform.roi1v">MINSKAS</strong></div><div><span data-i18n="platform.roi2">VÄG TILL BESLUT</span><strong data-i18n="platform.roi2v">KORTAS</strong></div><div><span data-i18n="platform.roi3">VERIFIERAT UNDERLAG</span><strong data-i18n="platform.roi3v">ÅTERANVÄNDS</strong></div></div></div></div></div></section>`);
  }

  ['u1.4','u2.2','u2.3','u3.3','u4.4'].forEach(key => {
    document.querySelector(`[data-i18n="${key}"]`)?.remove();
  });

  const initial = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'sv';
  applyLanguage(initial);
})();
