import React from 'react';
import Image from 'next/image';

const STACK_NAMES: Record<string, string> = {
	'android.svg': 'Android',
	'apple.webp': 'iOS',
	'aws.png': 'AWS',
	'filemaker.png': 'FileMaker',
	'firebase.png': 'Firebase',
	'javascript.png': 'JavaScript',
	'nestjs.svg': 'NestJS',
	'python.png': 'Python',
	'react.png': 'React',
	'typescript.png': 'TypeScript',
	'wordpress.webp': 'WordPress',
};

export default function StackIcon({ src, width = 20 }: { src: string; width?: number }) {
	const file = src.replace(/^\//, '');
	const name = STACK_NAMES[file] ?? file.replace(/\.[^.]+$/, '');

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
		<span tabIndex={0} className="group/stack relative inline-flex items-center outline-none">
			<Image alt={name} width={width} height={20} src={`/${file}`} />
			<span
				role="tooltip"
				className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-200 opacity-0 transition-opacity duration-150 group-hover/stack:opacity-100 group-focus/stack:opacity-100"
			>
				{name}
			</span>
		</span>
	);
}
