import { Grid } from "@mui/material";
import RoundedLineButton from "../components/Buttons/RoundedLineButton";
import HeadText from "../components/HeadText";
import Navbar from "../components/Navbar";
import InsightCard from "../components/Insights/InsightCard";
import Team from '../resources/images/phone.png'
import Footer from "../components/Footer";

export default function Insights() {
    return (
        <Grid container>
            <Navbar/>
           <Grid container px={{md:18, xs:1}} md={11} mb={{md:7}}> 
                <Grid container justifyContent='center' mt={{md:19}}>
                    <HeadText text='Our featured Insights' size={20} />
                </Grid>
                <Grid container md={12} sm={11} my={2} xs={11} justifyContent={'space-evenly'}>
                    <Grid item>
                        <RoundedLineButton text='All' px={4} py={1.5} />
                        
                    </Grid>
                        <RoundedLineButton text='Business' px={4} py={1.5} />
                        <RoundedLineButton text='Strategy' px={4} py={1.5} />
                        <RoundedLineButton text='Management' px={4} py={1.5} />
                        <RoundedLineButton text='Non-profit' px={4} py={1.5} />
                </Grid>
                <Grid container px={{md:3}}>
                    <HeadText text='Latest' size={17}/>
                </Grid>

                <Grid container px={{md:3}} mt={3}>
                    <InsightCard 
                        image={Team} 
                        category='Economy' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />

                    <InsightCard 
                        image={Team} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2F6FF'
                        labelColor="#407BFF"
                    />

                    <InsightCard 
                        image={Team} 
                        category='Technology' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2FFFA'
                        labelColor="#75C4A6"
                    />
                </Grid>

                <Grid container px={{md:3}} pt={{md:5}}>
                    <HeadText text='Favorites' size={17}/>
                </Grid>

                <Grid container px={{md:3}} mt={3}>
                    <InsightCard 
                        image={Team} 
                        category='Economy' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />

                    <InsightCard 
                        image={Team} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2F6FF'
                        labelColor="#407BFF"
                    />

                    <InsightCard 
                        image={Team} 
                        category='Technology' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2FFFA'
                        labelColor="#75C4A6"
                    />
                </Grid>

                <Grid container mt={{md:7}} px={{md:3}}>
                    <HeadText text='New Feeds' size={17}/>
                </Grid>

                <Grid container px={{md:3}} mt={3}>
                    <InsightCard 
                        image={Team} 
                        category='Economy' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />

                    <InsightCard 
                        image={Team} 
                        category='Business' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2F6FF'
                        labelColor="#407BFF"
                    />

                    <InsightCard 
                        image={Team} 
                        category='Technology' 
                        date='December 18, 2020' 
                        title='How to measure succssess, Impact, productivity and outcomes '
                        body='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        labelBg='#F2FFFA'
                        labelColor="#75C4A6"
                    />
                </Grid>
            </Grid>
           
            <Footer/>
        </Grid>
    )
}