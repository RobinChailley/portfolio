'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, MenuItem } from '@/components/aceternity/NavbarMenu';

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} href="#experiences" item="Experiences" />
				<MenuItem setActive={setActive} active={active} href="#about-me" item="About Me" />
				<MenuItem setActive={setActive} active={active} href="#projects" item="Projects" />
				<MenuItem setActive={setActive} active={active} href="#contact" item="Contact" />
			</Menu>
		</div>
	);
}
