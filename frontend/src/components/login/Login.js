import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Avatar,
} from "@chakra-ui/react";

import LanginImg from "../images/landing.jpg";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "/home";
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(to bottom right,purple, #8068BF)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar name="Dan Abrahmov" src={LanginImg} width="50%" />
      <Container
        p={25}
        borderWidth={8}
        marginLeft="50px"
        boxShadow="lg"
        textAlign="center"
        borderRadius="8px"
        border="2px solid white"
      >
        <h1 style={{ color: "white" }}>
          Welcome to Visualization Dashboard !!!
        </h1>
        <h4 style={{ color: "white" }}>
          Please sign-in to your account and start the adventure
        </h4>
        <h6
          style={{
            color: "white",
            backgroundColor: "purple",
            padding: "5px",
            borderRadius: "8px",
          }}
        >
          Admin Email: admin@gmail.com / Pass: admin
        </h6>
        <form>
          <FormControl>
            <FormLabel style={{ color: "white", marginBottom: "10px" }}>
              Admin Email
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white"
              disabled
              width="440px"
              padding="10px"
              borderRadius="8px"
              marginBottom="10px"
              border="0"
            />
          </FormControl>
          <FormControl mt={4} mb={2}>
            <FormLabel style={{ color: "white", marginBottom: "10px" }}>
              Password
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              borderColor="white"
              disabled
              width="440px"
              padding="10px"
              borderRadius="8px"
              marginBottom="10px"
              border="0"
            />
          </FormControl>
          <Button
            mt={6}
            w="100%"
            onClick={handleLogin}
            padding="12px"
            borderRadius="8px"
            cursor="pointer"
            backgroundColor="#4CAF50"
            fontWeight="bold"
            outline="none"
            border="0"
            color="#ffffff"
          >
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={undefined}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: "0",
              left: "0",
            }}
          >
            <AlertDialogOverlay>
              <AlertDialogContent
                bg="purple.800"
                color="white"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "fixed",
                  left: "0",
                  width: "100%",
                  height: "100vh",
                  backgroundColor: "black",
                }}
              >
                <AlertDialogHeader fontSize={30}>
                  Welcome Admin !!!
                </AlertDialogHeader>
                <AlertDialogBody mt={5} fontSize={20}>
                  Redirecting to the Home page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button
                    onClick={() => setIsOpen(false)}
                    backgroundColor="#4CAF50"
                    fontWeight="bold"
                    outline="none"
                    border="0"
                    color="#ffffff"
                    padding="10px"
                    borderRadius="10px"
                    marginTop="10px"
                  >
                    Cancel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
