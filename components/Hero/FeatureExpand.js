import {Grid, Typography, useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Image from 'next/image'

export default function FeatureExpand (props){
    
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid  container justifyContent='space-between' alignItems='center' my={3}>
            {props.direction =='ltr' ?
            <Grid item md={5} sm={12} xs={12} mx={{md:5, sm:1, xs:2}}>
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
            <Grid item md={5} sm={12} xs={12} mx={{md:5, sm:2, xs:2}} pr={{md:5, sm:0}}>
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