import {Grid, Typography} from '@mui/material'
import Image from 'next/image'

export default function PictureOverCard (props){
    return(
        <Grid  container justifyContent='space-between' alignItems='center' my={3}>
            {props.direction =='ltr' ?
            <Grid item md={7}  sx={{bgcolor:'red'}}>
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
            <Grid item md={7} sm={12} xs={12} px={{md:5, sm:2, xs:2}} mx={0} py={{md:5, sm:2, xs:3}} pr={5} sx={{bgcolor:'#031842'}}>
            <Typography fontWeight={800} color='#fff' my={2} fontSize={22}>
                 {props.header}
            </Typography>
            <Typography color='#fff'>
                {props.body1}
            </Typography>
            {props.space}
            <Typography color='#fff'>
                {props.body2}
            </Typography>
        </Grid>
            }
        </Grid>
    )
}