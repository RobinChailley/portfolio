'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function MenuItem({
	setActive,
	active,
	item,
	href,
}: {
	active: string | null;
	setActive: (item: string) => void;
	item: string;
	href: string;
}) {
	return (
		<div className="relative">
			<a
				href={href}
				onMouseEnter={() => setActive(item)}
				className={cn('cursor-pointer text-black dark:text-white', { 'opacity-[0.8] ': item === active })}
			>
				{item}
			</a>
			{item === active && (
				<div className="relative">
					<div className="absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
					<div className="absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
					<div className="absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/4 blur-sm" />
					<div className="absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
				</div>
			)}
		</div>
	);
}

export function Menu({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) {
	return (
		<nav
			onMouseLeave={() => setActive(null)} // resets the state
			className={cn(
				'relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ',
			)}
		>
			{children}
		</nav>
	);
}
