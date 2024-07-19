import {
	Container,
	Filters,
	ProductsGroupList,
	TopBar,
} from '@/components/shared'
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
						<div className='grid grid-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								product={[
									{
										id: 1,
										name: 'Пепперони',
										items: [{ price: 500 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
									},
									{
										id: 2,
										name: '',
										items: [{ price: 500 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
									},
									{
										id: 3,
										name: '',
										items: [{ price: 500 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
									},
									{
										id: 4,
										name: '',
										items: [{ price: 500 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								product={[
									{
										id: 1,
										name: 'Пепперони',
										items: [{ price: 500 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
									},
									{
										id: 2,
										name: '',
										items: [{ price: 500 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
