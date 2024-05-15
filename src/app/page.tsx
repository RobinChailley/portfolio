import CustomNavbarMenu from '@/sections/hero/CustomNavbarMenu';
import CustomSparkles from '@/sections/hero/CustomSparkles';
import React from 'react';
import Skills from '@/sections/hero/Skills';
import Experiences from '@/sections/experiences/Experiences';
import Me from '@/sections/me/Me';
import Contact from '@/sections/contact/Contact';
import Projects from '@/sections/projects/Projects';
import DownloadCVButton from '@/components/ui/DownloadCVButton';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<DownloadCVButton />
			<div className="w-full h-[85vh]">
				<CustomNavbarMenu />
				<CustomSparkles />
				<Skills />
			</div>
			<div id="experiences" className="pt-[15vh]">
				<Experiences />
			</div>
			<div id="about-me" className="pt-[15vh] mt-48 h-[100vh]">
				<Me />
			</div>
			<div id="projects" className="pt-[15vh] h-screen">
				<Projects />
			</div>
			<div id="contact" className="pt-[15vh] w-full h-[100vh]">
				<Contact />
			</div>
		</main>
	);
}
