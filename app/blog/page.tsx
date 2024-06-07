import Link from 'next/link'
import React from 'react'

function page() {
  const blogId=100
  return (
    <>
    <div><Link href='blog/1'>blog1</Link></div>
    <div><Link href='blog/2'>blog2</Link></div>
    {/* replace prop ki wajah se back karne pe bloglist ki bajaay homepage(/) show hga */}
    <div><Link href='blog/3' replace>blog3</Link></div>
    <div><Link href={`blog/${blogId}`}>blog100</Link></div>
    <Link href='/'>Home</Link>
    </>
  )
}

export default page