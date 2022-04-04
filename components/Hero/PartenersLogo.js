import { Avatar, Typography, Grid } from "@mui/material";
import Image from 'next/image'

export default function Partners(props){
    // console.log(props.countries.includes(props.country))
    return (
        props.name && props.country !='' ? (props.name==props.country?
        <Grid item md={1} mx={1} my={3}>
            <Image src={props.image}/>
        </Grid>
        :''):
        <Grid item md={1} mx={1} my={3}>
            <Image src={props.image}/>
        </Grid>
    )
}