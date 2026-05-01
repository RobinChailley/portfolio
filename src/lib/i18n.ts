import { Lang } from '@/contexts/LanguageContext';

export const ui: Record<Lang, {
	hero: { subtitle: string; tagline: string };
	nav: { experience: string; testimonials: string; about: string; projects: string; contact: string };
	career: { label: string; title: string; showMore: (n: number) => string; showLess: string };
	about: { label: string; title: string; bio: string };
	work: { label: string; title: string };
	testimonials: { label: string; title: string };
	contact: { label: string; title: string; subtitle: string };
	footer: { role: string };
	cv: string;
}> = {
	en: {
		hero: {
			subtitle: 'Fullstack Software Engineer',
			tagline: '8+ years of experience · Entrepreneur · Successful exit',
		},
		nav: {
			experience: 'Experience',
			testimonials: 'Testimonials',
			about: 'About',
			projects: 'Projects',
			contact: 'Contact',
		},
		career: {
			label: 'Career',
			title: 'Where I worked',
			showMore: (n) => `${n} more experience${n > 1 ? 's' : ''}`,
			showLess: 'Show less',
		},
		about: {
			label: 'About',
			title: 'Who I am',
			bio: "Passionate about programming since the end of secondary school, I've been coding in my spare and professional time for over 8 years, mainly in JavaScript. Closely linked to entrepreneurship, I love creating, inventing and designing.",
		},
		work: {
			label: 'Work',
			title: 'What I built',
		},
		testimonials: {
			label: 'Testimonials',
			title: 'What they said',
		},
		contact: {
			label: 'Contact',
			title: "Let's build\nsomething.",
			subtitle: 'Got a project in mind or just want to say hi? Drop me a line.',
		},
		footer: { role: 'Fullstack Software Engineer' },
		cv: 'Download CV',
	},
	fr: {
		hero: {
			subtitle: 'Ingénieur Logiciel Fullstack',
			tagline: "8+ ans d'expérience · Entrepreneur · Exit réussi",
		},
		nav: {
			experience: 'Expérience',
			testimonials: 'Témoignages',
			about: 'À propos',
			projects: 'Projets',
			contact: 'Contact',
		},
		career: {
			label: 'Parcours',
			title: "Où j'ai travaillé",
			showMore: (n) => `${n} autre${n > 1 ? 's' : ''} expérience${n > 1 ? 's' : ''}`,
			showLess: 'Voir moins',
		},
		about: {
			label: 'À propos',
			title: 'Qui je suis',
			bio: "Passionné de programmation depuis la fin du lycée, je code depuis plus de 8 ans sur mon temps personnel et professionnel, principalement en JavaScript. Très lié à l'entrepreneuriat, j'aime créer, inventer et concevoir.",
		},
		work: {
			label: 'Projets',
			title: "Ce que j'ai créé",
		},
		testimonials: {
			label: 'Témoignages',
			title: 'Ce qu\'ils ont dit',
		},
		contact: {
			label: 'Contact',
			title: 'Construisons\nquelque chose.',
			subtitle: 'Un projet en tête ou juste envie de dire bonjour ? Écrivez-moi.',
		},
		footer: { role: 'Ingénieur Logiciel Fullstack' },
		cv: 'Télécharger le CV',
	},
};
