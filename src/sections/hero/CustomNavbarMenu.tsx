'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

export default function Navbar({ className }: { className?: string }) {
	const [open, setOpen] = useState(false);
	const { lang } = useLanguage();
	const t = ui[lang].nav;

	const links = [
		{ label: t.experience, href: '#experiences' },
		{ label: t.testimonials, href: '#testimonials' },
		{ label: t.about, href: '#about-me' },
		{ label: t.projects, href: '#projects' },
		{ label: t.contact, href: '#contact' },
	];

	return (
		<nav className={cn('fixed top-8 inset-x-0 z-50 px-6 flex justify-center', className)}>
			{/* Desktop */}
			<div className="hidden sm:flex items-center gap-1 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full px-2 py-2">
				{links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="px-4 py-1.5 text-sm text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors duration-200"
					>
						{link.label}
					</a>
				))}
			</div>

			{/* Mobile */}
			<div className="sm:hidden w-full flex flex-col items-end">
				<button
					onClick={() => setOpen(!open)}
					className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full p-2.5 text-neutral-400 hover:text-white transition-colors"
				>
					{open ? <X size={18} /> : <Menu size={18} />}
				</button>
				{open && (
					<div className="mt-2 w-48 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-2xl p-1.5 flex flex-col">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="px-4 py-2.5 text-sm text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition-colors duration-200"
							>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
