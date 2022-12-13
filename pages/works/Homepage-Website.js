import {
    Container,
    Badge,
    Link,
    List,
    OrderedList,
    ListItem,
    Code
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  
  const Work = () => (
    <Layout title="Homepage Website">
      <Container>
        <Title>
        Jacob&apos;s Homepage Website <Badge>2022</Badge>
        </Title>
        <P>
        I spent some time trying to figure out what I wanted for this personal homepage website, I was tempted to try and create a flashy site, with loads of animations 
        and parallaxing, but in the end I determined that it was more important for the infomation that the site contains to be easily conveyed, rather than how it looks.
        Therefore I decided on a clean and minimalistic design. For this I chose Next.js as the framework, for this site for several main reasons:
        <br></br>
        <br></br>
        </P>
        <OrderedList>
        <ListItem>Automatic code-splitting: Next.js automatically splits your code into separate chunks, which can be loaded on demand. This makes the site more efficient and improves the overall user experience.</ListItem>
        <ListItem>Server-rendered applications: Next.js allows you to easily build server-rendered React applications, This can further improve the performance of my homapage site and Improve SEO.</ListItem>
        <ListItem>Static file serving: Next.js can serve static files, such as images, directly from the /public directory in your project. Further improving performance.</ListItem>
        </OrderedList>
        <P>
        <br></br>
        I went with Chakra-UI for the component library as it provides amazing ease of use with a focus on simplicity and utility, and the components are well-documented and include helpful examples and guidelines.
        Finally I used Framer Motion for animations and three.js to render and animate the 3d model.
        <br></br>
        <br></br>
        Heres are brief overview of the Project structure I decided to go with:
        </P>
        <br></br>
        <Code colorScheme="green" variant="outline" >
        $PROJECT_ROOT<br></br>
        │   # Page files<br></br>
        ├── pages<br></br>
        │   # React component files<br></br>
        ├── components<br></br>
        │   # Custom & Non-react modules<br></br>
        ├── lib<br></br>
        │   # Static files for the 3D model and all our Images, etc<br></br>
        └── public
        </Code>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Jacob-Dodd/Jacob-Dodd-Homepage">
            Jacob-Dodd-Homepage <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Chakra-ui, Framer Motion, Three.js</span>
          </ListItem>
        </List>
  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  