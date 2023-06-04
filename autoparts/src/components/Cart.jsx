import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button,Input} from '@chakra-ui/react'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'
// import './productdetails.css'
// import { getCartDataFun } from './Redux/action'
// import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { color } from 'framer-motion'
import { Link } from 'react-router-dom'
import { clearCartData } from '../Redux/action'
import { useDispatch } from 'react-redux'
import { getCheckoutData } from '../Redux/action'


export default function Cart() {
    const[totalPrice,setTotalPrice]=useState(0)
    const[Data,setData]=useState([])
    const[empty,setEmpty]=useState(true)
    let data=useSelector((data)=>{
        return data.cartPageData
    })
    let dispatch=useDispatch()
    useEffect(()=>{
        setData(data)
      
        
    },[])
    useEffect(()=>{
    
        addTotal()
       
    },[Data])
    // console.log(Data)
    // const dispatch=useDispatch()
    const[theme,setTheme]=useState("light")
   
    function addTotal(){

        let total=Data.reduce(function(sum,ele){
            return sum+(ele.price)*ele.quantity
        },0)
        setTotalPrice(total)
    }
   
    function deleteItem(value){
        // console.log(value)
        const arr=Data.filter(function(ele){
            return ele.part_number!==value
        })
        setData(arr);
        // console.log(arr)
        addTotal();
    }
    
  function clearCart(){
    setData([]);
   setEmpty(false)
   dispatch(clearCartData([]))
  }
  const incrementQuantity = (index,val) => {
    const updatedItems = [...Data];
    updatedItems[index].quantity += 1;
    setData(updatedItems);
    
  };

  const decrementQuantity = (index) => {
    const updatedItems = [...Data];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setData(updatedItems);
    }
  };

  function getDiscount(){
    let temp=totalPrice*.8
    setTotalPrice(temp)
  }
  
  function sendCheckOut(ele){
    dispatch(getCheckoutData(ele))
  }

  

  return (
   
    <div  style={{backgroundColor:theme=="dark"?"black":"white",marginTop:"20px",padding:"10px"}}>
      <div >
        <div style={{display:"flex", justifyContent:'space-between',marginBottom:"10px"}}>
      <div className='themecontainer' >
        <Button  onClick={()=>{setTheme("dark")}}><MoonIcon/>  &nbsp; Dark</Button>&nbsp;
        <Button  onClick={()=>{setTheme("light")}}><SunIcon/>  &nbsp; Light</Button>
      </div>
      <div >
        <h2 style={{fontSize:"20px",color:theme=="dark"?"white":"black"}}>Total Product:{Data.length}</h2>
       
        <h2 style={{fontSize:"20px",color:"red"}}>Total Price:{totalPrice.toFixed(2)}</h2>
      </div>
      <div>
        <h2 style={{color:theme=="dark"?"white":"black"}}>Apply coupon code to get 20% extra discount</h2>
        <div style={{display:"flex"}}>
      <Input placeholder='Masai20' focusBorderColor='red.500'/> &nbsp;
      <Button onClick={getDiscount} _hover={{ bg: '#ffd700',color:"black" }} >Submit</Button>
      </div>
      </div>
      </div>
      {
        Data.length>0 && Data.map(function(ele,idx){
           
      
            return <div style={{marginBottom:"5px"}}>
      <Card bg={theme=="dark"?"black":"white"}
      color={theme=="dark"?"white":"black"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  display={"flex"}
 
>
  <Image
    objectFit='cover'
//    h="350px"
   w="20%"
   boxShadow='dark-lg'
  //  maxW={{ base: '100%', sm: '500px' }}
    src={ele.image}
    alt='Caffe Latte'
  />
  <div style={{display:"flex",width:"80%",alignItems:"center",padding:"20px"}}>
<div style={{display:"flex",width:"80%"}}>
    <Button color={theme=="dark"?"black":"black"} bg="#d4d3ce" w="150px" onClick={() => incrementQuantity(idx,ele.price)} _hover={{ bg: '#ffd700',color:"black" }}>Add</Button>&nbsp;&nbsp;
   
    <h2 >{ele.quantity}</h2>&nbsp;&nbsp;
    <Button color={theme=="dark"?"black":"black"} bg="#d4d3ce" w="150px" onClick={() => decrementQuantity(idx)} _hover={{ bg: '#ffd700',color:"black" }}>Decrease</Button>
</div>
<div>
    <Button color={theme=="dark"?"black":"black"} bg="#d4d3ce" w="150px" onClick={(e)=>{deleteItem(ele.part_number)}} _hover={{ bg: '#ffd700',color:"black" }}>Delete Item</Button>

</div>
</div>
  <Stack bg="light" >
    <CardBody boxShadow='2xl' >
      <Heading size='md'>{ele.part_name}</Heading>

      <Text py='2'>
       Manufactured By: {ele.manufacturer}
       
      </Text>
      
      <Text py='2'color="red" as="u">
        
       Cost:$ 
      </Text> &nbsp;
      <Text as ='del'py='2'color="red" >
        
       {(ele.price+ele.price*.2).toFixed(2)}
      </Text>&nbsp;
      <Text as ='un'py='2'color="red" >
        
        {ele.price.toFixed(2)}
      </Text>
      
      {/* <Text as="mark">Buy this {data.part_name} with a warranty of 3 years.</Text> */}
    </CardBody>

    <CardFooter boxShadow='lg'>
      <Link to='/checkout'>
      <Button _hover={{ bg: '#ffd700',color:"black" }} colorScheme='blue' onClick={(e)=>{sendCheckOut(ele)}}>
        Buy {data.part_name}
      </Button>
      </Link>
      &nbsp; 
      <Link to='/product'>
      <Button _hover={{ bg: '#ffd700',color:"black" }} colorScheme='blue'>
        Go Back to Product
      </Button>
      </Link>
    </CardFooter>
  </Stack>
</Card>
</div>
  })
}
<div>
  {
   
  empty==false && <h1 style={{fontSize:"30px", marginBottom:"30px",color:"red"}}>Your Cart Is Empty</h1>
  }
    <Button mt="5px" bg="#d4d3ce" onClick={clearCart} _hover={{ bg: '#ffd700',color:"black" }}>Clear Cart</Button>
</div>
<div className='text'style={{color:theme=="dark"?"white":"black"}}>
      <Text fontSize='25px'> AutoParts.com – #1 Online Marketplace to Sell or Buy AutoParts</Text>
      <Text fontWeight='medium'>Using your own car gives you independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of outside factors. With your own car, you feel free and have the ability to address business and pleasure travel, as you want. All these reasons have a huge influence on the number of vehicles, on the road. Among them are passenger cars, lorries, buses, etc. Bringing this into focus: in 1986 there were only 500 million cars in the whole world. And in 2010 the number increased to 1 billion vehicles. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consectetur? Autem a laboriosam cum iusto delectus consequuntur enim nisi aliquid fugit dolorem! Researchers with the International Energy Agency suggest that by the year 2035 nearly 25 percent of the world population will own a car. According to research, the current number is going to increase to 1,7 billion. That's why auto car spare parts are in demand among car owners. boodmo.com is a car parts marketplace in India, which pursues the aim to organize the replacement parts market and make the shopping process easier and more convenient.</Text>
    </div>
</div>
    </div>


    
  )
}

