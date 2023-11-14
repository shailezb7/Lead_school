import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const CardDiv = ({ place, country }) => {


  useEffect(() => {
    console.log(place, country);
  }, [])

  return (
    <Box boxShadow={'0 0 5px green'} m={'10px'} p={'20px'} borderRadius={'10px'}  bg={'rgb(216,237,200)'} >


<Flex justifyContent="space-between" flexDirection="column">
        <Heading size="lg" my={'10px'} color={'rgb(1,147,212)'}>
          Place : {place['place name']}
        </Heading>
        <Heading size="lg" my={'10px'} color={'green'}>
          State : {place.state}
        </Heading>
        <Heading size="lg" my={'10px'} color={'red'}>
          Country : {country}
        </Heading>
        <Heading size="lg" my={'10px'} color={'rgb(226,157,31)'}>
          Latitude : {place.latitude}
        </Heading>
        <Heading size="lg" my={'10px'} color={'magenta'}>
          Longitude : {place.longitude}
        </Heading>
      </Flex>


    </Box>
  )
}

export default CardDiv