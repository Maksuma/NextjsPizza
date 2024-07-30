import { Variant } from '@/components/shared/group-variants'
import { pizzaSizes, PizzaType } from '@/constants/pizza'
import { ProductItem } from '@prisma/client'

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
	const filteredPizzasByType = items.filter(item => item.pizzaType === type)
	const availableSizes = pizzaSizes.map(item => {
		const isAvailable = filteredPizzasByType.some(pizza => Number(pizza.size) === Number(item.value))
		return {
			...item,
			disabled: !isAvailable,
		}
	})

	return availableSizes
}
