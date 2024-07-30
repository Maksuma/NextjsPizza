import { cn } from '@/lib/utils'
import React from 'react'
import { Button, Title } from '../ui'

interface ChoosePizzaFormProps {
	imageUrl: string
	name: string
	onClickAdd?: () => void
	className?: string
}

export const ChooseProductForm: React.FC<ChoosePizzaFormProps> = ({ name, imageUrl, onClickAdd, className }) => {
	return (
		<div className={cn('flex flex-1', className)}>
			<div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
				<img
					src={imageUrl}
					alt='product'
					className='relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]'
				/>
			</div>
			<div className='w-[490px] bg-gray-50 p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

				<Button className='h-[55px] px-10 text-base rounded-sm w-full'>Добавить в корзину за ...</Button>
			</div>
		</div>
	)
}
