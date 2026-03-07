import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 cursor-pointer font-display z-50 flex items-center gap-2 bg-black/50 hover:bg-black/70 border border-white/20 text-white  uppercase tracking-wider px-4 py-2 backdrop-blur-sm transition-all rounded-sm"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-pink-500" />
      <span className="text-xs">{i18n.language.toUpperCase()}</span>
    </button>
  );
}
