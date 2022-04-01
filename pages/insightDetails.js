import { Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import {useRouter} from 'next/router';
import image0 from '../resources/images/0.png';
import image1 from '../resources/images/1.png';
import image2 from '../resources/images/2.png';
import image3 from '../resources/images/3.png';
import image4 from '../resources/images/4.png';
import image5 from '../resources/images/5.png';
import Image from 'next/image'
import RoundedButton from "../components/Buttons/RoundedButton";
import Footer from "../components/Footer";
import Link from 'next/link'
import data from '../resources/data/articles.json'


export default function insightDetails (){
    const route = useRouter()
    
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:17}}>
                {route.query.id ?
                <Grid container md={8} justifyContent='space-around'>
                    
                    <Grid container md={12} py={2}>
                        <Image alt="title-image" width='800px' height='400vh'  src={image5}/>
                    </Grid>
                    <Grid item md={6}>
                        {data[route.query.id-1].category}
                    </Grid>

                    <Grid item>
                        {data[route.query.id-1].date}
                    </Grid>

                    <Grid md={12} container my={2}>
                        <Typography fontWeight={600} fontSize={16}>
                            {data[route.query.id-1].title}
                        </Typography>
                    </Grid>
                    <Grid md={12} container>
                        <Typography fontSize={16}>
                            {data[route.query.id-1].body}
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'center'} py={3}>
                        {/* <Link > */}
                            <a target='_blank' href={data[route.query.id-1].url} download>
                                <Grid sx={{bgcolor:'#031842', borderRadius:"10px"}}>
                                    <Typography fontWeight={500} py={1.2} px={2.5} sx={{color:'#fff',flexGrow:1, cursor:'pointer'}} >Download</Typography>
                                </Grid>
                            </a>
                        {/* </Link> */}
                    </Grid>
                </Grid>:''}
            </Grid>
            <Footer/>
        </Grid>
    )
}