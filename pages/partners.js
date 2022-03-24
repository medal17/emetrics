import { Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import PartnerHero from "../components/Partner/PartnerHero";
import Image from '../resources/images/aboutImage.png'
import Footer from '../components/Footer'

export default function Partners(){
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:7}} mb={{md:7}} >
                <PartnerHero
                direction='ltr'
                image={Image}
                header='Join Our Growing List of Partners Accross the Globe'
                body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            />

            <Grid container justifyContent='space-around' my={2} md={6}>
                <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
                Understand KPI Analytics for Productivity
                </Typography>

                <Typography fontWeight={400} textAlign='center' fontSize={17}>
                Our Simplified system helps you track, Performance measurement, Agile task planning and tracking software, Structured Appraisal and data capture. 
                </Typography>
            </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}