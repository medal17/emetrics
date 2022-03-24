import { Avatar, Typography, Grid } from "@mui/material";
import Image from 'next/image'

export default function Partners(props){
    return (
        <Grid item md={2} my={3}>
            <Image src={props.image}/>
        </Grid>
    )
}