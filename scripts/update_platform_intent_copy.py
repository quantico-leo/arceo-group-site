from pathlib import Path

path = Path('index.html')
html = path.read_text(encoding='utf-8')
original = html

replacements = {
    '<h4 data-i18n="plat.1.t">AI Readiness Engine</h4>': '<h4 data-i18n-html="plat.1.t">AI Readiness Engine<br><span class="card-subtitle">AI-baserad riskprioritering och beredskap</span></h4>',
    '<h4 data-i18n="plat.2.t">Evidence Layer</h4>': '<h4 data-i18n-html="plat.2.t">Evidence Layer<br><span class="card-subtitle">Spårbar dokumentation och verifierbar beviskedja</span></h4>',
    '<h4 data-i18n="plat.3.t">Human Coordination</h4>': '<h4 data-i18n-html="plat.3.t">Human Coordination<br><span class="card-subtitle">Mänskligt ägarskap och genomförande</span></h4>',
    '"plat.1.t": "AI Readiness Engine"': '"plat.1.t": "AI Readiness Engine<br><span class=\\"card-subtitle\\">AI-baserad riskprioritering och beredskap</span>"',
    '"plat.2.t": "Evidence Layer"': '"plat.2.t": "Evidence Layer<br><span class=\\"card-subtitle\\">Spårbar dokumentation och verifierbar beviskedja</span>"',
    '"plat.3.t": "Human Coordination"': '"plat.3.t": "Human Coordination<br><span class=\\"card-subtitle\\">Mänskligt ägarskap och genomförande</span>"',
    '<div class="h2" data-i18n="founder.h2">Autenticitet framför skrämseltaktik.</div>': '<div class="h2" data-i18n="founder.h2">Beredskap framför skrämseltaktik.</div>',
    'Avertum skapades inte som ännu en skräckdriven cyberprodukt. Konceptet växte fram ur insikten om ett återkommande affärsmässigt gap: många leverantörer installerar bara verktyg eller svarar först när skadan redan är skedd. Samtidigt saknar SMEs kontinuerlig beredskap, organisatoriskt ägarskap och bevisföring som håller för granskning.': 'Avertum skapades inte för att sälja rädsla, utan för att lösa ett återkommande affärsproblem. Många leverantörer installerar verktyg eller agerar först när skadan redan är skedd. Samtidigt saknar många ägarledda företag kontinuerlig risköverblick, tydligt ansvar och verifierbar dokumentation.',
    'Avertum existerar för att stänga det gapet ansvarsfullt, mätbart och med mänsklig expertis där omdöme krävs.': 'Avertum stänger det gapet genom kontinuerlig riskintelligens, mänsklig samordning och spårbar evidens — så att ledningen kan förebygga mer, agera tidigare och stå starkare vid granskning eller incident.',
    'Förhindra det som kan förhindras. Bevisa det som gjorts. Återhämta er med evidens.': 'Förebygg det som går. Bevisa det som har gjorts. Stå starkare när något händer.',
    '"founder.h2": "Autenticitet framför skrämseltaktik."': '"founder.h2": "Beredskap framför skrämseltaktik."',
    '"founder.p1": "Avertum skapades inte som ännu en skräckdriven cyberprodukt. Konceptet växte fram ur insikten om ett återkommande affärsmässigt gap: många leverantörer installerar bara verktyg eller svarar först när skadan redan är skedd. Samtidigt saknar SMEs kontinuerlig beredskap, organisatoriskt ägarskap och bevisföring som håller för granskning."': '"founder.p1": "Avertum skapades inte för att sälja rädsla, utan för att lösa ett återkommande affärsproblem. Många leverantörer installerar verktyg eller agerar först när skadan redan är skedd. Samtidigt saknar många ägarledda företag kontinuerlig risköverblick, tydligt ansvar och verifierbar dokumentation."',
    '"founder.p2": "Avertum existerar för att stänga det gapet ansvarsfullt, mätbart och med mänsklig expertis där omdöme krävs."': '"founder.p2": "Avertum stänger det gapet genom kontinuerlig riskintelligens, mänsklig samordning och spårbar evidens — så att ledningen kan förebygga mer, agera tidigare och stå starkare vid granskning eller incident."',
    '"founder.quote": "Förhindra det som kan förhindras. Bevisa det som gjorts. Återhämta er med evidens."': '"founder.quote": "Förebygg det som går. Bevisa det som har gjorts. Stå starkare när något händer."',
    '"founder.h2": "Authenticity over scare tactics."': '"founder.h2": "Readiness over scare tactics."',
    '"founder.p1": "Avertum was not conceived as another fear-driven cyber product. The concept grew from recognizing a recurring commercial gap: many providers install tools or respond after the damage. Meanwhile, SMEs lack continuous readiness, organizational ownership, and evidence that holds under scrutiny."': '"founder.p1": "Avertum was not created to sell fear, but to solve a recurring business problem. Many providers install tools or act only after the damage is done. At the same time, many owner-led companies lack continuous risk visibility, clear accountability, and verifiable documentation."',
    '"founder.p2": "Avertum exists to close that gap responsibly, measurably, and with human expertise where judgment matters."': '"founder.p2": "Avertum closes that gap through continuous risk intelligence, human coordination, and traceable evidence — so leadership can prevent more, act earlier, and stand stronger during audits or incidents."',
    '"founder.quote": "Prevent what can be prevented. Prove what was done. Recover with evidence."': '"founder.quote": "Prevent what can be prevented. Prove what has been done. Stand stronger when something happens."',
}

for old, new in replacements.items():
    html = html.replace(old, new)

# Keep the English language version fully English.
en_marker = '\n      en: {'
before_en, separator, english_block = html.partition(en_marker)
if separator:
    english_replacements = {
        'AI Readiness Engine<br><span class=\\"card-subtitle\\">AI-baserad riskprioritering och beredskap</span>': 'AI Readiness Engine<br><span class=\\"card-subtitle\\">AI-driven risk prioritization and readiness</span>',
        'Evidence Layer<br><span class=\\"card-subtitle\\">Spårbar dokumentation och verifierbar beviskedja</span>': 'Evidence Layer<br><span class=\\"card-subtitle\\">Traceable documentation and a verifiable evidence chain</span>',
        'Human Coordination<br><span class=\\"card-subtitle\\">Mänskligt ägarskap och genomförande</span>': 'Human Coordination<br><span class=\\"card-subtitle\\">Human ownership and execution</span>',
    }
    for old, new in english_replacements.items():
        english_block = english_block.replace(old, new, 1)
    html = before_en + separator + english_block

css_marker = '/* SECTION BACKGROUNDS */'
css_block = '''.card-subtitle {
  display: block;
  margin-top: 8px;
  font-family: var(--font);
  font-size: 12px;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: var(--gold);
}
'''

if '.card-subtitle {' not in html:
    if css_marker not in html:
        raise SystemExit('CSS insertion marker not found.')
    html = html.replace(css_marker, css_block + css_marker, 1)

if html == original:
    raise SystemExit('No copy changes were applied.')

path.write_text(html, encoding='utf-8')
print('Platform labels and intent copy updated.')
