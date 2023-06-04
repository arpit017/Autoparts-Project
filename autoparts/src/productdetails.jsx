import React from 'react'
import { useSelector } from 'react-redux'
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button} from '@chakra-ui/react'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'
import './productdetails.css'
import { getCartDataFun } from './Redux/action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { color } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Productdetails() {
  const dispatch=useDispatch()
  const[theme,setTheme]=useState("light")
  const detailsData=useSelector((data)=>{
    return data.detailsPageData
  })
  console.log(detailsData)

  function addToCart(elem){
    let ele={...elem,quantity:1}
   dispatch(getCartDataFun(ele))
   console.log("abcd")
  }

  return (
    
    <div  style={{backgroundColor:theme=="dark"?"black":"white",marginTop:"20px",padding:"10px"}}>
      <div >
      <div className='themecontainer' >
        <Button  onClick={()=>{setTheme("dark")}}><MoonIcon/>  &nbsp; Dark</Button>&nbsp;
        <Button  onClick={()=>{setTheme("light")}}><SunIcon/>  &nbsp; Light</Button>
      </div>
      <div>
      <Card bg={theme=="dark"?"black":"white"}
      color={theme=="dark"?"white":"black"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
   h="350px"
   w="520px"
   boxShadow='dark-lg'
  //  maxW={{ base: '100%', sm: '500px' }}
    src={detailsData.image}
    alt='Caffe Latte'
  />

  <Stack bg="light" >
    <CardBody boxShadow='2xl' >
      <Heading size='md'>{detailsData.part_name}</Heading>

      <Text py='2'>
       Manufactured By: {detailsData.manufacturer}
       
      </Text>
      <Text py='2'color="red" as="u">
        
       Cost:$ {detailsData.price}
      </Text>
      <Text py='2'>
        Description:
       This is one of the best quality {detailsData.part_name} present in current market at an affordable cost.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Repudiandae quae commodi veritatis vero incidunt nostrum sunt perspiciatis ipsum sequi eos minima itaque,
        cum eveniet corporis, enim ducimus dolore dolorem ullam. 
      </Text>
      <Text as="mark">Buy this {detailsData.part_name} with a warranty of 3 years.</Text>
    </CardBody>

    <CardFooter boxShadow='lg'>
      <Button _hover={{ bg: '#ffd700',color:"black" }} colorScheme='blue' onClick={(e)=>{addToCart(detailsData)}}>
       Add To Cart
      </Button>
      &nbsp; 
      <Link to='/cart'>
      <Button _hover={{ bg: '#ffd700',color:"black" }} colorScheme='blue'>
        Go To Cart
      </Button>
      </Link>
    </CardFooter>
  </Stack>
</Card>
</div>
<div className='text'style={{color:theme=="dark"?"white":"black"}}>
      <Text fontSize='25px'> AutoParts.com – #1 Online Marketplace to Sell or Buy AutoParts</Text>
      <Text fontWeight='medium'>Using your own car gives you independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of outside factors. With your own car, you feel free and have the ability to address business and pleasure travel, as you want. All these reasons have a huge influence on the number of vehicles, on the road. Among them are passenger cars, lorries, buses, etc. Bringing this into focus: in 1986 there were only 500 million cars in the whole world. And in 2010 the number increased to 1 billion vehicles. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consectetur? Autem a laboriosam cum iusto delectus consequuntur enim nisi aliquid fugit dolorem! Researchers with the International Energy Agency suggest that by the year 2035 nearly 25 percent of the world population will own a car. According to research, the current number is going to increase to 1,7 billion. That's why auto car spare parts are in demand among car owners. boodmo.com is a car parts marketplace in India, which pursues the aim to organize the replacement parts market and make the shopping process easier and more convenient.</Text>
    </div>
</div>
    </div>
  )
}
