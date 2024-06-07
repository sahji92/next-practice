import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
    <Link href='blog/first'>first</Link><br/>
    <Link href='blog/second'>second</Link><br/>
    <Link href='blog/third'>third</Link>
    </div>
  )
}
