import { Grid, Typography } from "@mui/material";
import PictureOverCard from "../components/About/PictureOverCard";
import TeamCard from "../components/About/TeamCard";
import RoundedButton from "../components/Buttons/RoundedButton";
import Footer from "../components/Footer";
import HeadText from "../components/HeadText";
import FeatureExpand from "../components/Hero/FeatureExpand";
import Navbar from "../components/Navbar";
import AboutHero from '../resources/images/aboutImage.png'
import Team from '../resources/images/team.png';
import styles from '../styles/Home.module.css'
import PartnerHero from "../components/Partner/PartnerHero";
import ExpertisePonts from "../components/About/ExpertisePoints";
import db from '../resources/images/db1.jpg'
import richie from '../resources/images/richie.jpg'
import rob from '../resources/images/Robert-Ebers.jpg'
import Logo from '../resources/images/emetric.png'
import Image from 'next/image'

export default function About (){
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='space-around' md={11} pt={{ xs: 1, sm: 2, md: 7 }}>
                <PartnerHero
                image={AboutHero}
                direction='ltr'
                header='We Are Increasing Business Success 
                With Technology'
                body='Enterprise Metric Suite Solutions LLC is a global business process and performance management solution provider with its international headquarters in DallasTexas, USA.

                In its expansion bid, Enterprise Metric Suite Solutions LLC acquired SPNS Consulting, a Nigeria based consulting firm with strength in business process management, performance management and enterprise transformation.
                
                We are poised to partner with you towards transforming your business with the joint expertise of the team.'
                />
            </Grid>
            
            <Grid container justifyContent='flex-end' mx={{md:4}} md={11} pt={{ xs: 1, sm: 2, md: 7 }}>
                <PictureOverCard
                image={Team}
                direction='rtl'
                header='We Are Increasing Business Success 
                With Technology'
                body1='E-Metric Suite Provides for the automation needs of a robust performance management and appraisal data generation system which allows for seamless corporate and individual appraisal within an organisation. '
                body2='To ensure your organization gets the required 
                value, the e-metric suite data structure demands that; your strategic objectives, job profiles, operational processes, metrics and targets are all well aligned.'
                space={<br/>}
                />
            </Grid>

              <Grid container justifyContent='space-around' py={5}>
                  <HeadText text='Our Team' size={30} />

                  <Grid container justifyContent='center' my={4}>
                      <TeamCard image={rob} name='Robert P. Ebers' role='Chief Executive Officer'/>
                      
                      <TeamCard image={db} name='Debo Adebayo' role='Director of Business Operations (EMEA)'/>
                      <TeamCard image={richie} name='Martin Baillie' role='Director of Business Operations (Europe Market)'/>
                  </Grid>
                  
              </Grid>

        <Grid container justifyContent='center' py={7} >
            <Grid container  px={{md:4, xs:3}} py={4} md={8} item className={styles.transparentBg}  borderRadius={2}>
                <Grid container justifyContent={'center'}>
                    <Typography fontWeight={800} textAlign='center' mx={2} my={2} fontSize={25}>
                        Our Expertise
                    </Typography>
                </Grid>
                
                <Grid container justifyContent={{md:'center', xs:'left'}}>
                    <ExpertisePonts text='Performance Measurement'/>
                    <ExpertisePonts text='Simplified System'/>
                    <ExpertisePonts text='Agile Task'/>
                    <ExpertisePonts text='Tracking Software'/>
                    <ExpertisePonts text='Structured Appraisal Software'/>
                    <ExpertisePonts text='Data Capture'/>
                </Grid>  
            </Grid>              
        </Grid>


          <Grid container justifyContent='center' py={7} >
            <Grid px={{md:7, sm:2, xs:2}} py={4} item sx={{ margin:'0 auto'}} className={styles.startedBg} md={10} borderRadius={2}>  
                 <Typography fontWeight={800} textAlign='center' mx={2} my={2} fontSize={25}>
                    Get Started with us today
                  </Typography>

                  <Typography fontWeight={400} textAlign='center' fontSize={17}>
                  Loren ipsum is simply dummy text of the  typesetting industry, it’s very popular in the design world...
                  </Typography>
                  <Grid container justifyContent='center' pt={3} >
                    <RoundedButton text='Get Started'/>
                  </Grid>
                  
              </Grid>
            </Grid>

            <Footer/>
        </Grid>
    )
}