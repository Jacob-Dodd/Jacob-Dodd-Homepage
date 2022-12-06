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
    <Layout title="Advent-of-Code-2022">
      <Container>
        <Title>
        Advent of Code 2022 <Badge>2022-</Badge>
        </Title>
        <P>
        Advent of Code is a set of small programming puzzles for a variety of 
        skill sets and skill levels that are realsied daily from december 1st leading up to Christmas like an Advent calendar.
        These problems can be solved in any programming language we&apos;d like to use. I used these as a fun way to brush up on my Python and Rust,
        While also trying to learn Julia.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://adventofcode.com/">
            adventofcode.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>language&apos;s Used</Meta>
            <span>Python, Julia, Rust</span>
          </ListItem>
          <ListItem>
            <Meta>Github Writeup</Meta>
            <Link href="https://github.com/Jacob-Dodd/Advent-Of-Code-2022">
              Advent-Of-Code-2022
             <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/posts/advent1.png" alt="Lodus" />
        <WorkImage src="/images/posts/advent2.png" alt="Lodus" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  