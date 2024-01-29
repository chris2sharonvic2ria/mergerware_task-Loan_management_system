// imports/ui/components/loanList.js
import { Template } from 'meteor/templating';
import { Loans } from '/imports/api/loans';

import './loanList.html';

Template.loanList.helpers({
  loans() {
    return Loans.find({ borrowerId: Meteor.userId() });
  },
});
