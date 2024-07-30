import { Variant } from '@/components/shared/group-variants'
import { PizzaSize, PizzaType } from '@/constants/pizza'
import { getAvailablePizzaSizes } from '@/lib'
import { ProductItem } from '@prisma/client'
import React from 'react'
import { useSet } from 'react-use'

interface ReturnProps {
	size: PizzaSize
	type: PizzaType
	selectedIngredients: Set<number>
	availableSizes: Variant[]
	setSize: React.Dispatch<React.SetStateAction<PizzaSize>>
	setType: React.Dispatch<React.SetStateAction<PizzaType>>
	addIngredient: (ingredientId: number) => void
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = React.useState<PizzaSize>(20)
	const [type, setType] = React.useState<PizzaType>(1)
	const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]))
	const availableSizes = getAvailablePizzaSizes(type, items)
	React.useEffect(() => {
		const currentSize = availableSizes?.find(item => item.value === String(size) && !item.disabled)
		const availableSize = availableSizes?.find(item => !item.disabled)
		if (!currentSize && availableSize) {
			setSize(Number(availableSize.value) as PizzaSize)
		}
	}, [type, availableSizes, size])

	return {
		size,
		type,
		selectedIngredients,
		availableSizes,
		setSize,
		setType,
		addIngredient,
	}
}
