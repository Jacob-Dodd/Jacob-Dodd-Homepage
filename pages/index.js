import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
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
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacob Dodd
          </Heading>
          <p>Data Science Student</p>
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
          Who am I?
        </Heading>
        <Paragraph>
          A detail-oriented and Self-driven individual who loves {' '}
          <NextLink href="/posts" passHref scroll={false}>
            <Link>learning</Link>
          </NextLink>
          {' '} and experiencing new things. As a Bachelor of Computer Science graduate and current 
          Master of Data Science student, I have a solid understanding of the technical and theoretical aspects of computer science and data analysis. My time living in Japan 
          and proficiency in Japanese have also honed my problem-solving abilities and taught me the value of adaptability in a constantly changing field. In my projects, I have utilized
           a range of programming languages, my favourite being Python, Julia, Rust, and JavaScript, to solve abstract problems and extract insights from complex data-sets. I&aposm passionate about using my 
           skills to make data-driven decisions and impactful contributions to interesting projects.
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
          <BioYear>2022</BioYear>
          Worked as a functional Tester in Japan (Lionbridge)
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
          <Link href="https://500px.com/p/jacobdodd56" target="_blank">
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
