import { Grid } from "@mui/material";
import RoundedLineButton from "../components/Buttons/RoundedLineButton";
import HeadText from "../components/HeadText";
import Navbar from "../components/Navbar";
import InsightCard from "../components/Insights/InsightCard";
// import Team from '../resources/images/phone.png'
import pic0 from '../resources/images/article cover/0.png';
import pic1 from '../resources/images/article cover/1.png';
import pic2 from '../resources/images/article cover/2.png';
import pic3 from '../resources/images/article cover/3.png';
import pic8 from '../resources/images/article cover/8.png';
import pic9 from '../resources/images/article cover/9.png';
import pic10 from '../resources/images/article cover/10.png';
import pic11 from '../resources/images/article cover/11.png';
import Footer from "../components/Footer";
import data from "../resources/data/articles.json"

export default function Insights() {

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
                        image={pic0} 
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