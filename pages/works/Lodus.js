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
      Along with a small team over the span of 6 months, I worked to deliver a full MVP of a E-learning platform named Lodus.
       Our final product was a platform with a React.js/Material-UI frontend end integrated using Axios and postman with a Springboot
       Backend and DynamoDB database. The platform allowed for user registration, login and validation, Functioning Student and Content Creator
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
