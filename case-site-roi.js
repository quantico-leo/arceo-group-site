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
      "cases.signal": "15 aktiva ärenden · samma behov av strukturerad evidens, beslut och åtgärd",
      "c1.c": "Ägar- och transaktionsbild, evidensstruktur, realiseringsalternativ och beslutsunderlag",
      "c2.c": "Ärendeanalys, kravförberedelse, evidenspaket och åtgärdsspår",
      "c3.c": "Kronologi, bankkorrespondens, evidens, ansvarspunkter och nästa steg",
      "p3.p": "Evidens · kronologi · motparts-/tillgångskarta · beslut och kravförberedelse",
      "p4.h": "ÅTGÄRD",
      "p4.p": "Krav · bank / försäkringsgivare · återvinning · behörig specialist vid behov",
      "contact.p": "Beskriv kort situationen. Om Avertum ser en rimlig väg framåt visar vi vad som kan automatiseras, vilket underlag som behövs och vilka externa steg som eventuellt krävs.",
      "contact.addressLabel": "BESÖKSADRESS",
      "contact.phoneLabel": "TELEFON",
      "contact.whatsappLabel": "WHATSAPP",
      "problem.lead": "När pengar, tillgångar eller krav fastnar blir underlaget snabbt utspritt mellan dokument, banker, motparter och rådgivare.",
      "platform.kicker": "SÅ ARBETAR PLATTFORMEN",
      "platform.h2": "Mata in underlaget. Se ärendet ta form.",
      "platform.lead": "En visuell vy över hur Avertum går från dokument och transaktioner till strukturerad evidens, beslut och nästa åtgärd.",
      "platform.demo": "ILLUSTRATIV PLATTFORMSVY",
      "platform.input": "MATA IN",
      "platform.inputTitle": "Dokument & data",
      "platform.inputMeta": "31 filer i ärendet",
      "platform.in1": "Avtal",
      "platform.in2": "Kontoutdrag",
      "platform.in3": "E-post & bilagor",
      "platform.center": "AVERTUM",
      "platform.process": "BEARBETAT",
      "platform.stage1": "Samla",
      "platform.stage2": "Analysera",
      "platform.stage3": "Verifiera",
      "platform.stage4": "Bygg",
      "platform.stage5": "Besluta",
      "platform.stage6": "Åtgärda",
      "platform.output": "RESULTAT",
      "platform.outputTitle": "Beslutsklart ärende",
      "platform.out1": "24 dokument strukturerade",
      "platform.out2": "18 källor verifierade",
      "platform.out3": "4 evidensluckor synliga",
      "platform.roi1": "MANUELL SPECIALISTTID",
      "platform.roi1v": "MINSKAS",
      "platform.roi2": "VÄG TILL BESLUT",
      "platform.roi2v": "KORTAS",
      "platform.roi3": "VERIFIERAT UNDERLAG",
      "platform.roi3v": "ÅTERANVÄNDS",
      "platform.note": "Illustrativ exempelstatus — siffrorna visar hur plattformen kan visualisera process och underlag, inte kundutfall eller garanterad besparing."
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
      "cases.signal": "15 active cases · the same need for structured evidence, decisions and action",
      "c1.c": "Ownership and transaction picture, evidence structure, realisation options and decision-ready output",
      "c2.c": "Case intelligence, claim preparation, evidence pack and action routes",
      "c3.c": "Chronology, bank correspondence, evidence, accountability points and next steps",
      "p3.p": "Evidence · chronology · counterparty/asset map · decision and claim preparation",
      "p4.h": "ACTION",
      "p4.p": "Claim · bank / insurer · recovery · authorised specialist when required",
      "contact.p": "Briefly describe the situation. If Avertum sees a credible route forward, we show what can be automated, what evidence is needed and which external steps, if any, are required.",
      "contact.addressLabel": "VISITING ADDRESS",
      "contact.phoneLabel": "PHONE",
      "contact.whatsappLabel": "WHATSAPP",
      "problem.lead": "When money, assets or claims get stuck, the evidence quickly becomes scattered across documents, banks, counterparties and advisers.",
      "platform.kicker": "HOW THE PLATFORM WORKS",
      "platform.h2": "Feed in the evidence. Watch the case take shape.",
      "platform.lead": "A visual view of how Avertum moves from documents and transactions to structured evidence, decisions and the next action.",
      "platform.demo": "ILLUSTRATIVE PLATFORM VIEW",
      "platform.input": "INPUT",
      "platform.inputTitle": "Documents & data",
      "platform.inputMeta": "31 files in the case",
      "platform.in1": "Contracts",
      "platform.in2": "Statements",
      "platform.in3": "Email & attachments",
      "platform.center": "AVERTUM",
      "platform.process": "PROCESSED",
      "platform.stage1": "Collect",
      "platform.stage2": "Analyse",
      "platform.stage3": "Verify",
      "platform.stage4": "Build",
      "platform.stage5": "Decide",
      "platform.stage6": "Act",
      "platform.output": "OUTPUT",
      "platform.outputTitle": "Decision-ready case",
      "platform.out1": "24 documents structured",
      "platform.out2": "18 sources verified",
      "platform.out3": "4 evidence gaps visible",
      "platform.roi1": "MANUAL SPECIALIST TIME",
      "platform.roi1v": "REDUCED",
      "platform.roi2": "PATH TO DECISION",
      "platform.roi2v": "SHORTENED",
      "platform.roi3": "VERIFIED RECORD",
      "platform.roi3v": "REUSED",
      "platform.note": "Illustrative example status — the figures show how the platform can visualise process and evidence, not customer outcomes or guaranteed savings."
    }
  };

  Object.entries(patches).forEach(([lang, values]) => Object.assign(i18n[lang], values));

  if (!document.querySelector('link[href^="case-site-visual.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'case-site-visual.css?v=20260905-2238';
    document.head.appendChild(link);
  }

  const trust = document.querySelector('.trust');
  if (trust) {
    document.getElementById('platform')?.remove();
    trust.insertAdjacentHTML('afterend', `
<section class="section platform-section" id="platform">
  <div class="container">
    <div class="platform-intro">
      <div>
        <div class="kicker" data-i18n="platform.kicker">SÅ ARBETAR PLATTFORMEN</div>
        <div class="h2" data-i18n="platform.h2">Mata in underlaget. Se ärendet ta form.</div>
        <p class="p compact-copy" data-i18n="platform.lead">En visuell vy över hur Avertum går från dokument och transaktioner till strukturerad evidens, beslut och nästa åtgärd.</p>
      </div>
      <div class="demo-badge" data-i18n="platform.demo">ILLUSTRATIV PLATTFORMSVY</div>
    </div>

    <div class="platform-machine" role="img" aria-label="Illustrativ cirkulär vy av Avertums ärendeflöde">
      <div class="input-panel machine-panel">
        <div class="machine-label" data-i18n="platform.input">MATA IN</div>
        <h3 data-i18n="platform.inputTitle">Dokument & data</h3>
        <span class="machine-meta" data-i18n="platform.inputMeta">31 filer i ärendet</span>
        <div class="file-chip"><span class="file-icon">▤</span><b data-i18n="platform.in1">Avtal</b></div>
        <div class="file-chip"><span class="file-icon">≡</span><b data-i18n="platform.in2">Kontoutdrag</b></div>
        <div class="file-chip"><span class="file-icon">✉</span><b data-i18n="platform.in3">E-post & bilagor</b></div>
        <div class="flow-arrow">→</div>
      </div>

      <div class="orbit-wrap">
        <div class="orbit-line"></div>
        <div class="orbit-node n1"><span>01</span><b data-i18n="platform.stage1">Samla</b></div>
        <div class="orbit-node n2"><span>02</span><b data-i18n="platform.stage2">Analysera</b></div>
        <div class="orbit-node n3"><span>03</span><b data-i18n="platform.stage3">Verifiera</b></div>
        <div class="orbit-node n4"><span>04</span><b data-i18n="platform.stage4">Bygg</b></div>
        <div class="orbit-node n5"><span>05</span><b data-i18n="platform.stage5">Besluta</b></div>
        <div class="orbit-node n6"><span>06</span><b data-i18n="platform.stage6">Åtgärda</b></div>
        <div class="progress-ring" aria-hidden="true">
          <div class="progress-ring-inner">
            <span data-i18n="platform.center">AVERTUM</span>
            <strong class="process-percent">77%</strong>
            <small data-i18n="platform.process">BEARBETAT</small>
          </div>
        </div>
      </div>

      <div class="output-panel machine-panel">
        <div class="flow-arrow left">→</div>
        <div class="machine-label" data-i18n="platform.output">RESULTAT</div>
        <h3 data-i18n="platform.outputTitle">Beslutsklart ärende</h3>
        <div class="output-row"><span>✓</span><b data-i18n="platform.out1">24 dokument strukturerade</b></div>
        <div class="output-row"><span>✓</span><b data-i18n="platform.out2">18 källor verifierade</b></div>
        <div class="output-row gap"><span>!</span><b data-i18n="platform.out3">4 evidensluckor synliga</b></div>
      </div>
    </div>

    <div class="value-strip">
      <div><span data-i18n="platform.roi1">MANUELL SPECIALISTTID</span><strong data-i18n="platform.roi1v">MINSKAS</strong></div>
      <div><span data-i18n="platform.roi2">VÄG TILL BESLUT</span><strong data-i18n="platform.roi2v">KORTAS</strong></div>
      <div><span data-i18n="platform.roi3">VERIFIERAT UNDERLAG</span><strong data-i18n="platform.roi3v">ÅTERANVÄNDS</strong></div>
    </div>
    <p class="platform-note" data-i18n="platform.note">Illustrativ exempelstatus — siffrorna visar hur plattformen kan visualisera process och underlag, inte kundutfall eller garanterad besparing.</p>
  </div>
</section>`);
  }

  // The circular platform view now carries the workflow story; remove the duplicate text-heavy workflow section.
  document.getElementById('workflow')?.classList.add('workflow-superseded');
  document.querySelectorAll('a[href="#workflow"]').forEach(a => a.setAttribute('href', '#platform'));

  ['u1.4','u2.2','u2.3','u3.3','u4.4'].forEach(key => {
    document.querySelector(`[data-i18n="${key}"]`)?.remove();
  });

  const contactBox = document.querySelector('#contact .commercial-test');
  if (contactBox) {
    const email = contactBox.querySelector('strong');
    if (email && email.textContent.includes('@')) {
      email.innerHTML = '<a href="mailto:info@avertum.se" style="color:inherit;text-decoration:none">info@avertum.se</a>';
    }
    if (!contactBox.querySelector('.avertum-contact-details')) {
      contactBox.insertAdjacentHTML('beforeend', `
        <div class="avertum-contact-details" style="margin-top:20px;display:grid;gap:14px">
          <a href="https://www.google.com/maps/search/?api=1&query=Gullbergs+Strandgata+36+D%2C+411+04+G%C3%B6teborg" target="_blank" rel="noopener" style="display:flex;gap:10px;align-items:flex-start;color:var(--text);text-decoration:none">
            <span aria-hidden="true" style="font-size:18px;line-height:1">📍</span>
            <span><small data-i18n="contact.addressLabel" style="display:block;color:var(--gold);font-weight:800;letter-spacing:.1em;font-size:9px;margin-bottom:3px">BESÖKSADRESS</small>Gullbergs Strandgata 36 D<br>411 04 Göteborg</span>
          </a>
          <a href="tel:+46700193462" style="display:flex;gap:10px;align-items:center;color:var(--text);text-decoration:none">
            <span aria-hidden="true" style="width:28px;height:28px;border-radius:50%;display:inline-grid;place-items:center;background:rgba(201,162,39,.12);font-size:14px">☎</span>
            <span><small data-i18n="contact.phoneLabel" style="display:block;color:var(--gold);font-weight:800;letter-spacing:.1em;font-size:9px;margin-bottom:3px">TELEFON</small>+46 700 193 462</span>
          </a>
          <a href="https://wa.me/46700193462" target="_blank" rel="noopener" style="display:flex;gap:10px;align-items:center;color:var(--text);text-decoration:none">
            <span aria-hidden="true" style="width:28px;height:28px;border-radius:50%;display:inline-grid;place-items:center;background:#25D366;color:#fff;font-weight:900;font-size:13px">☎</span>
            <span><small data-i18n="contact.whatsappLabel" style="display:block;color:#25D366;font-weight:800;letter-spacing:.1em;font-size:9px;margin-bottom:3px">WHATSAPP</small>+46 700 193 462</span>
          </a>
        </div>`);
    }
  }

  const initial = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'sv';
  applyLanguage(initial);
})();
