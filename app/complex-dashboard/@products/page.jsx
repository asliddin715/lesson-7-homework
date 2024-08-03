import Link from 'next/link'
import React from 'react'

async function ProductPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  })

  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Error fetchin students")
  }

  const product = await res.json()
  return (
    <div className='component flex-1'>
        <h1 >product page</h1>
        <ul>
        {product.map((s) => (
          <li key={s.id}>
            <Link href={`/complex-dashboard/${s.id}`} className='text-blue-400 underline'>{s.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductPage