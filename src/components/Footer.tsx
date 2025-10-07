export default function Footer() {
	return (
		<footer className='bg-gray-900 text-gray-300 mt-12'>
			<div className='max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4'>
				<div className='text-center md:text-left'>
					<h3 className='text-lg font-semibold text-white'>
						Школьные выборы 2025
					</h3>
					<p className='text-sm text-gray-400'>
						Сделано учениками с энтузиазмом и уважением к каждому
						кандидату.
					</p>
				</div>

				<div>
					<h1 className='text-xl font-semibold text-white'>
						Важная информация:
					</h1>
					<p className='text-gray-400 text-sm'>
						Платформа сделана при поддержке Гаврикова Игоря
						Александровича, кандидатом в президенты: Подглазовым
						Никитой. Использованные данные были полностью взяты с
						изготовленных самими кандидатами программах, ничего не
						было изменено. Мы соблюдаем академическую честность!
					</p>
				</div>

				<div className='text-sm text-gray-500'>
					© {new Date().getFullYear()} Все права защищены
				</div>
			</div>
		</footer>
	);
}
