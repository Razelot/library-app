import Controller from '@ember/controller';

export default Controller.extend({

    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    // actualEmailAddress: Ember.computed('emailAddress', function () {
    //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),

    // emailAddressChanged: Ember.observer('emailAddress', function() {
    //     console.log('observer is called', this.get('emailAddress'));
    // }),


    actions: {
        saveInvitation() {

            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', { email: email });
            newInvitation.save().then(function (response) {
                console.log('Email address is saved.')
            })
            this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');


        }
    }

});
