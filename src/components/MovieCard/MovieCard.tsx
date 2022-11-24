import { Button, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Movie } from "./models";

interface MovieCardProps {
  movie: Movie;
  userVotedFor?: boolean;
  userVotedAgainst?: boolean;
  voteFor?: number;
  incrementFor?: () => void;
  voteAgainst?: number;
  incrementAgainst?: () => void;
}
const MovieCard = ({
  movie,
  voteFor,
  voteAgainst,
  incrementFor,
  incrementAgainst,
  userVotedFor,
  userVotedAgainst,
}: MovieCardProps) => {
  return (
    <Grid
      templateAreas={`"title timestamp vote-buttons"
                      "description description description"`}
      gridAutoColumns={"auto min-content min-content"}
      gap="1"
      border={"1px"}
      borderColor={"gray.200"}
      borderRadius="lg"
      p={2}
    >
      <GridItem area={"title"} display={"flex"} alignItems="center">
        <Heading as="a" href={movie.imdbUrl} size="lg" noOfLines={1}>
          {movie.title}
        </Heading>
      </GridItem>
      <GridItem
        area={"timestamp"}
        display={"flex"}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Heading size="sm" color="gray.500" textAlign="center">
          {movie.runtime}
        </Heading>
      </GridItem>
      <GridItem area={"vote-buttons"}>
        <Flex gap={2} justify="flex-end">
          <Button
            px={"0.5"}
            aria-label="vote for this movie"
            onClick={incrementFor}
            bg={userVotedFor ? "green.200" : "gray.100"}
            _hover={{ "background-color": "none" }}
          >
            +{voteFor}
          </Button>
          <Button
            px={"0.5"}
            aria-label="vote against this movie"
            onClick={incrementAgainst}
            bg={userVotedAgainst ? "red.200" : "gray.100"}
            _hover={{ backgroundColor: "none" }}
          >
            -{voteAgainst}
          </Button>
        </Flex>
      </GridItem>
      <GridItem area={"description"}>
        <Text noOfLines={1}>{movie.description}</Text>
      </GridItem>
    </Grid>
  );
};

export default MovieCard;
