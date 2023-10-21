/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./streamydb";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createChatUser = /* GraphQL */ `mutation CreateChatUser(
  $input: CreateChatUserInput!
  $condition: ModelChatUserConditionInput
) {
  createChatUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatUserMutationVariables,
  APITypes.CreateChatUserMutation
>;
export const updateChatUser = /* GraphQL */ `mutation UpdateChatUser(
  $input: UpdateChatUserInput!
  $condition: ModelChatUserConditionInput
) {
  updateChatUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatUserMutationVariables,
  APITypes.UpdateChatUserMutation
>;
export const deleteChatUser = /* GraphQL */ `mutation DeleteChatUser(
  $input: DeleteChatUserInput!
  $condition: ModelChatUserConditionInput
) {
  deleteChatUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatUserMutationVariables,
  APITypes.DeleteChatUserMutation
>;
export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createVideo = /* GraphQL */ `mutation CreateVideo(
  $input: CreateVideoInput!
  $condition: ModelVideoConditionInput
) {
  createVideo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVideoMutationVariables,
  APITypes.CreateVideoMutation
>;
export const updateVideo = /* GraphQL */ `mutation UpdateVideo(
  $input: UpdateVideoInput!
  $condition: ModelVideoConditionInput
) {
  updateVideo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVideoMutationVariables,
  APITypes.UpdateVideoMutation
>;
export const deleteVideo = /* GraphQL */ `mutation DeleteVideo(
  $input: DeleteVideoInput!
  $condition: ModelVideoConditionInput
) {
  deleteVideo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVideoMutationVariables,
  APITypes.DeleteVideoMutation
>;
export const createVideoComment = /* GraphQL */ `mutation CreateVideoComment(
  $input: CreateVideoCommentInput!
  $condition: ModelVideoCommentConditionInput
) {
  createVideoComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVideoCommentMutationVariables,
  APITypes.CreateVideoCommentMutation
>;
export const updateVideoComment = /* GraphQL */ `mutation UpdateVideoComment(
  $input: UpdateVideoCommentInput!
  $condition: ModelVideoCommentConditionInput
) {
  updateVideoComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVideoCommentMutationVariables,
  APITypes.UpdateVideoCommentMutation
>;
export const deleteVideoComment = /* GraphQL */ `mutation DeleteVideoComment(
  $input: DeleteVideoCommentInput!
  $condition: ModelVideoCommentConditionInput
) {
  deleteVideoComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVideoCommentMutationVariables,
  APITypes.DeleteVideoCommentMutation
>;
