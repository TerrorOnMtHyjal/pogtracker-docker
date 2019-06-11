import parseCommentChunk, {
  messageHasEmoticons,
  emoticonIsTracked,
  isPreviousCommenter,
  updateEmote,
  addNewEmote
} from "../src/utils/parseCommentChunk";

describe("parseCommentChunk", () => {
  describe("messageHasEmoticons", () => {
    it("returns TRUE when emoticon key exists", () => {
      const message = {
        body: "sacJUMP",
        emoticons: [
          {
            _id: "1889221",
            begin: 0,
            end: 6
          }
        ],
        fragments: [
          {
            text: "sacJUMP",
            emoticon: {
              emoticon_id: "1889221",
              emoticon_set_id: ""
            }
          }
        ],
        is_action: false,
        user_badges: [
          {
            _id: "subscriber",
            version: "12"
          },
          {
            _id: "bits",
            version: "100"
          }
        ],
        user_color: "#FAFFFF",
        user_notice_params: {}
      };

      expect(messageHasEmoticons(message)).toEqual(true);
    });

    it("returns FALSE when emoticon key DOES NOT exist", () => {
      const message = {
        body: "sacJUMP",
        fragments: [
          {
            text: "sacJUMP",
            emoticon: {
              emoticon_id: "1889221",
              emoticon_set_id: ""
            }
          }
        ],
        is_action: false,
        user_badges: [
          {
            _id: "subscriber",
            version: "12"
          },
          {
            _id: "bits",
            version: "100"
          }
        ],
        user_color: "#FAFFFF",
        user_notice_params: {}
      };

      expect(messageHasEmoticons(message)).toEqual(false);
    });
  });

  describe("emoticonIsTracked", () => {
    it("returns TRUE when emoticonID is on the trackedEmotes object", () => {
      const trackedEmotes = {
        438: {
          count: 2,
          commenters: ["boebia", "TheAtarax"]
        },
        1157: {
          count: 2,
          commenters: ["boebia", "TheAtarax"]
        },
        67: {
          count: 2,
          commenters: ["boebia", "TheAtarax"]
        }
      };
      const emoticonID = "67";

      expect(emoticonIsTracked(trackedEmotes, emoticonID)).toEqual(true);
    });

    it("returns FALSE when emoticonID is NOT on the trackedEmotes object", () => {
      const trackedEmotes = {
        438: {
          count: 2,
          commenters: ["boebia", "TheAtarax"]
        },
        1157: {
          count: 2,
          commenters: ["boebia", "TheAtarax"]
        },
        67: {
          count: 2,
          commenters: ["boebia", "TheAtarax"]
        }
      };
      const emoticonID = "1001";

      expect(emoticonIsTracked(trackedEmotes, emoticonID)).toEqual(false);
    });
  });

  describe("isPreviousCommenter", () => {
    it("returns TRUE when displayName exists in commenters", () => {
      const commenters = ["boebia", "TheAtarax"];
      const displayName = "boebia";

      expect(isPreviousCommenter(commenters, displayName)).toEqual(true);
    });

    it("returns FALSE when displayName DOES NOT exist in trackedEmote.emoticonID.commenters", () => {
      const commenters = ["boebia", "TheAtarax"];
      const displayName = "dev3535";

      expect(isPreviousCommenter(commenters, displayName)).toEqual(false);
    });
  });

  describe("addNewEmote", () => {
    const trackedEmotes = {
      438: {
        count: 2,
        commenters: ["boebia", "TheAtarax"]
      }
    };
    const emoticonID = "300";
    const displayName = "dev3535";

    addNewEmote(trackedEmotes, emoticonID, displayName);

    expect(trackedEmotes).toEqual({
      438: {
        count: 2,
        commenters: ["boebia", "TheAtarax"]
      },
      300: {
        count: 1,
        commenters: ["dev3535"]
      }
    });
  });

  describe("updateEmote", () => {
    it("appends the displayName and iterates by one", () => {
      const emote = {
        count: 2,
        commenters: ["boebia", "TheAtarax"]
      };
      const displayName = "dev3535";

      updateEmote(emote, displayName);

      expect(emote).toEqual({
        count: 3,
        commenters: ["boebia", "TheAtarax", "dev3535"]
      });
    });
  });

  it("collects and counts emote from comments", () => {
    const commentChunk = {
      comments: [
        {
          _id: "5febe5ba-e9ae-4f19-b84b-dd448296f369",
          created_at: "2019-05-31T14:14:56.888Z",
          updated_at: "2019-05-31T14:14:56.888Z",
          channel_id: "23735582",
          content_type: "video",
          content_id: "432463590",
          content_offset_seconds: 8447.188,
          commenter: {
            display_name: "OnlinePhenome",
            _id: "43747195",
            name: "onlinephenome",
            type: "user",
            bio:
              "A twitch viewer who occasionally plays games. I could call myself a dirty casual.\r",
            created_at: "2013-05-19T20:53:36.660493Z",
            updated_at: "2019-06-09T19:16:10.301897Z",
            logo:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/ce64842a-ed21-497e-95e1-dc0779cbde9e-profile_image-300x300.png"
          },
          source: "chat",
          state: "published",
          message: {
            body: "sacJUMP",
            emoticons: [
              {
                _id: "1889221",
                begin: 0,
                end: 6
              }
            ],
            fragments: [
              {
                text: "sacJUMP",
                emoticon: {
                  emoticon_id: "1889221",
                  emoticon_set_id: ""
                }
              }
            ],
            is_action: false,
            user_badges: [
              {
                _id: "subscriber",
                version: "12"
              },
              {
                _id: "bits",
                version: "100"
              }
            ],
            user_color: "#FAFFFF",
            user_notice_params: {}
          },
          more_replies: false
        },
        {
          _id: "8a841f32-857b-49e1-a67a-b7586abd940c",
          created_at: "2019-05-31T14:14:57.291Z",
          updated_at: "2019-05-31T14:14:57.291Z",
          channel_id: "23735582",
          content_type: "video",
          content_id: "432463590",
          content_offset_seconds: 8447.591,
          commenter: {
            display_name: "Sammie_Leigh",
            _id: "111109257",
            name: "sammie_leigh",
            type: "user",
            bio: '"Hell is empty and all the devils are here."',
            created_at: "2015-12-31T03:46:48.091015Z",
            updated_at: "2019-06-09T15:28:45.646613Z",
            logo:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/f6ea0381-5c74-4dad-a58b-539210bfdcff-profile_image-300x300.jpeg"
          },
          source: "chat",
          state: "published",
          message: {
            body: "@chronozephyr you have? :P sacJUMP",
            emoticons: [
              {
                _id: "438",
                begin: 24,
                end: 25
              },
              {
                _id: "1889221",
                begin: 27,
                end: 33
              }
            ],
            fragments: [
              {
                text: "@chronozephyr you have? "
              },
              {
                text: ":P",
                emoticon: {
                  emoticon_id: "438",
                  emoticon_set_id: ""
                }
              }
            ],
            is_action: false,
            user_badges: [
              {
                _id: "subscriber",
                version: "24"
              },
              {
                _id: "sub-gifter",
                version: "1"
              }
            ],
            user_color: "#A797D3",
            user_notice_params: {}
          },
          more_replies: false
        },
        {
          _id: "37b3c2f3-343c-4a77-a842-2ebaca710468",
          created_at: "2019-05-31T14:14:59.333Z",
          updated_at: "2019-05-31T14:14:59.333Z",
          channel_id: "23735582",
          content_type: "video",
          content_id: "432463590",
          content_offset_seconds: 8449.633,
          commenter: {
            display_name: "Wodilio",
            _id: "26920149",
            name: "wodilio",
            type: "user",
            bio: null,
            created_at: "2011-12-20T07:17:46.221145Z",
            updated_at: "2019-06-02T17:50:46.183683Z",
            logo:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/wodilio-profile_image-75f2432a3b2c37fd-300x300.jpeg"
          },
          source: "chat",
          state: "published",
          message: {
            body:
              "I think the boat sinks because of the water in the airlock @Sacriel danHmm",
            emoticons: [
              {
                _id: "300004869",
                begin: 68,
                end: 73
              }
            ],
            fragments: [
              {
                text:
                  "I think the boat sinks because of the water in the airlock @Sacriel "
              },
              {
                text: "danHmm",
                emoticon: {
                  emoticon_id: "300004869",
                  emoticon_set_id: ""
                }
              }
            ],
            is_action: false,
            user_badges: [
              {
                _id: "turbo",
                version: "1"
              }
            ],
            user_color: "#000000",
            user_notice_params: {}
          },
          more_replies: false
        }
      ]
    };

    expect(parseCommentChunk(commentChunk)).toEqual({
      offset: 8447.188,
      tracked_emotes: {
        1889221: {
          count: 2,
          commenters: ["OnlinePhenome", "Sammie_Leigh"]
        },
        438: {
          count: 1,
          commenters: ["Sammie_Leigh"]
        },
        300004869: {
          count: 1,
          commenters: ["Wodilio"]
        }
      }
    });
  });
});
