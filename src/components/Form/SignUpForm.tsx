import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useUserName from "../../hooks/useUserName";

interface SignUpFormData {
  userName: string;
}

const SignUpForm = () => {
  const { handleSubmit, register } = useForm<SignUpFormData>();
  const { updateUserName } = useUserName();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    setIsLoading(true);
    // FIXME: This needs to insert the user's name to the database, and if successful add to localstorage
    await new Promise((r) => setTimeout(r, 2000));
    if (/* this needs to check if the table insertion was successful */ true) {
      updateUserName(data.userName);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" py={12} gap={6}>
        <FormControl>
          <FormLabel size="lg">Who are you?</FormLabel>
          <Input
            size="lg"
            type="text"
            {...register("userName", { required: true })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Credit card number</FormLabel>
          <Input size="lg" placeholder="xxxx-xxxx-xxxx-xxxx" />
        </FormControl>
      </Flex>
      <Flex w="100vw" justify="center" pos="fixed" bottom={0} left={0} p={6}>
        <Button
          isLoading={isLoading}
          type="submit"
          size="lg"
          colorScheme={"purple"}
        >
          Sign In
        </Button>
      </Flex>
    </form>
  );
};

export default SignUpForm;
