import {Grid, Typography} from'@mui/material'
import Image from 'next/image'

export default function TeamCard (props){
    return(
        <Grid item md={3} px={3}>
            <Grid p={0.5} sx={{border:'1px solid #031842'}} borderRadius={2}>
                <Image src={props.image} height={600} width={440} />
            </Grid>
            <Typography textAlign='center' fontWeight={600} fontSize={18}>
                {props.name}
            </Typography>
            <Typography textAlign='center'>
                {props.role}
            </Typography>
        </Grid>
    )
}