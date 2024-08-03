import React from 'react'

function ComplexDashboardLayout({ chidren, products, statistics, users }) {
    return (
        <div className='flex min-h-screen p-4 gap-2'>
            {chidren}
            <div className='flex flex-col  flex-1 border gap-2'>
            {users}
            {statistics}
            </div>
            {products}
        </div>
    )
}

export default ComplexDashboardLayout