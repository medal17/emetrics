import { Grid, IconButton, Typography, Button } from "@mui/material";
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import {useRouter} from 'next/router'

export default function SolutionsPoints (props){

    const route= useRouter()
    return (
        <Grid item md={6} sm={12} px={2} my={2}>
            <Grid container>
                <Grid item pr={1}>
                    <VscDebugBreakpointLog/>
                </Grid>

                <Grid item>
                    <Typography fontWeight={600} fontSize={15}>
                        {props.title}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Typography pl={2}>
                    {props.body.length> 160 ? props.body.substr(0,159) + '...': props.body}
                    &nbsp;<Button sx={{cursor:'pointer'}} variant='outlined' onClick={()=>route.push({pathname:'/solutionDetails', query: { id: props.id }})}Read> More</Button> 
                </Typography>
                
            </Grid>
        </Grid>
    )
}