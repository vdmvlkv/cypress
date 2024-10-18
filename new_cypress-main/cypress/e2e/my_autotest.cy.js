describe('Проверка Авторизации', function () {

    it('Позитивный кейс авторизации', function () {
         cy.visit('/'); //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин, ввели логин
         cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
         cy.get('#loginButton').contains('Войти') //Нашли кнопку Войти, проверка текста кнопки
         cy.get('#loginButton').click(); // Нашли кнопку Войти, нажали на кнопку
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Нашли окно и проверили в нем текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Нашли крестик и он виден пользователю
     })

     it('Логика восстановления пароля', function () {
        cy.visit('/'); //Зашли на сайт
        cy.get('#forgotEmailButton').contains('Забыли пароль?'); //Нашли кнопку Забыли пароль?, проверка текста кнопки
        cy.get('#forgotEmailButton').click(); // Нашли кнопку Забыли пароль?, нажали на кнопку
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Нашли поле логин, ввели логин
        cy.get('#restoreEmailButton').contains('Отправить код'); //Нашли кнопку Отправить код, проверка текста кнопки
        cy.get('#restoreEmailButton').click(); //Нашли кнопку Отправить код, нажали на кнопку
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Нашли окно и проверили в нем текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Нашли крестик и он виден пользователю
    })

    it('Негативный кейс авторизации (НЕправильный Пароль)', function () {
        cy.visit('/'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин, ввели логин
        cy.get('#pass').type('iNOLoveqastudio1'); // Нашли поле пароль, ввели НЕправильный пароль
        cy.get('#loginButton').contains('Войти') //Нашли кнопку Войти, проверка текста кнопки
        cy.get('#loginButton').click(); // Нашли кнопку Войти, нажали на кнопку
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Нашли окно и проверили в нем текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Нашли крестик и он виден пользователю
    })

    it('Негативный кейс авторизации (НЕправильный Логин)', function () {
        cy.visit('/'); //Зашли на сайт
        cy.get('#mail').type('german_super@dolnikov.ru'); // Нашли поле логин, ввели НЕправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').contains('Войти') //Нашли кнопку Войти, проверка текста кнопки
        cy.get('#loginButton').click(); // Нашли кнопку Войти, нажали на кнопку
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Нашли окно и проверили в нем текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Нашли крестик и он виден пользователю
    })

    it('Негативный кейс валидации', function () {
        cy.visit('/'); //Зашли на сайт
        cy.get('#mail').type('german_superdolnikov.ru'); // Нашли поле логин, ввели НЕправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').contains('Войти') //Нашли кнопку Войти, проверка текста кнопки
        cy.get('#loginButton').click(); // Нашли кнопку Войти, нажали на кнопку
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Нашли окно и проверили в нем текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Нашли крестик и он виден пользователю
    })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('/'); //Зашли на сайт
        cy.get('#mail').type('GerMan@dolnikov.ru'); // Нашли поле логин, ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').contains('Войти') //Нашли кнопку Войти, проверка текста кнопки
        cy.get('#loginButton').click(); // Нашли кнопку Войти, нажали на кнопку
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Нашли окно и проверили в нем текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Нашли крестик и он виден пользователю
    })

 }) 