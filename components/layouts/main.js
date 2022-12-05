import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Amelia3DLoader from '../amelia3D-loader'

const LazyAmelia3D = dynamic(() => import('../amelia3D'), {
  ssr: false,
  loading: () => <Amelia3DLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jacob's homepage" />
        <meta name="author" content="Jacob Dodd" />
        <meta name="twitter:title" content="Jacob Dodd" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>Jacob Dodd - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyAmelia3D />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
