'use client'

import { cn } from '@/lib/utils'
import React from 'react'

export type Variant = {
	name: string
	value: string
	disabled?: boolean
}

interface GroupVariantsProps {
	items: readonly Variant[]
	onClick?: (value: Variant['value']) => void
	variantValue?: Variant['value']
	className?: string
}

export const GroupVariants: React.FC<GroupVariantsProps> = ({ items, onClick, variantValue, className }) => {
	return (
		<div className={cn('flex justify-between bg-white rounded-3xl p-1 select-none', className)}>
			{items.map(({ name, value, disabled }) => (
				<button
					key={name}
					onClick={() => onClick?.(value)}
					disabled={disabled}
					className={cn(
						'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-300 text-sm',
						{
							'bg-white shadow border border-primary': value === variantValue,
							'text-gray-500 opacity-50 pointer-events-none': disabled,
						}
					)}
				>
					{name}
				</button>
			))}
		</div>
	)
}
