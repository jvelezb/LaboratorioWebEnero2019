Creación del Login
=====================
Se creará el Login Page .


Instalar  MDC Text Field
-----------------------
MDC Web components are published via NPM packages. To install the package for the text field component, run:
```
npm install @material/textfield@0.40.0
```

o bien instalando todos los componentes de Web de Material Design
```npm install material-components-web```


See more information on using the master MDC Web package here.

Añadir el  HTML
------------

Agrega en la forma <form> los siguientes elementos:

```
<div class="mdc-text-field username">
  <input type="text" class="mdc-text-field__input" id="username-input" name="username">
  <label class="mdc-floating-label" for="username-input">Username</label>
  <div class="mdc-line-ripple"></div>
</div>
<div class="mdc-text-field password">
  <input type="password" class="mdc-text-field__input" id="password-input" name="password">
  <label class="mdc-floating-label" for="password-input">Password</label>
  <div class="mdc-line-ripple"></div>
</div>
```


Añade el CSS

```@import "@material/textfield/mdc-text-field";```

Agrega los siguientes estilos a ``login.scss```

```
.username,
.password {
  display: block;
  width: 300px;
  margin: 20px auto;
}
````


Àñadir el javascript
----------------------
En el archivo ``login.js```, ingresa:
```
   import {MDCTextField} from '@material/textfield';
   
   const username = new MDCTextField(document.querySelector('.username'));
   const password = new MDCTextField(document.querySelector('.password'));
```

Add HTML5 validation
__________________________

Cambia tu HTML a lo siguiente:

```
<div class="mdc-text-field username">
  <input type="text" class="mdc-text-field__input" id="username-input" name="username" required>
  <label class="mdc-floating-label" for="username-input">Username</label>
  <div class="mdc-line-ripple"></div>
</div>
<div class="mdc-text-field password">
  <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8">
  <label class="mdc-floating-label" for="password-input">Password</label>
  <div class="mdc-line-ripple"></div>
</div>
```

Posteriormente se añaden los botones de seguir o cancelar.


Install MDC Button
------------------

Para instalar los botones se ejecuta lo siguiente:


```npm install @material/button@0.40.0```

Añadir el siguiente HTML


```
<div class="button-container">
  <button type="button" class="mdc-button cancel">
    Cancel
  </button>
  <button class="mdc-button mdc-button--raised next">
    Next
  </button>
</div>
```


Añadir el CSS
------------------

In login.scss, add the following import statement after the existing imports:

```@import "@material/button/mdc-button";```
To align the buttons and add a margin around them, add the following styles to login.scss:

```
.button-container {
  display: flex;
  justify-content: flex-end;
  width: 300px;
  margin: auto;
}

.button-container button {
  margin: 3px;
}
```

Añadir un ripple en los botones
----------------------
When the user touches or clicks a button, it should display feedback in the form of an ink ripple. The ink ripple component requires JavaScript, so we'll add that to the page.

To install the package for the ripple component, run:

```npm install @material/ripple@0.40.0```

Añadir al js los siguiente

```import {MDCRipple} from '@material/ripple';```

Añadir lo siguiente para los ripples:

```
new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));
```


