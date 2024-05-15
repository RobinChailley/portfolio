'use client';

import React from 'react';
import BackgroundBeams from '@/components/aceternity/BackgroundBeams';

export default function Contact() {
	return (
		<div className="h-[40rem] px-6 sm:px-0 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-300 text-center font-sans font-bold">
					Need something?
				</h1>
				<p />
				<p className="relative text-neutral-400 max-w-lg mx-auto my-2 mt-6 text-sm text-center z-10">
					Feel free to contact me at{' '}
					<a className="w-fit relative text-neutral-300 italic" href="mailto:robin.chailley@gmail.com">
						robin.chailley@gmail.com
						<span className="absolute right-[-16px] bottom-[-4px] bg-gradient-to-r from-transparent via-sky-500 z-10 to-transparent h-[2px] w-[200px]" />
					</a>
				</p>
			</div>
			<BackgroundBeams className="bg-black" />
		</div>
	);
}
