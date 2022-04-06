import {Grid, Typography, useMediaQuery} from '@mui/material';
import HeroImage from '../../resources/images/heroImage.png'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import RoundedButton from '../Buttons/RoundedButton';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function HeroSection(){
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const route=useRouter()
    console.log(isMobile)
    return(
        isMobile ? 
        <Grid container alignItems='center' justifyContent='space-evenly' py={5} className={styles.heroBg}>
       <Grid item md={5} sm={11} xs={11}>
            <Image src={HeroImage}/>
        </Grid>
        <Grid item md={4} sm={11} xs={11}>
            <Typography fontWeight={800} fontSize={30} py={2}>
                Acquiring Appraisal Data for maximum Productivity
            </Typography>
            <Typography fontWeight={400}>
            We are here to partner with you towards transforming your business and 
            team with our end-to-end performance management and apprasial software. 
             

            </Typography>
            <Grid container justifyContent='space-around' mt={2} py={2}>
            {/* <Link href='https://www.calendly.com/emetricsuite'>
                <a target='_blank'> */}
                    <Grid item>
                        <RoundedButton text='Get Started As a Partner' click={()=>route.push('/partners')}/>
                    </Grid>
                {/* </a>
            </Link> */}

                <Link href='https://www.calendly.com/emetricsuite'>
                    <a target='_blank'>
                        <Grid item>
                            <Typography fontWeight={800} sx={{color:'#D6B44D'}} fontSize={19}>
                                Request for a Demo
                            </Typography>
                        </Grid>
                    </a>
                </Link>
            </Grid>
        </Grid>
        
    </Grid>:
        <Grid container alignItems='center' justifyContent='space-evenly' py={5} className={styles.heroBg}>
            <Grid item md={4} sm={11} xs={11}>
                <Typography fontWeight={800} fontSize={30} py={2}>
                    Acquiring Appraisal Data for maximum Productivity
                </Typography>
                <Typography fontWeight={400}>
                    We are here partner with you towards transforming your business and 
                    team with our end-to-end performance management and Apprasial software.  
                </Typography>
                <Grid container justifyContent='space-around' mt={2} py={2}>
                    <Grid item>
                        <RoundedButton text='Get Started As a Partner' click={()=>route.push('/partners')}/>
                    </Grid>

                    <Link href='https://www.calendly.com/emetricsuite'>
                        <a target='_blank'>
                            <Grid item>
                                <Typography fontWeight={800} sx={{color:'#D6B44D'}} fontSize={19}>
                                    Request for a Demo
                                </Typography>
                            </Grid>
                        </a>
                    </Link>
                </Grid>
            </Grid>
            <Grid item md={5}>
                <Image src={HeroImage}/>
            </Grid>
        </Grid>
    )
}