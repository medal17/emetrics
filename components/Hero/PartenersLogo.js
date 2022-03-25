import { Avatar, Typography, Grid } from "@mui/material";
import Image from 'next/image'

export default function Partners(props){
    return (
        <Grid item md={1} mx={1} my={3}>
            <Image src={props.image}/>
        </Grid>
    )
}