// imports/api/loans.js
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Loans = new Mongo.Collection('loans');

Meteor.methods({
  'loans.requestLoan'() {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Loans.insert({
      borrowerId: this.userId,
      status: 'requested',
      createdAt: new Date(),
    });
  },

  'loans.confirmLoan'(loanId) {
    if (!this.userId || !Roles.userIsInRole(this.userId, 'lender')) {
      throw new Meteor.Error('not-authorized');
    }

    Loans.update(loanId, {
      $set: { status: 'confirmed', confirmedAt: new Date() },
    });
  },
});
