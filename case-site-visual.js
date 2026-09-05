(() => {
  const extra = {
    sv: {
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
      "platform.roi1":"MANUELL SPECIALISTTID","platform.roi1v":"MINSKAS","platform.roi2":"VÄG TILL BESLUT","platform.roi2v":"KORTAS","platform.roi3":"VERIFIERAT UNDERLAG","platform.roi3v":"ÅTERANVÄNDS",
      "hero.lead":"Avertum strukturerar och analyserar komplexa finansiella ärenden — med mindre manuell specialisttid och snabbare väg till beslut.",
      "hero.thesis":"Mindre specialisttid. Snabbare beslut. Återanvändbart underlag.",
      "problem.lead":"När pengar, tillgångar eller krav fastnar blir underlaget snabbt utspritt mellan dokument, banker, motparter och rådgivare.",
      "commercial.p":"Avertum används när värdet av snabbare analys, mindre specialisttid och möjlig återvinning överstiger kostnaden. Utfall garanteras inte.",
      "workflow.lead":"Plattformen automatiserar ärendeförberedelsen och bygger ett spårbart beslutsunderlag. Extern specialist kopplas in endast när det faktiskt krävs.",
      "f1.p":"Samla relevanta dokument och transaktioner.","f2.p":"Identifiera grund, motparter, tidsfrister och luckor.","f3.p":"Bygg tidslinje, evidensindex och verifierad ärendeakt.","f4.p":"Ta fram krav, alternativ och nästa steg.","f5.p":"Följ beslut och åtgärder. Specialist endast vid behov.","f6.p":"Återanvänd underlaget för uppföljning och nya krav."
    },
    en: {
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
      "platform.roi1":"MANUAL SPECIALIST TIME","platform.roi1v":"REDUCED","platform.roi2":"PATH TO DECISION","platform.roi2v":"SHORTENED","platform.roi3":"VERIFIED RECORD","platform.roi3v":"REUSED",
      "hero.lead":"Avertum structures and analyses complex financial cases — with less manual specialist work and a faster path to decision.",
      "hero.thesis":"Less specialist time. Faster decisions. Reusable verified work.",
      "problem.lead":"When money, assets or claims get stuck, the evidence quickly becomes scattered across documents, banks, counterparties and advisers.",
      "commercial.p":"Avertum is used when the value of faster analysis, less specialist time and potential recovery exceeds the cost. Outcomes are not guaranteed.",
      "workflow.lead":"The platform automates case preparation and builds a traceable decision-ready record. An external specialist is brought in only when genuinely required.",
      "f1.p":"Bring relevant documents and transactions into one case.","f2.p":"Identify basis, counterparties, deadlines and gaps.","f3.p":"Build the timeline, evidence index and verified case record.","f4.p":"Prepare claims, options and next steps.","f5.p":"Track decisions and actions. Specialist only when required.","f6.p":"Reuse the verified work for follow-up and further claims."
    }
  };
  Object.entries(extra).forEach(([lang, values]) => Object.assign(i18n[lang], values));
  const initial = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'sv';
  applyLanguage(initial);
})();
