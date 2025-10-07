import { useState } from "react";
import CandidateCard from "./components/CandidateCard";
import CandidatePage from "./components/CandidatePage";
import { candidates } from "./const/index.js";
import Footer from "./components/Footer.js";

export default function App() {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<div>
			<div className='min-h-screen bg-gray-50 p-6'>
				{!selected ? (
					<>
						<h1 className='text-3xl font-bold text-center mb-6'>
							Выборы президента школы 2025–2026
						</h1>
						<h1 className='text-3xl font-bold text-center mb-6'>
							ВНИМАНИЕ! Проголосовать можно будет на 3 недели
							октября(20.10-24.10). Точная дата будет известна
							позже.
						</h1>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
							{candidates.map((c) => (
								<CandidateCard
									key={c.id}
									candidate={c}
									onClick={() => setSelected(c.id)}
								/>
							))}
						</div>
					</>
				) : (
					<CandidatePage
						candidate={candidates.find((c) => c.id === selected)!}
						onBack={() => setSelected(null)}
					/>
				)}
			</div>
			<Footer></Footer>
		</div>
	);
}
