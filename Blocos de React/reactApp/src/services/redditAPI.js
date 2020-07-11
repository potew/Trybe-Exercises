export async function getPosts(subreddit) {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const data = await response.json();
  // console.log(data.data.children)
  return 'Llllllllllll';
}