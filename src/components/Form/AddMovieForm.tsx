import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MovieCard from "../MovieCard";
import type { Movie } from "../MovieCard/models";

interface AddMovieFormData {
  title: string;
  description: string;
  runtime_hh: number;
  runtime_mm: number;
  imdb_url: string;
}

const AddMovieForm = () => {
  const { handleSubmit, register, watch } = useForm<AddMovieFormData>();

  const {
    title = "title",
    description = "description",
    runtime_hh = "hh",
    runtime_mm = "mm",
  } = watch();

  const previewMovie: Movie = {
    title,
    description,
    runtime: `${runtime_hh}:${runtime_mm.toString().padStart(2, "0")}`,
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // state management for the preview movie component
  const [voteForState, setVoteForState] = useState<number>(0);
  const [voteAgainstState, setVoteAgainstState] = useState<number>(0);

  const onSubmit: SubmitHandler<AddMovieFormData> = async (data) => {
    setIsLoading(true);
    // FIXME: This needs to insert the user's name to the database, and if successful add to localstorage
    await new Promise((r) => setTimeout(r, 2000));
    if (/* this needs to check if the table insertion was successful */ true) {
      setIsLoading(false);
      // FIXME: remove this
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" pt={6} pb={20} gap={4}>
        <FormControl>
          <FormLabel>Movie title</FormLabel>
          <Input
            type="text"
            placeholder="pls pick a good one"
            {...register("title", { required: true })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description (one sentence)</FormLabel>
          <Input
            type="text"
            placeholder="in your own words :D"
            {...register("description", { required: true })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Runtime</FormLabel>
          <Flex gap={4}>
            <Input
              type="number"
              pattern="\d*"
              placeholder="hh"
              {...register("runtime_hh", { required: true, max: 4 })}
            />
            <Input
              type="number"
              pattern="\d*"
              placeholder="mm"
              {...register("runtime_mm", { required: true, max: 59 })}
            />
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel>IMDb Link</FormLabel>
          <Input
            placeholder="https://www.imdb.com/title/..."
            {...register("imdb_url", { required: true })}
          />
        </FormControl>
        <Divider
          my={2}
          width="70%"
          borderColor={"gray.400"}
          alignSelf={"center"}
        />
        <Heading size="md">Preview:</Heading>
        <MovieCard
          movie={previewMovie}
          voteFor={voteForState}
          incrementFor={() => setVoteForState(voteForState + 1)}
          voteAgainst={voteAgainstState}
          incrementAgainst={() => setVoteAgainstState(voteAgainstState + 1)}
          userVotedFor={!!voteForState}
          userVotedAgainst={!!voteAgainstState}
        />
      </Flex>
      <Flex w="100vw" justify="center" pos="fixed" bottom={0} left={0} p={6}>
        <Button
          isLoading={isLoading}
          size={"lg"}
          type="submit"
          colorScheme={"purple"}
        >
          Add movie to list
        </Button>
      </Flex>
    </form>
  );
};

export default AddMovieForm;
