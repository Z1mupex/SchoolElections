import { useEffect } from "react";
import InstagramEmbed from "./InstagramEmbed";

declare global {
	interface Window {
		instgrm?: {
			Embeds: {
				process: () => void;
			};
		};
	}
}

interface Candidate {
	id: number;
	more?: string[];
	photo: string;
	name: string;
	grade: string;
	slogan: string;
	program: string[];
	qualities: string[];
	bio: string;
	poster: string;
	video: string;
}

type CandidatePageProps = {
	candidate: Candidate;
	onBack: () => void;
};

export default function CandidatePage({
	candidate,
	onBack,
}: CandidatePageProps) {
	useEffect(() => {
		if (
			!document.querySelector(
				'script[src="//www.instagram.com/embed.js"]'
			)
		) {
			const script = document.createElement("script");
			script.src = "//www.instagram.com/embed.js";
			script.async = true;
			document.body.appendChild(script);
		} else if (window.instgrm) {
			window.instgrm.Embeds.process();
		}
	}, [candidate]);

	return (
		<div className='max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow'>
			<button
				onClick={onBack}
				className='text-blue-500 hover:underline mb-4 font-medium'
			>
				← Назад ко всем
			</button>
			<div className='flex flex-col sm:flex-row gap-6'>
				<img
					src={candidate.photo}
					alt={candidate.name}
					className='w-40 h-40 rounded-xl object-cover'
				/>
				<div>
					<h1 className='text-2xl font-bold'>{candidate.name}</h1>
					<p className='text-gray-500'>{candidate.grade}</p>
					<p className='italic mt-1'>“{candidate.slogan}”</p>
				</div>
			</div>

			<section className='mt-6'>
				<h2 className='text-xl font-semibold mb-2'>Моя программа</h2>
				<ul className='list-disc list-inside text-gray-700 space-y-1'>
					{candidate.program.map((item, i) => (
						<li key={i} className=''>
							<span className='font-medium'>{item}</span>
							{candidate.more?.[i] && (
								<p className='text-sm text-gray-600'>
									{candidate.more[i]}
								</p>
							)}
						</li>
					))}
				</ul>
			</section>

			<section className='mt-6'>
				<h2 className='text-xl font-semibold mb-2'>Качества</h2>
				<div className='flex flex-wrap gap-2'>
					{candidate.qualities.map((q, i) => (
						<span
							key={i}
							className='bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-md'
						>
							{q}
						</span>
					))}
				</div>
			</section>

			<section className='mt-6'>
				<h2 className='text-xl font-semibold mb-2'>О себе</h2>
				<p className='text-gray-700'>{candidate.bio}</p>
			</section>

			<section className='mt-6'>
				<h2 className='text-xl font-semibold mb-2'>
					Оригинальный плакат
				</h2>
				<img
					src={candidate.poster}
					alt='Плакат кандидата'
					className='rounded-xl w-full object-contain'
				/>
			</section>
			<InstagramEmbed id={candidate.id} url={candidate.video} />
		</div>
	);
}
