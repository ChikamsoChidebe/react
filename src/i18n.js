import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      about: "About Me",
      contact: "Contact Me",
      explore: "Explore My Work",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur mon portfolio",
      about: "À propos de moi",
      contact: "Contactez-moi",
      explore: "Découvrez mon travail",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi portafolio",
      about: "Sobre mí",
      contact: "Contáctame",
      explore: "Explora mi trabajo",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;