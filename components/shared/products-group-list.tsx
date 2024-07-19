'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'
import { useIntersection } from 'react-use'
import { ProductCard } from '.'
import { Title } from '../ui'

interface Props {
	title: string
	product: any[]
	categoryId: number
	className?: string
	listClassName?: string
}

const ProductsGroupList: React.FC<Props> = ({
	title,
	product,
	categoryId,
	className,
	listClassName,
}) => {
	const intersectionRef = React.useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection])

	return (
		<div className={cn('', className)} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='mb-5 font-extrabold' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{product.map(item => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.items[0].price}
						imageUrl={item.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export { ProductsGroupList }
