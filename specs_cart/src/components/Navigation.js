import { Link } from 'react-router-dom';


const Navigation = () => {
  const cartStyle= {
    background: '	#FFA500',
    display : 'flex',
    padding: '3px 4px',
    height: '2rem',
    width : '4.5rem',
    borderRadius : '20px',
    
    
    
  }
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4'>

          
            <Link to="/">
              <img style={{height:80}} src='/Images/Rims logo.png' alt='logo'></img>
            </Link>

            <ul className='flex items-center'>
              <li >
                <Link to="/">Home</Link>
              </li>

              <li className='ml-6'>
                <Link to="/mainproducts">Products</Link>
              </li>

              <li className='ml-6'>
                <Link to="/cart">
                  <div style={cartStyle}>
                    <span className='text-gray ml-2'>2</span>
                    <img className = "ml-4"style={{height:23}} src="/Images/icon _shopping cart_.svg" alt="cart-icon"></img>
                  </div>
                </Link>
              </li>
            </ul>
          

          

        </nav>
    </>
  )
}

export default Navigation;