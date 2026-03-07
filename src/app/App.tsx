import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Hero } from "./components/Hero";
import { Concept } from "./components/Concept";
import { TimelineAndRegistration } from "./components/Timeline";
import { Experts } from "./components/Experts";
import { Schedule } from "./components/Schedule";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function App() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className="size-full bg-black text-white overflow-x-hidden">
            <LanguageSwitcher />
            <Hero />
            <Concept />
            <TimelineAndRegistration />
            <Experts />
            <Schedule />

            <footer className="bg-black border-t border-white/10 py-12 text-center text-gray-500 font-mono">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p
                                className="text-lg font-bold text-white mb-2"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {t('footer.title')}
                            </p>
                            <p className="text-xs uppercase tracking-widest">{t('footer.subtitle')}</p>
                        </div>
                        <div className="text-sm">
                            <p className="mb-1">{t('footer.registration')}</p>
                            <p className="text-pink-400">{t('footer.event')}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}