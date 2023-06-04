import React from 'react'
import axios from 'axios'
import{Select,Button,Text, Box,InputGroup,InputLeftElement,
  Input,Spinner,useDisclosure,Drawer,DrawerCloseButton,StackItem,Stack,
  DrawerContent,FormLabel,Textarea,InputLeftAddon,InputRightAddon, Heading, } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import './products.css'
import { StarIcon,SunIcon,MoonIcon, Search2Icon,AddIcon,ArrowRightIcon } from '@chakra-ui/icons'
import { getCartDataFun } from './Redux/action'
import { getDetailsData } from './Redux/action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

<script src="https://kit.fontawesome.com/b09ee9b84f.js" crossorigin="anonymous"></script>


export default function Product() {

  const[productData,setProductData]=useState([])
  const[productShow,setProductShow]=useState([])
  const[secondPage,setSecondPage]=useState([])

  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const[theme,setTheme]=useState("light")
  const dispatch=useDispatch()
  const data=useSelector((data)=>{
    return data
  })

  useEffect(()=>{
axios.get(`https://run.mocky.io/v3/eac7838d-7591-45b2-b003-ef664bb87693`)
.then((res)=>{
  console.log(res.data)
  setProductData(res.data)
  setProductShow(res.data)
})
  },[])

  useEffect(()=>{
axios.get(`https://run.mocky.io/v3/dd3bfab8-dce9-4748-84c6-7cd9bbc1ccca`)
.then((res)=>{
  console.log(res.data)
  setSecondPage(res.data)
 
  //  let arr1=[...productShow]
  //   let arr2=[...secondPage]
  //   let arr=arr1.concat(arr2)
    
  //   settotal(arr)
})
  },[])
  
  
  
  
   
  
  
  

  function handleSelect(value){
    
    if(value=="LOW_TO_HIGH"){

      const numAscending = [...productData].sort((a, b) => a.price - b.price)
      console.log(numAscending)
      setProductData(numAscending)
    }else if(value=="HIGH_TO_LOW"){
      const numDescending = [...productData].sort((a, b) => b.price - a.price)
      console.log(numDescending)
      setProductData(numDescending)
    }else if(value==""){
      const numAscending = [...productData].sort((a, b) => a.id - b.id)
      console.log(numAscending)
      setProductData(numAscending)
    }
    
  }

  function handleFilterMan (value){
    if(value==""){
      setProductData(productShow)
}else{
  
  let newarr=[...productShow].filter(function(ele,idx){
    return ele.manufacturer==value
   })
     setProductData(newarr)
}
  }

  
  function handleFilterVeh (value){
    if(value==""){
      setProductData(productShow)
}else{
  
  let newarr=[...productShow].filter(function(ele,idx){
    return ele.vehicle==value
   })
     setProductData(newarr)
}
  }
  
function addToCart(elem){
  let ele={...elem,quantity:1}
 dispatch(getCartDataFun(ele))
 console.log("abcd")
}

function getDetails(ele){
dispatch(getDetailsData(ele))
}
console.log(data)

function handleSearch(value){
 
let arr=productShow.filter(function(ele,idx){
  if(value===""){
    return productShow
  }
  return ele.part_name.toLowerCase().includes(value.toLowerCase())
})
console.log(productShow)
console.log(arr)
setProductData(arr)
}



  return (
      <div className={theme=="dark"?"dark":"light"}>
 
 <>
     <div  className='sidebar'>
      <Stack   pl="5px" boxShadow={"lg"}>
      <div className='themecontainer' >
        <Button  onClick={()=>{setTheme("dark")}}><MoonIcon/>  &nbsp; Dark</Button>&nbsp;
        <Button  onClick={()=>{setTheme("light")}}><SunIcon/>  &nbsp; Light</Button>
      </div>
        <Stack color={theme=="dark"?"white":"black"} className={theme=="dark"?"dark":"light"}>
          {/* <DrawerCloseButton /> */}
          <StackItem borderBottomWidth="1px" fontSize={"20px"}>
            Order Customised Products
          </StackItem>

          <Stack>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Your Email</FormLabel>
                <InputGroup>
                  
                  <Input
                    type="url"
                    id="url"
                    placeholder="Please enter domain"
                  />
                  <InputRightAddon bg="#d4d3ce" color="black">.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Select Manufacturer</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">TATA</option>
                  <option value="kola">Ford</option>
                  <option value="kola">Maruti</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Select Vehicle</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Car</option>
                  <option value="kola">Bike</option>
                  
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </Stack>

          <Stack borderTopWidth="1px">
            <Button _hover={{ bg: '#ffd700',color:"black" }} variant="outline" mr={3}>
              Cancel
            </Button>
            <Button _hover={{ bg: '#ffd700', color:"black"}} color={"black"} bg="#d4d3ce"variant="outline">Order Now</Button>
          </Stack>
        <Heading fontSize={"20"} mt={"5px"} as="u">Customer Reviews <ArrowRightIcon/></Heading>
        <Stack >
        <Stack >
        <Text as="u">#Spark Plugs:</Text>

<Text > Customer: John D.</Text>
<Text>Rating: ⭐⭐⭐⭐⭐</Text>
<Text fontStyle={"italic"} >Review: "I purchased these spark plugs for my car, and they have exceeded my expectations. The engine runs smoother, and I've noticed a significant improvement in fuel efficiency. Highly recommended!"</Text>
</Stack>
        <Stack>
        <Text as="u">#Brake Pads:</Text>

<Text> Customer: Emily S.</Text>
<Text>Rating: ⭐⭐⭐⭐</Text>
<Text fontStyle={"italic"}>Review: "I recently installed these brake pads on my vehicle, and they have greatly enhanced my braking performance. The stopping power is exceptional, and they have reduced noise and vibration. I feel confident and safe on the road. Fantastic brake pads!"</Text>
</Stack>
        <Stack>
        <Text as="u">#Air Filters:</Text>

<Text> Customer: David M.</Text>
<Text>Rating: ⭐⭐⭐⭐</Text>
<Text fontStyle={"italic"}>Review: "I upgraded to these high-flow air filters, and I can feel the difference in my car's performance. The engine breathes better, and I've noticed improved throttle response. Installation was a breeze, and the quality is top-notch. Great value for the price!"</Text>
</Stack>
        <Stack>
        <Text as="u">#Suspension Kit:</Text>

<Text>Customer: Sarah L.</Text>
<Text>Rating: ⭐⭐⭐⭐</Text>
<Text fontStyle={"italic"}>Review: "This suspension kit has completely transformed my driving experience. The handling and stability of my car have vastly improved, especially during sharp turns. The kit was easy to install, and the instructions were clear. I'm extremely satisfied with this purchase!"</Text>
</Stack>
        <Stack >
        <Text as="u">#Radiator:</Text>

<Text>Customer: Michael B.</Text>
<Text>Rating: ⭐⭐⭐⭐</Text>
<Text fontStyle={"italic"}>Review: "I replaced my old radiator with this high-quality one, and I'm impressed with its performance. It fits perfectly, and my engine temperature remains stable, even in hot weather conditions. It's a reliable radiator option that provides peace of mind on long drives."</Text>
</Stack>
</Stack>
        </Stack>
      </Stack>
      </div>
    </>




    <div className='upperMostBox'>
      
    <div className="HeaderOfProductPage"><h1 style={{color:theme=="dark"?"white":"black"}}>DEAL OF THE WEEK</h1></div>
    <div className='selectContainer'>
      
    <Select  bg='#d4d3ce'  placeholder='SORT BY PRICE' onChange={(e)=>{handleSelect(e.target.value)}}>
    <option value="">DEFAULT</option>
    <option value="HIGH_TO_LOW">HIGH TO LOW</option>
    <option value="LOW_TO_HIGH">LOW TO HIGH</option>
  </Select>

    <Select  bg='#d4d3ce'placeholder='FILTER BY MANUFACTURER' onChange={(e)=>{handleFilterMan(e.target.value)}}>
    <option value="">DEFAULT</option>
    <option value="Maruti">MARUTI</option>
    <option value="Ford">FORD</option>
    <option value="TATA">TATA</option>
   
  </Select>

    <Select bg='#d4d3ce' placeholder='FILTER BY VEHICLE' onChange={(e)=>{handleFilterVeh(e.target.value)}}>
    <option value="">DEFAULT</option>
    <option value="car">CAR</option>
    <option value="bike">BIKE</option>
  </Select> 

  </div >


 



  <div style={{display:"flex",justifyContent:'space-between'}}>
  <InputGroup w='50%' color={theme=="dark"?"white":"black"}>
    <InputLeftElement pointerEvents='none'>
      <Search2Icon color='gray.300' />
    </InputLeftElement>
    <Input focusBorderColor='crimson'type='text' placeholder='Search Your Item Here' onChange={(e)=>{handleSearch(e.target.value)}} />
  </InputGroup>
  <div style={{display:"flex"}}>
      <Button  bg='#d4d3ce'onClick={(e)=>{setProductData(productShow)}}>Previous</Button> &nbsp;
      <Button  bg='#d4d3ce'onClick={(e)=>{setProductData(secondPage)}}>Next</Button>
      </div> 
    </div>



         <div className='parentbox'>
      {
        productData.length>0 ? productData.map(function(ele,idx){
          return <Stack className='itembox' key={ele.id}>
            <Box >
              
               <Link to="/productdetails">
               <Box onClick={(e)=>{getDetails(ele)}}>
                < img src={ele.image} className="images"/>
               </Box>
               </Link>
               
               <Box>
                <h4 className='name'>{ele.part_name}</h4>
                <div style={{display:"flex" }} className='star'>
               <StarIcon  color="	#ffd700" />   <StarIcon color="	#ffd700"/>   <StarIcon color="	#ffd700"/>   <StarIcon color="	#ffd700"/>   <StarIcon color="	#ffd700"/>  
               &nbsp;     124
               </div>
                <h4>{ele.manufacturer}</h4>
              
                <h4 className='price'>${ele.price}</h4>
                </Box> 
              
                <Button _hover={{ bg: '#ffd700' }}onClick={(e)=>{addToCart(ele)}} bg='#e9e9e0;'>Add To Cart</Button>
          </Box>
          </Stack>
        }):<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='red.500'
        size='xl'
        ml='250%'
        mt='50%'
      />
      }
    </div>
    

    <Stack className='text' style={{color:theme=="dark"?"white":"black"}}>
      <Text fontSize='25px'> AutoParts.com – #1 Online Marketplace to Sell or Buy AutoParts</Text>
      <Text fontWeight='medium'>Using your own car gives you independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of outside factors. With your own car, you feel free and have the ability to address business and pleasure travel, as you want. All these reasons have a huge influence on the number of vehicles, on the road. Among them are passenger cars, lorries, buses, etc. Bringing this into focus: in 1986 there were only 500 million cars in the whole world. And in 2010 the number increased to 1 billion vehicles. Researchers with the International Energy Agency suggest that by the year 2035 nearly 25 percent of the world population will own a car. According to research, the current number is going to increase to 1,7 billion. That's why auto car spare parts are in demand among car owners. boodmo.com is a car parts marketplace in India, which pursues the aim to organize the replacement parts market and make the shopping process easier and more convenient.</Text>
    </Stack>
    </div>
    </div>
  )
}
