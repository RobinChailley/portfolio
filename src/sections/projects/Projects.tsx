import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
	title: string;
	description: React.ReactNode;
	href?: string;
	colSpan?: string;
}

function ProjectCard({ title, description, href, colSpan = '' }: ProjectCardProps) {
	return (
		<div className={`group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors duration-300 flex flex-col gap-4 ${colSpan}`}>
			<div className="flex items-start justify-between">
				<h3 className="text-white font-semibold text-lg">{title}</h3>
				{href && (
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						className="text-neutral-500 hover:text-emerald-400 transition-colors text-sm shrink-0 ml-4"
					>
						↗
					</a>
				)}
			</div>
			<div className="text-neutral-400 text-sm leading-relaxed flex-1">{description}</div>
		</div>
	);
}

function StackIcons({ icons }: { icons: { src: string; width?: number }[] }) {
	return (
		<div className="flex flex-row gap-3 mt-2">
			{icons.map((icon, i) => (
				<Image key={i} alt="stack" width={icon.width ?? 20} height={20} src={icon.src} />
			))}
		</div>
	);
}

export default function Projects() {
	return (
		<div className="max-w-[80vw] w-full">
			<div className="text-center mb-12">
				<p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">Work</p>
				<h2 className="text-3xl font-bold text-white">What I built</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Magnetly — flagship, big card */}
				<ProjectCard
					colSpan="md:col-span-2"
					title="Magnetly"
					href="https://magnetly.co"
					description={
						<>
							<p>
								Magnetly simplifies creating AI-powered tools like calculators to boost SEO and generate leads. Build
								and embed custom tools in minutes, track performance, and optimize your acquisition strategy.
							</p>
							<p className="mt-3">
								Trusted by leading companies like Submagic, Waalaxy, Breakcold, and Human Linker.
							</p>
							<p className="mt-3 font-medium text-neutral-300">1,000+ users · €2,000/month MRR at peak</p>
							<p className="mt-1 text-neutral-500 italic text-xs">
								Co-founded as CTO alongside a business partner. Successfully exited the company in 2025.
							</p>
							<StackIcons
								icons={[
									{ src: '/nestjs.svg' },
									{ src: '/python.png' },
									{ src: '/react.png' },
									{ src: '/typescript.png' },
									{ src: '/firebase.png', width: 24 },
								]}
							/>
						</>
					}
				/>

				{/* PronoApp */}
				<ProjectCard
					title="PronoApp"
					description={
						<>
							<p>
								A highly customizable CMS platform enabling sports tipsters to build their own professional websites,
								with themes, subscriptions, and a member area.
							</p>
							<p className="mt-3 font-medium text-neutral-300">€1,000+/month at peak · 50+ simultaneous users</p>
							<StackIcons
								icons={[
									{ src: '/nestjs.svg' },
									{ src: '/python.png' },
									{ src: '/react.png' },
									{ src: '/typescript.png' },
									{ src: '/aws.png', width: 24 },
								]}
							/>
						</>
					}
				/>

				{/* Maarco */}
				<ProjectCard
					title="Maarco"
					description={
						<>
							<p>A mobile app making calorie tracking effortless, with a strong focus on UX.</p>
							<p className="mt-3 font-medium text-neutral-300">600+ users · €300/month at peak</p>
							<StackIcons
								icons={[
									{ src: '/nestjs.svg' },
									{ src: '/react.png' },
									{ src: '/typescript.png' },
									{ src: '/firebase.png', width: 20 },
									{ src: '/apple.webp', width: 20 },
									{ src: '/android.svg', width: 26 },
								]}
							/>
						</>
					}
				/>

				{/* Howsit */}
				<ProjectCard
					title="Howsit"
					description={
						<>
							<p>SaaS platform for collecting website feedback via embeddable widgets (questions, ratings, MCQ).</p>
							<p className="mt-3 font-medium text-neutral-300">€300/month at peak</p>
							<StackIcons
								icons={[
									{ src: '/nestjs.svg' },
									{ src: '/react.png' },
									{ src: '/typescript.png' },
									{ src: '/firebase.png', width: 20 },
								]}
							/>
						</>
					}
				/>

				{/* KuryAI */}
				<ProjectCard
					title="KuryAI"
					description={
						<>
							<p>
								AI SaaS for marketing agencies — scrapes client websites to generate content, identify targets, and
								write UGC scripts.
							</p>
							<p className="mt-3 text-neutral-500 italic text-xs">Project aborted.</p>
							<StackIcons
								icons={[
									{ src: '/nestjs.svg' },
									{ src: '/react.png' },
									{ src: '/typescript.png' },
									{ src: '/firebase.png', width: 20 },
								]}
							/>
						</>
					}
				/>

				{/* Epijob */}
				<ProjectCard
					colSpan="md:col-span-2"
					title="Epijob"
					description={
						<>
							<p>
								A web platform for top schools like Epitech to manage their alumni networks. Students can browse
								thousands of internship opportunities recommended by alumni.
							</p>
							<p className="mt-3 text-neutral-500 italic text-xs">
								Widely used by a significant portion of my graduating class.
							</p>
							<StackIcons
								icons={[
									{ src: '/nestjs.svg' },
									{ src: '/react.png' },
									{ src: '/typescript.png' },
									{ src: '/aws.png', width: 24 },
								]}
							/>
						</>
					}
				/>

				{/* T3K */}
				<ProjectCard
					title="T3K"
					description={
						<>
							<p>
								My first entrepreneurial venture — a local agency delivering websites and SEO services for small
								businesses. Served six clients successfully.
							</p>
							<StackIcons icons={[{ src: '/wordpress.webp', width: 26 }]} />
						</>
					}
				/>
			</div>
		</div>
	);
}
