import React from 'react'

export default function page({params}
    :{
       params:{
        slugs:string[];
       }
    }
) {
    if(params.slugs.length===2){
return(
<h1>viewing docs for feature {params.slugs[0]} and concept {params.slugs[1]}</h1>
)
}
else if(params.slugs.length===1){
    return(
        <h1>viewing docs for feature {params.slugs[0]}</h1>
    )
}
  return (
    <div><h1>Docs HomePage</h1></div>
  )
}
//every route segment whice have docs route will processed here