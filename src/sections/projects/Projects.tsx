'use client';

import React from 'react';
import { Lang, useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';
import StackIcon from '@/components/ui/StackIcon';

interface StackItem { src: string; width?: number }

const projects: {
	id: string;
	title: string;
	href?: string;
	colSpan?: string;
	metrics?: string;
	description: Record<Lang, string>;
	note?: Record<Lang, string>;
	aborted?: boolean;
	stack: StackItem[];
}[] = [
	{
		id: 'airdun',
		title: 'AirDun',
		href: 'https://airdun.com/',
		colSpan: 'md:col-span-3',
		metrics: '~€3,000/month MRR',
		description: {
			en: "AirDun is a SaaS that automatically recovers failed Stripe payments. Its autopilot analyzes the context of each failure, picks the action, channel and timing of each reminder, then adapts the follow-up to the customer's replies. Reminders stop as soon as the payment goes through.",
			fr: "AirDun est un SaaS de recouvrement automatisé des paiements Stripe échoués. Son autopilote analyse le contexte de chaque échec, choisit l'action, le canal et le moment de la relance, puis adapte la suite en fonction des réponses du client. Les relances s'arrêtent dès que le paiement aboutit.",
		},
		note: {
			en: "CTO since June 2026, leading the product's technical development.",
			fr: 'CTO depuis juin 2026, je pilote le développement technique du produit.',
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/python.png' }, { src: '/react.png' },
			{ src: '/typescript.png' }, { src: '/firebase.png', width: 24 },
		],
	},
	{
		id: 'magnetly',
		title: 'Magnetly',
		href: 'https://magnetly.co',
		colSpan: 'md:col-span-2',
		metrics: '1,000+ users · €2,000/month MRR at peak',
		description: {
			en: 'Magnetly is a SaaS that lets marketing teams create interactive tools with AI, such as calculators, embed them on their website and track their performance to generate leads. Trusted by leading companies like Submagic, Waalaxy, Breakcold, and Human Linker.',
			fr: "Magnetly est un SaaS qui permet aux équipes marketing de créer des outils interactifs avec l'IA, comme des calculateurs, de les intégrer à leur site et de suivre leurs performances pour générer des leads. Approuvé par des entreprises comme Submagic, Waalaxy, Breakcold et Human Linker.",
		},
		note: {
			en: 'Co-founded the product and led its development as CTO. Sold in 2025.',
			fr: "J'ai cofondé le produit et piloté son développement en tant que CTO. Revendu en 2025.",
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/python.png' }, { src: '/react.png' },
			{ src: '/typescript.png' }, { src: '/firebase.png', width: 24 },
		],
	},
	{
		id: 'pronoapp',
		title: 'PronoApp',
		metrics: '€1,000+/month at peak · 50+ simultaneous users',
		description: {
			en: 'A highly customizable CMS platform enabling sports tipsters to build their own professional websites, with themes, subscriptions, and a member area.',
			fr: 'Une plateforme CMS hautement personnalisable permettant aux pronostiqueurs sportifs de créer leurs propres sites professionnels, avec des thèmes, des abonnements et un espace membres.',
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/python.png' }, { src: '/react.png' },
			{ src: '/typescript.png' }, { src: '/aws.png', width: 24 },
		],
	},
	{
		id: 'maarco',
		title: 'Maarco',
		metrics: '600+ users · €300/month at peak',
		description: {
			en: 'A mobile app making calorie tracking effortless, with a strong focus on UX.',
			fr: 'Une application mobile rendant le suivi des calories simple et intuitif, avec un accent fort sur l\'expérience utilisateur.',
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/react.png' }, { src: '/typescript.png' },
			{ src: '/firebase.png', width: 20 }, { src: '/apple.webp', width: 20 }, { src: '/android.svg', width: 26 },
		],
	},
	{
		id: 'howsit',
		title: 'Howsit',
		metrics: '€300/month at peak',
		description: {
			en: 'SaaS platform for collecting website feedback via embeddable widgets (questions, ratings, MCQ).',
			fr: 'Plateforme SaaS pour collecter des retours utilisateurs via des widgets intégrables (questions, évaluations, QCM).',
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/react.png' }, { src: '/typescript.png' }, { src: '/firebase.png', width: 20 },
		],
	},
	{
		id: 'kuryai',
		title: 'KuryAI',
		aborted: true,
		description: {
			en: 'AI SaaS for marketing agencies — scrapes client websites to generate content, identify targets, and write UGC scripts.',
			fr: 'SaaS IA pour les agences marketing — scrape les sites clients pour générer du contenu, identifier des cibles et rédiger des scripts UGC.',
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/react.png' }, { src: '/typescript.png' }, { src: '/firebase.png', width: 20 },
		],
	},
	{
		id: 'epijob',
		title: 'Epijob',
		colSpan: 'md:col-span-2',
		description: {
			en: 'A web platform for top schools like Epitech to manage their alumni networks. Students can browse thousands of internship opportunities recommended by alumni.',
			fr: "Une plateforme web pour les grandes écoles comme Epitech pour gérer leurs réseaux d'alumni. Les étudiants peuvent parcourir des milliers d'offres de stage recommandées par des anciens.",
		},
		note: {
			en: 'Widely used by a significant portion of my graduating class.',
			fr: 'Largement utilisé par une part significative de ma promotion.',
		},
		stack: [
			{ src: '/nestjs.svg' }, { src: '/react.png' }, { src: '/typescript.png' }, { src: '/aws.png', width: 24 },
		],
	},
	{
		id: 't3k',
		title: 'T3K',
		description: {
			en: 'My first entrepreneurial venture — a local agency delivering websites and SEO services for small businesses. Served six clients successfully.',
			fr: "Ma première aventure entrepreneuriale — une agence locale proposant des sites web et des services SEO pour les PME. Six clients servis avec succès.",
		},
		stack: [{ src: '/wordpress.webp', width: 26 }],
	},
];

export default function Projects() {
	const { lang } = useLanguage();
	const t = ui[lang].work;

	return (
		<div className="max-w-[80vw] w-full">
			<div className="text-center mb-12">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">{t.label}</p>
				<h2 className="text-3xl font-bold text-white">{t.title}</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{projects.map((project) => (
					<div
						key={project.id}
						className={`group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors duration-300 flex flex-col gap-4 ${project.colSpan ?? ''}`}
					>
						<div className="flex items-start justify-between">
							<h3 className="text-white font-semibold text-lg">{project.title}</h3>
							{project.href && (
								<a
									href={project.href}
									target="_blank"
									rel="noreferrer"
									className="text-neutral-500 hover:text-emerald-400 transition-colors text-sm shrink-0 ml-4"
								>
									↗
								</a>
							)}
						</div>
						<p className="text-neutral-400 text-sm leading-relaxed flex-1">{project.description[lang]}</p>
						{project.metrics && (
							<p className="font-medium text-neutral-300 text-sm">{project.metrics}</p>
						)}
						{project.note && (
							<p className="text-neutral-500 italic text-xs">{project.note[lang]}</p>
						)}
						{project.aborted && (
							<p className="text-neutral-500 italic text-xs">
								{lang === 'en' ? 'Project aborted.' : 'Projet abandonné.'}
							</p>
						)}
						{project.stack.length > 0 && (
							<div className="flex flex-row gap-3 mt-1">
								{project.stack.map((icon, i) => (
									<StackIcon key={i} src={icon.src} width={icon.width} />
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
