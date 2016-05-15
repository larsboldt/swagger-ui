'use strict';

SwaggerUi.Models.ApiKeyAuthModel = Backbone.Model.extend({
    defaults: {
        'in': '',
        name: '',
        title: 'JsonWebToken',
        value: '',
        username: '',
        password: '',
        authorizationUrl: ''
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    validate: function () {
        var valid = !!this.get('password') && !!this.get('username');

        this.set('valid', valid);

        return valid;
    }
});