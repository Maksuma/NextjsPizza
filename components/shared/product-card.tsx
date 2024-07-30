import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button, Title } from '../ui'

interface Props {
	id: number
	name: string
	price: number
	imageUrl: string
	className?: string
}

const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
	return (
		<div className={cn('', className)}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<img className='size-[215px]' src={imageUrl} alt={name} />
				</div>

				<Title text={name} size='sm' className='mt-3 mb-1 font-bold' />

				<p className='text-gray-400'>Ингредиенты: мясо, грибы, острые</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-[20px]'>
						от <b>{price}</b> ₽
					</span>
					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='mr-1' />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}

export { ProductCard }
