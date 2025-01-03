import { Button } from "@/components/ui/button"
import { Container, HStack, Stack } from "@chakra-ui/react"
import ItemManagement from "./pages/ItemManagement"

function App() {

  return (
    // <HStack>
    //   <Button>Hello</Button>
    // </HStack>
    <Stack h='100vh'>
      <Container>
        <ItemManagement>
          {/* <Button>Hello</Button> */}
        </ItemManagement>
      </Container>
    </Stack>
 
   )
}

export default App
