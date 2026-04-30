import CustomNavbarMenu from '@/sections/hero/CustomNavbarMenu';
import CustomSparkles from '@/sections/hero/CustomSparkles';
import React from 'react';
import Experiences from '@/sections/experiences/Experiences';
import Me from '@/sections/me/Me';
import Contact from '@/sections/contact/Contact';
import Projects from '@/sections/projects/Projects';
import DownloadCVButton from '@/components/ui/DownloadCVButton';
import Recommendations from '@/sections/recommendations/Recommendations';
import FadeIn from '@/components/ui/FadeIn';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<DownloadCVButton />
			<div className="w-full h-[85vh]">
				<CustomNavbarMenu />
				<CustomSparkles />
			</div>
			<FadeIn id="experiences" className="pt-[15vh] max-w-2xl w-full px-6 md:px-0">
				<Experiences />
			</FadeIn>
			<FadeIn id="testimonials" className="pt-[15vh] w-full">
				<Recommendations />
			</FadeIn>
			<FadeIn id="about-me" className="pt-[15vh] mt-12 w-full flex justify-center">
				<Me />
			</FadeIn>
			<FadeIn id="projects" className="pt-[15vh] w-full flex justify-center">
				<Projects />
			</FadeIn>
			<FadeIn id="contact" className="pt-[15vh] w-full">
				<Contact />
			</FadeIn>
			<footer className="border-t border-neutral-800 w-full px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div className="flex flex-col gap-1">
					<p className="text-white font-medium">Robin Chailley</p>
					<p className="text-neutral-500 text-sm">Fullstack Software Engineer</p>
				</div>
				<div className="flex flex-col gap-2 items-start sm:items-end">
					<div className="flex items-center gap-4">
						<a
							className="text-neutral-500 hover:text-white transition-colors"
							target="_blank"
							href="https://www.linkedin.com/in/robin-chailley/"
						>
							<Linkedin size={18} />
						</a>
						<a
							className="text-neutral-500 hover:text-white transition-colors"
							target="_blank"
							href="https://github.com/RobinChailley"
						>
							<Github size={18} />
						</a>
					</div>
					<p className="text-neutral-600 text-xs">© {new Date().getFullYear()} Robin Chailley</p>
				</div>
			</footer>
		</main>
	);
}
