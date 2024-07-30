import { Container, Filters, ProductsGroupList, TopBar } from '@/components/shared'
import { Title } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					items: true,
					ingredients: true,
				},
			},
		},
	})
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar categories={categories.filter(category => category.products.length > 0)} />
			<Container className='pb-14'>
				<div className='mt-10 flex gap-[60px]'>
					{/* Filter */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Product List */}
					<div className='flex-1'>
						<div className='grid grid-col gap-16'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											categoryId={category.id}
											product={category.products}
											title={category.name}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
