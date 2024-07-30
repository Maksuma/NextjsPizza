import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import React from 'react'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
}

export const useIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
	const [loading, setLoading] = React.useState<boolean>(false)

	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const data = await Api.ingredients.getAll()
				setIngredients(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}
		fetchIngredients()
	}, [])

	return { ingredients, loading }
}
