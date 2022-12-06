import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { WorkGridItem } from '../components/grid-item'

import thumbLodus from '../public/images/contents/lodus_01.png'
import thumbAdvent from '../public/images/contents/AdventThumb.webp'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Advent-of-Code-2022" title="Advent of Code 2022" thumbnail={thumbAdvent}>
            Put a discription here
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Example2"
            title="Example2"
            thumbnail={thumbLodus}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="PlaceHolder"
            thumbnail={thumbLodus}
            href="https://bfnightly.bracketproductions.com/chapter_1.html"
          />
          <GridItem
            title="PlaceHolder"
            thumbnail={thumbLodus}
            href="https://bfnightly.bracketproductions.com/chapter_1.html"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="PlaceHolder"
            thumbnail={thumbLodus}
            href="https://bfnightly.bracketproductions.com/chapter_1.html"
          />
          <GridItem
            title="PlaceHolder"
            thumbnail={thumbLodus}
            href="https://bfnightly.bracketproductions.com/chapter_1.html"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
