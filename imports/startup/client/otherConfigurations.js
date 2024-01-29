// imports/startup/client/otherConfigurations.js
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // Set a global variable accessible throughout the client-side code
  window.AppConfig = {
    appName: 'My Meteor App',
    version: '1.0.0',
    config: {/* Your configuration object here */}
  };
});
