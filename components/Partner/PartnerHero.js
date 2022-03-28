import {Grid, Typography} from '@mui/material'
import Image from 'next/image'
import RoundedButton from '../Buttons/RoundedButton'

export default function PartnerHero (props){
    return(
        <Grid  container justifyContent='space-around' alignItems='center' my={3}>
            {props.direction =='ltr' ?
            <Grid item md={4} mx={5}>
                <Typography fontWeight={800}  my={2} fontSize={22}>
                     {props.header}
                </Typography>
                <Typography fontSize={16}>
                    {props.body}
                </Typography>
                { props.hasButtons ?
                <Grid container justifyContent='space-around' mt={2} py={2}>
                    <Grid item>
                        <RoundedButton text='Get Started'/>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight={800} sx={{color:'#D6B44D'}} fontSize={19}>
                            Request for a Demo
                        </Typography>
                    </Grid>
                </Grid>:''}
            </Grid> :
            <Grid item md={4}>
            <Image src={props.image}/>
            
        </Grid>
            }
            {props.direction =='ltr' 
            ?
            <Grid item md={4}>
                <Image src={props.image}/>
                
            </Grid> :
            <Grid item md={4} mx={5} pr={5}>
            <Typography fontWeight={800}  my={2} fontSize={22}>
                 {props.header}
            </Typography>
            <Typography fontSize={16}>
                {props.body}
            </Typography>
        </Grid>
            }
        </Grid>
    )
}