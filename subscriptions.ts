/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./streamydb";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
    id
    email
    status
    videos {
      nextToken
      startedAt
      __typename
    }
    chats {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
    id
    email
    status
    videos {
      nextToken
      startedAt
      __typename
    }
    chats {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
    id
    email
    status
    videos {
      nextToken
      startedAt
      __typename
    }
    chats {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateChatUser = /* GraphQL */ `subscription OnCreateChatUser(
  $filter: ModelSubscriptionChatUserFilterInput
  $owner: String
) {
  onCreateChatUser(filter: $filter, owner: $owner) {
    id
    userID
    chatID
    user {
      id
      email
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    chat {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatUserSubscriptionVariables,
  APITypes.OnCreateChatUserSubscription
>;
export const onUpdateChatUser = /* GraphQL */ `subscription OnUpdateChatUser(
  $filter: ModelSubscriptionChatUserFilterInput
  $owner: String
) {
  onUpdateChatUser(filter: $filter, owner: $owner) {
    id
    userID
    chatID
    user {
      id
      email
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    chat {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatUserSubscriptionVariables,
  APITypes.OnUpdateChatUserSubscription
>;
export const onDeleteChatUser = /* GraphQL */ `subscription OnDeleteChatUser(
  $filter: ModelSubscriptionChatUserFilterInput
  $owner: String
) {
  onDeleteChatUser(filter: $filter, owner: $owner) {
    id
    userID
    chatID
    user {
      id
      email
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    chat {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatUserSubscriptionVariables,
  APITypes.OnDeleteChatUserSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat(
  $filter: ModelSubscriptionChatFilterInput
  $owner: String
) {
  onCreateChat(filter: $filter, owner: $owner) {
    id
    users {
      nextToken
      startedAt
      __typename
    }
    messages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat(
  $filter: ModelSubscriptionChatFilterInput
  $owner: String
) {
  onUpdateChat(filter: $filter, owner: $owner) {
    id
    users {
      nextToken
      startedAt
      __typename
    }
    messages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat(
  $filter: ModelSubscriptionChatFilterInput
  $owner: String
) {
  onDeleteChat(filter: $filter, owner: $owner) {
    id
    users {
      nextToken
      startedAt
      __typename
    }
    messages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onCreateMessage(filter: $filter, owner: $owner) {
    id
    content
    timestamp
    chatID
    ownerID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onUpdateMessage(filter: $filter, owner: $owner) {
    id
    content
    timestamp
    chatID
    ownerID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onDeleteMessage(filter: $filter, owner: $owner) {
    id
    content
    timestamp
    chatID
    ownerID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateVideo = /* GraphQL */ `subscription OnCreateVideo(
  $filter: ModelSubscriptionVideoFilterInput
  $owner: String
) {
  onCreateVideo(filter: $filter, owner: $owner) {
    id
    url
    ownerID
    comments {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVideoSubscriptionVariables,
  APITypes.OnCreateVideoSubscription
>;
export const onUpdateVideo = /* GraphQL */ `subscription OnUpdateVideo(
  $filter: ModelSubscriptionVideoFilterInput
  $owner: String
) {
  onUpdateVideo(filter: $filter, owner: $owner) {
    id
    url
    ownerID
    comments {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVideoSubscriptionVariables,
  APITypes.OnUpdateVideoSubscription
>;
export const onDeleteVideo = /* GraphQL */ `subscription OnDeleteVideo(
  $filter: ModelSubscriptionVideoFilterInput
  $owner: String
) {
  onDeleteVideo(filter: $filter, owner: $owner) {
    id
    url
    ownerID
    comments {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVideoSubscriptionVariables,
  APITypes.OnDeleteVideoSubscription
>;
export const onCreateVideoComment = /* GraphQL */ `subscription OnCreateVideoComment(
  $filter: ModelSubscriptionVideoCommentFilterInput
  $owner: String
) {
  onCreateVideoComment(filter: $filter, owner: $owner) {
    id
    content
    timestamp
    videoID
    ownerID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVideoCommentSubscriptionVariables,
  APITypes.OnCreateVideoCommentSubscription
>;
export const onUpdateVideoComment = /* GraphQL */ `subscription OnUpdateVideoComment(
  $filter: ModelSubscriptionVideoCommentFilterInput
  $owner: String
) {
  onUpdateVideoComment(filter: $filter, owner: $owner) {
    id
    content
    timestamp
    videoID
    ownerID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVideoCommentSubscriptionVariables,
  APITypes.OnUpdateVideoCommentSubscription
>;
export const onDeleteVideoComment = /* GraphQL */ `subscription OnDeleteVideoComment(
  $filter: ModelSubscriptionVideoCommentFilterInput
  $owner: String
) {
  onDeleteVideoComment(filter: $filter, owner: $owner) {
    id
    content
    timestamp
    videoID
    ownerID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVideoCommentSubscriptionVariables,
  APITypes.OnDeleteVideoCommentSubscription
>;
