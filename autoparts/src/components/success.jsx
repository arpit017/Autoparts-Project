import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function Success() {
  return (
    <div>
        <div style={{marginLeft:"450px"}}>
            <img style={{width:"400px"}} src="https://img.freepik.com/premium-vector/check-mark-button-isolated-white-background-tick-check-list-icon-vector-illustration_97458-1037.jpg" />
         
        </div>
       <div style={{marginBottom:"15px"}}>
       <h1 style={{fontSize:"30px"}}>-:  Payment Successful  :-</h1>
         <Link to="/">
       <Button mt="7" bg="#d4d3ce" _hover={{ bg: '#ffd700',color:"black" }}>Back to Home Page</Button>
       </Link>
       </div>
            
    </div>
  )
}
