import './libs/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'No cookies used',
                    description: 'This website does not use cookies other than those necessary for its core functionality. By continuing to browse, you confirm your acceptance of these essential cookies.',
                    acceptNecessaryBtn: 'OK',
                },
                preferencesModal: {
                    title: 'Cookie preferences',
                    acceptNecessaryBtn: 'OK',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Strictly Necessary Cookies',
                            description: 'These cookies are essential for the basic operation of the website. We do not use cookies for tracking or analytics.',
                            linkedCategory: 'necessary'
                        }
                    ]
                }
            }
        }
    }
});