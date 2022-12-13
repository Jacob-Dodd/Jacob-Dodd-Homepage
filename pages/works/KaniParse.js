import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="KaniParse">
    <Container>
      <Title>
      KaniParse <Badge>2022</Badge>
      </Title>
      <P>
      A simple command-line tool I developed to automate the creation of vocab cards for space-repetition learning. 
      At this stage it's capable of scanning entire Japanese ebooks and using NLP, tokenizes every proper Japanese word,
       while also deinflecting all the verbs it finds. These tokens are then sorted into a list by frequency. This list is then fed into JMDict, 
       a large machine-readable multilingual Japanese dictionary, to get English definitions and grammar notes for every word. Finally these words are 
       then converted into cards in an Anki Deck using Genanki, so they can be utilised for space-repetition practice. This project is still in its VERY early 
       stages and I'm learning as I go, but I have plans to add support for more languages down the line to facilitate other language learning ventures.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Jacob-Dodd/KaniParse">
          KaniParse <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, spaCy, ebooklib, Jamdict, Genanki</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/KaniParse1.png" alt="Lodus" />
      <WorkImage src="/images/works/KaniParse2.png" alt="Lodus" />
      <WorkImage src="/images/works/KaniParse3.png" alt="Lodus" />
      <WorkImage src="/images/works/KaniParse4.png" alt="Lodus" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
