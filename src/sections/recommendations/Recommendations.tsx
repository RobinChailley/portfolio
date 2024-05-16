import React from 'react';
import InfiniteMovingCards from '@/components/aceternity/MovingCards';

const testimonials = [
	{
		quote:
			"J'ai travaillé au sein de la même équipe que Robin sur plusieurs projets de développement de taille. Tant sur son expertise du développement fullstack que sur ses qualités professionnelles il est un développeur de grande qualité. Il est un développeur sérieux, très performant et c'est un plaisir de collaborer avec lui !",
		quoteEn:
			"I've worked in the same team as Robin on several major development projects. Both in terms of his expertise in fullstack development and his professional qualities, he is a top-quality developer. He's a serious, high-performance developer, and a pleasure to work with!",
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
		quote:
			"Nous avons recruté Robin CHAILLEY en tant que stagiaire, afin de sécuriser par l'intermédiaire de jeux de test unitaire et de non régression, une application permettant de gérer les organisations commerciales au sein d'un CRM (Customer Relationship Management). Robin CHAILLEY a fait preuve d'une très bonne adaptation, d'une bonne autonomie et d'une bonne expertise dans son travail qui lui ont permis par la suite d'atteindre les objectifs fixés et même les dépasser.",
		quoteEn:
			'We recruited Robin CHAILLEY as an intern, to use unit tests and non-regression tests to secure an application for managing sales organizations within a CRM (Customer Relationship Management) system. Robin CHAILLEY showed great adaptability, autonomy and expertise in his work, which enabled him to meet and even exceed the objectives set.',
		name: 'Alexandre F',
		title: 'Senior Software Engineer - La Poste',
	},
	{
		quote:
			"Robin à réalisé des pages internet, toujours un travail de qualité, ce qui en fait sa force. Afin d'augmenter les performances et la sécurité de notre plateforme web, nous avons contacté Robin pour réaliser cette mission. Réactif, impliqué et rigoureux, rien à redire sur le travail effectué.",
		quoteEn:
			"Robin's strength lies in the quality of his work. To increase the performance and security of our web platform, we contacted Robin to carry out this mission. Responsive, involved and rigorous, there's nothing to fault in the work he's done.",
		name: 'Antoine',
		title: 'CEO QuickCells',
	},
	{
		quote:
			"Je recommande chaudement les compétences de Robin, tant professionnelles que humaines ! Robin a parfaitement su s'intégrer à l'équipe et a rendu un travail de grande qualité. Excellent !",
		quoteEn:
			"I highly recommend Robin's professional and human skills! Robin integrated perfectly into the team and delivered high-quality work. Excellent!",
		name: 'Hugo',
		title: 'CEO Origame',
	},
	{
		quote:
			'Super travail avec Robin qui a su comprendre mes besoins et livrer un rendu qualitatif. Petite mention spéciale au document livré avec le site qui permet une utilisation simplifié. Merci',
		quoteEn:
			'Great work with Robin, who understood my needs and delivered a quality product. Special mention to the document delivered with the site, which makes it easier to use. Thank you',
		name: 'Damien MP',
		title: 'CEO ExpertClub',
	},
];

export default function Recommendations() {
	return (
		<div>
			<h2 className="px-12 font-bold text-3xl text-center mb-12">
				What they thought{' '}
				<span className="relative">
					<div className="absolute left-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />
					of me
				</span>
			</h2>
			<div className="rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
			</div>
		</div>
	);
}
