import Products from "../components/Products";

const Home = () => {

    const homeStyle= {

        background : '#F2E6D6'
      }
      

    return (

        <>

        <div style={homeStyle} className="hero py-16 ">
            <div className = "container mx-auto flex items-center justify-between">

                <div className = "w-1/2">
                     
                     <h4 className = "text-lg"> <em>Get clearer vision and smarter look with the best spectacles</em> </h4> <h4>here at</h4>
                     <h1 className="text-3xl md-text-6xl font-bold"><em>RIMS</em></h1>
                     <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
                </div>

               <div className = "w-1/2">
                     <img  src="Images/banner_short.png" alt="banner pic"/>
               </div>
            </div>
        </div>

        <div className="pb-24">

            <Products/>
            
        </div>
        

        </>
    )
}

export default Home;