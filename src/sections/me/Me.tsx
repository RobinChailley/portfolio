import React from 'react';
import { HoverEffect } from '@/components/aceternity/CardHoverEffect';

export const projects = [
	{
		title: '+5 years of experience',
		description:
			'Passionate about programming since high school, I bring over 10 years of coding experience, including more than 5 years of cumulative professional experience.',
	},
	{
		title: 'Fullstack Development',
		description:
			'With over 7 years of experience in both frontend and backend development, I excel at creating efficient applications. My expertise in JavaScript enables me to build robust, scalable, and maintainable solutions.',
	},
	{
		title: 'Web Development',
		description:
			'Proficient in modern web technologies, I create dynamic and responsive web applications built with best practices and optimized for performance and user experience',
	},
	{
		title: 'Mobile Development',
		description:
			'Skilled in React Native, I build cross-platform mobile apps optimized for performance, usability, and seamless interactions on iOS and Android.',
	},
	{
		title: 'Software Project Leadership',
		description:
			"As a lead software engineer, I've successfully managed a development team. My experience highlights my ability to drive projects from start to finish while maintaining high standards.",
	},
	{
		title: 'Entrepreneurial Spirit',
		description:
			'My entrepreneurial ventures, such as PronoApp, highlight my passion for innovation and problem-solving. I thrive in environments where I can create, invent, and design new solutions.',
	},
];

export default function Me() {
	return (
		<div className="max-w-full flex items-center flex-col sm:max-w-[80vw]">
			<h2 className="font-bold text-3xl text-center mb-6">
				Who I{' '}
				<span className="relative ">
					<div className="absolute left-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />
					am
				</span>
			</h2>
			<p className="text-center dark:text-gray-400 px-12 max-w-full sm:px-0 sm:max-w-[60vw]">
				Passionate about programming since the end of secondary school, I&apos;ve been coding in my spare and
				professional time for over 10 years, mainly in Javascript. Closely linked to entrepreneurship, I love creating,
				inventing and designing.
			</p>
			<div className="max-w-5xl mt-6 mx-auto px-8">
				<HoverEffect items={projects} />
			</div>
		</div>
	);
}
