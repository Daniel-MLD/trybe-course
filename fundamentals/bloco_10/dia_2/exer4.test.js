const getRepos = require('./exer4');

describe('getRepos', () => {

  it('dont should return repo name', async (done) => {

    const endpoint = 'https://api.github.com/users/tryber/repos';
    const reposResults = await getRepos(endpoint);

    /* const reposToVerify = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];
    expect(reposResults.filter((repoName) => {
      return reposToVerify.includes(repoName);
    })).toHaveLength(0);
    done(); */

    expect(reposResults).not.toContain('sd-01-week4-5-project-todo-list');
    expect(reposResults).not.toContain('sd-01-week4-5-project-meme-generator');
    done();

  });

});
