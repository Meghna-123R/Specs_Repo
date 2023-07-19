import React from 'react'
import List from './List'


const Products = () => {

    

  return (
    <div className='container mx-auto pb-24'>

        <h1 className='text-lg font-bold my-8 '>Products</h1>

        <div className='grid grid-cols-4 my-8 gap-24 mt-20'>
          
            <List/>


        </div>     
        
    </div>
  )
}

export default Products;