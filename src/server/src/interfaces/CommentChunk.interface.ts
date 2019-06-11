interface Commenter {
  display_name: string;
  _id: string;
  name: string;
  type: string;
  bio: string | null;
  created_at: string;
  updated_at: string;
  logo: string;
}

interface Emoticon {
  _id: string;
  begin: number;
  end: number;
}

interface FragmentEmoticon {
  emoticon_id: string;
  emoticon_set_id: string;
}

interface Fragment {
  text: string;
  emoticon?: FragmentEmoticon;
}

interface UserBadge {
  _id: string;
  version: string;
}

export interface Message {
  body: string;
  emoticons?: Emoticon[];
  fragments: Fragment[];
  is_action: boolean;
  user_badges: UserBadge[];
  user_color: string;
  user_notice_params: any;
}

interface Comment {
  _id: string;
  created_at: string;
  updated_at: string;
  channel_id: string;
  content_type: string;
  content_id: string;
  content_offset_seconds: number;
  commenter: Commenter;
  source: string;
  state: string;
  message: Message;
  more_replies: boolean;
}

export interface CommentChunk {
  comments: Comment[];
}
