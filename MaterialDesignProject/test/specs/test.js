
var assert    = require("chai").assert;


describe('Login page', () => {
    it('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'Login Page');
    });
});

describe('Get input of login page ', () => {
    it('should inputo data ', () => {
        browser.url('/');
        const user= $('#username-input');
           user.setValue('juan@tec.mx');
        const pass = $('#password-input');
        pass.setValue('pass2');
        assert.equal(pass.getValue(),'pass2');
        assert.equal(user.getValue(),'juan@tec.mx');


    });
});

describe('Get Login of login page ', () => {
    it('should have the right title', () => {
        browser.url('/');
        var user= $('#username-input');
        user.setValue('juan@tec.mx');
        var pass = $('#password-input');
        pass.setValue('passwordcomplete2');
        const button = $('#button-submit');
        button.click();
        var destinyTitle = browser.getTitle();
        assert.equal(destinyTitle,"Listado de bienvenida");
    });
});



describe('Get Login CSS', () => {
    before(function() {
        console.log('STARTING');
    });
    it('should have the color', function(done) {
        browser.url('/');
        var user= $('#username-input');
        var color = user.getCSSProperty('border-bottom-color');
        console.log("-->"+color.value);

        browser.call(done);
        console.log("aqui estamos");
        assert.equal(color.value,'rgba(255,255,255,0.87)' );

    });

    after(function(done) {
        console.log('ENDING');
    });
});