import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
// import React, { useState } from 'react'


const screen2 = () => {
  // const [number,setNumber]=useState(0);
  // const [otherState,setOtherState]=useState(false);

  // const calculateSquare=useMemo(()=>{
  //   console.log('calculating...');
  //   return number * number;
  // },[number]);
  
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
             
                  <Link to='/cart'><img style={{ width: '50px' }} src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'></img></Link>
                  <Link to='/cart'><span style={{color:'black'}} class="cartCount">0</span></Link>
              </div>
              </div>
          </div>
          </div>

      {/* orderbar */}

      <div class="container2">
        <center>
        <b style={{color:"white",}}>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>&nbsp;&nbsp;
        <Link to='/screen2'><button  style={{ borderColor: 'black', borderRadius: "20px", background: 'rgb(229,28,23)', color: 'white', width: '150px', height: '35px', fontSize: '15px',border:"none" }}>Start Order</button></Link>        </center>
      </div>

      {/* menubar */}

<div  className='row bb'>

 <div  className='col'>

        {/* redline */}
        <div class="cb">
    <div style={{paddingLeft:"180px"}} className='row db'>
      <div style={{height:"30px",width:"0.5px", backgroundColor:"rgb(228,0,43)"}} className='col-md-2'></div>&nbsp;&nbsp;&nbsp;&nbsp;
      <div style={{height:"30px",width:"0.5px", backgroundColor:"rgb(228,0,43)"}} className='col-md-2'></div>&nbsp;&nbsp;&nbsp;&nbsp;
      <div style={{height:"30px",width:"0.5px", backgroundColor:"rgb(228,0,43)"}} className='col-md-2'></div>&nbsp;&nbsp;&nbsp;&nbsp;
    </div><br></br>
    {/* menu baer */}
       <b style={{fontSize:"30px",paddingLeft:"170px"}}>KFC MENU</b>
       <ul style={{listStyle:"none",color:"rgb(101,101,101)",paddingLeft:"170px",marginTop:"5px"}}>
        <li><a href='#day>'INTERNATIONAL BURGER FEST></a></li>
        <li style={{marginTop:"15px"}} ><a href='#match'>MATCH DAY COMBOS</a></li>
        <li style={{marginTop:"15PX"}}><a href='#value'>VALUE LUNCH SPECIALS</a></li>
        <li style={{marginTop:"15px"}}>BOX MEALS</li>
        <li style={{marginTop:"15px"}}>BURGERS</li>
        <li style={{marginTop:"15px"}}>CHICKEN BUCKETS</li>
        <li style={{marginTop:"15px"}}>RICE BOWLZ</li>
        <li style={{marginTop:"15px"}}>VALUE SNACKERS</li>
        <li style={{marginTop:"15px"}}>CHICKEN ROLLS</li>
        <li style={{marginTop:"15px"}}>EPIC BUCKET OF THE DAY</li>
        <li style={{marginTop:"15px"}}>VARIETY BUCKET</li>
        {/* <li style={{marginTop:"15px"}}>SNACKS</li> */}
        <li style={{marginTop:"15px"}}><a href='#bever'>BEVERAGES</a></li>
       </ul>    
  </div>
  </div>
  {/* 2nd col */}
  <div  className='col-md-8'>
    {/* search */}


    <div style={{backgroundColor:"white",height:"100px"}} className='row eb'>
       <div style={{marginTop:"50px"}} className='col'>
      <button style={{borderRadius:"30px",height:"35px",width:"150px",border:"none"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="grey" class="bi bi-search-heart" viewBox="0 0 16 16">
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg>&nbsp;&nbsp;
      <b style={{fontSize:"12px",color:"grey"}} >search Our Menu</b></button>
      <hr style={{color:"black"}}></hr>
      </div>
    </div>
    {/*menu  card */}

        {/* 1ST ROW */}

    <div style={{marginTop:"50px"}}className='row fb'>
    <b style={{fontSize:"23px"}}id='day'>INTERNATIONAL BURGER FEST</b>

    <div style={{marginTop:"40px"}} className='col'>

    <div class="card  h-100 shadow" style={{width:"25rem",border:"white"}}>
  <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K815.jpg?ver=55.67" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h6 class="card-title">Caribbean Spicy Zinger Burger </h6>
    <p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>219.05</b><br></br><br></br>
<p>Relish the Caribbean spicy zinger</p>
    
    <a  style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
  </div>
</div>

    </div>

    <div style={{marginTop:"40px"}} className='col'>
    <div class="card  h-100 shadow" style={{width:"25rem",border:"white"}}>
  <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002413.jpg?ver=55.67" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h6 class="card-title">Caribbean Spicy Zinger Burger & Chicken Meal </h6>
    <p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>379.05</b><br></br><br></br>
<p>New Caribbean Spicy Zinger Burger with 1 Pc Hot & Crispy and Pepsi PET 475ml at a deal price</p>
   <a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
  </div>
</div>
    </div>
</div>

{/* 2ND ROW */}

<div className='row gb'>
<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"25rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002415.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Mexican Zinger Pro Burger & Chicken Meal </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>390.06</b><br></br>
<p>New Zinger Pro burger with 5 Hot & Crispy chicken & Pepsi 475ml at a deal price</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"25rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002412.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Mexican Zinger Pro Burger & Popcorn Meal </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>419.05</b><br></br>
<p>New Zinger Pro burger with Medium Popcorn & Pepsi 475ml at a deal price</p>
<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>
</div>
{/* 3RD ROW */}
<div className='row gb'>

<b style={{fontSize:"23PX",paddingTop:"35px"}} id='match'>MATCH DAY COMBOS</b>

<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002182.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Cricket Crunch Meal </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>489.05</b><br></br><br></br>
<p>Enjoy 2pc Hot & Crispy Chicken, 4 chicken wings , 2 dips & a chilled Pepsi Black</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002571.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Playing 11 Chicken Meal </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>590.05</b><br></br><br></br>
<p>saving Rs. 164 on 3 Pc Chicken Leg Piece, 4 Pc Peri peri Strips & 4 Pc Hot Wings</p>
<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>

<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000638.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Ultimate Savings Chicken Bucket</h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>619.05</b><br></br><br></br>
<p>signature bucket of 4pc Hot & crispy chicken, 6 Pc Wings, 4 Chicken Peri Peri Boneless</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

</div>
{/* 4TH ROW */}
<div className='row gb'>
<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002435.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Rolls Super Kings </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>399.05</b><br></br><br></br>
<p>Super Savings of Rs. 75 on 2 Classic chicken Roll, 4 Pc Hot Wings and a Pepsi PET 475ml</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>
<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002437.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Green Pitch Veg Meal </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>499.05</b><br></br><br></br>
<p> Veg meal of 2 Veg Zinger Burgers, 2 Veg Longers, Large Fries and a Pepsi PET</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002572.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">The Hitter Chicken Combo </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>699.05</b><br></br><br></br>
<p>Hitter huge savings of Rs. 132 on 5 Pc Chicken Leg Piece & 5 Pc Hot Wings
</p>
<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>
</div>
{/* 5TH ROW */}
<div className='row gb'>

<b style={{fontSize:"23PX",paddingTop:"35px"}}id="value" >VALUE LUNCH SPECIAL</b>

<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002514.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Chicken Roll & Rice Deluxe Lunch Combo </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>399.05</b><br></br><br></br>
<p>40% off on new 1 Rizo Rice Bowl , 1 Chicken roll, 2 strips , 2 HC and a Pepsi PET</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002504.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Chicken Longer & Rice Lunch Combo </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>299.05</b><br></br><br></br>
<p>Save 44% on 1 Chicken Longer Burger, 1 Rizo Rice Bowlz, 4 Strips and a Pepsi PET 475ml</p>
<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>

<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002509.jpg?ver=55.67"class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title"> 2 Chicken Longer Deluxe Lunch Combo</h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>299.05</b><br></br><br></br>
<p>Super Savings of Rs. 75 Save 34% on new 2 Chicken longer, 2 Strips, 2 HC and a Pepsi PET</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

</div>
{/* 6TH ROW */}
<div className='row gb'>
<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002508.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Chicken Roll & Rice Lunch Combo </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>299.05</b><br></br><br></br>
<p>Save 46% on new 1 Rizo Rice Bowlz, 1 Single Chicken Roll, 4 Strips and a Pepsi PET 475ml</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>
<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002506.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Chicken Longer & Roll Lunch Combo </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>299.05</b><br></br><br></br>
<p>Chicken Longer & Roll Lunch Combo</p>
<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002505.jpg?ver=55.67" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">2 Rice Bowlz Lunch Combo </h6>
<p style={{fontSize:"13px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#cb3f5f" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      Non-veg</p>
      <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>299.05</b><br></br><br></br>
<p>Save 31% on new 2 Rizo Rice Bowlz, 4 Chicken Strips and a 1 Pepsi PET 475ml</p>
<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>
</div>
{/* 7TH ROW */}

<div className='row gb'>

<b style={{fontSize:"23PX",paddingTop:"35px"}}id='bever'>BEVERAGES</b>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=55.69" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title"> Pepsi 475ml PET</h6>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      veg<br></br><br></br>
<b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>57.14</b><br></br><br></br>
<p>Pepsi 475ml PET</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>

<div style={{marginTop:"40px"}} className='col'>
<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=55.69" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Mirinda Can 300 ml </h6>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      veg<br></br><br></br>
<b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>57.14</b><br></br><br></br>
<p>Mirinda Can 300 ml</p>

<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>
</div>

<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K486.jpg?ver=55.69"class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Pepsi Black Can 300 ml </h6>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      veg<br></br><br></br>
<b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>57.14</b><br></br><br></br>
<p>Pepsi Black Can 300 ml</p>


<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>

</div>
{/* 6TH ROW */}
<div className='row gb'>
<div style={{marginTop:"40px"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K487.jpg?ver=55.69" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">7UP Can 300 ml </h6>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      veg<br></br><br></br>
<b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>57.14</b><br></br><br></br>
<p>7UP Can 300 ml</p>


<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>
<div style={{marginTop:"40px",marginRight:"320PX"}} className='col'>

<div class="card  h-100 shadow" style={{width:"18rem",border:"white"}}>
<img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K485.jpg?ver=55.69" class="card-img-top" alt="..."></img>
<div class="card-body">
<h6 class="card-title">Pepsi Can 300 ml </h6>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-caret-up-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>&nbsp;&nbsp;
      veg<br></br><br></br>
<b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>57.14</b><br></br><br></br>
<p>Pepsi Can 300 ml</p>


<a style={{backgroundColor:"rgb(228,0,43)",borderRadius:"30px",border:"none",width:"200px"}} href="#" class="btn btn-primary">Add To Cart &nbsp; <img style={{height:"18px"}} src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'></img></a>
</div>
</div>

</div>


</div>


{/* end */}

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

export default screen2