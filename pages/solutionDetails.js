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

export default function solutionDetails (props) {
    const route = useRouter()
    const data = [
        {image:Image,
        'title':'Appraisal Data Generation Framework',
        'body':'designed to ensure that organizations produce better plans for how they might effectively respond to the new and emerging future.'
        },
        {
            image:Image1,
            'title': 'Key Performance Indicators Analytics',
            'body':'Extraction of result based KPIs and the other parameters especially for the none sales related job functions (backend) could become an herculean task if the right methodologies are not adopted.'
        },
        {
            image:Image2,
            'title':'Corporate Strategy Development',
            'body':'Designed to ensure that organizations produce better plans for how they might effectively respond to the new and emerging future.'
        },
        {
            image: Image3,
            'title':'Process Documentation',
            'body':'identify the current state of a process to know how you can improve it'
        },
        {
          image:Image4,
          'title':'Performance Management',
          'body':' while sustaining performance, productivity, and the motivation of employees. In recent years, it has become obvious that traditional performance management is ineffective.'
        
        },
        {
        image:Image5,
        'title':'Performance Management Software',
        'body':'E-Metric Suite Software is designed to provide for the need of organizations globally to monitor and manage performance across all tiers as daily operational activities of the workforce are linked to the corporate strategic goals and objectives of the organization on the go.'
        }
        

    ]
    console.log(route.query.name)
    return (
        <Grid >
            <Navbar/>
            <Grid container mt={{md:12}} justifyContent='center'  md={11}>
             { route.query.id ?  
                <PartnerHero
                    direction='ltr'
                    image={data[route.query.id].image}
                    header={data[route.query.id].title}
                    body={data[route.query.id].body}
                />: 'Nooo'}
            </Grid>
        </Grid>
    )
}