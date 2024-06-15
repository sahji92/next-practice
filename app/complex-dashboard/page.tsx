 import React from 'react'
 
 export default function page() {
   return (
     <div>simultanous rendering of multiple pages within single layout is parellel routes
        advantage-- if one slot fails others wont affect.
        each slot can act like a single webpage(can have its own loaders,states etc)
     </div>
   )
 }
 