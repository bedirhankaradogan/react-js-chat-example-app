import shortId from 'shortid';
import faker from 'faker';
import _ from 'lodash';

const textGenerator = require('txtgen');

const users = generateUsers(20);
export const chats = _.mapKeys(users, 'userId');

export const getMessages = messagesPerUser => {
  let messages = {};
  _.forEach(users, user => {
    messages[user.userId] = {
      ..._.mapKeys(generateMessages(messagesPerUser), 'number')
    };
  });
  return messages;
};

export function generateUser() {
  return {
    userId: shortId.generate(),
    name: faker.name.findName(),
    profilePicture: faker.internet.avatar(),
    isOnline: faker.random.boolean()
  };
}

function generateMessage(number) {
  return {
    number,
    text: textGenerator.sentence(),
    isSenderMe: faker.random.boolean()
  };
}

function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMessages(numberOfMessages) {
  return Array.from({ length: numberOfMessages }, (v, i) => generateMessage(i));
}