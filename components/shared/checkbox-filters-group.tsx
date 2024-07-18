'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui'
import { FilterChecboxProps, FilterCheckbox } from '../ui/filter-checkbox'

type Item = FilterChecboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChanges?: (value: string[]) => void
	defaultValues: string[]
	className?: string
}

const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	onChanges,
	defaultValues,
	className,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: defaultItems.slice(0, limit)

	return (
		<div className={cn('', className)}>
			<p className='font-bold mb-3'>{title}</p>
			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}
			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map(item => (
					<FilterCheckbox
						key={item.value}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={value => console.log('checked', value)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						className='text-primary mt-3'
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}

export { CheckboxFiltersGroup }
