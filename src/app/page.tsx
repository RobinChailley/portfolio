import CustomNavbarMenu from '@/sections/hero/CustomNavbarMenu';
import CustomSparkles from '@/sections/hero/CustomSparkles';
import React from 'react';
import Skills from '@/sections/hero/Skills';
import Experiences from '@/sections/experiences/Experiences';
import Me from '@/sections/me/Me';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-full h-[100vh]">
				<CustomNavbarMenu />
				<CustomSparkles />
				<Skills />
			</div>
			<div id="experiences" className="scroll-smooth">
				<Experiences />
			</div>
			<div id="about-me" className="mt-48 scroll-smooth h-[100vh]">
				<Me />
			</div>
		</main>
	);
}
