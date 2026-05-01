'use client';

import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

export default function DownloadCVButton() {
	const { lang } = useLanguage();

	return (
		<a
			href="/Robin_Chailley_CV.pdf"
			download="Robin_Chailley_CV.pdf"
			className="right-6 bottom-6 group fixed flex items-center gap-2 bg-neutral-900 border border-neutral-700 hover:border-emerald-400/50 text-neutral-400 hover:text-white rounded-full px-4 py-2.5 transition-all duration-300 text-sm"
		>
			<Download size={15} />
			<span>{ui[lang].cv}</span>
		</a>
	);
}
