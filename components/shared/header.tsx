import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CartButton, Container, SearchInput } from '.'
import { Button } from '../ui'
interface Props {
	className?: string
}

const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* Left side */}
				<Link href='/' passHref>
					<div className='flex items-center gap-4'>
						<Image src='/logo.png' alt='Logo' width={35} height={35} />
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
							<p className=' text-sm to-gray-400 leading-3'>вкуснее уже некуда</p>
						</div>
					</div>
				</Link>

				{/* Search input */}
				<div className='mx-10 flex-1'>
					<SearchInput />
				</div>

				{/* Right side */}
				<div className='flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-1'>
						<User size={16} />
						Войти
					</Button>

					<div>
						<CartButton />
					</div>
				</div>
			</Container>
		</header>
	)
}

export { Header }
