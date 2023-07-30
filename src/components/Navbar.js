import React from 'react'

export const Logo = ()=>(
  <>
  <img src="https://theplace2b.com.au/wp-content/uploads/2020/09/178-1783296_g-transparent-circle-google-logo-300x300.png" alt="Logo" />
  </>
)



export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='flex flex-one'>
<Logo/>
<h1>ADHARSH FOOD PRODUCTS</h1>
    </div>
    
    <div className='flex flex-two'>
      <Logo/>
      <h3><i class="fa-solid fa-angle-down"></i> </h3>
    </div>
      </div>



  )
}
