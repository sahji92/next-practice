'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function OrderProduct() {
   const router=useRouter()
    const handleClick=()=>{
     console.log('placing your order');
     router.push('/blog');
     //router.back()
    }
  return (
    <>
    <h1>Order product</h1>
    <button onClick={handleClick}>place order</button>
    </>
  )
}
