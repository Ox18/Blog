import { Container } from '@chakra-ui/react'
import React from 'react'
import ContentItemStorie from '../common/ContentItemStorie'

const HomeStoriesLayout = ({
    children,
}) => {
  return (
    <Container
      p={0}
      mb={0}
      flex={"1 1 auto"}
      minW={"0"}
    >
      <ContentItemStorie>
          <Container
            p={"40px 0 24px"}
          >
            asd
          </Container>
      </ContentItemStorie>
      <ContentItemStorie>
          dqw
      </ContentItemStorie>
      <ContentItemStorie>
        {children}
      </ContentItemStorie>
    </Container>
  )
}

export default HomeStoriesLayout