import { Grid, Typography } from "@mui/material";
import Image from 'next/image'
import styles from '../../styles/Home.module.css';
import { useRouter } from "next/router";


export default function InsightCard (props) {
    const route = useRouter()

    return (
        <Grid item md={4} px={2}>
            <Grid container  borderRadius={6} sx={{height:'185px'}}>
               <Image src={props.image} height='185px' objectFit='cover' className={styles.insightImage}/> 
            </Grid>
            <Grid container justifyContent='space-around' py={1}>
                <Grid item sx={{bgcolor:props.labelBg}} px={2} borderRadius={7}>
                    <Typography color={props.labelColor} variant='caption'>
                        {props.category}
                    </Typography>
                </Grid>
                <Grid item>
                    {props.date}
                </Grid>
            </Grid>

            <Grid container py={1} >
                <Typography fontWeight={700}>
                    {props.title}
                </Typography>
            </Grid>
            
            <Grid container py={1} justifyContent='space-around'>
                {props.body}
            </Grid>

                <Typography onClick={()=>route.push({pathname:'/insightDetails',query: {id: props.id } })} py={1} sx={{cursor:'pointer'}}  fontWeight={500}>
                    Read Article
                </Typography>
        </Grid>
    )
}