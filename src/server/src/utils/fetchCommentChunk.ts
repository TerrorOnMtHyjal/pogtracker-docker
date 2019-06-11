import fetch from "node-fetch";

const fetchCommentChunk = async (replayID: string, nextCursor: string) => {
  const url = `https://api.twitch.tv/v5/videos/${replayID}/comments?client_id=${
    process.env.CLIENT_ID
  }&cursor=${nextCursor}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};

export default fetchCommentChunk;
