// imports/api/users.js
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Accounts.onCreateUser((options, user) => {
  if (options.profile) {
    user.profile = options.profile;
  }

  Roles.addUsersToRoles(user._id, ['borrower']);

  return user;
});
