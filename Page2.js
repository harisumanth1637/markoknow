import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {
   Link
  } from "react-router-dom";

function Page2(props){
    const [data2,setData2] = useState('');
    function changedata1(Event){
        setData2(Event.target.value);
       
    }
    console.log(data2);
        return(
            <Grid container justifyContent='center'>
                <h1 style= {{color:'white'}}>Total Person he approached</h1>
                <TextField style={{backgroundColor:'white'}} size='large' value={data2} variant="outlined" onChange={changedata1}></TextField>
                <Button style={{backgroundColor:'blue'}} size='large' variant='contained'>
                    <Link to='/page3'>Next</Link>
                </Button>
            </Grid>
        )
    }
    export default Page2;