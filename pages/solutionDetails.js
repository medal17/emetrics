import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PartnerHero from "../components/Partner/PartnerHero";
// import Image from  'next/image'
import Image from '../resources/images/0.png'
import Image1 from '../resources/images/1.png'
import Image2 from '../resources/images/2.png'
import Image3 from '../resources/images/3.png'
import Image4 from '../resources/images/4.png'
import Image5 from '../resources/images/5.png'
import {useRouter} from 'next/router'
import Footer from "../components/Footer";
import HeroSection from "../components/Hero/HeroSection";

export default function solutionDetails (props) {
    const route = useRouter()
    const data = [
        {image:Image,
        'title':'Appraisal Data Generation Framework',
        'body':'Oftentimes,organizations award high appraisal based performance ratings/scores to employees based on activities they are involved in and not on the contribution of those activities to the achievement of the overall organization objectives. This is based on the fact that corporate strategic objectives or initiatives and performance measures are not well extracted and aligned from the strategic plan,and or appropriate metrics for effective performance measurements are not easily figured out Organizations have been confronted with the constant challenge of effectively aligning corporate strategic objectives and employee performance measures,as well as identifying how to generate performance appraisal data for the measurement of the performance of some of the job functions with a focus on more of quantitative output as against qualitative outputs'
        },
        {
            image:Image1,
            'title': 'Key Performance Indicators Analytics',
            'body':"Extraction of result based KPIs and the other parameters especially for the none sales related job functions (backend) could become an herculean task if the right methodologies are not adopted. Having to put all the various contributory elements such as; Strategic objectives,employees 'job profiles, business processes amongst others in sync require a sound knowledge of KPI analytics. With our years of experience in process and performance management, we are poised to help your organization solve all key performance indicator analytics related issues as well as performance management as a whole"
        },
        {
            image:Image2,
            'title':'Corporate Strategy Development',
            'body':'For an organization to truly have long-term strategic success, strong strategic plans are needed at every level in the organization. Our approach to the development of corporate strategy at Emetric Suite is designed to ensure that organizations produce better plans for how they might effectively respond to the new and emerging future. Most importantly, a plan that prepares the business for grow through innovation.An effective corporate strategy is an important component of any successful organization. A well-developed strategy has the potential to cause significant growth,an increase in profit,and long term success. However, a corporate strategy that is poorly planned can result in disaster.'
        },
        {
            image: Image3,
            'title':'Process Documentation',
            'body':'Considering the fact that Process documentation is the creation of an operational road map for your organization—it helps you identify the current state of a process to know how you can improve it. Any task that is done more than once or completed by multiple people needs to be documented.'
        },
        {
          image:Image4,
          'title':'Performance Management',
          'body':'Performance management in any organization aims at extensively improving organizational performance while sustaining performance, productivity, and the motivation of employees. In recent years, it has become obvious that traditional performance management is ineffective. Thus, making Agile Performance Management, continuous performance management, popular for forward looking organizations.Performance management in it self is a complex process that entails information gathering through monitoring task completion, feedback, and discussions. An effective performance management system requires commitment and dedication from the human resources department and managers and employees, as well as, the collection of quality data. It is also important to note that the performance management process is bound to fail when the people involved are not fully interested in it.'
        },
        {
        image:Image5,
        'title':'Performance Management Software',
        'body':'E-Metric Suite Software is designed to provide for the need of organizations globally to monitor and manage performance across all tiers as daily operational activities of the workforce are linked to the corporate strategic goals and objectives of the organization on the go.OUR SERVICES E-Metric Suite Software is designed to provide for the need of organizations globally to monitor and manage performance across all tiers as daily operational activities of the workforce are linked to the corporate strategic goals and objectives of the organization on the go. It is designed to aid organizations in the generation and utilization of both quantitative and qualitative data required for effective performance and appraisal management.'
        }
        

    ]
    console.log(route.query.name)
    return (
        <Grid >
            <Navbar/>
            <HeroSection/>
            <Grid container mt={{md:12}} justifyContent='center'  md={11}>
             { route.query.id ?  
                <PartnerHero
                    direction='ltr'
                    image={data[route.query.id].image}
                    header={data[route.query.id].title}
                    body={data[route.query.id].body}
                />: 'Nooo'}
            </Grid>
            <Footer/>
        </Grid>
    )
}