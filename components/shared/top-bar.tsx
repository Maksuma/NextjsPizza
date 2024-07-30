import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'
import React from 'react'
import { Categories, SortPopup } from '.'
import { Container } from './container'

interface Props {
	categories: Category[]
	className?: string
}

const TopBar: React.FC<Props> = ({ categories, className }) => {
	return (
		<div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
			<Container className='flex justify-between items-center'>
				<Categories categories={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}

export { TopBar }
