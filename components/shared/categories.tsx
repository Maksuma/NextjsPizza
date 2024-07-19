'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

interface Props {
	className?: string
}

const categories = [
	{ id: 1, name: 'Пиццы' },
	{ id: 2, name: 'Комбо' },
	{ id: 3, name: 'Закуски' },
	{ id: 4, name: 'Коктейли' },
	{ id: 5, name: 'Кофе' },
	{ id: 6, name: 'Напитки' },
	{ id: 7, name: 'Десерты' },
]

const Categories: React.FC<Props> = ({ className }) => {
	const activeCategoryId = useCategoryStore(state => state.activeId)
	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{categories.map(({ name, id }, index) => (
				<a
					key={index}
					href={`#${name}`}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeCategoryId === id &&
							'bg-white shadow-md stroke-gray-200 text-primary'
					)}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	)
}

export { Categories }
