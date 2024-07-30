import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export function titleCase(str: string): string {
  let string = str.toLowerCase().split(' ')
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
  }
  return string.join(' ')
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  const product = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query.toLowerCase() } },
        { name: { contains: query.toUpperCase() } },
        { name: { contains: titleCase(query) } },
      ],
    },
    take: 5,
  })

  return NextResponse.json(product)
}
