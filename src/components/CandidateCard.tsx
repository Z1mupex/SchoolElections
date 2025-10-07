interface Candidate {
	more?: string[];
	photo: string;
	name: string;
	grade: string;
	slogan: string;
	program: string[];
	qualities: string[];
	bio: string;
	poster: string;
}

type CandidatePageProps = {
	candidate: Candidate;
	onClick: () => void;
};

export default function CandidateCard({
	candidate,
	onClick,
}: CandidatePageProps) {
	return (
		<div
			onClick={onClick}
			className='bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 cursor-pointer'
		>
			<img
				src={candidate.photo}
				alt={candidate.name}
				className='rounded-xl w-full h-56 object-cover mb-3'
			/>
			<h2 className='text-xl font-semibold'>{candidate.name}</h2>
			<p className='text-gray-500 text-sm'>{candidate.grade}</p>
			<p className='mt-2 italic text-blue-900 text-xl'>
				{candidate.slogan}
			</p>
		</div>
	);
}
