import { Avatar, Typography, Grid } from "@mui/material";

export default function FeaturedCard(props){
    return (
        <Grid item md={3} px={{md:5, sm:2, xs:2}} py={5} my={3} borderRadius={2} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.01)'>
            <Avatar sx={{bgcolor:props.iconBg, height:'60px', width:'60px'}} >
                {props.icon}
            </Avatar>
            <Typography fontWeight={700}  sx={{color:'#031842'}} fontSize={18} my={2}>
                {props.title}
            </Typography>

            <Typography textAlign={'justify'}>
                {props.body}
            </Typography>
        </Grid>
    )
}