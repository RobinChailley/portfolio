import React from 'react';

export default function Contact() {
	return (
		<div className="w-full py-32 px-6 flex flex-col items-center justify-center text-center">
			<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-6">Contact</p>
			<h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
				Let&apos;s build
				<br />
				something.
			</h2>
			<p className="text-neutral-400 mb-10 max-w-sm leading-relaxed">
				Got a project in mind or just want to say hi? Drop me a line.
			</p>
			<a
				href="mailto:robin.chailley@gmail.com"
				className="group flex items-center gap-3 text-neutral-300 hover:text-white border border-neutral-700 hover:border-emerald-400/50 rounded-full px-6 py-3 transition-all duration-300"
			>
				robin.chailley@gmail.com
				<span className="text-emerald-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
			</a>
		</div>
	);
}
