import React from 'react'

export default async function StudentPage({params}) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
    const student = await res.json();
  return (
    <div>
     <h1>Student page - {params.productId}</h1>
     <h2>{student.title}</h2>

    </div>
  )
}
