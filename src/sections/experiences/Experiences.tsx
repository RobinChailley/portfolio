import React from 'react';
import Image from 'next/image';

const experiencesJson = [
	{
		name: 'Lead Software Engineer (Freelance), TrackIt',
		date: 'Mar 2023 - Today',
		description: 'From scratch development of complex software for a major American customer',
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
	// {
	// 	name: 'Bac +5, Epitech',
	// 	date: 'Oct 2017 - Jun 2022',
	// 	description: 'Earned a Bac +5 in Computer Science from Epitech, emphasizing hands-on project-based learning.',
	// 	stack: [],
	// },
];

export default function Experiences() {
	return (
		<div className="px-12 md:px-0">
			<h2 className="font-bold text-3xl text-center mb-12">
				Where I{' '}
				<span className="relative">
					<div className="absolute left-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />
					worked
				</span>
			</h2>
			<ol className="relative border-s border-gray-200 dark:border-gray-700">
				{experiencesJson.map((experience, experienceIndex) => (
					<li key={experience.name} className="mb-10 ms-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
						<div className="flex justify-between items-center">
							<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								{experience.date}
							</time>
							<p className="dark:text-gray-500 border-2 px-4 py-1 text-sm sm:text-base rounded-full ">Full Remote</p>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.name}</h3>
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
						<div className="flex flex-row gap-3">
							{experience.stack.map((stack, stackIndex) => (
								<Image
									key={`${stack}${stackIndex}${experienceIndex}`}
									alt="stack"
									width={24}
									height={24}
									src={`/${stack}`}
								/>
							))}
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
