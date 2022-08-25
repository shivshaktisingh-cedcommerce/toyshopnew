import React from 'react'
import {useState} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "./Home.css"
import Slider from "./Slider"
import {data} from "./Data"
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
var x;
var y ;


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }));

export default function Home() {
    const[arr,setArr]=useState(["alt.png" ,"3.jpg","2.jpg" , "4.jpg"])
    const[color,setColor]=useState(["red","green","yelow","blue"])
  

    const check=(event)=>{
        y = data.educational[event.target.id]['image']
        x = arr[Number(event.target.id)]
        data.educational[event.target.id]['image'] = x
        setArr([...arr])
    }
    const check1=(event)=>{
        data.educational[event.target.id]['image']=y;
      setArr([...arr])

    }
   
  return (< div id= "main_div">
    <div id="navbar_div">
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" id="box_id">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <img src="logo1.png" alt="" id="logo_img_id"/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="tag_line"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            It's Playtime
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <div id="slider_offer">
    <Slider/>
    <div>
   
    <div className="offer_image_div_id2" ><img src="offer5.jpg" alt=""  className="offer_image2"/>
    <p id="offer_p_id2">Buy 1 musical toy get another free.</p>
    </div>
    <div className="offer_image_div_id1" ><img src="offer1.jpg" alt="" className="offer_image1"/>
    <p id="offer_p_id1">Today's offer 20% off on minimum purchase of Rs. 1000</p>
    </div>
    </div>
    </div>
    <div id="most_purchased_div_id">
        <div id="most_purchased_div_id1">Most Purchased</div>
        <div id="most_purchased_div_id2">
            {data.mp.map((d , index)=>{
                return(
                 <div className="most_purchased_div_id21" style={{backgroundColor:d.bcolor , padding:"1vw" , borderRadius:"5px"}}>
                     <img src={d.image} alt="" className="trending_image_id"/>
                     <p className="telescope_class" style={{color:"white"}}>{d.title} </p>
                  </div>
                )
            })}
        </div>

    </div>
    <div id="navbar2_div_id">
    <p id="navbar2_div_p_id1">Category : <select id="select1_id">
            <option value="">choose your toy</option>
            <option value="educational">Educational Toys</option>
            <option value="actions">Action and Figures</option>
            <option value="electroic">Electronic toys</option>
            <option value="dolls">Dolls</option>
            <option value="animals">Animals</option>

        </select></p>
        <p id="navbar2_div_p_id2">Sort by : <select id="select2_id">
            <option value="">--sort here--</option>
            <option value="lth">Low to high</option>
            <option value="htl">High to low</option>
            <option value="rating">Rating</option>
        </select>
        </p>
        <div id="search-box"><input type="text" className="searchText" placeholder="Type to search..." /><i class="fa fa-search" aria-hidden="true" id="search_icon" ></i></div>
        <p id="cart_p_id1"><ShoppingBagTwoToneIcon id="cart_id1"/></p>
    </div>
    <div id="main_div_displayproducts">
        {data.educational.map((d , index)=>{
            return(
                <div id="div_id_product">
                    <img src={d.image} className="img_class_product" alt="" onMouseEnter={check} id={index} onMouseLeave={check1} />
                    <p className="title_class_product">{d.title}</p>
                    <p className="title_class_product">{d.price}</p>
                    <p className="button_class_product"><button>Add to cart</button></p>
                </div>
            )
        })}
    </div>
    
    {/* <div id="img_div">
        {arr.map((d ,index)=>{
            // console.log(d)
             return (
             <div><img src={d} alt="" style={{width:"20vw"}} id={index} onMouseEnter={check} onMouseLeave={check1} className="img_class" />
             </div>)
        })}
    </div> */}
    </div>
  )
}
