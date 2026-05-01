'use client';

import React from 'react';
import InfiniteMovingCards from '@/components/aceternity/MovingCards';
import { useLanguage } from '@/contexts/LanguageContext';
import { ui } from '@/lib/i18n';

const testimonials = [
	{
		quote: 'Robin est un profil rare : il comprend très rapidement les enjeux business et propose des solutions à la fois rapides, pertinentes et efficaces.',
		quoteEn: 'Robin is a rare profile: he grasps business challenges very quickly and delivers solutions that are fast, relevant, and effective.',
		name: 'Valentin Cordier',
		title: 'CEO · Siana',
	},
	{
		quote: "J'ai travaillé au sein de la même équipe que Robin sur plusieurs projets de développement de taille. Tant sur son expertise du développement fullstack que sur ses qualités professionnelles il est un développeur de grande qualité. Il est un développeur sérieux, très performant et c'est un plaisir de collaborer avec lui !",
		quoteEn: "I've worked in the same team as Robin on several major development projects. Both in terms of his expertise in fullstack development and his professional qualities, he is a top-quality developer. He's a serious, high-performance developer, and a pleasure to work with!",
		name: 'Robin Leclerc',
		title: 'Senior Security Engineer',
	},
	{
		quote: 'Bonne communication. Sérieux et efficace ! Je recommande Robin pour son professionnalisme',
		quoteEn: 'Good communication. Serious and efficient! I recommend Robin for his professionalism',
		name: 'Nad Risen',
		title: '',
	},
	{
		quote: "Nous avons recruté Robin CHAILLEY en tant que stagiaire, afin de sécuriser par l'intermédiaire de jeux de test unitaire et de non régression, une application permettant de gérer les organisations commerciales au sein d'un CRM. Robin CHAILLEY a fait preuve d'une très bonne adaptation, d'une bonne autonomie et d'une bonne expertise dans son travail.",
		quoteEn: 'We recruited Robin CHAILLEY as an intern to secure a CRM application using unit and non-regression tests. Robin showed great adaptability, autonomy and expertise, enabling him to meet and even exceed the objectives set.',
		name: 'Alexandre F',
		title: 'Senior Software Engineer · La Poste',
	},
	{
		quote: "Robin à réalisé des pages internet, toujours un travail de qualité, ce qui en fait sa force. Afin d'augmenter les performances et la sécurité de notre plateforme web, nous avons contacté Robin pour réaliser cette mission. Réactif, impliqué et rigoureux, rien à redire sur le travail effectué.",
		quoteEn: "Robin's strength lies in the quality of his work. To increase the performance and security of our web platform, we contacted Robin to carry out this mission. Responsive, involved and rigorous, there's nothing to fault.",
		name: 'Antoine',
		title: 'CEO · QuickCells',
	},
	{
		quote: "Je recommande chaudement les compétences de Robin, tant professionnelles que humaines ! Robin a parfaitement su s'intégrer à l'équipe et a rendu un travail de grande qualité. Excellent !",
		quoteEn: "I highly recommend Robin's professional and human skills! Robin integrated perfectly into the team and delivered high-quality work. Excellent!",
		name: 'Hugo',
		title: 'CEO · Origame',
	},
	{
		quote: 'Super travail avec Robin qui a su comprendre mes besoins et livrer un rendu qualitatif. Petite mention spéciale au document livré avec le site qui permet une utilisation simplifié. Merci',
		quoteEn: 'Great work with Robin, who understood my needs and delivered a quality product. Special mention to the document delivered with the site, which makes it easier to use. Thank you',
		name: 'Damien MP',
		title: 'CEO · ExpertClub',
	},
];

export default function Recommendations() {
	const { lang } = useLanguage();
	const t = ui[lang].testimonials;

	return (
		<div>
			<div className="text-center mb-12">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">{t.label}</p>
				<h2 className="text-3xl font-bold text-white">{t.title}</h2>
			</div>
			<div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards items={testimonials} direction="right" speed="slow" lang={lang} />
			</div>
		</div>
	);
}
