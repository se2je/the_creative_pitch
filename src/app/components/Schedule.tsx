import {useEffect} from "react";
import {motion} from "motion/react";
import {CheckCircle, Zap, Coffee, User, Flag, Trophy, ArrowRight} from "lucide-react";
import {useTranslation} from "react-i18next";

const icons = [CheckCircle, Flag, Zap, User, Zap, Coffee, User, Zap, User, <Trophy></Trophy>];
const types = ["logistics", "ceremony", "pitch", "lecture", "pitch", "break", "lecture", "pitch", "lecture", "finale"];

export function Schedule() {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const scheduleData = icons.map((icon, i) => ({
        time: t(`schedule.items.${i}.time`),
        title: t(`schedule.items.${i}.title`),
        desc: t(`schedule.items.${i}.desc`),
        type: types[i],
        icon,
    }));

    return (
        <section id="schedule" className="bg-black py-24 relative overflow-hidden font-mono border-t border-white/10">
            <div
                className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"/>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-16 text-center"
                >
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4"
                        style={{fontFamily: "var(--font-display)"}}
                    >
                        {t('schedule.heading')} <span className="text-pink-500">{t('schedule.headingAccent')}</span>
                    </h2>
                    <div className="h-1 w-24 bg-pink-500 mx-auto mb-4"/>
                    <p className="text-gray-400 font-mono">{t('schedule.date')}</p>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12 md:pl-8">
                    {scheduleData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true, margin: "-50px"}}
                            transition={{delay: i * 0.05}}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot */}
                            <div className={`absolute -left-[43px] md:-left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black z-10
                ${item.type === 'pitch' ? 'bg-pink-500 shadow-[0_0_15px_rgba(132,204,22,0.8)]' :
                                item.type === 'finale' ? 'bg-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]' :
                                    'bg-white/20'}`}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start group">
                                {/* Time */}
                                <div
                                    className="font-mono text-pink-500/80 text-sm py-1 border border-pink-500/20 bg-pink-900/10 px-2 rounded w-fit md:w-full text-center group-hover:bg-pink-500/20 transition-colors">
                                    {item.time}
                                </div>

                                {/* Content */}
                                <div className="pb-8 border-b border-white/5 last:border-0">
                                    <h3
                                        className={`text-xl font-bold uppercase tracking-wider mb-2 flex items-center gap-3
                      ${item.type === 'pitch' ? 'text-pink-400' : item.type === 'finale' ? 'text-pink-400' : 'text-white'}`}
                                        style={{fontFamily: "var(--font-display)"}}
                                    >
                                        {item.title}
                                        {item.type === 'pitch' && <Zap className="w-4 h-4 animate-pulse"/>}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <a
                href="#"
                className="group relative flex-1 bg-pink-500 hover:bg-pink-400 text-black font-bold max-w-1/2 mx-auto my-5 font-mono uppercase tracking-wider py-4 px-8 flex items-center justify-center gap-2 transition-all clip-path-polygon"
                style={{clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"}}
            >
                {t('schedule.volunteer')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </a>
        </section>
    );
}