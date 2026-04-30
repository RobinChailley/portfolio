import React from 'react';

const skills = [
	{
		title: '+5 years of experience',
		description:
			'Passionate about programming since high school, I started to code 7 years ago, including more than 5 years of cumulative professional experience.',
	},
	{
		title: 'Fullstack Development',
		description:
			'With over 5 years of experience in both frontend and backend development, I excel at creating efficient applications. My expertise in JavaScript enables me to build robust, scalable, and maintainable solutions.',
	},
	{
		title: 'Web Development',
		description:
			'Proficient in modern web technologies, I create dynamic and responsive web applications built with best practices and optimized for performance and user experience.',
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
			'I founded and sold my first company, and launched multiple profitable SaaS products. I thrive in environments where I can create, invent, and design new solutions.',
	},
];

export default function Me() {
	return (
		<div className="max-w-full flex items-center flex-col sm:max-w-[80vw]">
			<div className="text-center mb-8">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">About</p>
				<h2 className="text-3xl font-bold text-white">Who I am</h2>
			</div>
			<p className="text-center text-neutral-400 px-12 max-w-full sm:px-0 sm:max-w-[60vw] leading-relaxed">
				Passionate about programming since the end of secondary school, I&apos;ve been coding in my spare and
				professional time for over 7 years, mainly in Javascript. Closely linked to entrepreneurship, I love creating,
				inventing and designing.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl w-full px-6 sm:px-0">
				{skills.map((item) => (
					<div
						key={item.title}
						className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-400/30 transition-colors duration-300"
					>
						<h3 className="text-white font-semibold mb-2">{item.title}</h3>
						<p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
