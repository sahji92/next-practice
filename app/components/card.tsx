import React from 'react'

export default function Card({children}
    :{children:React.ReactNode}
) {
    const cardStyle={
        padding:'100px',
        margin:'10px',
        border:'1px solid #ddd',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'
    }
  return (
    <div style={cardStyle}>{children}</div>
  )
}
