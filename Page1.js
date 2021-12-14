import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {
   Link
  } from "react-router-dom";

function Page1(props){
    const [data1,setData1] = useState('');
    function changedata1(Event){
        setData1(Event.target.value);
        
    }
    console.log(data1);
        return(
            <Grid container justifyContent='center'>
                <h1 style={{color:'white'}}>Area he visited yesterday for marketing</h1>
                <TextField style={{backgroundColor:'white'}} size='large' value={data1} variant="outlined" onChange={changedata1}></TextField>
                <Button style={{backgroundColor:'blue'}} size='large' variant='contained'>
                    <Link to='/page2'>Next</Link>
                </Button>
            </Grid>
        )
    }

export default Page1;