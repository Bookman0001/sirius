import styled from 'styled-components'

import { useSearchedArticles } from 'src/hooks/articles'
import { useSearchParams } from 'src/hooks/searchParams'
import BasicLayout from 'src/components/templates/basicLayout'
import SearchedArticles from 'src/components/organisms/searchedArticles'
import Search from 'src/components/organisms/search'

export default function Posts() {
  const { params } = useSearchParams()
  const { articles, error, isLoading } = useSearchedArticles(params)

  if (error) {
    return (
      <BasicLayout hideLangSwitch>
        <ErrorContainer>Error happened!</ErrorContainer>
      </BasicLayout>
    )
  }

  if (isLoading || !articles) {
    return (
      <BasicLayout hideLangSwitch>
        <LoadingContainer>Loading...</LoadingContainer>
      </BasicLayout>
    )
  }

  return (
    <BasicLayout hideLangSwitch>
      <Section>
        <SearchWrapper>
          <Search defaultSearchWord={params.searchWord} />
        </SearchWrapper>
        <SearchedArticles
          currentIndex={Number(params.page) || 1}
          articles={articles}
        />
      </Section>
    </BasicLayout>
  )
}

const Section = styled.section`
  max-width: 768px;
  min-height: calc(100vh - 50px - 60px);
  padding: 50px 0 0 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 50px 30px 0;
  }
`

const SearchWrapper = styled.div`
  margin-top: 50px;
`

const LoadingContainer = styled.div`
  max-width: 768px;
  height: calc(100vh - 50px - 60px);
  padding-top: 50px;
  margin: 0 auto;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorContainer = styled(LoadingContainer)``
