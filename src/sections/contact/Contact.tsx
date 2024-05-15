'use client';

import React from 'react';
import BackgroundBeams from '@/components/aceternity/BackgroundBeams';

export default function Contact() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-300 text-center font-sans font-bold">
					Need something?
				</h1>
				<p />
				<p className="relative text-neutral-500 max-w-lg mx-auto my-2 mt-6 text-sm text-center relative z-10">
					Feel free to contact me at{' '}
					<a className="text-neutral-400 italic" href="mailto:robin.chailley@gmail.com">
						robin.chailley@gmail.com
					</a>
					<span className="absolute right-[70px] bottom-[-4px] bg-gradient-to-r from-transparent via-sky-500 z-10 to-transparent h-[2px] w-[200px]" />
				</p>
			</div>
			<BackgroundBeams className="bg-black" />
		</div>
	);
}
