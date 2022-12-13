import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import thumbAdvent from '../public/images/contents/AdventThumb.webp'
import thumbKani from '../public/images/posts/KaniParse.jpeg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <PostGridItem id="Advent-of-Code-2022" title="Advent of Code 2022" thumbnail={thumbAdvent}>
            Put a discription here
          </PostGridItem>
        </Section>
        <Section>
          <PostGridItem
            id="ChatGPT"
            title="ChatGPT"
            thumbnail={thumbKani}
          >
            Learning to Summarize from Human Feedback
          </PostGridItem>
        </Section>
      </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
