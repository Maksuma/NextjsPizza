import { cn } from '@/lib/utils'
import React from 'react'
import { FilterCheckbox, Input, RangeSlider, Title } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Categories */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			{/* Count slider */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='От'
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input type='number' placeholder='1000' min={100} max={1000} />
				</div>
				<RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
			</div>

			{/* ingredients */}
			<CheckboxFiltersGroup
				title='Ингредиенты'
				className='mt-5'
				defaultItems={[
					{ text: 'Мясо', value: '1' },
					{ text: 'Грибы', value: '2' },
					{ text: 'Острые', value: '3' },
					{ text: 'Закрытые', value: '4' },
				]}
				defaultValues={[]}
				items={[
					{ text: 'Мясо', value: '1' },
					{ text: 'Грибы', value: '2' },
					{ text: 'Острые', value: '3' },
					{ text: 'Закрытые', value: '4' },
					{ text: 'Мясо', value: '5' },
					{ text: 'Грибы', value: '6' },
					{ text: 'Острые', value: '7' },
					{ text: 'Закрытые', value: '8' },
				]}
			/>

			{/* dough type */}
		</div>
	)
}

export { Filters }
