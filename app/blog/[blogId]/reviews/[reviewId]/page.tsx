import React from 'react'

export default function reviewDetail({params}:{
    params:{
     reviewId:string,
     blogId:string
    }
}) {
  return (
    <div>review {params.reviewId} for blog {params.blogId}</div>
  )
}
