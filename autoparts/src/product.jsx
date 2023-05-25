import React from 'react'
import axios from 'axios'
import{Select,Button,Text} from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import './products.css'
import { StarIcon, } from '@chakra-ui/icons'
import { getCartDataFun } from './Redux/action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

<script src="https://kit.fontawesome.com/b09ee9b84f.js" crossorigin="anonymous"></script>


export default function Product() {

  const[productData,setProductData]=useState([])
  const[productShow,setProductShow]=useState([])
  const dispatch=useDispatch()
  const data=useSelector((data)=>{
    return data
  })

  useEffect(()=>{
axios.get(`https://run.mocky.io/v3/dd3bfab8-dce9-4748-84c6-7cd9bbc1ccca`)
.then((res)=>{
  console.log(res.data)
  setProductData(res.data)
  setProductShow(res.data)
})
  },[])
  console.log(productData)

// useEffect(()=>{

// },[productData])
  // setProductShow(productData)

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
  
function addToCart(ele){
 dispatch(getCartDataFun(ele))
 console.log("abcd")
}
console.log(data)

  return (
    <div className='upperMostBox'>
    <div className="HeaderOfProductPage"><h1>DEAL OF THE WEEK</h1></div>
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
         <div className='parentbox'>
      {
        productData.length>0 && productData.map(function(ele,idx){
          return <div className='itembox' key={ele.id}>
            <div >
               <div >< img src={ele.image} className="images"/>
               
               </div>
               <div>
                <h4 className='name'>{ele.part_name}</h4>
                <div style={{display:"flex" }} className='star'>
               <StarIcon  color="	#ffd700" />   <StarIcon color="	#ffd700"/>   <StarIcon color="	#ffd700"/>   <StarIcon color="	#ffd700"/>   <StarIcon color="	#ffd700"/>  
               &nbsp;     124
               </div>
                <h4>{ele.manufacturer}</h4>
              
                <h4 className='price'>${ele.price}</h4>
                </div> 
              
                <Button _hover={{ bg: '#ffd700' }}onClick={(e)=>{addToCart(ele)}} bg='#e9e9e0;'>Add To Cart</Button>
          </div>
          </div>
        })
      }
    </div>

    <div className='text'>
      <Text fontSize='25px'> AutoParts.com – #1 Online Marketplace to Sell or Buy AutoParts</Text>
      <Text fontWeight='medium'>Using your own car gives you independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of outside factors. With your own car, you feel free and have the ability to address business and pleasure travel, as you want. All these reasons have a huge influence on the number of vehicles, on the road. Among them are passenger cars, lorries, buses, etc. Bringing this into focus: in 1986 there were only 500 million cars in the whole world. And in 2010 the number increased to 1 billion vehicles. Researchers with the International Energy Agency suggest that by the year 2035 nearly 25 percent of the world population will own a car. According to research, the current number is going to increase to 1,7 billion. That's why auto car spare parts are in demand among car owners. boodmo.com is a car parts marketplace in India, which pursues the aim to organize the replacement parts market and make the shopping process easier and more convenient.</Text>
    </div>
    </div>
  )
}
