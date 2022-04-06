import { useState } from "react";
import { Grid, TextField, Typography, FormControl, MenuItem, Select, FormHelperText, CircularProgress } from "@mui/material";
import Navbar from "../components/Navbar";
import PartnerHero from "../components/Partner/PartnerHero";
import Image from '../resources/images/partners.png'
import Footer from '../components/Footer'
import Rplus from '../resources/images/rplus.png'
import Teesas from '../resources/images/teesas.png'
import Imose from '../resources/images/imose.png'
import Fbank from '../resources/images/first_bank.png'
import Sterling from '../resources/images/sterling_bank.png'
import Wema from '../resources/images/wema_bank.png'
import RoundedButton from '../components/Buttons/RoundedButton'
import Partners from '../components/Hero/PartenersLogo'
import emailjs from 'emailjs-com'

export default function PartnerList(){

  const [age, setAge] = useState('');
  const countries = ['uk', 'us','Nigeria', 'Ghana']
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [onChange, setChange] = useState({
    "email":'',
    "country":'',
    "phone" :'',
    "oganization":'',
    "designation":''
  });
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const handleForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;
  
    setChange((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }
  const handleChange = (event) => {
    setAge(event.target.value);
    setCountry(event.target.value)
  };

  const sendEmail =()=>{
    // e.preventDefault();
    if(
      onChange.email !=''&& onChange.country !='' && onChange.phone !='' 
      && onChange.organization !='' && onChange.designation !=''
    ){
    setLoading(true)
    emailjs.send('service_3jkjh2c', 'template_40ta9mq', onChange, 'xPdt33a6-tXh50XWL')
      .then((result) => {
          setLoading(false);
          setMessage('Mail Sent Successfully')
          setError(false)
          console.log(result.text);

          setChange({"email":'',
            "country":'',
            "phone" :'',
            "oganization":'',
            "designation":''})
            
      }, (error) => {
          console.log(error.text);
          setMessage('Mail Not Sent')
          setError(true)
          setLoading(false)
      });
    }else{
      setError(true)
      setMessage('Fill all Fields')
    }
  } 

  console.log(onChange)
  // const client = new SMTPClient({
  //   user: 'partners@emetricsuite.com',
  //   password: 'Backup2020',
  //   host: 'smtp.partners@emetricsuite.com',
  //   ssl: true,
  // });

  // client.send(
  //   {
  //     text: 'i hope this works',
  //     from: '<gen2soul419@gmail.com>',
  //     to: '<iyandaadeshina@gmail.com>',
  //     subject: 'testing emailjs',
  //   },
  //   (err, message) => {
  //     console.log(err || message);
  //   }
  // );
  

    return(
        <Grid>
            <Navbar/>
            <Grid container justifyContent='center' pt={{md:7}} mb={{md:7}} >
                <PartnerHero
                direction='ltr'
                image={Image}
                header='Join Our Growing List of Partners Across the Globe'
                body='Join our growing list of partners across the globe and stand the chance of becoming our country representative in your country. This position offers you the opportunity of working in one of the fastest growing organization in the performance management industry. Our partners are technically referred to as Value Added Partners (VAP). As a VAP, you are expected to market the solution to companies in your country, make demo presentations, follow up on them for sales, help with deployment and ultimately manage the clients.'
            />

            <Grid container md={7} sm={12} px={{md:8, sm:1}} p={3} sx={{backgroundColor:'#FBFDFF'}}>
             
              <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
                Register to Become a Partner
              </Typography> 
              <Grid container>
                {message && error ?<Typography color='red'>{message}</Typography>:(message && !error ?<Typography color='green'>{message}</Typography>:'')}
              </Grid>
              <TextField label='Email' placeholder='Email' type={'email'} name='email' onChange={handleForm} value={onChange.email} fullWidth sx={{marginY:1, backgroundColor:'#fff'}} required /> <br/>
              <TextField label='Country' placeholder='Country' type={'email'} name='country' value={onChange.country} onChange={handleForm} fullWidth sx={{marginY:1, backgroundColor:'#fff'}} required /> <br/>
              <TextField label='Phone Number' placeholder='Phone Number' type={'number'} value={onChange.phone} onChange={handleForm} name='phone' fullWidth sx={{marginY:1, backgroundColor:'#fff'}} required /> <br/>
              <TextField label='Organization Name' placeholder='Organization Name' value={onChange.organization} onChange={handleForm} type={'text'} name='organization' fullWidth sx={{marginY:1, backgroundColor:'#fff'}} required /> <br/>
              <TextField label='Designation' placeholder='Designation' value={onChange.designation} type={'text'} onChange={handleForm} name='designation' fullWidth sx={{marginY:1, backgroundColor:'#fff'}} required />
              
              { loading ?
               <Grid sx={{bgcolor:'#031842'}} px={5} borderRadius={2} py={1}> 
                <CircularProgress size={18} sx={{color:'white'}} /> 
              </Grid>
                :
                <RoundedButton text='Submit' click={()=>sendEmail()} />}
            </Grid>
            <Grid container justifyContent='space-around' my={2} md={6}>
                <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
                Understand KPI Analytics for Productivity
                </Typography>

                <Typography fontWeight={400} textAlign='center' fontSize={17}>
                  Our Simplified system helps you track, Performance measurement, Agile task planning and tracking software, Structured Appraisal and data capture. 
                </Typography>
            </Grid>
            <Grid container justifyContent='center' my={4} px={3}>
            <Grid container justifyContent='center'>
              <Typography fontWeight={800} textAlign='center' my={2} mx={2} fontSize={25}>
                Companies we helped grow
              </Typography>
            </Grid>
            <Grid container md={8}>
              <FormControl fullWidth sx={{ m: 1, }}>
                <Select
                    value={country}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Search for Partners by Country</em>
                    </MenuItem>
                    <MenuItem value='us'>Us</MenuItem>
                      <MenuItem value='uk'>Uk</MenuItem>
                      <MenuItem value='Nigeria'>Nigeria</MenuItem>
                      <MenuItem value='Ghana'>Ghana</MenuItem>
                  </Select>
                  <FormHelperText>Search for Partner</FormHelperText>
                </FormControl>
              </Grid>
            <Grid container justifyContent='center' alignItems='center' mt={2} md={10} px={8}>
              <Partners name={'Nigeria'} country={country} image={Rplus}/>
              <Partners name={'Nigeria'} country={country} image={Imose}/>
              <Partners name={'us'} country={country} image={Teesas}/>
              <Partners name={'Nigeria'} country={country} image={Rplus}/>
              <Partners name={'us'} country={country} image={Imose}/>
              <Partners name={'Nigeria'} country={country} image={Rplus}/>
              <Partners name={'us'} country={country} image={Fbank}/>
              <Partners name={'Nigeria'} country={country} image={Wema}/>
              <Partners name={'Ghana'} country={country} image={Rplus}/>
              <Partners name={'Nigeria'} country={country} image={Wema}/>
              {/* <Partners image={Sterling}/> */}
            </Grid>
            
          </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}