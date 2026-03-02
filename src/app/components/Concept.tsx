import { useEffect } from "react";
import { motion } from "motion/react";
import { Mic, Brain, Trophy, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Mic, Users, Brain, Trophy];

export function Concept() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const features = [
    { icon: icons[0], title: t('concept.features.0.title'), desc: t('concept.features.0.desc') },
    { icon: icons[1], title: t('concept.features.1.title'), desc: t('concept.features.1.desc') },
    { icon: icons[2], title: t('concept.features.2.title'), desc: t('concept.features.2.desc') },
    { icon: icons[3], title: t('concept.features.3.title'), desc: t('concept.features.3.desc') },
  ];

  return (
      <section className="bg-black py-24 relative overflow-hidden text-white font-mono border-t border-white/10">
        <div className="absolute inset-0 z-0 bg-lime-900/5 mix-blend-overlay pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
              <h2
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"
                  style={{ fontFamily: "var(--font-display)" }}
              >
                {t('concept.heading')}
              </h2>
              <div className="w-24 h-1 bg-lime-500" />
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed font-sans">
                {t('concept.intro.before')}
                <span className="text-lime-400 font-bold">{t('concept.intro.highlight')}</span>
              </p>
              <p className="text-gray-400 max-w-lg leading-relaxed font-sans">
                {t('concept.intro.body')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative border border-white/10 bg-white/5 p-8 hover:bg-lime-900/10 transition-colors"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-mono text-lime-500">0{i + 1}</span>
                    </div>
                    <feat.icon className="w-8 h-8 text-lime-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3
                        className="text-lg font-bold uppercase tracking-wider mb-2"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}