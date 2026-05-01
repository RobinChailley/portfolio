'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

export default function Hero() {
	const { lang } = useLanguage();
	const t = ui[lang].hero;

	return (
		<div className="h-[60vh] mt-[20vh] w-full flex flex-col items-center justify-center px-6 relative overflow-hidden">
			<motion.div
				className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[160px] sm:w-[500px] sm:h-[240px] bg-emerald-500/25 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"
				animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
				transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
			/>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
				className="text-center relative z-10"
			>
				<div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full px-4 py-1.5 mb-6">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
					{t.badge}
				</div>
				<h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white">Robin Chailley</h1>
				<p className="text-xl sm:text-2xl text-neutral-400 mt-5 font-normal">{t.subtitle}</p>
				<p className="mt-8 text-sm text-neutral-500 text-center">
					<span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse align-middle mr-2.5" />
					{t.tagline}
				</p>
			</motion.div>
		</div>
	);
}
