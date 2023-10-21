import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum UserStatus {
  REGISTERED = "REGISTERED",
  REGISTEREDNOAUTH = "REGISTEREDNOAUTH",
  UNREGISTERED = "UNREGISTERED"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly videos?: (Video | null)[] | null;
  readonly chats?: (ChatUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly videos: AsyncCollection<Video>;
  readonly chats: AsyncCollection<ChatUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChatUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly chatID: string;
  readonly user?: User | null;
  readonly chat?: Chat | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly chatID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly chat: AsyncItem<Chat | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatUser = LazyLoading extends LazyLoadingDisabled ? EagerChatUser : LazyChatUser

export declare const ChatUser: (new (init: ModelInit<ChatUser>) => ChatUser) & {
  copyOf(source: ChatUser, mutator: (draft: MutableModel<ChatUser>) => MutableModel<ChatUser> | void): ChatUser;
}

type EagerChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly users?: (ChatUser | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly users: AsyncCollection<ChatUser>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chat = LazyLoading extends LazyLoadingDisabled ? EagerChat : LazyChat

export declare const Chat: (new (init: ModelInit<Chat>) => Chat) & {
  copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp: string;
  readonly chatID: string;
  readonly ownerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp: string;
  readonly chatID: string;
  readonly ownerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url: string;
  readonly ownerID: string;
  readonly comments?: (VideoComment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url: string;
  readonly ownerID: string;
  readonly comments: AsyncCollection<VideoComment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Video = LazyLoading extends LazyLoadingDisabled ? EagerVideo : LazyVideo

export declare const Video: (new (init: ModelInit<Video>) => Video) & {
  copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

type EagerVideoComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp?: string | null;
  readonly videoID: string;
  readonly ownerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp?: string | null;
  readonly videoID: string;
  readonly ownerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoComment = LazyLoading extends LazyLoadingDisabled ? EagerVideoComment : LazyVideoComment

export declare const VideoComment: (new (init: ModelInit<VideoComment>) => VideoComment) & {
  copyOf(source: VideoComment, mutator: (draft: MutableModel<VideoComment>) => MutableModel<VideoComment> | void): VideoComment;
}