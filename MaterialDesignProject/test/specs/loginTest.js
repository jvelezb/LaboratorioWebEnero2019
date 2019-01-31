var assert = require("assert");
/*
describe('Login page',() => {
    it('encontrar el titulo de la pagina',()=>{
        browser.url('/');
        var titulo = browser.getTitle();
        assert.equal(titulo,"Login Page");
    });


});

describe('Insertar info en login',()=>{
    before(function(){
        console.log("INICIO DE TEST");
    });
    it('debe ser login exitoso',()=>{
        browser.url('/');
        var user = $('#username-input');
        user.setValue('juanvelez@tec.mx');
        var password = $('#password-input');
        password.setValue('password');
        var button = $('#button-submit');
        button.click();
        var destino = browser.getTitle();
        assert.equal(destino,"Listado de bienvenida");
    });

    after(function(){
       console.log("TERMINANDO");
    });


});*/

describe("check css",()=>{
    before(function(){
        console.log("inicio");
    });
    it('ver color de input text',function(done){
        browser.url('/');
        var username = $('#username-input');
        browser.call(done);
        var colorUsername = username.getCSSProperty('border-bottom-color');
        console.log("Color-->"+colorUsername.value);
        assert.equal(colorUsername.value,'rgba(255, 255, 255, 0.42)');
    });

    after(function(){
       console.log("fin");
    });
});








