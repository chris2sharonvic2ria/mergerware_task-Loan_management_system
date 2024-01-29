// imports/startup/client/configureAccounts.js
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Configure accounts UI
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY', // Set to 'USERNAME_AND_EMAIL' if you want both username and email
});

// Additional configuration if needed
// For example, handling login/logout events
Accounts.onLogin(() => {
  // Handle login event
  console.log('User logged in');
});

Accounts.onLogout(() => {
  // Handle logout event
  console.log('User logged out');
});

// Additional configurations can be added based on your application's requirements
Meteor.startup(() => {
  if (window.AppConfig && window.AppConfig.config) {
    const configValue = window.AppConfig.config;
    // Continue with the rest of your code
  } else {
    console.error('window.AppConfig or window.AppConfig.config is undefined.');
  }
});
