import { ArticlesApiResponse, SearchParams } from 'src/types'

export async function fetchSearchedArticles(params: SearchParams) {
  // FIXME: delete as operator
  const encodedParams: SearchParams = {
    searchWord: encodeURI(params.searchWord as string),
  }
  const response = await window.fetch(
    `${window.location.origin}/api/articles`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(encodedParams),
    }
  )
  const data: ArticlesApiResponse = await response.json()
  return data
}
