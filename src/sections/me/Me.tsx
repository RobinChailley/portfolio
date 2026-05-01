'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

const skills = [
	{
		en: {
			title: '8+ years of experience',
			description:
				'Passionate about programming since high school, I started coding over 10 years ago, with more than 8 years of cumulative professional experience.',
		},
		fr: {
			title: "8+ ans d'expérience",
			description:
				"Passionné de programmation depuis le lycée, je code depuis plus de 10 ans, avec plus de 8 ans d'expérience professionnelle cumulée.",
		},
	},
	{
		en: {
			title: 'Fullstack Development',
			description:
				'With over 8 years of experience in both frontend and backend development, I excel at creating efficient applications. My expertise in JavaScript enables me to build robust, scalable, and maintainable solutions.',
		},
		fr: {
			title: 'Développement Fullstack',
			description:
				"Avec plus de 8 ans d'expérience en développement frontend et backend, j'excelle dans la création d'applications efficaces. Mon expertise en JavaScript me permet de construire des solutions robustes, scalables et maintenables.",
		},
	},
	{
		en: {
			title: 'Web Development',
			description:
				'Proficient in modern web technologies, I create dynamic and responsive web applications built with best practices and optimized for performance and user experience.',
		},
		fr: {
			title: 'Développement Web',
			description:
				"Maîtrisant les technologies web modernes, je crée des applications web dynamiques et responsive, construites selon les meilleures pratiques et optimisées pour la performance et l'expérience utilisateur.",
		},
	},
	{
		en: {
			title: 'Mobile Development',
			description:
				'Skilled in React Native, I build cross-platform mobile apps optimized for performance, usability, and seamless interactions on iOS and Android.',
		},
		fr: {
			title: 'Développement Mobile',
			description:
				"Expert en React Native, je construis des applications mobiles cross-platform optimisées pour la performance, l'ergonomie et des interactions fluides sur iOS et Android.",
		},
	},
	{
		en: {
			title: 'Software Project Leadership',
			description:
				"As a lead software engineer, I've successfully managed a development team. My experience highlights my ability to drive projects from start to finish while maintaining high standards.",
		},
		fr: {
			title: 'Leadership Technique',
			description:
				"En tant que lead software engineer, j'ai géré avec succès une équipe de développement. Mon expérience démontre ma capacité à piloter des projets de bout en bout en maintenant des standards élevés.",
		},
	},
	{
		en: {
			title: 'Entrepreneurial Spirit',
			description:
				'I founded and sold my first company, and launched multiple profitable SaaS products. I thrive in environments where I can create, invent, and design new solutions.',
		},
		fr: {
			title: 'Esprit Entrepreneurial',
			description:
				"J'ai fondé et cédé ma première entreprise, et lancé plusieurs produits SaaS rentables. Je m'épanouis dans les environnements où je peux créer, inventer et concevoir de nouvelles solutions.",
		},
	},
];

export default function Me() {
	const { lang } = useLanguage();
	const t = ui[lang].about;

	return (
		<div className="max-w-full flex items-center flex-col sm:max-w-[80vw]">
			<div className="text-center mb-8">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">{t.label}</p>
				<h2 className="text-3xl font-bold text-white">{t.title}</h2>
			</div>
			<p className="text-center text-neutral-400 px-12 max-w-full sm:px-0 sm:max-w-[60vw] leading-relaxed">{t.bio}</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl w-full px-6 sm:px-0">
				{skills.map((item) => (
					<div
						key={item.en.title}
						className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-400/30 transition-colors duration-300"
					>
						<h3 className="text-white font-semibold mb-2">{item[lang].title}</h3>
						<p className="text-neutral-400 text-sm leading-relaxed">{item[lang].description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
