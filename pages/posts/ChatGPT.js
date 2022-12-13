import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/posts'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'

  const Work = () => (
    
    <Layout title="ChatGPT">
      
      <Container>
        <Title>
        ChatGPT - Learning to Summarize from Human Feedback <Badge>2022-</Badge>
        </Title>
        <P> 
        Recently I&aposve been obsessed with OpenAI&aposs ChatGPT and the potential it has for the future. Thankfully OpenAi shares their papers for free to the public so I was able to learn more about this groundbreaking tech. The paper I&aposm specifically referring to is "Learning to summarise from human feedback". In this paper, the authors present a method for improving the performance of summarization models by training them to optimise for human preferences. The authors collect a large dataset of human comparisons between summaries and use this data to train a model to predict the human-preferred summary. This model is then used as a reward function to fine-tune a summarization policy using reinforcement learning.
        <br></br>
        <br></br>
        The authors apply their method to a version of the TL;DR dataset of Reddit posts and find that their models significantly outperform both human reference summaries and larger models fine-tuned with supervised learning alone. The authors also show that their models transfer to CNN/DM news articles, producing summaries nearly as good as human reference summaries without any news-specific fine-tuning.
        <br></br>
        <br></br>
        In terms of key mathematical concepts, the paper makes use of reinforcement learning, in which a model learns to take actions in order to maximise a reward signal. In this case, the reward signal is provided by the model trained to predict human-preferred summaries. The paper also uses supervised learning to train this reward model. Additionally, the paper applies beam search to non-uniformly sample from the model&aposs output distribution in order to improve summary quality.
        </P>
        <br></br>
        <P>
        The math in this paper is super interesting and primarily revolves around the use of reinforcement learning and supervised learning. In reinforcement learning, a model learns to take actions in order to maximize a reward signal. In this case, the reward signal is provided by a model trained to predict human-preferred summaries. The objective of the reinforcement learning model can be written as follows:
        </P>
        <br></br>
        <img src="/images/posts/eq1.svg" alt=''/>
        <br></br>
        <P>
        where Θ are the parameters of the model, πΘ is the model&aposs policy (i.e. the distribution over actions it takes), and R is the reward signal.
        The authors also use supervised learning to train the model that predicts human-preferred summaries. This can be written as a standard supervised learning objective:
        </P>
        <br></br>
        <img src="/images/posts/eq3.svg" alt=''/>
        <br></br>
        <P>
        where Θ are the parameters of the model, fΘ is the model, xi is the input (e.g. a pair of summaries), yi is the ground truth label (e.g. which summary is preferred by humans), and L is the loss function (e.g. cross-entropy loss).
        <br></br>
        <br></br>
        Additionally, the paper applies beam search to non-uniformly sample from the model&aposs output distribution in order to improve summary quality. This is a heuristic search algorithm that explores a limited number of the most promising candidate summaries at each step, rather than exhaustively exploring all possible summaries. The beam width hyperparameter determines how many candidates are considered at each step. The probability of selecting a candidate summary is given by:
        </P>
        <br></br>
        <img src="/images/posts/eq4.svg" alt=''/>
        <br></br>
        <P>
        Here s is a candidate summary and score(s) is the score assigned to the summary (e.g. by the reward model). This equation ensures that candidate summaries with higher scores are more likely to be selected.
        <br></br>
        All in all the potential for ChatGPT and this Technology is ridiculous, and NLP Chat AI like it are in a strong position to replace tradtional search platforms like google in the near future. This is strongly highlighted
        by the fact that ChatGPT reached over 1 million users in only 5 days (faster than massive social media platforms like twitter and instagram). 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Paper</Meta>
            <Link href="https://proceedings.neurips.cc/paper/2020/hash/1f89885d556929e98d3ef9b86448f951-Abstract.html">
            Learning to summarize with human feedback <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  