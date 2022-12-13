import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbLodus from '../public/images/works/lodus_01.png'
import thumbKani from '../public/images/posts/KaniParse.jpeg'
import thumbPersonal from '../public/images/works/personal.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="KaniParse" title="KaniParse" thumbnail={thumbKani}>
            NLP Command-line tool
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Lodus"
            title="Lodus"
            thumbnail={thumbLodus}
          >
            Modern E-Learning Platform
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Homepage-Website" title="Homepage Website" thumbnail={thumbPersonal}>
            A clean, minimalistic Personal Website 
          </WorkGridItem>
        </Section>
        

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
