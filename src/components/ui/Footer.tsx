'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
	const { lang } = useLanguage();
	const t = ui[lang];

	return (
		<footer className="border-t border-neutral-800 w-full px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
			<div className="flex flex-col gap-1">
				<p className="text-white font-medium">Robin Chailley</p>
				<p className="text-neutral-500 text-sm">{t.footer.role}</p>
			</div>
			<div className="flex flex-col gap-2 items-start sm:items-end">
				<div className="flex items-center gap-4">
					<a
						className="text-neutral-500 hover:text-white transition-colors"
						target="_blank"
						href="https://www.linkedin.com/in/robin-chailley/"
					>
						<Linkedin size={18} />
					</a>
					<a
						className="text-neutral-500 hover:text-white transition-colors"
						target="_blank"
						href="https://github.com/RobinChailley"
					>
						<Github size={18} />
					</a>
				</div>
				<p className="text-neutral-600 text-xs">© {new Date().getFullYear()} Robin Chailley</p>
			</div>
		</footer>
	);
}
