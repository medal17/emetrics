import { useTheme } from '@mui/material/styles';
import {Grid, Typography, useMediaQuery} from '@mui/material'
import Image from 'next/image'
import RoundedButton from '../Buttons/RoundedButton'

export default function PartnerHero (props){

  const theme = useTheme()  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Grid  container justifyContent='space-around' alignItems='center' my={3}>
            {props.direction =='ltr' && !isMobile  ?
            <Grid item md={5} sm={12} xs={12} mx={{md:5, sm:2, xs:2}}>
                <Typography fontWeight={800}  my={2} fontSize={22}>
                     {props.header}
                </Typography>
                <Typography textAlign={'justify'} fontSize={16}>
                    {props.body}
                </Typography>
                { props.hasButtons ?
                <Grid container justifyContent='space-around' mt={2} py={2}>
                    <Grid item>
                        <RoundedButton text='Get Started As a Partner'/>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight={800} sx={{color:'#D6B44D'}} fontSize={19}>
                            Request for a Demo
                        </Typography>
                    </Grid>
                </Grid>:''}
            </Grid> :
            <Grid item md={5}>
            <Image  src={props.image}/>
            
        </Grid>
            }
            {props.direction =='ltr' && !isMobile
            ?
            <Grid item md={5}>
                <Image src={props.image}/>
                
            </Grid> :
            <Grid item md={4} sm={12} xs={12} mx={{md:5, sm:2, xs:2}} pr={{md:5, sm:2,xs:0}}>
            <Typography fontWeight={800}  my={2} fontSize={22}>
                 {props.header}
            </Typography>
            <Typography textAlign={'justify'} fontSize={16}>
                {props.body}
            </Typography>
        </Grid>
            }
        </Grid>
    )
}