import { Grid } from "@mui/material";
import RoundedLineButton from "../components/Buttons/RoundedLineButton";
import HeadText from "../components/HeadText";
import Navbar from "../components/Navbar";
import InsightCard from "../components/Insights/InsightCard";
// import Team from '../resources/images/phone.png'
import image0 from '../resources/images/0.png';
import image1 from '../resources/images/1.png';
import image2 from '../resources/images/2.png';
import image3 from '../resources/images/3.png';
import image4 from '../resources/images/4.png';
import image5 from '../resources/images/5.png';
import Footer from "../components/Footer";

export default function Insights() {
    return (
        <Grid container>
            <Navbar/>
           <Grid container px={{md:18, xs:1}}  mb={{md:7}}> 
                <Grid container justifyContent='center' mt={{md:19}}>
                    <HeadText text='Our featured Insights' size={20} />
                </Grid>
                {/* <Grid container md={12} sm={11} my={2} xs={11} justifyContent={'space-evenly'}>
                    <Grid item>
                        <RoundedLineButton text='All' px={4} py={1.5} />
                        
                    </Grid>
                        <RoundedLineButton text='Business' px={4} py={1.5} />
                        <RoundedLineButton text='Strategy' px={4} py={1.5} />
                        <RoundedLineButton text='Management' px={4} py={1.5} />
                        <RoundedLineButton text='Non-profit' px={4} py={1.5} />
                </Grid> */}
                {/* <Grid container px={{md:3}}>
                    <HeadText text='Latest' size={17}/>
                </Grid> */}

                <Grid container px={{md:3}} mt={3}>
                    <InsightCard
                        id ={1} 
                        image={image0} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='Appraisal Data Generation Framework'
                        // body='Oftentimes,organizations award high appraisal based performance ratings/scores to employees based on activities they are involved in and not on the contribution of'
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />

                    <InsightCard 
                        id={2}
                        image={image1} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='Key Performance Indicators Analytics'
                        // body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2F6FF'
                        labelColor="#407BFF"
                    />

                    <InsightCard 
                        id={3}
                        image={image2} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='Corporate Strategy Development'
                        // body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2FFFA'
                        labelColor="#75C4A6"
                    />
                </Grid>

                <Grid container px={{md:3}} mt={3}>
                    <InsightCard 
                        id={4}
                        image={image3} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='Process Documentation'
                        // body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />

                    <InsightCard
                        id={5} 
                        image={image4} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='Performance Management'
                        // body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2F6FF'
                        labelColor="#407BFF"
                    />

                    <InsightCard
                        id={6} 
                        image={image5} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='Performance Management Software'
                        // body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2FFFA'
                        labelColor="#75C4A6"
                    />
                </Grid>
            </Grid>
           
            <Footer/>
        </Grid>
    )
}