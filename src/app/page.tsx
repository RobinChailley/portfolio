import CustomNavbarMenu from '@/sections/hero/CustomNavbarMenu';
import CustomSparkles from '@/sections/hero/CustomSparkles';
import React from 'react';
import Experiences from '@/sections/experiences/Experiences';
import Me from '@/sections/me/Me';
import Contact from '@/sections/contact/Contact';
import Projects from '@/sections/projects/Projects';
import Recommendations from '@/sections/recommendations/Recommendations';
import FadeIn from '@/components/ui/FadeIn';
import Footer from '@/components/ui/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
<LanguageSwitcher />
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
			<Footer />
		</main>
	);
}
