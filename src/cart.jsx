import React from 'react'
import { Link } from 'react-router-dom'


const cart = () => {
  return (
    <>
    <div className='sticky'>
       <div style={{backgroundColor:"white",height:"110px",paddingTop:"40px"}} className="container-fluid">
              <div className='row'>
                <div className='col-md-5 justify-content-spacearound mx-5 '>
                  
                    <Link to='/screen1'> <img className='me-5' src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg'></img></Link>
                    <Link className='me-5' style={{ color: 'black', textDecoration: 'none', fontSize: '18px' }} to='/screen2'>Menu</Link>
                    <Link style={{ color: 'black', textDecoration: 'none', fontSize: '18px' }} to='/screen3'>Deals</Link>
                   
                </div>
              <div className="col-md-4"></div>
                <div className='col-md-2 text-end'>
             
                      <img src='https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg'></img>&nbsp;&nbsp;&nbsp;
                      <b> <Link style={{ color: 'black', textDecoration: 'none' }} to='/Login'>Sign In</Link></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
                      <span class="headerPrice">₹0</span> &nbsp;&nbsp;
                 
                  <img style={{ width: '50px' }} src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'></img>
                  <span class="cartCount">0</span>
                  </div>
                  </div>
              </div>
              </div>

 {/* ORDER BAR */}

<div class="container2">
<center>
<b style={{color:"white",}}>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>&nbsp;&nbsp;
<Link to='/screen2'><button  style={{ borderColor: 'black', borderRadius: "20px", background: 'rgb(229,28,23)', color: 'white', width: '150px', height: '35px', fontSize: '15px',border:"none" }}>Start Order</button></Link>
</center>
</div>

{/* REDLINES */}
<div className='lines'>
<div style={{paddingLeft:"180px"}} className='row db'>
      <div style={{height:"30px",width:"0.5px", backgroundColor:"rgb(228,0,43)"}} className='col-md-2'></div>&nbsp;&nbsp;&nbsp;&nbsp;
      <div style={{height:"30px",width:"0.5px", backgroundColor:"rgb(228,0,43)"}} className='col-md-2'></div>&nbsp;&nbsp;&nbsp;&nbsp;
      <div style={{height:"30px",width:"0.5px", backgroundColor:"rgb(228,0,43)"}} className='col-md-2'></div>&nbsp;&nbsp;&nbsp;&nbsp;
    </div><br></br>
    <h2 style={{paddingLeft:"168px"}}><b>MY CART</b></h2>
</div>

{/* CART BOX */}

<div class="container4">
    <div className='row zk'>
        <div style={{marginTop:'120px',marginLeft:'200px'}} className='col-md-5'>
            <b style={{fontSize:'50px'}}>YOUR CART IS <br></br>EMPTY. LET'S<br></br> START AN <br></br>ORDER!</b><br></br><br></br>
            <Link to='/screen2'><button  style={{ borderColor: 'black', borderRadius: "20px", background: 'rgb(229,28,23)', color: 'white', width: '150px', height: '35px', fontSize: '15px',border:"none" }}>Start Order</button></Link>


        </div>
        <div style={{marginTop:'30px'}} className='col-md-4'>
            <img src='https://online.kfc.co.in/static/media/empty_cart.32f17a45.png'></img>
        </div>
    </div>
</div>

{/* footer */}
<div style={{marginTop:"40px",zIndex:'1'}} class="row hk ">

  <div className='col'>
    <img style={{paddingLeft:"100px",paddingTop:"10px"}}src='https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg'></img>
  </div>
  <div className='col'>
    <ul style={{listStyle:"none",marginRight:"20px"}}>
      <li style={{color:"white",fontSize:"17px"}}>KFC India</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>About KFC</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>KFC Care</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Careers</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Our Golden Past</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Responsible Disclosure</li>
      

    </ul>
  </div>
  <div className='col'>
  <ul style={{listStyle:"none",paddingRight:"20px"}}>
      <li style={{color:"white",fontSize:"17px"}}>Legal</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Terms and Conditions</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Privacy Policy</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Disclaimer</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Caution Notice</li>
      

    </ul>

  </div>
  <div className='col'>
  <ul style={{listStyle:"none"}}>
      <li style={{color:"white",fontSize:"17px"}}>KFC Food</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Menu</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Order Lookup</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Gift Card</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Nutrition & Allergen</li>
  </ul>
  </div>
  <div className='col'>
  <ul style={{listStyle:"none"}}>
      <li style={{color:"white",fontSize:"17px"}}>Support</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Get help</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Contact Us</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>KFC Feedback</li>
      <li style={{color:"rgb(224,226,203)",fontSize:"13px"}}>Privacy Policy</li>
  </ul>
  </div>
  <div className='col'>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(228,0,43)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
    <a style={{color:"white",textDecoration:"underline"}}>Find a KFC</a>
  </div>
  <div className='col'>
    <img src='https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg'></img>
  </div>
  <div className='col'>
    <img src='https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg'></img>
  </div>
{/* </div> */}

<div class="row ik">
  
  <center >
  <b style={{color:"rgb(169,169,170)",fontSize:"12px",marginLeft:"400px"}}>Copyright © KFC Corporation 2024 All rights reserved</b>
  <svg style={{marginLeft:"300px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(169,169,170)" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(169,169,170)" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>&nbsp;&nbsp;&nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(169,169,170)" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
  </center>
  </div>
</div>




</>
    
  )
}

export default cart