import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Example2">
    <Container>
      <Title>
      Example2 <Badge>2011-2016</Badge>
      </Title>
      <P>
        Write a discription here!
      </P>
      <P>
        This service has been closed. Thank you for over 130,000 registered
        users!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="http://wwww.Alink.com">
            A Blog Post{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Rust</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        <Link href="http://wwww.Alink.com">
            <Badge mr={2}>Alink.com</Badge>
            Alink.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://wwww.Alink.com">
            <Badge mr={2}>Alink.com</Badge>
            walknote:
            Alink.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/lodus_01.png" alt="Lodus" />
        <WorkImage src="/images/works/lodus_02.png" alt="Lodus" />
      </SimpleGrid>
      <WorkImage src="/images/works/lodus_01.png" alt="Lodus" />
      <WorkImage src="/images/works/lodus_03.png" alt="Lodus" />
      <WorkImage src="/images/works/lodus_02.png" alt="Lodus" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
