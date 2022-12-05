import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'
import Image from 'next/image'
import { RiSoundcloudLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m ETA ROLE
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacob Dodd
          </Heading>
          <p>ETA ROLE</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Jacob.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Need to fill in simple bio/description of myself here{' '}
          <NextLink href="/works/Example" passHref scroll={false}>
            <Link>a link to work</Link>
          </NextLink>
          . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique sem sed dui hendrerit, 
          eget aliquet felis lacinia. Suspendisse a lorem eu massa laoreet posuere quis eget nibh. Fusce consequat 
          mollis elementum. Nam cursus, eros at malesuada rutrum, mauris purus viverra nisi, non tristique diam mauris et ipsum. 
          Nullam viverra, nisi eget lacinia interdum, velit tortor congue orci, eu placerat magna est in dui. Donec sit amet elit 
          ac neque blandit bibendum sit amet vitae metus.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Melbourne, Australia.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Went to highschool in Yokohama(横浜), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed a Bachelor of Computer Science Program at The Royal Melbourne Institute of Technology (RMIT)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Began a Master&apos;s of Data Science at RMIT
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Foregin Languages,{' '}
          <Link href="https://soundcloud.com/9syzygy9/" target="_blank">
          Music
          </Link>
          , Machine Learning,{' '}
          <Link href="https://LINKTOPROJECT.com" target="_blank">
          Mountaineering
          </Link>
          , Gardening
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me online
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Jacob-Dodd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<RiGithubLine />}
              >
                @Jacob-Dodd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jacob-dodd-7a9626123/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<RiLinkedinBoxLine />}
              >
                @Jacob Dodd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://soundcloud.com/9syzygy9 " target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<RiSoundcloudLine />}
              >
                @Kani Pan
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
