import {useEffect} from "react";
import {motion} from "motion/react";
import {User, Users} from "lucide-react";
import {useTranslation} from "react-i18next";
import {cn} from "../../lib/utils";

const icons = [Users, User];
const colors = ["lime", "purple"];

export function TimelineAndRegistration() {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const timelineEvents = [
        {date: t('timeline.events.0.date'), title: t('timeline.events.0.title'), isMain: false},
        {date: t('timeline.events.1.date'), title: t('timeline.events.1.title'), isMain: false},
        {date: t('timeline.events.2.date'), title: t('timeline.events.2.title'), isMain: true},
    ];

    const regOptions = [
        {
            title: t('timeline.options.0.title'),
            icon: icons[0],
            detail: t('timeline.options.0.detail'),
            req: t('timeline.options.0.req'),
            color: colors[0],
            link: "https://forms.yandex.ru/u/69a7019e068ff0c52adbcbdb"
        },
        {
            title: t('timeline.options.1.title'),
            icon: icons[1],
            detail: t('timeline.options.1.detail'),
            req: t('timeline.options.1.req'),
            color: colors[1],
            link: "https://forms.yandex.ru/u/69a7024aeb6146c55fd99c7d"
        },
    ];

    return (
        <section id="register" className="bg-black py-24 relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4"
                        style={{fontFamily: "var(--font-display)"}}
                    >
                        {t('timeline.heading')} <span
                        className="text-lime-500">{t('timeline.headingAccent')}</span> {t('timeline.headingEnd')}
                    </motion.h2>
                    <div className="h-1 w-24 bg-lime-500 mx-auto"/>
                </div>

                {/* Timeline Horizontal */}
                <div className="relative mb-24 hidden md:block">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 -translate-y-1/2"/>
                    <div className="flex justify-between relative z-10 max-w-4xl mx-auto">
                        {timelineEvents.map((ev, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, scale: 0}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{delay: i * 0.2}}
                                className="flex flex-col items-center group cursor-default"
                            >
                                <div className={cn(
                                    "w-4 h-4 rounded-full border-2 bg-black mb-4 transition-all duration-300 group-hover:scale-150",
                                    ev.isMain ? "border-lime-500 bg-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.6)]" : "border-white/50 group-hover:border-white"
                                )}/>
                                <div
                                    className="text-center bg-black/80 backdrop-blur-sm p-2 border border-white/10 rounded-sm group-hover:border-white/30 transition-colors">
                  <span
                      className={cn("block text-2xl font-black mb-1", ev.isMain ? "text-lime-400" : "text-white")}
                      style={{fontFamily: "var(--font-display)"}}
                  >
                    {ev.date}
                  </span>
                                    <span
                                        className="text-xs uppercase tracking-widest text-gray-400 font-mono">{ev.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-8 mb-16 border-l border-white/20 pl-8 ml-4">
                    {timelineEvents.map((ev, i) => (
                        <div key={i} className="relative">
                            <div className={cn(
                                "absolute -left-[39px] top-2 w-4 h-4 rounded-full border-2 bg-black",
                                ev.isMain ? "border-lime-500 bg-lime-500" : "border-white/50"
                            )}/>
                            <h3
                                className={cn("text-2xl font-black", ev.isMain ? "text-lime-400" : "text-white")}
                                style={{fontFamily: "var(--font-display)"}}
                            >
                                {ev.date}
                            </h3>
                            <p className="text-gray-400 font-mono uppercase text-sm">{ev.title}</p>
                        </div>
                    ))}
                </div>

                {/* Registration Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {regOptions.map((opt, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.2 + (i * 0.1)}}
                            className="relative group bg-zinc-900/50 border border-white/10 p-8 hover:bg-zinc-800/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
                                opt.color === 'lime' ? 'bg-lime-500' : 'bg-purple-500'
                            )}/>

                            <div className="flex items-start justify-between mb-8">
                                <opt.icon
                                    className={cn("w-12 h-12 stroke-1", opt.color === 'lime' ? 'text-lime-400' : 'text-purple-400')}/>
                                <span
                                    className="font-mono text-xs border border-white/20 px-2 py-1 rounded text-gray-400 uppercase tracking-wider">
                  Option 0{i + 1}
                </span>
                            </div>

                            <h3
                                className="text-3xl font-black uppercase mb-2 text-white"
                                style={{fontFamily: "var(--font-display)"}}
                            >
                                {opt.title}
                            </h3>
                            <p className="font-mono text-sm text-gray-400 mb-6 border-b border-white/10 pb-6">
                                {opt.detail}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={cn("w-1 h-1 rounded-full", opt.color === 'lime' ? 'bg-lime-500' : 'bg-purple-500')}/>
                                    <span className="text-sm text-gray-300 font-sans">{opt.req}</span>
                                </div>
                            </div>

                            <a href={opt.link} target="_blank" className={cn(
                                "w-full block text-center py-4 font-bold font-mono uppercase tracking-widest text-sm transition-all hover:translate-y-[-2px]",
                                opt.color === 'lime'
                                    ? 'bg-lime-500 text-black hover:bg-lime-400 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]'
                                    : 'bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                            )}
                               style={{clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"}}
                            >
                                {t('timeline.register')}
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}