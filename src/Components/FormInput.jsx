import React from 'react'
import { Box, Button, Container, Flex, Heading, Input, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import Data from './Data';

const FormInput = () => {
  let [pin, setPin] = useState(0);
  let [details, setDetails] = useState({});
  let [loading, setLoading] = useState(false);


  let handlePin = (e) => {
    setPin(e.target.value);
  }

  let getData = async () => {
    setLoading(true);
    try {
      let data = await axios.get(`https://api.zippopotam.us/in/${pin}`);
      setDetails(data.data);
      console.log(details);
    } catch (error) {
       console.log('Error fetching data');
    } finally{
      setLoading(false);
    }
  }

  let resetData = () => {
    setDetails({});
    setPin("");
  }

  return (
    <Box>

      <Box width={'100%'} height={'100px'} p={'20px'} color={'green'} textAlign={'center'}
        bg={'rgb(216,237,200)'}><Heading>Location Finder App</Heading></Box>
        
        {
          loading ? <Container m={'auto'} my={'100px'} display={'flex'}>
            <Heading color={'green'}>Loading</Heading>
            <Spinner size='sm' color='green' mt={'15px'} ml={'10px'}/>
          </Container> : <Box p={'20px'}>

        <Container boxShadow={'0 0 5px green'} textAlign={'center'} my={'40px'} p={'40px'}
         borderRadius={'10px'}   bg={'rgb(216,237,200)'} >
          <Input type='number' width={['200px','300px','400px']} variant='flushed' placeholder='Enter PIN Code'
           onChange={(e) => { handlePin(e) }}  /> <br /><br />
          
          <Flex justifyContent={'space-between'} p={'10px'}>
            <Button onClick={getData} colorScheme='green'>Submit</Button>
            <Button onClick={resetData} colorScheme='green'>Reset</Button>
          </Flex>
        </Container>

        <Data details={details} />
      </Box>
        }
    </Box>
  );
}

export default FormInput