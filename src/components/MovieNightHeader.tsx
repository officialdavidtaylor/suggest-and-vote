import { Box, Divider, Heading } from "@chakra-ui/react";
import Link from "next/link";

const MovieNightHeader = () => (
  <Box position={"sticky"} bg="white" top={0} zIndex={"banner"} pt={2}>
    <Link href={"/"}>
      <Heading as="h1">Movie Night Survey</Heading>
      <Heading as="h2" size="lg">
        Thanksgiving 2022
      </Heading>
    </Link>
    <Divider pt={2} />
  </Box>
);

export default MovieNightHeader;
