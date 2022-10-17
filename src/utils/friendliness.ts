/*
  GET_FILE = GIT_REPO_API + /owner + /repo + /contents + /file_name
*/
const GIT_REPO_API = 'https://api.github.com/repos'; // + /owner + /repo

export async function fetcher (user: string, repo: string ) {
  const res = await fetch(`${GIT_REPO_API}/${user}/${repo}`, { method: "GET" });
  const hasCG = await fetch(`${GIT_REPO_API}/${user}/${repo}/contents/CONTRIBUTE.md`, { method: "GET" });

  const repoJSON = await res.json();
  const hasCGJSON = await hasCG.json();
  
  return { ...repoJSON, has_contribute_guide: hasCGJSON.content ? true : false };
  //return { ...repoJSON, has_contribute_guide: hasCGJSON.content ? true : false };
}