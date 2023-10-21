// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserStatus = {
  "REGISTERED": "REGISTERED",
  "REGISTEREDNOAUTH": "REGISTEREDNOAUTH",
  "UNREGISTERED": "UNREGISTERED"
};

const { User, ChatUser, Chat, Message, Video, VideoComment } = initSchema(schema);

export {
  User,
  ChatUser,
  Chat,
  Message,
  Video,
  VideoComment,
  UserStatus
};