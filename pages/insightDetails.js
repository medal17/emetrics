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


export default function insightDetails (){
    const route = useRouter()
    const data =[
    {   
        id:1,
        image:image0,
        category:'Business',
        date:'December 18, 2020',
        title:'Appraisal Data Generation Framework',
        body:'Oftentimes,organizations award high appraisal based performance ratings/scores to employees based on activities they are involved in and not on the contribution of those activities to the achievement of the overall organization objectives. This is based on the fact that corporate strategic objectives or initiatives and performance measures are not well extracted and aligned from the strategic plan,and or appropriate metrics for effective performance measurements are not easily figured out Organizations have been confronted with the constant challenge of effectively aligning corporate strategic objectives and employee performance measures,as well as identifying how to generate performance appraisal data for the measurement of the performance of some of the job functions with a focus on more of quantitative output as against qualitative outputs'
    },

    {   
        id:2,
        image:image1,
        category:'Business',
        date:'December 18, 2020',
        title:'Key Performance Indicators Analytics',
        body:"Extraction of result based KPIs and the other parameters especially for the none sales related job functions (backend) could become an herculean task if the right methodologies are not adopted. Having to put all the various contributory elements such as; Strategic objectives,employees 'job profiles, business processes amongst others in sync require a sound knowledge of KPI analytics. With our years of experience in process and performance management, we are poised to help your organization solve all key performance indicator analytics related issues as well as performance management as a whole"
    },

    {   
        id:3,
        image:image2,
        category:'Business',
        date:'December 18, 2020',
        title:'Corporate Strategy Development',
        body:'For an organization to truly have long-term strategic success, strong strategic plans are needed at every level in the organization. Our approach to the development of corporate strategy at Emetric Suite is designed to ensure that organizations produce better plans for how they might effectively respond to the new and emerging future. Most importantly, a plan that prepares the business for grow through innovation.An effective corporate strategy is an important component of any successful organization. A well-developed strategy has the potential to cause significant growth,an increase in profit,and long term success. However, a corporate strategy that is poorly planned can result in disaster.'
    },
    {   
        id:4,
        image:image3,
        category:'Business',
        date:'December 18, 2020',
        title:'Process Documentation',
        body:'Considering the fact that Process documentation is the creation of an operational road map for your organization—it helps you identify the current state of a process to know how you can improve it. Any task that is done more than once or completed by multiple people needs to be documented.'
    },
    {   
        id:5,
        image:image4,
        category:'Business',
        date:'December 18, 2020',
        title:'Performance Management',
        body:'Performance management in any organization aims at extensively improving organizational performance while sustaining performance, productivity, and the motivation of employees. In recent years, it has become obvious that traditional performance management is ineffective. Thus, making Agile Performance Management, continuous performance management, popular for forward looking organizations.Performance management in it self is a complex process that entails information gathering through monitoring task completion, feedback, and discussions. An effective performance management system requires commitment and dedication from the human resources department and managers and employees, as well as, the collection of quality data. It is also important to note that the performance management process is bound to fail when the people involved are not fully interested in it.'
    },
    {   
        id:6,
        image:image5,
        category:'Business',
        date:'December 18, 2020',
        title:'Performance Management Software',
        body:'E-Metric Suite Software is designed to provide for the need of organizations globally to monitor and manage performance across all tiers as daily operational activities of the workforce are linked to the corporate strategic goals and objectives of the organization on the go.OUR SERVICES E-Metric Suite Software is designed to provide for the need of organizations globally to monitor and manage performance across all tiers as daily operational activities of the workforce are linked to the corporate strategic goals and objectives of the organization on the go. It is designed to aid organizations in the generation and utilization of both quantitative and qualitative data required for effective performance and appraisal management.'
    }

                    
    ]
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:17}}>
                {route.query.id ?
                <Grid container md={8} justifyContent='space-around'>
                    <Grid container md={10} py={2}>
                        <Image alt="title-image" width='800px' height='400vh'  src={data[route.query.id-1].image}/>
                    </Grid>
                    <Grid item md={6}>
                        {data[route.query.id-1].category}
                    </Grid>

                    <Grid item>
                        {data[route.query.id-1].date}
                    </Grid>

                    <Grid md={10} container my={2}>
                        <Typography fontWeight={600} fontSize={16}>
                            {data[route.query.id-1].title}
                        </Typography>
                    </Grid>
                    <Grid md={10} container>
                        {data[route.query.id-1].body}
                    </Grid>
                    <Grid container justifyContent={'center'} py={3}>
                        {/* <Link > */}
                            <a target='_blank' href='/Brochure.pdf' download>
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