import { Grid, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import PartnerHero from "../components/Partner/PartnerHero";
import Image from '../resources/images/partners.png'
import Footer from '../components/Footer'
import Rplus from '../resources/images/rplus.png'
import Teesas from '../resources/images/teesas.png'
import Imose from '../resources/images/imose.png'
import Fbank from '../resources/images/first_bank.png'
import Sterling from '../resources/images/sterling_bank.png'
import Wema from '../resources/images/wema_bank.png'
import RoundedButton from '../components/Buttons/RoundedButton'
import Partners from '../components/Hero/PartenersLogo'

export default function PartnerList(){
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:7}} mb={{md:7}} >
                <PartnerHero
                direction='ltr'
                image={Image}
                header='Join Our Growing List of Partners Across the Globe'
                body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            />
            <Grid container md={7} sm={12} px={{md:8, sm:1}} p={3} sx={{backgroundColor:'#FBFDFF'}}>
              <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
                Register to Become a Partner
              </Typography>
              <TextField label='Email' placeholder='Email' type={'email'} fullWidth sx={{marginY:1, backgroundColor:'#fff'}}/> <br/>
              <TextField label='Country' placeholder='Country' type={'email'} fullWidth sx={{marginY:1, backgroundColor:'#fff'}}/> <br/>
              <TextField label='Phone Number' placeholder='Phone Number' type={'number'} fullWidth sx={{marginY:1, backgroundColor:'#fff'}}/> <br/>
              <TextField label='Organization Name' placeholder='Organization Name' type={'text'} fullWidth sx={{marginY:1, backgroundColor:'#fff'}}/> <br/>
              <TextField label='Designation' placeholder='Designation' type={'text'} fullWidth sx={{marginY:1, backgroundColor:'#fff'}}/>
              <RoundedButton text='Submit'  />
            </Grid>
            <Grid container justifyContent='space-around' my={2} md={6}>
                <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
                Understand KPI Analytics for Productivity
                </Typography>

                <Typography fontWeight={400} textAlign='center' fontSize={17}>
                Our Simplified system helps you track, Performance measurement, Agile task planning and tracking software, Structured Appraisal and data capture. 
                </Typography>
            </Grid>
            <Grid container justifyContent='center' my={4} px={3}>
            <Typography fontWeight={800} textAlign='center' my={2} mx={2} fontSize={25}>
              Companies we helped grow
            </Typography>
            
            <Grid container justifyContent='center' alignItems='center' mt={2} md={10} px={8}>
              <Partners image={Rplus}/>
              <Partners image={Imose}/>
              <Partners image={Teesas}/>
              <Partners image={Rplus}/>
              <Partners image={Imose}/>
              <Partners image={Rplus}/>
              <Partners image={Fbank}/>
              <Partners image={Wema}/>
              <Partners image={Rplus}/>
              <Partners image={Wema}/>
              {/* <Partners image={Sterling}/> */}
            </Grid>
            
          </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}