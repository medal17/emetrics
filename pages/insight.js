import { Grid } from "@mui/material";
import RoundedLineButton from "../components/Buttons/RoundedLineButton";
import HeadText from "../components/HeadText";
import Navbar from "../components/Navbar";
import InsightCard from "../components/Insights/InsightCard";
// import Team from '../resources/images/phone.png'
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
import Footer from "../components/Footer";
import data from "../resources/data/articles.json"

export default function Insights() {
    const pics = [
        {"name":pic0},
        {"name":pic1},
        {"name":pic2},
        {"name":pic3},
        {"name":pic4},
        {"name":pic5},
        {"name":pic6},
        {"name":pic7},
        {"name":pic8},
        {"name":pic9},
        {"name":pic10},
        {"name":pic11},
    ]
    return (
        <Grid container>
            <Navbar/>
           <Grid container px={{md:18, xs:1}}  mb={{md:7}}> 
                <Grid container justifyContent='center' mt={{md:19}}>
                    <HeadText text='Our featured Insights' size={20} />
                </Grid>
                
                <Grid container px={{md:3}} mt={3}>
                    { data.map(e=>
                        <InsightCard
                        id ={e.id} 
                        image={pics[e.image].name} 
                        category='Business' 
                        date={e.author} 
                        title={e.title}
                        // body='Oftentimes,organizations award high appraisal based performance ratings/scores to employees based on activities they are involved in and not on the contribution of'
                        labelBg='#FFF9F2'
                        labelColor="#ECB16D"
                    />
                    )}

                
                </Grid>
            </Grid>
            
            <Footer/>
        </Grid>
    )
}