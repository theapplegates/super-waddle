import { findResultsState } from 'react-instantsearch-dom/server'
import algoliasearch from 'algoliasearch/lite'

const indexName = 'index'

// Keys are supplied from Algolia's instant search example
// https://github.com/algolia/react-instantsearch
const searchClient = algoliasearch(
  '4DUY2A0SV0',
  '242d295b4621723ab8340413ea492837'
)

export { findResultsState, indexName, searchClient }
