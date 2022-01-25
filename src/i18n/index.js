import { createI18n } from 'vue-i18n';
import enUS from './messages/en-US';
import esMX from './messages/es-MX';

export const availableLanguages = [
	{ code: 'en-US', name: 'English' },
	{ code: 'es-MX', name: 'Español' },
];

const messages = {
	'en-US': enUS,
	'es-MX': esMX,
};

const i18n = createI18n({
	locale: localStorage.getItem('language') || 'es-MX',
	fallbackLocale: 'en-US',
	messages,
});

export default i18n;
