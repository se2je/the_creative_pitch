import { useEffect } from "react";
import { motion } from "motion/react";
import { User, DollarSign, PenTool, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [PenTool, DollarSign, MessageSquare, User];
const delays = [0, 0.1, 0.2, 0.3];

export function Experts() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const experts = [0, 1, 2].map((i) => ({
    name: t(`experts.items.${i}.name`),
    role: t(`experts.items.${i}.role`),
    topic: t(`experts.items.${i}.topic`),
    desc: t(`experts.items.${i}.desc`),
    icon: icons[i],
    delay: delays[i],
  }));

  return (
      <section className="bg-black py-24 relative overflow-hidden text-white font-mono border-t border-white/10">
        <div className="absolute inset-0 z-0 bg-purple-900/5 mix-blend-overlay pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
            <h2
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
                style={{ fontFamily: "var(--font-display)" }}
            >
              {t('experts.heading')} <span className="text-purple-500">{t('experts.headingAccent')}</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: expert.delay }}
                    className="group relative bg-zinc-900/80 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent -mr-8 -mt-8 rounded-full blur-xl group-hover:scale-150 transition-transform" />

                  <div className="p-8 flex-1 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-white/10 bg-black flex items-center justify-center mb-6 group-hover:border-purple-500 transition-colors">
                      <expert.icon className="w-8 h-8 text-gray-400 group-hover:text-purple-400" />
                    </div>

                    <h3
                        className="text-xl font-bold uppercase tracking-wider mb-2"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                      {expert.name}
                    </h3>
                    <p className="text-xs text-purple-400 font-mono uppercase mb-6 tracking-widest">{expert.role}</p>

                    <div className="w-full h-px bg-white/10 mb-6" />

                    <div className="text-left w-full">
                      <p className="text-xs text-gray-500 uppercase mb-2">{t('experts.topicLabel')}</p>
                      <p className="text-sm font-bold text-white mb-4">{expert.topic}</p>
                      <p className="text-xs text-gray-400 leading-relaxed font-sans">{expert.desc}</p>
                    </div>
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}