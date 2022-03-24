import {Grid, Typography} from '@mui/material';
import HeroImage from '../../resources/images/heroImage.png'
import Image from 'next/image'
import RoundedButton from '../Buttons/RoundedButton';
import styles from '../../styles/Home.module.css'

export default function HeroSection(){
    return(
        <Grid container alignItems='center' justifyContent='space-evenly' py={5} className={styles.heroBg}>
            <Grid item md={4}>
                <Typography fontWeight={800} fontSize={30} py={2}>
                    Acquiring Appraisal Data for maximum Productivity
                </Typography>
                <Typography fontWeight={400}>
                Partnering with you towards transforming your business and 
                team with our End-to-End performance management and Apprasial software. 
                Partnering with you towards transforming your business and team with 
                our End-to-End to Apprasial software. 

                </Typography>
                <Grid container justifyContent='space-around' mt={2} py={2}>
                    <Grid item>
                        <RoundedButton text='Get Started'/>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight={800} sx={{color:'#D6B44D'}} fontSize={19}>
                            Request for a Demo
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={5}>
                <Image src={HeroImage}/>
            </Grid>
        </Grid>
    )
}