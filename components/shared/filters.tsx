'use client'

import { useFilters, useIngredients, useQueryFilters } from '@/hooks'
import { cn } from '@/lib/utils'
import React from 'react'
import { Input, RangeSlider, Title } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()

	useQueryFilters(filters)

	const ingredientsList = ingredients.map(ingredient => ({
		text: ingredient.name,
		value: String(ingredient.id),
	}))

	const updatePrices = (prices: number[]) => {
		filters.setPrices(prices[0], 'priceFrom')
		filters.setPrices(prices[1], 'priceTo')
	}

	return (
		<div className={cn('', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
			{/* PizzaType */}

			<CheckboxFiltersGroup
				title='Тип теста'
				name='type'
				className='mb-5'
				selected={filters.pizzaTypes}
				onClickCheckbox={filters.setPizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>

			{/* Size */}
			<CheckboxFiltersGroup
				title='Размер'
				name='size'
				className='mb-5'
				selected={filters.sizes}
				onClickCheckbox={filters.setSizes}
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' },
				]}
			/>

			{/* Count slider */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='От'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={e => filters.setPrices(Number(e.target.value), 'priceFrom')}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(filters.prices.priceTo)}
						onChange={e => filters.setPrices(Number(e.target.value), 'priceTo')}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
					onValueChange={updatePrices}
				/>
			</div>

			{/* ingredients */}
			<CheckboxFiltersGroup
				title='Ингредиенты'
				name='ingredients'
				className='mt-5'
				defaultItems={ingredientsList}
				defaultValues={[]}
				items={ingredientsList}
				loading={loading}
				onClickCheckbox={filters.setIngredients}
				selected={filters.selectedIngredients}
			/>

			{/* dough type */}
		</div>
	)
}

export { Filters }
