import { FC, memo } from 'react'
import { Flex, Heading, useTheme, Theme } from '@chakra-ui/react'

const AppHeader: FC = () => {
  const theme: Theme = useTheme()

  return (
    <Flex
      as="nav"
      flex="1"
      mb={4}
      padding="1.5rem"
      bg={theme.colors.gray[700]}
      color="white"
    >
      <Flex align="center">
        <Heading size="md">Free Screen and Video Recorder</Heading>
      </Flex>
    </Flex>
  )
}

export default memo(AppHeader)
