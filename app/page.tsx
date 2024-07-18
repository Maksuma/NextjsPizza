import { Container, Filters, TopBar } from '@/components/shared'
import { Title } from '@/components/ui'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
			<Container className='pb-14'>
				<div className='mt-10 flex gap-[60px]'>
					{/* Filter */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Product List */}
					<div className='flex-1'>
						<div className='grid grid-col gap-16'>Список продуктов</div>
					</div>
				</div>
			</Container>
		</>
	)
}
