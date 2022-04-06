import { Avatar, Typography, Grid } from "@mui/material";
import Image from 'next/image'

export default function Partners(props){
    // console.log(props.countries.includes(props.country))
    return (
        props.name && props.country !='' ? (props.name==props.country?
        <Grid container md={4} mx={1} my={3} alignItems='center'>
            <Grid item>
                <Image src={props.image}/>
            </Grid>
            <Grid item>
                <Typography px={2} fontSize={20}>{props.org}</Typography>
                <Typography px={2}>{props.email}</Typography>
                <Typography px={2}>{props.phone}</Typography>
            </Grid>
        </Grid>
        :''):
        <Grid item md={1} mx={1} my={3}>
            <Image src={props.image}/>
        </Grid>
    )
}