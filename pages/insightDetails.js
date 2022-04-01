import { Divider, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import {useRouter} from 'next/router';
import pic0 from '../resources/images/articleCover/0.png';
import pic1 from '../resources/images/articleCover/1.png';
import pic2 from '../resources/images/articleCover/2.png';
import pic3 from '../resources/images/articleCover/3.png';
import pic4 from '../resources/images/articleCover/4.png';
import pic5 from '../resources/images/articleCover/5.png';
import pic6 from '../resources/images/articleCover/6.png';
import pic7 from '../resources/images/articleCover/7.png';
import pic8 from '../resources/images/articleCover/8.png';
import pic9 from '../resources/images/articleCover/9.png';
import pic10 from '../resources/images/articleCover/10.png';
import pic11 from '../resources/images/articleCover/11.png';
import Image from 'next/image'
import InsightCard from "../components/Insights/InsightCard";
import data from "../resources/data/articles.json";
import Footer from "../components/Footer";
import Link from 'next/link'
import HeadText from "../components/HeadText";


export default function insightDetails (){
    const route = useRouter()
    const pics = [
        {"name":pic0}, {"name":pic1}, {"name":pic2}, {"name":pic3}, {"name":pic4}, {"name":pic5}, {"name":pic6},
        {"name":pic7}, {"name":pic8}, {"name":pic9}, {"name":pic10}, {"name":pic11},
    ]
    
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:17}}>
                {route.query.id ?
                <Grid container md={8} justifyContent='space-around'>
                    <Grid md={12} container my={2}>
                        <Typography fontWeight={600} fontSize={25}>
                            {data[route.query.id-1].title}
                        </Typography>
                    </Grid>
                    <Grid md={12} container my={2}>
                        <Typography fontSize={15}>
                            by {data[route.query.id-1].author}
                        </Typography>
                    </Grid>
                    <Grid container md={12} sx={{borderRadius:'20px'}} py={2}>
                        <Image alt="title-image" width='950px' height='400vh'  src={pics[route.query.id-1].name}/>
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
                        <Typography fontSize={16} textAlign='justify'>
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

            <Divider variant='middle'/>
            <br/>
         
            <Typography textAlign='center' pb={5} fontWeight={700} fontSize={23}>Other Articles</Typography>
            <Grid sx={{margin:'0 auto'}} container md={8}>
                    { data.map((e, index)=>index<6 && e.id != data[route.query.id-1]?
                        <InsightCard
                        id ={e.id} 
                        image={pics[e.image].name} 
                        category='Business' 
                        date={e.author} 
                        title={e.title}
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />:''
                    )}
                </Grid>
            <Footer/>
        </Grid>
    )
}