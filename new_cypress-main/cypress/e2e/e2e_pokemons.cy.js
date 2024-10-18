describe('end-2-end тест для Pokemonbattle', function () {

    it('Покупка нового аватара для своего тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); //Зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Нашли поле логин, ввели логин
        cy.get('#password').type('USER_PASSWORD'); // Нашли поле пароль, ввели пароль
        cy.get('.auth__button').contains('Войти'); //Нашли кнопку Войти, проверка текста кнопки
        cy.get('.auth__button').click(); //Нашли кнопку Войти, нажали на кнопку
        cy.wait(1000); //Ждем
        cy.get('.header__container > .header__id').click(); //Нажимаем на кнопку ЛК в правом верхнем углу
        cy.wait(1000); //Ждем
        cy.get('[href="/shop"]').click(); //Нажимаем на кнопку Смена аватара
        cy.wait(1000); //Ждем
        cy.get('.available > button').first().click({ force: true }); //Выбираем аватар
        cy.wait(1000); //Ждем
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // Нашли поле для ввода карты, вводим номер карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //Нашли поле для ввода СVV карты, вводим номер CVV
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); //Нашли поле для ввода срок действия карты, вводим срок действия карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME NAME'); //Нашли поле для ввода имени владельца карты, вводим имя владельца карты
        cy.get('.pay-btn').click(); //Нашли кнопку Оплатить, нажали на кнопку
        cy.get('#cardnumber').type('56456'); //Нашли поле для ввода кода из смс, ввели код из смс
        cy.get('.payment__submit-button').click(); //Нашли кнопку Подтвердить, нажали на кнопку
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //Нашли окно и проверили в нем текст
        cy.get('.payment__font-for-success').should('be.visible'); //Текст виден пользователю
        



        })
     }) 