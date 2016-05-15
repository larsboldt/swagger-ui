'use strict';

SwaggerUi.Views.ApiKeyAuthView = Backbone.View.extend({ // TODO: append this to global SwaggerUi

    events: {
        'change .auth_input': 'inputChange'
    },

    selectors: {
        usernameInput: '.input_apiKey_username',
        passwordInput: '.input_apiKey_password'
    },

    cls: {
        error: 'error'
    },

    template: Handlebars.templates.apikey_auth,

    initialize: function(opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    render: function (){
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    inputChange: function (e) {
        var $el = $(e.target);
        var val = $el.val();
        var attr = $el.prop('name');

        if (val) {
            $el.removeClass(this.cls.error);
        }

        this.model.set(attr, val);
    },

    isValid: function () {
        return this.model.validate();
    },

    highlightInvalid: function () {
        if (!this.model.get('username')) {
            this.$(this.selectors.usernameInput).addClass(this.cls.error);
        }

        if (!this.model.get('password')) {
            this.$(this.selectors.passwordInput).addClass(this.cls.error);
        }
    }

});