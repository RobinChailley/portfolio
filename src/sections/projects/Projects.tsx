import React from 'react';
import Custom3DCard from '@/components/ui/Custom3DCard';
import Image from 'next/image';

export default function Projects() {
	return (
		<div className="max-w-[80vw]">
			<h2 className="font-bold text-3xl text-center mb-12">
				What I{' '}
				<span className="relative ">
					<div className="absolute left-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />
					did
				</span>
			</h2>
			<div className="flex gap-3 justify-center flex-wrap flex-row">
				<div className="flex flex-col gap-3">
					<Custom3DCard
						description={
							<>
								<span>
									PronoApp is a <strong>highly customizable CMS platform</strong> designed to enable sports tipsters to
									create their own professional websites.
								</span>
								<br />
								<br />
								<span>
									Developed over more than two years, including one year almost full-time, PronoApp features several
									themes, a front office for tipsters to manage their community, free trials, paid subscriptions and a
									membership area.
								</span>
								<br />
								<br />
								<span>
									<em>
										At its peak, over 50 customers logged on simultaneously, generating over{' '}
										<strong>€1,000 per month</strong>.
									</em>
								</span>
								<br />
								<br />
								<span className="flex gap-3">
									<Image alt="stack" width={24} height={24} src="/nestjs.svg" />
									<Image alt="stack" width={24} height={24} src="/python.png" />
									<Image alt="stack" width={24} height={24} src="/react.png" />
									<Image alt="stack" width={24} height={24} src="/typescript.png" />
									<Image alt="stack" width={28} height={24} src="/aws.png" />
								</span>
							</>
						}
						title="PronoApp"
					/>
					<Custom3DCard
						description={
							<>
								<span>
									Howsit is a SaaS platform designed to help websites collect feedback directly on their own site
									through simple and elegant widgets.
								</span>
								<br />
								<br />
								<span>
									Built in just a few months, Howsit offers a variety of widgets including simple questions, multiple
									choice, and 1-5 ratings. These widgets can be seamlessly embedded into customer websites via a custom
									SDK.
								</span>
								<br />
								<br />
								<span>
									<em>
										At its peak, Howsit generated <strong>€300 per month.</strong>
									</em>
								</span>
								<br />
								<br />
								<span className="flex gap-3">
									<Image alt="stack" width={24} height={24} src="/nestjs.svg" />
									<Image alt="stack" width={24} height={24} src="/react.png" />
									<Image alt="stack" width={24} height={24} src="/typescript.png" />
									<Image alt="stack" width={28} height={24} src="/firebase.png" />
								</span>
							</>
						}
						title="Howsit"
					/>
					<Custom3DCard
						description={
							<>
								<span>
									KuryAI is a cutting-edge SaaS platform designed to simplify daily tasks for{' '}
									<strong>marketing agencies</strong>. By leveraging AI, KuryAI scrapes client websites to generate
									relevant content, identify target customers, and create well-written <strong>UGC scripts</strong>.
								</span>
								<br />
								<br />
								<span>Started as a side project six months ago, KuryAI combines innovation and practicality.</span>
								<br />
								<br />
								<span>
									<em>This project is still under progress.</em>
								</span>
								<br />
								<br />
								<span className="flex gap-3">
									<Image alt="stack" width={24} height={24} src="/nestjs.svg" />
									<Image alt="stack" width={24} height={24} src="/react.png" />
									<Image alt="stack" width={24} height={24} src="/typescript.png" />
									<Image alt="stack" width={24} height={24} src="/firebase.png" />
								</span>
							</>
						}
						title="KuryAI"
					/>
				</div>
				<div className="flex flex-col gap-3">
					<Custom3DCard
						description={
							<>
								<span>
									Maarco is a mobile app designed to make calorie tracking effortless and intuitive, with a strong focus
									on providing the best user experience possible.
								</span>
								<br />
								<br />
								<span>
									<em>
										Developed over more than a year, Maarco achieved a peak user base of over 600 customers, generating
										more than <strong>€300 per month.</strong>
									</em>
								</span>
								<br />
								<br />
								<span className="flex gap-3">
									<Image alt="stack" width={24} height={24} src="/nestjs.svg" />
									<Image alt="stack" width={24} height={24} src="/react.png" />
									<Image alt="stack" width={24} height={24} src="/typescript.png" />
									<Image alt="stack" width={25} height={24} src="/firebase.png" />
									<Image alt="stack" width={24} height={24} src="/apple.webp" />
									<Image alt="stack" width={32} height={32} src="/android.svg" />
								</span>
							</>
						}
						title="Maarco"
					/>
					<Custom3DCard
						description={
							<>
								<span>
									Epijob is a web platform designed for top schools like Epitech to manage their alumni networks.
								</span>
								<br />
								<br />
								<span>
									It enables students searching for internships to browse thousands of opportunities in companies where
									alumni have interned and are recommended. It was developed during my studies in collaboration with my
									school.
								</span>
								<br />
								<br />
								<span>
									<em>Epijob was widely used by a significant portion of my class.</em>
								</span>
								<br />
								<br />
								<span className="flex gap-3">
									<Image alt="stack" width={24} height={24} src="/nestjs.svg" />
									<Image alt="stack" width={24} height={24} src="/react.png" />
									<Image alt="stack" width={24} height={24} src="/typescript.png" />
									<Image alt="stack" width={28} height={24} src="/aws.png" />
								</span>
							</>
						}
						title="Epijob"
					/>
					<Custom3DCard
						description={
							<>
								<span>
									T3K was my first entrepreneurial venture, a local agency dedicated to developing websites and
									providing SEO services for small businesses in my city.
								</span>
								<br />
								<br />
								<span>
									Through T3K, I successfully served <strong>six clients</strong>, helping them enhance their online
									presence and reach their target audiences.
								</span>
								<br />
								<br />
								<span className="flex gap-3">
									<Image alt="stack" width={32} height={32} src="/wordpress.webp" />
								</span>
							</>
						}
						title="T3K"
					/>
				</div>
			</div>
		</div>
	);
}
