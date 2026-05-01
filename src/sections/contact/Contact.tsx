'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

export default function Contact() {
	const { lang } = useLanguage();
	const t = ui[lang].contact;

	return (
		<div className="w-full py-32 px-6 flex flex-col items-center justify-center text-center">
			<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-6">{t.label}</p>
			<h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
				{t.title}
			</h2>
			<p className="text-neutral-400 mb-10 max-w-sm leading-relaxed">{t.subtitle}</p>
			<a
				href="mailto:robin.chailley@gmail.com"
				className="group flex items-center gap-3 text-neutral-300 hover:text-white border border-neutral-700 hover:border-emerald-400/50 rounded-full px-6 py-3 transition-all duration-300"
			>
				robin.chailley@gmail.com
				<span className="text-emerald-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
			</a>
		</div>
	);
}
