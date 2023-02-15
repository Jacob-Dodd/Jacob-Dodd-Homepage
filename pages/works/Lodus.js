import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Lodus">
    <Container>
      <Title>
      Project Lodus <Badge>2022</Badge>
      </Title>
      <P>
      Worked as a Freelance contractor to assist in the development of an Online Learning platform. Mainly utilized React.js, Typescript, and Material UI to build up the front end. 
      And also assisted in the construction and connection of the backend using Springboot, DynamoDB, and Axios. Work was completed remotely using agile methodologies for team communication and organisation.
      The final MVP allowed for user registration, login and validation, Functioning Student and Content Creator
      Admin pages, courses page, and a drag and drop content editor. Our team utilised agile methodologies in order to split our work into sprints,
      and deliver a full final MVP to our client on time.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, React, Material-UI, Springboot, Spring-security, DynamoDB, AWS EC2 </span>
        </ListItem>
      </List>
        

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
