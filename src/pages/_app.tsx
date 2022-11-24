import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { UserNameProvider } from "../hooks/useUserName";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserNameProvider>
        <Component {...pageProps} />
      </UserNameProvider>
    </ChakraProvider>
  );
}
