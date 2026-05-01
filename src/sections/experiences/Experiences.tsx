'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

const experiencesJson = [
	{
		name: 'Lead Engineer, Siana',
		date: 'Jun 2025 - Apr 2026',
		description: {
			en: 'Lead engineer on an AI-based mobile app for real estate. Siana is a proptech startup building AI-powered tools for the real estate market.',
			fr: "Lead engineer sur une application mobile IA pour l'immobilier. Siana est une startup proptech qui développe des outils basés sur l'IA pour le marché immobilier.",
		},
		stack: ['nestjs.svg', 'firebase.png', 'react.png', 'typescript.png'],
	},
	{
		name: 'CTO & Co-founder, Magnetly',
		date: 'Jul 2024 - Nov 2025',
		description: {
			en: 'Co-founded Magnetly as CTO alongside a business partner. Led the technical vision and development of an AI-powered lead generation platform. Successfully exited the company.',
			fr: "Co-fondé Magnetly en tant que CTO avec un associé. Direction de la vision technique et du développement d'une plateforme de génération de leads par IA. Exit réussi.",
		},
		stack: ['nestjs.svg', 'firebase.png', 'react.png', 'typescript.png'],
	},
	{
		name: 'Lead Software Engineer (Freelance), TrackIt',
		date: 'Mar 2023 - Mar 2025',
		description: {
			en: 'From scratch development of complex software for a major American customer.',
			fr: 'Développement from scratch de logiciels complexes pour un grand client américain.',
		},
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'Developer Fullstack (CDI), Origame',
		date: 'Feb 2022 - Apr 2023',
		description: {
			en: 'Maintenance and development of fin tech software to track expenses and subscriptions.',
			fr: "Maintenance et développement d'un logiciel fintech pour le suivi des dépenses et abonnements.",
		},
		stack: ['javascript.png', 'typescript.png', 'react.png', 'nestjs.svg'],
	},
	{
		name: 'Developer Fullstack (Freelance), uMoove',
		date: 'Mar 2023 - Apr 2023',
		description: {
			en: 'Development of management software for sports coaches.',
			fr: 'Développement d\'un logiciel de gestion pour coachs sportifs.',
		},
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'Developer Fullstack (Freelance), Quickcells',
		date: 'Mar 2022 - Jun 2022',
		description: {
			en: 'Development of software to add graphical features to Excel.',
			fr: 'Développement d\'un logiciel pour ajouter des fonctionnalités graphiques à Excel.',
		},
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'FileMaker Developer (Freelance), Zénith Toulouse, Nantes & Paris',
		date: 'Feb 2021 - Aug 2021',
		description: {
			en: 'Development of complex management software for Zeniths.',
			fr: 'Développement de logiciels de gestion complexes pour les Zéniths.',
		},
		stack: ['javascript.png', 'filemaker.png'],
	},
	{
		name: 'Fullstack Developer (Freelance), Taker',
		date: 'Feb 2019 - Dec 2019',
		description: {
			en: 'Several small web development assignments.',
			fr: 'Plusieurs petites missions de développement web.',
		},
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'Fullstack Developer (CDD), Devinnova',
		date: 'Feb 2019 - Dec 2019',
		description: {
			en: 'Creation of a fall detection and encephalogram smoothing algorithm for a connected patch.',
			fr: "Création d'un algorithme de détection de chute et de lissage d'électroencéphalogramme pour un patch connecté.",
		},
		stack: ['javascript.png', 'python.png'],
	},
	{
		name: 'Python Developer (Internship), DSI La Poste',
		date: 'Jul 2018 - Dec 2018',
		description: {
			en: 'Writing non-regression tests for a customer portfolio management software.',
			fr: 'Rédaction de tests de non-régression pour un logiciel de gestion de portefeuille client.',
		},
		stack: ['python.png'],
	},
];

const VISIBLE_COUNT = 4;

export default function Experiences() {
	const [expanded, setExpanded] = useState(false);
	const { lang } = useLanguage();
	const t = ui[lang].career;
	const visible = expanded ? experiencesJson : experiencesJson.slice(0, VISIBLE_COUNT);

	return (
		<div className="px-12 md:px-0">
			<div className="text-center mb-12">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">{t.label}</p>
				<h2 className="text-3xl font-bold text-white">{t.title}</h2>
			</div>
			<ol className="relative border-s border-neutral-800">
				{visible.map((experience, experienceIndex) => (
					<li key={experience.name} className="mb-10 ms-6">
						<div className="absolute w-2 h-2 bg-emerald-400 rounded-full mt-2 -start-1 border-2 border-[#0c0c0c]" />
						<time className="text-xs text-neutral-500 font-mono">{experience.date}</time>
						<h3 className="text-white font-semibold mt-1">{experience.name}</h3>
						<p className="text-neutral-400 text-sm mt-1 mb-3">{experience.description[lang]}</p>
						<div className="flex flex-row gap-3">
							{experience.stack.map((stack, stackIndex) => (
								<Image
									key={`${stack}${stackIndex}${experienceIndex}`}
									alt="stack"
									width={20}
									height={20}
									src={`/${stack}`}
								/>
							))}
						</div>
					</li>
				))}
			</ol>
			<button
				onClick={() => setExpanded(!expanded)}
				className="mt-2 ms-6 flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
			>
				{expanded ? (
					<><ChevronUp size={15} />{t.showLess}</>
				) : (
					<><ChevronDown size={15} />{t.showMore(experiencesJson.length - VISIBLE_COUNT)}</>
				)}
			</button>
		</div>
	);
}
