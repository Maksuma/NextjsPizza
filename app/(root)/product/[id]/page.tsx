import { Container, GroupVariants, PizzaImage } from '@/components/shared'
import { Title } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
	const product = await prisma.product.findUnique({
		where: {
			id: parseInt(id),
		},
	})

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<PizzaImage imageUrl={product.imageUrl} size={40} className='' />
				<div className='w-[490px] bg-gray-50 p-7'>
					<Title text={product.name} size='md' className='font-extrabold mb-1' />
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, exercitationem nam necessitatibus
						cumque, nisi facere at id dolores suscipit, natus sequi similique hic ea maxime blanditiis architecto
						reprehenderit odit! Officiis.
					</p>
					<GroupVariants
						selectedValue='1'
						items={[
							{
								name: 'Маленькая',
								value: '1',
							},
							{
								name: 'Средняя',
								value: '2',
							},
							{
								name: 'Большая',
								value: '3',
							},
						]}
					/>
				</div>
			</div>
		</Container>
	)
}
