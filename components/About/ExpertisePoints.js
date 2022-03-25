import {Grid, Typography} from '@mui/material'
import {CgEditBlackPoint} from 'react-icons/cg'

export default function ExpertisePonts(props){
    return (
        <Grid item md={4} sm={11} px={2} py={1.5}>
            <Grid justifyContent={'center'} alignItems='center' container>
                <Grid item>
                    <CgEditBlackPoint color='#F2C94C' fontWeight={600} style={{border:'2.5px solid #031842', borderRadius:'10px'}}/>
                </Grid> &nbsp;
                <Grid item>
                    <Typography>
                    {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}