import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Grid,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Drawer
} from "@mui/material";
import MenuIcon from '@mui/material/Menu';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'
import RoundedButton from "./Buttons/RoundedButton"
import Image from 'next/image';
import Logo from '../resources/images/emetric.png'
import Nig from '../resources/images/Nigeria.png'
import Us from '../resources/images/Us.png'
import Uk from '../resources/images/Uk.png'
import {useRouter} from 'next/router'
import {IoMenu} from 'react-icons/io5'


// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1
//       },
//       menuButton: {
//         marginRight: 2
//       },
//       title: {
//         flexGrow: 1
//       }
   
//   });
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
//   const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const [openTop, setOpenTop]= useState(false)

  const [flag, setFlag] = useState(0)
  const open = Boolean(anchor);
  const theme = useTheme();
  const route = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseEl = () => {
    setAnchorEl(null);
};

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

const handleSelectFlag =(value)=>{
  setFlag(value);
  setAnchorEl(null)
}

console.log(route.pathname)

  return (
    <div >
      <HideOnScroll {...props}>
        {/* <BrowserRouter> */}
          <AppBar sx={{bgcolor:'white', boxShadow:'none'}}>
            <Toolbar>
              {/* <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                // className={classes.title}
              >
                Murali
              </Typography> */}
              {isMobile ? (
               <Grid md={11} >
                    <Grid container paddingY={2}>
                        <IconButton marginTop={3} onClick={()=>setOpenTop(!openTop)}>
                            {/* <MenuRounded /> */}
                            <IoMenu/>
                        </IconButton>
                    </Grid>
                    <Drawer
                        anchor='top'
                        open={openTop}
                        onClose={()=>setOpenTop(false)}
                        paddingTop={5}
                    >
                        <Grid container paddingY={2}>
                            <IconButton marginTop={3} onClick={()=>setOpenTop(!openTop)}>
                                {/* <MenuRounded /> */}
                                <IoMenu/>
                            </IconButton>
                        </Grid>
                        <Link href="/">
                            <Typography onClick={()=>setOpenTop(false)} textAlign='center' className='text nav-link'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                    
                        <Link href='/jlj'>
                                <Typography onClick={()=>setOpenTop(false)} textAlign='center' className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Events
                                </Typography>
                        </Link>
        
                        {/*  */}
                              
                        <Link href="/login"  component="button">
                            <div onClick={()=>setOpenTop(false)} className='nav-link'>
                                <Typography paddingBottom={3} textAlign='center' className='text' variant="body2"  sx={{ flexGrow: 1 }}>
                                Login
                                </Typography>
                            </div>
                        </Link>
                    </Drawer>
                </Grid>
              ) : (
                <Grid container  justifyContent='space-between' style={{ marginRight: "2rem" }}>
                    <Grid item md={1} py={3}>
                        <Image src={Logo}/>
                    {/* <Typography fontWeight='500' sx={{color:'#031842', flexGrow:1, cursor:'pointer'}}>Home</Typography> */}

                    </Grid>
                    <Grid item  md={9}>
                        <Toolbar>
                            <Link href="/" style={{backgroundColor:'red'}}>
                                <Typography mx={3} fontWeight='500'  sx={{color:'#031842', cursor:'pointer', borderBottom:route.pathname=='/'?'3px solid #F2C94C':''}}>Home</Typography>
                            </Link>

                            <Link href="/about" >
                                <Typography mx={3} fontWeight='500' sx={{color:'#031842', cursor:'pointer', borderBottom:route.pathname=='/about'?'3px solid #F2C94C':''}}>About</Typography>
                            </Link>

                            <Link href="/">
                                <Typography mx={3} fontWeight='500' sx={{color:'#031842', cursor:'pointer', borderBottom:route.pathname=='/Solution'?'3px solid #F2C94C':''}}>Solutions</Typography>
                            </Link>

                            <Link href="/partners">
                                <Typography mx={3} fontWeight='500' sx={{color:'#031842', cursor:'pointer', borderBottom:route.pathname=='/partners'?'3px solid #F2C94C':''}}>Partners</Typography>
                            </Link>

                            <Link href="/">
                                <Typography mx={3} fontWeight='500' sx={{color:'#031842', cursor:'pointer', borderBottom:route.pathname=='/Solution'?'3px solid #F2C94C':''}}>Location</Typography>
                            </Link>

                            <Link href="/insight">
                                <Typography mx={3} fontWeight='500' sx={{color:'#031842', cursor:'pointer', borderBottom:route.pathname=='/insight'?'3px solid #F2C94C':''}}>Insights</Typography>
                            </Link>
                            &nbsp;
                            <RoundedButton text='Book a Demo' mx={3}/>
 
                            <Typography ml={3}  id="demo-positioned-menu" px={2} onClick={handleClick}  className='text nav-link' variant="body2" component="div" >
                              {/* <Grid className='text' container style={{bgcolor:'red'}}  justifyContent='center'>    */}
                                  <Image src={flag ==0 ? Us : (flag==1 ?Uk :Nig)} height={26} width={36} />
                              {/* <ArrowDropDown /> */}
                              {/* </Grid> */}
                            </Typography>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openEl}
                                onClose={handleCloseEl}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                style={{marginTop:'15px'}}
                                // classes={{ paper: classes.menuPaper }}
                            >
                                <MenuItem onClick={()=>handleSelectFlag(0)}><Image src={Us} height={15} width={20}/>&nbsp;United States</MenuItem>
                                <MenuItem onClick={()=> handleSelectFlag(1)}><Image src={Uk}/>&nbsp;United Kingdom</MenuItem>
                                <MenuItem onClick={()=> handleSelectFlag(2)}><Image src={Nig}/>&nbsp;Nigeria</MenuItem>
                                   
                            </Menu>
                        </Toolbar>
                    </Grid>
                </Grid>
              )}
            </Toolbar>
          </AppBar>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/College" component={College} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Personal" component={Personal} />
          </Switch>
        </BrowserRouter> */}
      </HideOnScroll>
    </div>
  );
};

export default Navbar;
