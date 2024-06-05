import { describe, expect, jest, test } from "@jest/globals";
import * as GithubProvider from "../src/providers/github.provider";
describe("test buildSearchReposEndpoint(...)", () => {

  test("just check if the endpoint is correctly builded", async () => {
    expect(GithubProvider.buildSearchReposEndpoint("test in:readme", 10, 5))
      .toBe(`${GithubProvider.ENDPOINT_GITHUB_SEARCH_REPOS}`
        + `?${GithubProvider.PARAM_QUERY}=test%20in:readme`
        + `&${GithubProvider.PARAM_PAGINATION_LIMITE_PER_PAGE}=10`
        + `&${GithubProvider.PARAM_PAGINATION_CURRENT_PAGE}=5`
      );
  });

});
