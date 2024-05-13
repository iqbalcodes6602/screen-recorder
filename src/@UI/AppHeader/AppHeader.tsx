import { FC, memo, useState } from 'react'
import { Flex, Heading, useTheme, Theme, Button } from '@chakra-ui/react'

const AppHeader: FC = () => {
  const theme: Theme = useTheme()
  const [wrapper, setWrapper] = useState(true);

  return (
    <Flex
      // as="nav"
      flex="1"
      mb={4}
      padding="1.5rem"
      bg={theme.colors.gray[700]}
      color="white"
      style={
        wrapper ? {
          position: "fixed",
          zIndex: 1,
          height: "100vh",
          width: "100vw",
        } :
          {
            display:"none"
          }
      }
    >
      <Flex align="center" ml={10}>
        {
          wrapper ?
            <div style={{display: 'block'}}>
              <Heading style={{
                fontSize: '500%',
                display: 'block'
              }}><span style={{color:theme.colors.gray[400]}}>Free</span> Screen <br />
              and Video <span style={{color:theme.colors.gray[400]}}>Recorder</span></Heading>
              <Button
                mt="5"
                bg={theme.colors.gray[500]}
                size="lg"
                aria-label="start recording now"
                color="white"
                onClick={(e) => { setWrapper(false) }}
              >
                Start Recording Now
              </Button>
            </div>
            :
            <>
              {/* <Heading size="md">Free Screen and Video Recorder</Heading> */}
            </>
        }
      </Flex>
    </Flex>
  )
}

export default memo(AppHeader)
