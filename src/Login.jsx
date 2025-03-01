import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <center style={{marginTop:"100px"}}>
        <div className='container'>
        <h6 style={{color:"#7f6758"}}>Sign In / Sign up</h6>
        <Link to='/screen1'> <img style={{marginTop:"50px"}} src='https://login.kfc.co.in/auth/resources/jdsrg/login/kfcIndiaLoginUIDev_02-23-2024-12-20/images/KFC_logo.svg'></img></Link> 
        <h5 style={{marginTop:"50px"}} ><b> LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE <br></br>NUMBER!!</b></h5>
        <input style={{marginTop:"40px", border:"none",marginRight:"400px"}} placeholder='phone number*'></input>
        <hr style={{width:"600px"}}></hr>
       <b style={{fontSize:"12px"}}> By “logging in to KFC”, you agree to our</b ><b style={{fontSize:"12px",textDecoration:"UNDERLINE",color:"rgb(51,60,79)"}}> Privacy Policy</b> <b style={{fontSize:"12px",}}>and</b>  <b style={{fontSize:"12px",textDecoration:"UNDERLINE",color:"rgb(51,60,79)"}}> Terms & Conditions.</b>  <br></br><br></br>

       <button  style={{ borderColor: 'black', borderRadius: "20px", background: 'black', color: 'white', width: '150px', height: '45px', fontSize: '12px',border:"none" }}>Send Me a Code</button>
 
      <div className='row ss'>
        <div className='col-md-3'>
<hr></hr>
        </div>
        <div className='col-md-1'>
          <b>or</b></div>
        <div className='col-md-3'>
          <hr></hr>
        </div>
      </div>
      <div class="butn">
      <Link to='/screen1'> <button style={{width:"500px",height:"50px",borderRadius:"50px",backgroundColor:"white"}}>Skip, continue as guest</button></Link>
      </div>
       </div>
    </center>
    
    </>
  )
}

export default Login