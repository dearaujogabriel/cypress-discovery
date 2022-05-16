/// <reference types="cypress"/>

import signup from '../pages/SignupPage'

describe('Signup', () => {
    
    beforeEach(function(){
        cy.fixture('deliver').then(function(d){
            this.deliver = d
        })
    })

    it('User should be deliver', function() {
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Invalid document', function() {
        const expectedMessage = 'Oops! CPF inválido'

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertContentShouldBe(expectedMessage)
    })

    it('Invalid email', function() {
        const expectedMessage = 'Oops! Email com formato inválido.'

        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertContentShouldBe(expectedMessage)
    })
})