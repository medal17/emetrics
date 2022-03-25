import { Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import {useRouter} from 'next/router';
import TitleImage from '../resources/images/phone.png';
import Image from 'next/image'
import RoundedButton from "../components/Buttons/RoundedButton";


export default function insightDetails (){
    const route = useRouter()
    const data =[
    {   
        id:1,
        // image:Team,
        category:'Technology',
        date:'December 18, 2020',
        title:'How to measure Success, Impact, productivity and outcomes ',
        body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {   
        id:2,
        // image:Team,
        category:'Technology',
        date:'December 18, 2020',
        title:'How to measure Success, Impact, productivity and outcomes ',
        body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {   
        id:3,
        // image:Team,
        category:'Technology',
        date:'December 18, 2020',
        title:'How to measure Success, Impact, productivity and outcomes ',
        body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {   
        id:4,
        // image:Team,
        category:'Technology',
        date:'December 18, 2020',
        title:'How to measure Success, Impact, productivity and outcomes ',
        body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {   
        id:5,
        // image:Team,
        category:'Technology',
        date:'December 18, 2020',
        title:'How to measure Success, Impact, productivity and outcomes ',
        body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {   
        id:6,
        // image:Team,
        category:'Technology',
        date:'December 18, 2020',
        title:'How to measure Success, Impact, productivity and outcomes ',
        body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }

                    
    ]
    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:17}}>
                {route.query.id ?
                <Grid container md={8} justifyContent='space-around'>
                    <Grid container md={10} py={2}>
                        <Image alt="title-image" width='800px' height='400vh'  src={TitleImage}/>
                    </Grid>
                    <Grid item md={6}>
                        {data[0].category}
                    </Grid>

                    <Grid item>
                        {data[route.query.id].date}
                    </Grid>

                    <Grid md={10} container my={2}>
                        <Typography fontWeight={600} fontSize={16}>
                            {data[route.query.id].title}
                        </Typography>
                    </Grid>
                    <Grid md={10} container>
                        {data[route.query.id].body}
                    </Grid>
                    <Grid container justifyContent={'center'} py={3}>
                        <RoundedButton text='Download'/>
                    </Grid>
                </Grid>:''}
            </Grid>
        </Grid>
    )
}