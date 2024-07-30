'use client'

import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from '@/constants/pizza'
import { usePizzaOptions } from '@/hooks'
import { calcTotalPizzaPrice } from '@/lib/'
import { cn } from '@/lib/utils'
import { Ingredient, ProductItem } from '@prisma/client'
import React from 'react'
import { GroupVariants, IngredientItem } from '.'
import { Button, Title } from '../ui'
import { PizzaImage } from './pizza-image'

interface ChoosePizzaFormProps {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onClickAddCart?: () => void
	className?: string
}

export const ChoosePizzaForm: React.FC<ChoosePizzaFormProps> = ({
	name,
	imageUrl,
	ingredients,
	items,
	onClickAddCart,
	className,
}) => {
	const { setSize, setType, addIngredient, size, type, selectedIngredients, availableSizes } = usePizzaOptions(items)

	// TODO: Add remove ingredient functionality on click text
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто, ингредиенты: ${selectedIngredients.size} шт.`
	const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)

	const handleClickAddCart = () => {
		onClickAddCart?.()
	}

	return (
		<div className={cn('flex flex-1', className)}>
			<PizzaImage imageUrl={imageUrl} size={size} />
			<div className='w-[490px] bg-gray-50 p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-2 mt-5'>
					<GroupVariants
						items={availableSizes}
						variantValue={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>

					<GroupVariants
						items={pizzaTypes}
						variantValue={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								active={selectedIngredients.has(ingredient.id)}
								onClick={() => addIngredient(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button className='h-[55px] px-10 text-base rounded-sm w-full mt-10' onClick={handleClickAddCart}>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
