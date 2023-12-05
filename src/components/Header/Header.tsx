import { Flex, Heading, Image} from "@chakra-ui/react";

export function Header(){

  return (
      <Flex align="center">
        <Image src="icon.svg"/>
        <Flex direction="column" justify="center">
          <Heading size="md">Mapper Desmatamento</Heading>
        </Flex>
      </Flex>
  )
}