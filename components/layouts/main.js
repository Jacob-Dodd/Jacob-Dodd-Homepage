import head from 'next/head'
import { Box, Container } from '@chakra-ui/react'


const Main = ({ children, router}) => {
    return(
        <Box as ="main" pb={8}>
            <head>
                <meta name="viewport" content="width=device-width, intial-scale=1"/>
                <title>Jacob Dodd - Homepage</title>
            </head>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main