'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
	const { lang, setLang } = useLanguage();
	const next = lang === 'en' ? 'fr' : 'en';

	return (
		<button
			onClick={() => setLang(next)}
			className="left-6 bottom-6 fixed flex items-center gap-2 bg-neutral-900 border border-neutral-700 hover:border-emerald-400/50 text-neutral-400 hover:text-white rounded-full px-4 py-2.5 transition-all duration-300 text-sm"
		>
			<span className="text-base">{next === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
			<span className="uppercase font-medium">{next}</span>
		</button>
	);
}
