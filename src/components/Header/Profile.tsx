import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center" textAlign="right">
      <Box mr="4">
        <Text>Jeferson Peter</Text>
        <Text color="gray.300" fontSize="small">
          jeferson.peter@protonmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Jeferson Peter"
        src="https://avatars.githubusercontent.com/u/55209572?s=400&u=bde93917cf8fb9178411dacc07ece50ab2be0011&v=4"
      />
    </Flex>
  );
}
