import styles from '../styles/Home.module.css'
import Divider from '@mui/material/Divider';
import {AppBar,Typography,Box, Container, Toolbar, Grid} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'
import Logo from '../resources/images/emetric.png'
import RoundedLineButton from './Buttons/RoundedLineButton';
import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
// imoprt

export default function Footer (){
    return(

            <Grid container md={12} lg={12} sx={{ backgroundColor: "#FBFDFF"}} justifyContent='center' paddingY={5} paddingX={1}>
                <Toolbar variant="dense">
                <Grid justifyContent='space-between' container spacing={{ xs: 1, sm: 2, md: 4, lg:10 }} >
                    <Grid item lg={2} xs={12} sm={4} sx={{ textAlign: "left" }}  >
                        <Image src={Logo}/>
                    </Grid>
                   
        {/* Social media group 1 */}

                    <Grid item lg={3} sm={4} textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  xs={12} >
                        <Typography variant='body1' fontWeight='bolder'  className='text' marginBottom={1}>
                        Contact Us
                        </Typography>

                    
                        <Grid container className='nav-link'>
                        {/* <Twitter/>  */}
                        <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  className='text'   variant='body2' marginBottom={2}> 
                            9304 Forest lane, Suite S207 Dallas, Texas 75243
                        </Typography>
                        </Grid>
                    


                    
                        <Grid container  className='nav-link' >
                        {/* <LinkedIn marginTop={2} /> */}
                        <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='text ' variant='body2' marginBottom={2}>
                        Email : info@emetricsuite.com</Typography>
                        </Grid>
                    

                    
                        <Grid container className='nav-link'>
                        {/* <Facebook marginTop={2}/> */}
                        <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='text' variant='body2' marginBottom={2}>
                        Contact : +1 (504) 499-5921
                        </Typography>
                        </Grid>
                   
                    </Grid>

                {/* //Social Media Group 2 */}

                    <Grid item lg={2} sm={3} xs={12} style={{ textAlign: "left" }}>
                        <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  variant='body1' fontWeight='bolder'  className='text' marginBottom={1}>
                            E-metric
                        </Typography>

                    <Grid container className='nav-link'>
                        <Link href="https://www.youtube.com" underline="always">
                        <>
                            {/* <YouTube/> */}
                            <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='text ' variant='body2' marginBottom={2}> 
                            About us</Typography>
                        </>
                        </Link>
                    </Grid>

                    <Grid container className='nav-link'>
                        <Link href="https://www.instagram.com" underline="always" >
                        <>
                            {/* <Instagram/>  */}
                            <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='text nav-link' variant='body2' marginBottom={2} justify='center'>
                            Terms of Use
                            </Typography>
                        </>
                        </Link>
                    </Grid>

                    <Grid container className='nav-link'>
                        <Link href="https://www.instagram.com" underline="always" >
                        <>
                            {/* <Instagram/>  */}
                            <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='text nav-link' variant='body2' marginBottom={2} justify='center'>
                            Privacy policy
                            </Typography>
                        </>
                        </Link>
                    </Grid>

                    

                    FAQs

                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <Typography variant='body1' textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} fontWeight='bolder' className='text' marginBottom={1}>
                        Connect with us
                        </Typography>
                        <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' className='text'>
                        Schedule an appointment with us
                        </Typography>
                        <Grid item md={8} sm={5} xs={12} px={{xs:7, md:1}}>
                            <Link href='https://www.calendly.com/emetricsuite'>
                                <a target='_blank'>
                                    <RoundedLineButton text='Book Now' px={4} py={1}/>
                                </a>
                            </Link>
                    </Grid>
                             
                    </Grid>
                        {/* // Social media Icons */}
                        <Grid item xs={12} sm={1} px={{xs:5}} columnGap={1} >
                            <Link href='https://www.linkedin.com/company/emetric-suite/'>
                                <a target='_blank'>
                                <AiFillLinkedin size={24}/>
                                </a>
                            </Link>
                            <br/><br/>
                            {/* <Link href=''>
                                <a target='_blank'>
                                    <FaTwitter size={24}/>
                                </a>
                            </Link><br/><br/> */}
                            <Link href='https://www.facebook.com/emetricsuitesoftware/'>
                                <a target='_blank'>
                                    <FaFacebookF size={24}/>
                                </a>
                            </Link><br/><br/>
                            <Link href='https://www.instagram.com/emetricsuite_nigeria'>
                                <a target='_blank'>
                                    <AiFillInstagram size={24}/>
                                </a>
                            </Link><br/><br/>
                        </Grid>
                    </Grid>
                
                </Toolbar>
                <br/>
                <br/>
                <Grid justifyContent='space-around' container mt={2}>
                    <Typography textAlign='center' textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='text' sx={{ color: "black" }}>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </Typography>
                </Grid>
                {/* <br/> */}
                <Toolbar />
            </Grid>
  )
}