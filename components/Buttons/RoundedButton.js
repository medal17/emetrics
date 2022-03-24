import {Grid, Typography} from '@mui/material'
 
export default function RoundedButton(props){
    return(
        <Grid sx={{bgcolor:'#031842', borderRadius:"10px"}}>
            <Typography fontWeight={500} py={1.2} px={2.5} sx={{color:'#fff',flexGrow:1, cursor:'pointer'}} >{props.text}</Typography>
        </Grid>
    )
}