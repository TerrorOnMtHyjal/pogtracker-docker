import { CommentChunk, Message } from "../interfaces/CommentChunk.interface";

interface TrackedEmote {
  count: number;
  commenters: string[];
}

interface TrackedEmotes {
  [emoticon_id: string]: TrackedEmote;
}

export const messageHasEmoticons = (message: Message): boolean =>
  message.hasOwnProperty("emoticons");

export const emoticonIsTracked = (
  trackedEmotes: TrackedEmotes,
  emoticonID: string
): boolean => trackedEmotes.hasOwnProperty(emoticonID);

export const isPreviousCommenter = (
  commenters: string[],
  displayName: string
): boolean => commenters.includes(displayName);

export const addNewEmote = (
  trackedEmotes: TrackedEmotes,
  emoticonID: string,
  displayName: string
) => {
  trackedEmotes[emoticonID] = {
    count: 1,
    commenters: [displayName]
  };

  return;
};

export const updateEmote = (emote: TrackedEmote, displayName: string) => {
  emote.count += 1;
  emote.commenters.push(displayName);

  return;
};

const parseCommentChunk = ({ comments }: CommentChunk) => {
  const trackedEmotes: TrackedEmotes = {};

  comments.forEach(({ message, commenter }) => {
    if (!messageHasEmoticons(message)) {
      return;
    }

    // @ts-ignore
    message.emoticons.forEach(({ _id }) => {
      const display_name = commenter.display_name;

      if (emoticonIsTracked(trackedEmotes, _id)) {
        if (!isPreviousCommenter(trackedEmotes[_id].commenters, display_name)) {
          updateEmote(trackedEmotes[_id], display_name);
        }
        return;
      }

      addNewEmote(trackedEmotes, _id, display_name);
    });
  });

  return {
    offset: comments[0].content_offset_seconds,
    tracked_emotes: trackedEmotes
  };
};

export default parseCommentChunk;
