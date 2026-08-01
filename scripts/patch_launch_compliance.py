from pathlib import Path
import re

path = Path("index.html")
html = path.read_text(encoding="utf-8")
original = html


def replace_once(source: str, old: str, new: str, label: str) -> str:
    if old in source:
        return source.replace(old, new, 1)
    if new in source:
        return source
    raise SystemExit(f"Could not find expected {label} block.")


old_google = (
    '  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18203139409"></script>\n'
    '  <script>\n'
    '    window.dataLayer = window.dataLayer || [];\n'
    '    function gtag(){dataLayer.push(arguments);}\n'
    "    gtag('js', new Date());\n"
    "    gtag('config', 'AW-18203139409');\n"
    '  </script>'
)

consent_default = (
    '  <script>\n'
    '    window.dataLayer = window.dataLayer || [];\n'
    '    function gtag(){dataLayer.push(arguments);}\n'
    "    gtag('consent', 'default', {\n"
    "      ad_storage: 'denied',\n"
    "      analytics_storage: 'denied',\n"
    "      ad_user_data: 'denied',\n"
    "      ad_personalization: 'denied',\n"
    '      wait_for_update: 500\n'
    '    });\n'
    '  </script>'
)

html = replace_once(html, old_google, consent_default, "Google tag")

library_tag = (
    '  <script src="https://cdn.jsdelivr.net/gh/orestbida/'
    'cookieconsent@v3.0.1/dist/cookieconsent.umd.js" defer></script>'
)
config_tag = '  <script src="cookie-consent.js" defer></script>'
if config_tag not in html:
    if library_tag not in html:
        raise SystemExit("CookieConsent library tag was not found.")
    html = html.replace(library_tag, library_tag + "\n" + config_tag, 1)

if 'id="btn-cookie-settings"' not in html:
    privacy_pattern = re.compile(
        r'<button id="btn-privacy"[^>]*data-i18n="privacy\.link"[^>]*>.*?</button>',
        re.S,
    )
    privacy_controls = (
        '<a href="/integritet/" data-i18n="privacy.link" '
        'style="color: var(--muted); margin-top: 16px; display:inline-block;">'
        'Sekretess &amp; Policy</a>\n'
        '        <span aria-hidden="true"> · </span>\n'
        '        <button id="btn-cookie-settings" type="button" '
        'data-i18n="cookies.settings" style="background:none; border:none; '
        'color: var(--muted); margin-top: 16px; cursor:pointer; font-family:inherit; '
        'font-size:inherit; text-transform:inherit; letter-spacing:inherit;">'
        'Cookieinställningar</button>'
    )
    html, count = privacy_pattern.subn(privacy_controls, html, count=1)
    if count != 1:
        raise SystemExit("Privacy footer button was not found.")

form_button = (
    '<button type="submit" class="btn btn-primary" style="width:100%;" '
    'data-i18n="form.btn">Skicka Förfrågan</button>'
)
privacy_note = (
    '<p data-i18n-html="form.privacy" '
    'style="margin-top:16px;color:var(--muted);font-size:11px;line-height:1.6;">'
    'När du skickar formuläret behandlar Avertum Group AB dina uppgifter för att '
    'hantera din förfrågan. Läs vår <a href="/integritet/" '
    'style="color:var(--gold);text-decoration:underline;">integritetspolicy</a>.</p>'
)
if 'data-i18n-html="form.privacy"' not in html:
    if form_button not in html:
        raise SystemExit("Contact form submit button was not found.")
    html = html.replace(form_button, form_button + "\n            " + privacy_note, 1)

sv_anchor = (
    '"form.l_msg": "Beskrivning (Utan känslig data)", '
    '"form.btn": "Skicka Förfrågan",'
)
sv_replacement = (
    sv_anchor
    + '\n        "form.privacy": "När du skickar formuläret behandlar Avertum Group AB '
    + 'dina uppgifter för att hantera din förfrågan. Läs vår '
    + '<a href=\\"/integritet/\\" style=\\"color:var(--gold);text-decoration:underline;\\">'
    + 'integritetspolicy</a>.",\n        "cookies.settings": "Cookieinställningar",'
)
if '"cookies.settings": "Cookieinställningar"' not in html:
    if sv_anchor not in html:
        raise SystemExit("Swedish form translation anchor was not found.")
    html = html.replace(sv_anchor, sv_replacement, 1)

en_anchor = (
    '"form.l_msg": "Description (No sensitive data)", '
    '"form.btn": "Submit Request",'
)
en_replacement = (
    en_anchor
    + '\n        "form.privacy": "When you submit the form, Avertum Group AB processes '
    + 'your information to handle your enquiry. Read our '
    + '<a href=\\"/integritet/#en\\" style=\\"color:var(--gold);text-decoration:underline;\\">'
    + 'privacy policy</a>.",\n        "cookies.settings": "Cookie settings",'
)
if '"cookies.settings": "Cookie settings"' not in html:
    if en_anchor not in html:
        raise SystemExit("English form translation anchor was not found.")
    html = html.replace(en_anchor, en_replacement, 1)

if html == original:
    print("No changes were needed.")
else:
    path.write_text(html, encoding="utf-8")
    print("index.html patched successfully.")
