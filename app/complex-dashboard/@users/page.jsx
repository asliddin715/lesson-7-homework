import React from 'react'
import Link from 'next/link'


async function UsersPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  })

  const res = await fetch("https://fakestoreapi.com/users");

  if (!res.ok) {
    throw new Error("Error fetchin students")
  }

  const students = await res.json()
  return (
    <div className='component flex-1'>
      <h2> Users page</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link href={`/complex-dashboard/${s.id}`} className='text-blue-400 underline'>{s.name.firstname}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage