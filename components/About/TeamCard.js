import {Grid, Typography} from'@mui/material'
import Image from 'next/image'

export default function TeamCard (props){
    return(
        <Grid item md={3} px={3}>
            <Image src={props.image}/>
            <Typography textAlign='center' fontWeight={600} fontSize={18}>
                {props.name}
            </Typography>
            <Typography textAlign='center'>
                {props.role}
            </Typography>
        </Grid>
    )
}