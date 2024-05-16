import CustomNavbarMenu from '@/sections/hero/CustomNavbarMenu';
import CustomSparkles from '@/sections/hero/CustomSparkles';
import React from 'react';
import Experiences from '@/sections/experiences/Experiences';
import Me from '@/sections/me/Me';
import Contact from '@/sections/contact/Contact';
import Projects from '@/sections/projects/Projects';
import DownloadCVButton from '@/components/ui/DownloadCVButton';
import Recommendations from '@/sections/recommendations/Recommendations';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<DownloadCVButton />
			<div className="w-full h-[85vh]">
				<CustomNavbarMenu />
				<CustomSparkles />
			</div>
			<div id="experiences" className="pt-[15vh]">
				<Experiences />
			</div>
			<div id="recommendations" className="pt-[15vh]">
				<Recommendations />
			</div>
			<div id="about-me" className="pt-[15vh] mt-24">
				<Me />
			</div>
			<div id="projects" className="pt-[15vh]">
				<Projects />
			</div>
			<div id="contact" className="pt-[15vh] w-full h-[100vh]">
				<Contact />
			</div>
			<footer className="border-[1px] items-center w-full gap-12 flex px-32 h-32">
				<div className="flex flex-col h-full justify-center gap-3">
					<p className="text-gray-400">©️2024 - Robin Chailley</p>
					<p className="text-gray-400">Fullstack Software Engineer</p>
				</div>
				<div className="flex flex-col h-full justify-center gap-3">
					<a className="text-gray-400" target="_blank" href="https://www.linkedin.com/in/robin-chailley/">
						<Linkedin />
					</a>
					<a className="text-gray-400" target="_blank" href="https://github.com/RobinChailley">
						<Github />
					</a>
				</div>
			</footer>
		</main>
	);
}
