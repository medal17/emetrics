import {Grid, Typography} from '@mui/material'
import Image from 'next/image'

export default function PartnerHero (props){
    return(
        <Grid  container justifyContent='space-around' alignItems='center' my={3}>
            {props.direction =='ltr' ?
            <Grid item md={5} mx={5}>
                <Typography fontWeight={800}  my={2} fontSize={22}>
                     {props.header}
                </Typography>
                <Typography>
                    {props.body}
                </Typography>
            </Grid> :
            <Grid item md={5}>
            <Image src={props.image}/>
            
        </Grid>
            }
            {props.direction =='ltr' 
            ?
            <Grid item md={5}>
                <Image src={props.image}/>
                
            </Grid> :
            <Grid item md={5} mx={5} pr={5}>
            <Typography fontWeight={800}  my={2} fontSize={22}>
                 {props.header}
            </Typography>
            <Typography>
                {props.body}
            </Typography>
        </Grid>
            }
        </Grid>
    )
}