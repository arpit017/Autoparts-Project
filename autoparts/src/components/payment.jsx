import { Box, Button, Divider, FormControl, FormLabel,Flex,Text, Heading, HStack, Input, Radio,Image, RadioGroup, Select, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const data=useSelector((data)=>{
   return data.checkoutPageData
  })
console.log(data)

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFloorNumberChange = (event) => {
    setFloorNumber(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleShippingMethodChange = (value) => {
    setShippingMethod(value);
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    
      <Box >
        <Heading as="h1" mb="10">Checkout</Heading>
      <Box  mx="auto" mt="4" display="flex" justifyContent={"space-around"}>
      <Box>
        <Image
         boxSize='200px'
         objectFit='cover'
        src={data.image}/>
        <Text>{data.part_name}</Text>
        <Text>Amount to Pay: <span style={{color:"red"}}>  $ {data.price}</span></Text>
        <Divider my="4" />

      <Box mb="4">
        <FormControl>
          <FormLabel>Payment Method</FormLabel>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <Stack spacing={2}>
              <Radio value="cash">Cash on Delivery</Radio>
              <Radio value="card">Card</Radio>
           <Box display={"flex"}>
              <Radio value="paypal"> <Image 
               boxSize='70px'
               objectFit='cover'
              src='https://static.vecteezy.com/system/resources/previews/009/469/637/original/paypal-payment-icon-editorial-logo-free-vector.jpg'/></Radio>
           
              </Box>
           <Box display={"flex"}>
              <Radio value="phonepe"> <Image 
              ml="5px"
               boxSize='80px'
               objectFit='cover'
              src='https://cdn.siasat.com/wp-content/uploads/2020/02/Google-Pay-PhonePe.jpg'/></Radio>
             
           </Box>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>

      {paymentMethod === "card" && (
        <>
          <Box mb="4">
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input  type="number" />
            </FormControl>
          </Box>

          <Box mb="4">
            <FormControl>
              <FormLabel>Expiry Date</FormLabel>
              <Input type="number" />
            </FormControl>
          </Box>

          <Box mb="4">
            <FormControl>
              <FormLabel>Name on Card</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>

          <Box mb="4">
            <FormControl>
              <FormLabel>CVV</FormLabel>
              <Input type="number" />
            </FormControl>
          </Box>
        </>
      )}
      </Box>
      
     <Box>
      
      <HStack spacing={4} mb="4">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" value={firstName} onChange={handleFirstNameChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" value={lastName} onChange={handleLastNameChange} />
        </FormControl>
      </HStack>

      <Box mb="4">
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input type="text" value={address} onChange={handleAddressChange} />
        </FormControl>
      </Box>

      <HStack spacing={4} mb="4">
        <FormControl>
          <FormLabel>Floor Number</FormLabel>
          <Input type="number" value={floorNumber} onChange={handleFloorNumberChange} />
        </FormControl>

        <FormControl>
          <FormLabel>City</FormLabel>
          <Input type="text" value={city} onChange={handleCityChange} />
        </FormControl>
      </HStack>

      <Box mb="4">
  <FormControl>
    <FormLabel>State</FormLabel>
    <Select value={state} onChange={handleStateChange}>
      <option value="">Select State</option>
      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
      <option value="Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Chhattisgarh">Chhattisgarh</option>
      <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
      <option value="Daman and Diu">Daman and Diu</option>
      <option value="Delhi">Delhi</option>
      <option value="Goa">Goa</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Kerala">Kerala</option>
      <option value="Lakshadweep">Lakshadweep</option>
      <option value="Madhya Pradesh">Madhya Pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Manipur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Puducherry">Puducherry</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="West Bengal">West Bengal</option>
    </Select>
  </FormControl>
</Box>

      <HStack spacing={4} mb="4">
        <FormControl>
          <FormLabel>Pin Code</FormLabel>
          <Input type="number" value={pinCode} onChange={handlePinCodeChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input type="number" value={phone} onChange={handlePhoneChange} />
        </FormControl>
      </HStack>

      <Box mb="4">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormControl>
      </Box>

      <Divider my="4" />

      <Box mb="4">
        <FormControl>
          <FormLabel>Shipping Method</FormLabel>
          <RadioGroup value={shippingMethod} onChange={handleShippingMethodChange}>
            <Stack spacing={2}>
              <Radio value="standard">Standard Shipping</Radio>
              <Radio value="express">Express Shipping</Radio>
              <Radio value="overnight">Overnight Shipping</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>

      
       <Link to='/success'>
      <Button _hover={{ bg: '#ffd700',color:"black" }} mt='5' mb="5"colorScheme="blue" w="500px"onClick={handleSubmit}>Place Order</Button>
      </Link>
    </Box>
    </Box>
    </Box>
  );
};

export default CheckoutPage;