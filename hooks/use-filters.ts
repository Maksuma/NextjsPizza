import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useSet } from 'react-use'

interface PriceRange {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceRange {
	sizes: string
	pizzaTypes: string
	ingredients: string
}

export interface Filters {
	sizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceRange
}

interface ReturnProps extends Filters {
	setSizes: (size: string) => void
	setPizzaTypes: (type: string) => void
	setIngredients: (ingredient: string) => void
	setPrices: (value: number, key: keyof PriceRange) => void
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(',') || [])
	)
	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(searchParams.get('pizzaTypes')?.split(',') || [])
	)

	const [prices, setPrices] = React.useState<PriceRange>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})

	const updatePriceRange = (value: number, key: keyof PriceRange) => {
		setPrices(prev => ({ ...prev, [key]: value }))
	}

	return {
		sizes,
		pizzaTypes,
		selectedIngredients,
		prices,
		setPrices: updatePriceRange,
		setSizes: toggleSizes,
		setPizzaTypes: togglePizzaTypes,
		setIngredients: toggleIngredients,
	}
}
