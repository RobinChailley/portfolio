'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiencesJson = [
	{
		name: 'Lead Engineer, Siana',
		date: 'Jun 2025 - Apr 2026',
		description: 'Lead engineer on an AI-based mobile app for real estate. Siana is a proptech startup building AI-powered tools for the real estate market.',
		stack: ['nestjs.svg', 'firebase.png', 'react.png', 'typescript.png'],
	},
	{
		name: 'CTO & Co-founder, Magnetly',
		date: 'Jul 2024 - Nov 2025',
		description: 'Co-founded Magnetly as CTO alongside a business partner. Led the technical vision and development of an AI-powered lead generation platform. Successfully exited the company.',
		stack: ['nestjs.svg', 'firebase.png', 'react.png', 'typescript.png'],
	},
	{
		name: 'Lead Software Engineer (Freelance), TrackIt',
		date: 'Mar 2023 - Mar 2025',
		description: 'From scratch development of complex software for a major American customer.',
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'Developer Fullstack (CDI), Origame',
		date: 'Feb 2022 - Apr 2023',
		description: 'Maintenance and development of fin tech software to track expenses and subscriptions.',
		stack: ['javascript.png', 'typescript.png', 'react.png', 'nestjs.svg'],
	},
	{
		name: 'Developer Fullstack (Freelance), uMoove',
		date: 'Mar 2023 - Apr 2023',
		description: 'Development of management software for sports coaches.',
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'Developer Fullstack (Freelance), Quickcells',
		date: 'Mar 2022 - Jun 2022',
		description: 'Development of software to add graphical features to Excel.',
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'FileMaker Developer (Freelance), Zénith Toulouse, Nantes & Paris',
		date: 'Feb 2021 - Aug 2021',
		description: 'Development of complex management software for Zeniths.',
		stack: ['javascript.png', 'filemaker.png'],
	},
	{
		name: 'Fullstack Developer (Freelance), Taker',
		date: 'Feb 2019 - Dec 2019',
		description: 'Several small web development assignments.',
		stack: ['javascript.png', 'typescript.png', 'react.png'],
	},
	{
		name: 'Fullstack Developer (CDD), Devinnova',
		date: 'Feb 2019 - Dec 2019',
		description: 'Creation of a fall detection and encephalogram smoothing algorithm for a connected patch.',
		stack: ['javascript.png', 'python.png'],
	},
	{
		name: 'Python Developer (Internship), DSI La Poste',
		date: 'Jul 2018 - Dec 2018',
		description: 'Writing non-regression tests for a customer portfolio management software.',
		stack: ['python.png'],
	},
];

const VISIBLE_COUNT = 4;

export default function Experiences() {
	const [expanded, setExpanded] = useState(false);
	const visible = expanded ? experiencesJson : experiencesJson.slice(0, VISIBLE_COUNT);

	return (
		<div className="px-12 md:px-0">
			<div className="text-center mb-12">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">Career</p>
				<h2 className="text-3xl font-bold text-white">Where I worked</h2>
			</div>
			<ol className="relative border-s border-neutral-800">
				{visible.map((experience, experienceIndex) => (
					<li key={experience.name} className="mb-10 ms-6">
						<div className="absolute w-2 h-2 bg-emerald-400 rounded-full mt-2 -start-1 border-2 border-[#0c0c0c]" />
						<time className="text-xs text-neutral-500 font-mono">{experience.date}</time>
						<h3 className="text-white font-semibold mt-1">{experience.name}</h3>
						<p className="text-neutral-400 text-sm mt-1 mb-3">{experience.description}</p>
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
					<><ChevronUp size={15} /> Show less</>
				) : (
					<><ChevronDown size={15} /> {experiencesJson.length - VISIBLE_COUNT} more experiences</>
				)}
			</button>
		</div>
	);
}
