import { cn } from '@/lib/utils'

interface Props {
	name: string
	src: string
	className?: string
}

export const CartItemDetailsImage: React.FC<Props> = ({ name, src, className }) => {
	return <img className={cn('w-[60px] h-[60px]', className)} src={src} alt={name} />
}
