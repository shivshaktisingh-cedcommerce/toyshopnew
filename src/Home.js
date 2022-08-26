import React from 'react'
import {useState } from 'react'
import { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "./Home.css"
import Slider from "./Slider"
import {data} from "./Data"
import Modal from '@mui/material/Modal';
import { Button, Drawer } from '@mui/material'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import 'animate.css';
var x;
var y ;
var count=1;

  



export default function Home() {
    const[arr,setArr]=useState(["alt.png" ,"3.jpg","2.jpg" , "4.jpg"])
    const[color,setColor]=useState(["red","green","yelow","blue"])
    const[productarr , setProductarr]=useState(data.actions)
    const[searchinput , setSearchinput]=useState()
    const[cart,setCart]=useState([])
    const[cartid,setCartid]=useState([])
    const[flagdrawer,setFlagdrawer]=useState(false)
    const[totalamount,setTotalamount]=useState(0)
    const[flagmodal,setFlagmodal]=useState(false)
    const[finalamount,setFinalamount]=useState(0)
    const[thanksmessage,setThanksmessage]=useState("")
    const[mobilemessage,setMobilemessage]=useState("")
    const[emailmessage,setEmailmessage]=useState("")
    const[addressmessage,setAddressmessage]=useState("")

  

    const check=(event)=>{
      const k = event.target.name
        y = data[k][event.target.id]['image']
        x = data[k][event.target.id]['altimage']
        data[k][event.target.id]['image'] = x
       setArr([])
        
    }
    const check1=(event)=>{
      const k = event.target.name
      data[k][event.target.id]['image']=y;
      setArr([])
    }


    const addtocartfun=(d)=>{
      if(cartid.indexOf(d.id)===-1){
        setCartid([...cartid,d.id])
        setCart([...cart , d])
      }
    }

    const increasequantfun=(d)=>{ 
      cart.map((x)=>{
          if(x.id==d.id){
              x.quantity = x.quantity +1;
              x.total = parseInt(x.price) * parseInt(x.quantity);
              }
            setCart([...cart])
      })
  }

  const decreasequantfun =(d ,ind)=>{

    cart.map((x)=>{
      if(x.id===d.id){
        if(x.quantity>=1){
          x.quantity = x.quantity - 1
        }
        if(x.quantity===0){
          x.quantity=1;
          cart.splice(ind ,1)
          var z1 = cartid; 
          z1.map((d , index)=>{
            if(ind===index){
              z1.splice(index,1)
              }
          })
        }
      }
    x.total = parseInt(x.price) * parseInt(x.quantity);
    })
    setCart([...cart])
  }
  
  const delete_fun=(d1)=>{
    var z = cart;
    var z1 = cartid;
    z.map((d,index)=>{
  
        if(index==d1){
            z.splice(index,1)
            console.log(z)
        }
    })
    z1.map((d , index)=>{
        if(d===d1){
            z1.splice(index,1)
        }
    })
    setCart([])
    setCart([...z])
    if(cart.length===0){
        setCartid([])
    }
    
  }



  const checkout_btn_fun=()=>{
    var zy = totalamount * 0.8;
    setFinalamount(zy)
    setFlagdrawer(false)
    setFlagmodal(true)
  }

  useEffect(()=>{
    var z = 0;
     cart.map((d)=>{
         z = z + d.quantity * d.price;
     })
     setTotalamount(z) 
  },[cart])


  const visionfun=()=>{
    if(count%2===0){
      document.getElementById("main_div").style.filter="saturate(50%)";
      
    }
    if(count%2!==0){
      document.getElementById("main_div").style.filter="saturate(100%)";
      
    }
    count++;
    
  }
  

    const selectfun1=(event)=>{
      if(event.target.name==="category"){
        var k = event.target.value
        setProductarr([])
        setProductarr(data[k])
      }
      if(event.target.name==="price"){
        if(event.target.value==="lth"){
          productarr.sort(function(a, b){return Number(a.price) - Number(b.price)});
          setArr([])
        }
        if(event.target.value==="htl"){
          productarr.sort(function(a, b){return Number(b.price) - Number(a.price)});
          setArr([])
        }
      }
      if(event.target.name==="search"){
        var temp=[]
        if (event.target.value.length > 0) {           
          data.searcharr.map((i)=>{
              if(i.title.includes(event.target.value)){
                  temp.push(i)
              } 
          })
          setProductarr([])
          setProductarr(temp)
         }
      }    
    }


    const place_order_fun=()=>{
      setThanksmessage()
      setMobilemessage()
      setEmailmessage()
      setAddressmessage()
      if(document.getElementById("mobile_id").value==""){
        setMobilemessage("please Enter") 
      }
      if(document.getElementById("email_id").value==""){
        setEmailmessage("please Enter")
      }
      if(document.getElementById("address_id").value==""){
        setAddressmessage("please Enter")
      }
      else{
        setCart([])
        setCartid([])
        document.getElementById('tab').setAttribute("style","display:none")
        document.getElementById('place_p').setAttribute("style","display:none")
        document.getElementById('billing_details_id').setAttribute("style","display:none")
        setThanksmessage("Thanks for Shopping")
      }
    }
   
  return (< div id= "main_div">
    <div id="navbar_div" className="animate__animated animate__fadeInLeft">
    <Box sx={{ display:"flex"}} >
      <AppBar position="static" id="box_id1">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <img src="logo1.png" className="animate__animated animate__bounceInUp" alt="" id="logo_img_id"/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="tag_line"
            sx={{ flexGrow: 1, }}
            className='animate__animated  animate__pulse animate__shakeY'
          >
            <a href="#navbar2_div_id" id="a_tag_playtime">It's Playtime</a>
          </Typography>
         <a href="#navbar2_div_id" id="a_id">Shop Now</a>
         <button id="vision_button_id" onClick={visionfun}><i class="fas fa-low-vision"></i></button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <div id="slider_offer" >
    <Slider/>
    <div>
   
    <div className="offer_image_div_id2" ><img src="offer5.jpg" alt=""  className="offer_image2 animate__animated animate__zoomIn"/>
    <p id="offer_p_id2" className=" animate__animated  animate__backInRight">Buy 1 musical toy get another free.</p>
    </div>
    <div className="offer_image_div_id1" ><img src="offer1.jpg" alt="" className="offer_image1  animate__animated animate__zoomIn"/>
    <p id="offer_p_id1" className='animate__animated animate__flash  animate__infinite	infinite'>Today's offer 20% off on minimum purchase of Rs. 1000</p>
    </div>
    </div>
    </div>
    <div id="most_purchased_div_id">
        <div id="most_purchased_div_id1">Most Purchased</div>
        <div id="most_purchased_div_id2">
            {data.mp.map((d , index)=>{
                return(
                 <div className="most_purchased_div_id21" style={{backgroundColor:d.bcolor , padding:"1vw" , borderRadius:"5px"}}>
                     <img src={d.image} alt="" className="trending_image_id animate__animated animate__fadeInDown"/>
                     <p className="telescope_class" style={{color:"white"}}>{d.title} </p>
                  </div>
                )
            })}
        </div>

    </div>
    <div id="navbar2_div_id">
    <p id="navbar2_div_p_id1">Category : <select id="select1_id" onChange={selectfun1} name="category">
            <option value="actions">Action Heroes</option>
            <option value="searcharr">All</option>
            <option value="educational">Educational Toys</option>
            <option value="electronic">Electronic toys</option>
            <option value="Dolls">Dolls</option>
            <option value="animals">Animals</option>

        </select></p>
        <p id="navbar2_div_p_id2">Sort by : <select id="select2_id" name="price" onChange={selectfun1}>
            <option value="">--sort here--</option>
            <option value="lth">Low to high</option>
            <option value="htl">High to low</option>
        </select>
        </p>
        <div id="search-box"><input type="text" className="searchText" placeholder="Type to search..." onChange={selectfun1} name="search" value={searchinput}/><i class="fa fa-search" aria-hidden="true" id="search_icon" ></i></div>
        <p id="cart_p_id1" className="animate__animated animate__swing animate__infinite	infinite"><ShoppingBagTwoToneIcon id="cart_id1" onClick={()=>setFlagdrawer(true)} /> <sup>{cart.length}</sup></p>
    </div>
    <div id="main_div_displayproducts">
        {productarr.length===0?<div id="gif_image_div_id"><img src="https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif" alt="" id="gif_image_id"/><p id="gif_p_id">No Product Found</p></div>:productarr.map((d , index)=>{
            return(
                <div id="div_id_product">
                    <img src={d.image} className="img_class_product" alt="" onMouseEnter={check} id={index} onMouseLeave={check1} name={d.type}/>
                    <p className="title_class_product">{d.title}</p>
                    <p className="title_class_product">Rs. {d.price}</p>
                    <p className="button_class_product animate__bounce"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
                </div>
            )
        })}
    </div>
    <Drawer
         open={flagdrawer}
         anchor='right'
         onClose = {()=>setFlagdrawer(false)}
        >
            <Button variant='contained' onClick={()=>setFlagdrawer(false)} id="close_drawer_btn_id" className="animate__animated animate__jackInTheBox">x</Button>
           <div id="cart_products" className="animate__animated animate__backInRight ">   
           {cart.length===0?<div id="gif_div_id"><img src ="https://hakimitr.com/assets/website/images/empty-cart.gif" id="gif_id" alt="" /></div>:""}
           {cart.length===0?<p id="empty_cart_message">Your cart is empty</p>:""}
           {cart.length!==0?<p id="tagline_p_your_cart_items">Your cart Items</p>:""}
           {cart.map((e  , i)=>{
              return <div id="repetitive_cart_div">
                  <div id="cart_image_div"><img src={e.image} alt="" id="cart_image_id"/>
                  <p id="cart_product_title">{e.title}</p></div>
                  <div id="button_div_id"><button onClick={()=>increasequantfun(e)} className="increment_btn_id_add"><i class="fa-solid fa-arrow-up"></i></button><button className="increment_btn_id_quant">{e.quantity} </button><button onClick={()=>decreasequantfun(e , i)} className="increment_btn_id_decrease"><i class="fa-solid fa-arrow-down"></i></button>
                  <p id="amt_p_id"> Rs. {e.total}</p>
                  <p><i class="fa fa-trash del_icon" aria-hidden="true" onClick={()=>delete_fun(i)}></i></p>
                  </div>
                  </div> 
           })}
          {cart.length>0? <p id="total_amount">Total Amount Rs. {totalamount}</p>:""}
          {cart.length>0?<p id="p_amt"><button id="checkout_btn" onClick={checkout_btn_fun}>Checkout</button></p>:""}
          </div>
        </Drawer >

        <Modal
        open={flagmodal}
        onClose={()=>setFlagmodal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id="modal_id"
       
     
      >
      
        <div id="box_id"  className=" animate__animated animate__fadeInLeft">
          <p id="billing_details_id">Billing Details</p>
          <p id="thanks_id">{thanksmessage}</p>
          <table id="tab">
            <tr id="tr1"><td>Item</td><td>Quantity</td><td>Amount</td></tr>
          {cart.map((e  , i)=>{
            return (
              <tr><td>{e.title}</td><td>{e.quantity} </td><td> Rs {e.total}</td></tr>
            )
          })}
          <tr><td colSpan={2}>Total Amount</td><td>Rs {totalamount}</td></tr>
          <tr><td colSpan={2}>After 10% discount</td><td>Rs {finalamount}</td></tr>
          <tr><td colSpan={2}>Mobile</td><td><p className="alert_message">{mobilemessage}</p><input type="number" id="mobile_id" autoFocus/></td></tr>
          <tr><td colSpan={2}>Email</td><td><p className="alert_message">{emailmessage}</p><input type="email" id="email_id"/></td></tr>
          <tr><td colSpan={2}>Address</td><td><p className="alert_message">{addressmessage}</p><input type="address" id="address_id"/></td></tr>
          </table>
          <p id="place_p"><button id="place_order_btn" onClick={place_order_fun}>Place Order</button></p>
          
        </div>
      </Modal>
    </div>
  )
}
