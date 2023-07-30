import React from 'react'
// import { Logo } from './Navbar'
const Stock = ()=>(
    <div className='stock'>
       <h3>Stock <i class="fa-solid fa-circle-exclamation"></i></h3> 
<h2>100,000</h2>
    </div>
)
const BodyLeftTop=()=>(
    <>
    <div className='flex' style={{justifyContent:'space-around'}}> 
    <h2>IN/OUT Gate Pass</h2>
        <input type="text" placeholder='Search' />
        <button className='btn-button'>New Gate Pass</button>
        </div>
        <div className='flex'  style={{justifyContent:'space-around'}}>
<Stock/>
        <Stock/>
        <Stock/>
        <Stock/>
        </div>
        
        


    </>
)
const BodyNav=()=>(
    <div className='flex body-nav'>
<span ></span>
<h5>Slip Number #123456</h5>
<h5>Loading</h5>
<h5>Loading</h5>



    </div>
)

const BodyLeftBottom = ()=>(
    <div className='body-bottom'>
<BodyNav/>
    </div>
)

// Right Container

const BodyRightTop=()=>(
  <div className='body-right-top'>
    {/* <Logo/> */}
  </div> 
)
const BodyRightBottom =()=>(
   <div className='body-bottom-right'>
   </div> 
)


export default function Body() {
  return (
    <div>
       <div className="left">
        <BodyLeftTop/>
       <BodyLeftBottom/>
       <BodyLeftBottom/>
 </div> 
       <div className="right">
        <div className="blue">
    <BodyRightTop/> 
        </div>
<BodyRightBottom/>
<BodyRightBottom/>
       </div>
       

    </div>
  )
}
