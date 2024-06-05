/**
 * # Github Provider
 * 
 * ## Rate Limit 
 * 
 * The REST API has a custom rate limit for searching. 
 * For authenticated requests, you can make up to 30 
 * requests per minute for all search endpoints except 
 * for the "Search code" endpoint. The "Search code" 
 * endpoint requires you to authenticate and limits 
 * you to 10 requests per minute. For unauthenticated 
 * requests, the rate limit allows you to make up to 
 * 10 requests per minute.
 * 
 * | authenticated | limit/minutes | note                        |
 * |---------------|---------------|-----------------------------|
 * |     yes       |      30       | 10 if "SearchCode" endpoint |
 * |     no        |      10       |                             |
 */

import { LOGGER } from "../context";

/**
 * Start
 * 
 * 1) use api.github.com/search/repositories get some repos
 * - Limitations on query length: 
 *    - are longer than 256 characters (not including operators or qualifiers).
 *    - have more than five AND, OR, or NOT operators.
 * 
 *  
 */
export function run() {
  LOGGER.info("ok")
}

export function fetchGithubApiSearchRepos(): Promise<void> {
  const query = "topic:zaap", limit = 100;

  return fetch(buildSearchReposEndpoint(query, limit, 1))
    .then(response => {

    })
    .catch(error => {

    });

}

export const ENDPOINT_GITHUB_SEARCH_REPOS = "https://api.github.com/search/repositories";
export const PARAM_QUERY = "q";
export const PARAM_PAGINATION_LIMITE_PER_PAGE = "per_page";
export const PARAM_PAGINATION_CURRENT_PAGE = "page";

/**
 * Get all repos by custom query
 * @param {string} query Github Query 
 * @param {number} limitPerPage number of results per page
 * @param {number} currentPage page requested
 * @returns the endpoint
 */
export function buildSearchReposEndpoint(
  query: string,
  limitPerPage = 100,
  currentPage = 1
) {
  return ENDPOINT_GITHUB_SEARCH_REPOS
    + `?${PARAM_QUERY}=${encodeURI(query)}`
    + `&${PARAM_PAGINATION_LIMITE_PER_PAGE}=${limitPerPage}`
    + `&${PARAM_PAGINATION_CURRENT_PAGE}=${currentPage}`;
}
