import React from 'react'
import List from '../components/List'



const Mainproducts = () => {
  return (
    <div className='container mx-auto pb-24'>

        <h1 className='text-lg font-bold my-8 '>Top Prescription Frames available exclusively here at <em>Rims</em></h1>

        <div className='grid grid-cols-2 my-8 gap-24 mt-20'>
          
            <List/>


        </div>     
        
    </div>
  )
}

export default Mainproducts