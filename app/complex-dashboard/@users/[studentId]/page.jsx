import React from 'react';
import { useRouter } from 'next/router';

export default async function StudentPage({ params }) {
    const router = useRouter();

    const res = await fetch(`https://fakestoreapi.com/users/${params.studentId}`);
    const student = await res.json();

    return (
        <div className='component flex-1'>
            <h1>Student page - {params.studentId}</h1>
            <h2>{student.name.firstname}</h2>
            <button onClick={() => router.back()} className='back-button'>
                Back
            </button>
        </div>
    );
}
