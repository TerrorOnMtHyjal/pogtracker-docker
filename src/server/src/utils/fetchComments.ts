import fetchCommentChunk from "./fetchCommentChunk";
import parseCommentChunk from "./parseCommentChunk";

const fetchComments = async (replayID: string) => {
  let hasNext = true;
  let nextCursor = "";

  while (hasNext) {
    let commentChunk;

    try {
      commentChunk = await fetchCommentChunk(replayID, nextCursor);
      nextCursor = commentChunk._next;
    } catch (e) {
      throw new Error(e);
    }

    if (!commentChunk._next) {
      hasNext = false;
    }
  }

  return true;
};

export default fetchComments;
