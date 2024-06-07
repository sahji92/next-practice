import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

export default function blogDetail({params}:{
    params:{blogId:string}
}) {
  return (
    <div>blog details {params.blogId}</div>
  )
}

