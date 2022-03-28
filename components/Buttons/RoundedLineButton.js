import {Grid, Typography} from '@mui/material'
 
export default function RoundedLineButton(props){
    return(
        <Grid sx={{borderRadius:"10px", border:'1px solid #031842'}} justifyContent='center' py={props.py} px={props.px}  my={1} borderColor='#031842'>
            <Typography fontWeight={500} alignItems='center'  sx={{color:'#031842',flexGrow:1, cursor:'pointer'}} >{props.text}</Typography>
        </Grid>
    )
}