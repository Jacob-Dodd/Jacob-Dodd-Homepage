import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbLodus from '../public/images/works/lodus_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Example" title="Example" thumbnail={thumbLodus}>
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

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other Sub-Heading
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Example" title="Example" thumbnail={thumbLodus}>
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
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
