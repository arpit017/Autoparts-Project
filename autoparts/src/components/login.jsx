import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth} from '../firebase';
import {db} from '../firebase'
import { FcGoogle } from 'react-icons/fc';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  Text,
  FormLabel,
  Center
} from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });


 
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate('/');
    } catch (error) {
      alert("Error");
    }
  };


  return (
    <Box
      bg="gray.100"
      minH={["60vh", "70vh"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={["20px", "0"]}
     
    >
      <Box
        bg="white"
        borderRadius="md"
        p={8}
        boxShadow="md"
        maxW={["sm", "md"]}
        w="full"
        marginTop={"20px"}
        marginBottom={"20px"}
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Login
        </Heading>
        <form onSubmit={handleSignIn}>
          <FormControl id="lemail">
            <FormLabel>Email</FormLabel>
            <Input onChange={(e) => {
              setUser({ ...user, email: e.target.value })
            }} type="email" placeholder="Enter your email" mb={4} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => {
              setUser({ ...user, password: e.target.value })
            }} type="password" placeholder="Enter your password" mb={6} />
          </FormControl>
          <Button type='submit' colorScheme="blue" size="lg" width="full" _hover={{ bg: '#ffd700',color:"black" }}>
            Sign In
          </Button>
          <Center>
            <Button
              mt={4}
              leftIcon={<FcGoogle />}
              colorScheme="red"
              variant="outline"
            >
              Login with Google
            </Button>
          </Center>
          <Text _hover={{ cursor: "pointer" }} c="#FFD5BF" fontWeight={"600"} mt={2}>Don't have an account?<span onClick={() => {
            navigate('/signup');
          }} style={{ color: "#7766DB", fontWeight: "700" }}> Sign Up</span></Text>
        </form>
      </Box>
    </Box>
  );
}