/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'

import SearchedArticles from 'src/components/organisms/searchedArticles'
import * as useSearchParams from 'src/hooks/searchParams'
import { ArticleContents } from 'src/types'

const mockedClick = jest.fn()
const mockSearch = jest.fn()

jest.spyOn(useSearchParams, 'useSearchParams').mockImplementation(() => {
  return {
    params: { searchWord: '', page: '1' },
    searchArticlesWithPager: mockSearch,
    searchArticlesWithKeyword: jest.fn(),
  }
})

describe('SearchedArticles', () => {
  beforeEach(() => {
    mockedClick.mockClear()
    mockSearch.mockClear()
  })
  it('should be rendered correctlly with data', () => {
    const emptyArticles: ArticleContents = {
      contents: [
        {
          id: 'dummy',
          description: 'dummy description',
          publishedAt: '2021-01-01',
          title: 'dummy title',
          content: '',
        },
      ],
      totalCount: 1,
      offset: 0,
      limit: 10,
    }
    render(<SearchedArticles articles={emptyArticles} currentIndex={1} />)
    expect(screen.getAllByText('dummy title'))
    expect(screen.getAllByText('2021-01-01'))
  })

  it('should be rendered correctlly with nothing data', () => {
    const emptyArticles: ArticleContents = {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 0,
    }
    render(<SearchedArticles articles={emptyArticles} currentIndex={1} />)
    expect(screen.getAllByText('No Result!'))
  })

  it('should be worked onClick', () => {
    const emptyArticles: ArticleContents = {
      contents: [
        {
          id: 'dummy',
          description: 'dummy description',
          publishedAt: '2021-01-01',
          title: 'dummy title',
          content: '',
        },
      ],
      totalCount: 1,
      offset: 0,
      limit: 10,
    }
    render(<SearchedArticles articles={emptyArticles} currentIndex={1} />)
    fireEvent.click(screen.getByText('1'))
    expect(mockSearch).toBeCalledTimes(1)
  })
})
