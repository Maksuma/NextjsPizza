import { cn } from '@/lib/utils'
import { Trash2Icon } from 'lucide-react'
import React from 'react'
import * as Cart from './cart-item-details'
import { CartItemProps } from './cart-item-details/cart-item-details.types'

interface Props extends CartItemProps {
	className?: string
}

export const CartDrawerItem: React.FC<Props> = ({ className, details, name, price, quantity, id, imageUrl }) => {
	return (
		<div className={cn('flex bg-white p-5 gap-6', className)}>
			<Cart.Image name={name} src={imageUrl} />

			<div className='flex-1'>
				<Cart.Info name={name} details={details} />

				<hr className='my-3' />

				<div className='flex items-center justify-between'>
					<Cart.CountButton onClick={value => console.log(value)} value={quantity} />
					<div className='flex items-center gap-3'>
						<Cart.Price value={price} />
						<Trash2Icon size={16} className='text-gray-400 cursor-pointer hover:text-gray-600' />
					</div>
				</div>
			</div>
		</div>
	)
}
