'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { Category } from '@prisma/client'
import React from 'react'

interface Props {
	categories: Category[]
	className?: string
}

const Categories: React.FC<Props> = ({ categories, className }) => {
	const activeCategoryId = useCategoryStore(state => state.activeId)
	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map(({ name, id }, index) => (
				<a
					key={index}
					href={`#${name}`}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeCategoryId === id && 'bg-white shadow-md stroke-gray-200 text-primary'
					)}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	)
}

export { Categories }
