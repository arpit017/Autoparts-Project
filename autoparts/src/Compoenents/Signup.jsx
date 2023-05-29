import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../Firebase';
import { Box, Heading, Input, Button, FormControl, Text, FormLabel } from '@chakra-ui/react';
import { addDoc, collection } from 'firebase/firestore';

export default function Signup() {
  //const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [button, setButton] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (user.name === '' || user.email === '' || user.password === '') {
      alert('Fill all fields');
      return;
    }
    setButton(true);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(async (res) => {
        const newUser = res.user;
        await updateProfile(newUser, { displayName: user.name });
        const initialCartValue = 0;
        addDoc(collection(db, 'users'), {
          username: user.name,
          email: user.email,
          password: user.password,
          cart: initialCartValue,
          uid: newUser.uid,
        })
          .then(() => {
            alert('Signup successful');
            setUser({
              name: '',
              email: '',
              password: '',
            });
           // navigate('/');
          })
          .catch((err) => {
            alert(err.message);
          })
          .finally(() => {
            setButton(false);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      bg="gray.100"
      minH={['70vh', '80vh']}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={['20px', '0']}
    >
      <Box bg="white" borderRadius="md" p={8} boxShadow="md" maxW={['sm', 'md']} w="full">
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Sign Up
        </Heading>
        <form onSubmit={handleSignup}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              type="text"
              placeholder="Name"
              mb={4}
              value={user.name}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="email"
              placeholder="Enter your email"
              mb={4}
              value={user.email}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type="password"
              placeholder="Enter your password"
              mb={6}
              value={user.password}
            />
          </FormControl>
          <Button disabled={button} type='submit' colorScheme="blue" size="lg" width="full">
            Signup
          </Button>
          <Text _hover={{cursor:"pointer"}} c="#FFD5BF" fontWeight={"600"} mt={2}>Already have an account? <span onClick={()=>{
        //navigate('/login')
          }} style={{color:"#7766DB",fontWeight:"700"}}>Log In</span></Text>
        </form>
      </Box>
    </Box>
  );
}
