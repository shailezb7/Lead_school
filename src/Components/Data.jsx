import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardDiv from './CardDiv';

const Data = ({details}) => {

    let [places,setPlaces] = useState([]);
    let [country,setCountry] = useState("");

    
    useEffect(()=>{
        if(details){
          setPlaces(details.places || []);
          setCountry(details.country);
        }
    },[details])

  return (
    <Box>
     {
        places.length>0 ?
         <SimpleGrid columns={[1,2,3]} ml={'20px'}>
            {
                places.map((e,i)=>{
                    return <CardDiv place={e} country={details.country} key={i} />
                })
            }
        </SimpleGrid> : <></>
        
     }
    </Box>
  )
}

export default Data