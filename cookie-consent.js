(() => {
  'use strict';

  const GOOGLE_ADS_ID = 'AW-18203139409';
  let googleAdsLoaded = false;

  function updateGoogleConsent(granted) {
    if (typeof window.gtag !== 'function') return;

    window.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied'
    });

    if (granted) loadGoogleAds();
  }

  function loadGoogleAds() {
    if (googleAdsLoaded || document.querySelector(`script[data-avertum-gtag="${GOOGLE_ADS_ID}"]`)) {
      return;
    }

    googleAdsLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_ADS_ID)}`;
    script.dataset.avertumGtag = GOOGLE_ADS_ID;
    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', GOOGLE_ADS_ID);
    };
    document.head.appendChild(script);
  }

  function advertisingConsentGranted() {
    return Boolean(
      window.CookieConsent &&
      typeof window.CookieConsent.acceptedCategory === 'function' &&
      window.CookieConsent.acceptedCategory('advertising')
    );
  }

  function syncConsent() {
    updateGoogleConsent(advertisingConsentGranted());
  }

  function openCookiePreferences() {
    if (window.CookieConsent && typeof window.CookieConsent.showPreferences === 'function') {
      window.CookieConsent.showPreferences();
    }
  }

  if (!window.CookieConsent || typeof window.CookieConsent.run !== 'function') {
    console.warn('Avertum cookie consent could not be initialized.');
    return;
  }

  window.CookieConsent.run({
    mode: 'opt-in',
    revision: 1,
    autoShow: true,
    disablePageInteraction: false,

    cookie: {
      name: 'avertum_cookie_consent',
      path: '/',
      secure: true,
      sameSite: 'Lax',
      expiresAfterDays: (acceptType) => acceptType === 'all' ? 365 : 182
    },

    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom center',
        equalWeightButtons: true,
        flipButtons: false
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: true,
        flipButtons: false
      }
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      advertising: {
        enabled: false,
        readOnly: false,
        autoClear: {
          cookies: [
            { name: /^(_ga|_gid|_gat|_gcl)/ },
            { name: '_gcl_au' }
          ],
          reloadPage: false
        }
      }
    },

    onConsent: syncConsent,
    onChange: syncConsent,

    language: {
      default: 'sv',
      autoDetect: 'document',
      translations: {
        sv: {
          consentModal: {
            label: 'Cookieinställningar',
            title: 'Vi respekterar din integritet',
            description: 'Avertum använder nödvändiga cookies för att webbplatsen ska fungera. Med ditt samtycke använder vi även Google Ads för att mäta effekten av vår marknadsföring. Ditt val sparas och bannern visas inte igen förrän samtycket löper ut eller policyn ändras.',
            acceptAllBtn: 'Acceptera alla',
            acceptNecessaryBtn: 'Endast nödvändiga',
            showPreferencesBtn: 'Anpassa val',
            closeIconLabel: 'Stäng'
          },
          preferencesModal: {
            title: 'Cookieinställningar',
            acceptAllBtn: 'Acceptera alla',
            acceptNecessaryBtn: 'Endast nödvändiga',
            savePreferencesBtn: 'Spara val',
            closeIconLabel: 'Stäng',
            sections: [
              {
                title: 'Dina val',
                description: 'Du kan ändra eller återkalla ditt samtycke när som helst via länken Cookieinställningar längst ned på webbplatsen.'
              },
              {
                title: 'Nödvändiga cookies',
                description: 'Dessa krävs för grundläggande funktioner och för att komma ihåg ditt cookieval.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Mätning och annonsering',
                description: 'Google Ads används endast efter ditt uttryckliga samtycke för att mäta kampanjer och konverteringar.',
                linkedCategory: 'advertising'
              },
              {
                title: 'Mer information',
                description: 'Kontakta info@avertum.se vid frågor om integritet eller personuppgifter.'
              }
            ]
          }
        },
        en: {
          consentModal: {
            label: 'Cookie settings',
            title: 'We respect your privacy',
            description: 'Avertum uses necessary cookies to operate the website. With your consent, we also use Google Ads to measure the effectiveness of our marketing. Your choice is stored, so the banner will not appear again until consent expires or the policy changes.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Necessary only',
            showPreferencesBtn: 'Manage choices',
            closeIconLabel: 'Close'
          },
          preferencesModal: {
            title: 'Cookie settings',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Necessary only',
            savePreferencesBtn: 'Save choices',
            closeIconLabel: 'Close',
            sections: [
              {
                title: 'Your choices',
                description: 'You can change or withdraw your consent at any time using the Cookie settings link in the website footer.'
              },
              {
                title: 'Necessary cookies',
                description: 'These are required for core functionality and to remember your cookie choice.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Measurement and advertising',
                description: 'Google Ads is used only after your explicit consent to measure campaigns and conversions.',
                linkedCategory: 'advertising'
              },
              {
                title: 'More information',
                description: 'Contact info@avertum.se with questions about privacy or personal data.'
              }
            ]
          }
        }
      }
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-cookie-settings')?.addEventListener('click', openCookiePreferences);
  });
})();
