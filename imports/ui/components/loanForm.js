// imports/ui/components/loanForm.js
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './loanForm.html';

Template.loanForm.events({
  'click .request-loan'() {
    Meteor.call('loans.requestLoan');
  },
});
