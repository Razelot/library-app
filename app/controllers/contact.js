import Controller from '@ember/controller';

export default Controller.extend({


    emailAddress: '',

    message: '',

    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    isValidMessage: Ember.computed.gte('message.length', 5),

    isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),

    isDisabled: Ember.computed.not('isValid'),

    actions: {
        sendMessage() {
            alert(`Email: ${this.get('emailAddress')} \n\nMessage: ${this.get('message')}`);
            this.set('responseMessage', `We got your message and we’ll get in touch soon`);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }
  
});
