import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

const categories = [
	'Пиццы',
	'Комбо',
	'Закуски',
	'Коктейли',
	'Кофе',
	'Напитки',
	'Десерты',
]

const activeIndex = 0

const Categories: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{categories.map((category, index) => (
				<a
					key={index}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						index === activeIndex &&
							'bg-white shadow-md stroke-gray-200 text-primary'
					)}
				>
					<button>{category}</button>
				</a>
			))}
		</div>
	)
}

export { Categories }
