import { motion } from "motion/react";
import { ArrowRight, Crosshair, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
// import { cn } from "../../lib/utils";
import bgImage from "../../assets/abab3d4e6cf4c65ef562044cd443f24d6bf2ff2c.png";
import logo from "../../assets/logo_ac.png";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-pink-500 selection:text-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opactiy-80" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={bgImage}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 blur-sm"
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-0 pointer-events-none border border-white/5 m-4 md:m-8 rounded-sm"></div>

      <motion.div
        className="absolute w-full h-[1px] bg-pink-500/30 z-0 top-0 left-0"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center align-baseline text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="bg-pink-500 text-black text-xs font-mono px-2 py-0.5 font-bold uppercase tracking-widest">
            {t('hero.tag')}
          </span>
          <span className="text-pink-500/70 text-xs font-mono uppercase tracking-widest border border-pink-500/30 px-2 py-0.5">
            {t('hero.season')}
          </span>
            <img src={logo} className="block w-10" alt=""/>
        </motion.div>


        <motion.h1
          className="font-display font-black text-5xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] md:leading-[0.85] mb-6 mix-blend-difference"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{t('hero.title.line1')}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-pink-600">{t('hero.title.line2')}</span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-lg md:text-2xl font-mono text-white/80 uppercase tracking-widest border-l-2 border-pink-500 pl-4 text-left">
            <span className="block">{t('hero.subtitle.line1')}</span>
            <span className="block text-white">{t('hero.subtitle.line2')}</span>
            <span className="block text-pink-400">{t('hero.subtitle.line3')}</span>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#register"
            className="group relative flex-1 bg-pink-500 hover:bg-pink-400 text-black font-bold font-mono uppercase tracking-wider py-4 px-8 flex items-center justify-center gap-2 transition-all clip-path-polygon"
            style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
          >
            {t('hero.buttons.register')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#schedule"
            className="group relative flex-1 bg-black/50 hover:bg-white/10 border border-white/20 text-white font-mono uppercase tracking-wider py-4 px-8 flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
            style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
          >
            {t('hero.buttons.schedule')}
            <Zap className="w-4 h-4 text-pink-500" />
          </a>
        </motion.div>

        <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:flex flex-col gap-4 text-xs font-mono text-white/30 [writing-mode:vertical-rl] rotate-180">
          <span>{t('hero.coordinates')}</span>
          <span>{t('hero.time')}</span>
        </div>
        <div className="absolute bottom-12 right-12 hidden lg:block">
           <Crosshair className="w-12 h-12 text-pink-500/20 animate-spin-slow" />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-pink-500/0 via-pink-500 to-pink-500/0"></div>
      </motion.div>
    </section>
  );
}
