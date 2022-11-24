import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import SignUpForm from "../components/Form/SignUpForm";
import MovieNightHeader from "../components/MovieNightHeader";

const SignInView = () => (
  <>
    <Head>
      <title>Login • SuggestAndVote</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex p={6} flexDir="column">
      <MovieNightHeader />
      <SignUpForm />
    </Flex>
  </>
);

export default SignInView;
