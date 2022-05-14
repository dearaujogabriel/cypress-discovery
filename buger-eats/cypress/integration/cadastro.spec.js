/// <reference types="cypress"/>

import SignupPage from '../pages/SignupPage'

describe('cadastro', () => {
    it('Usuario deve se tornar um entregador', () => {
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        var deliver = {
            name: 'Gabriel', 
            cpf: '29599663098', 
            email: 'teste@gmail.com', 
            whatsapp: '34991273242', 
            address: {
                postalcode: '38405158', 
                street: 'Rua Honduras',
                number: '111',
                details: 'Casa da esquina',
                district: 'Tibery', 
                city_state: 'Uberlândia/MG'
            }, 
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }
        
        var signup = new SignupPage()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', () => {
        const expectedMessage = 'Oops! CPF inválido'
        var deliver = {
            name: 'Gabriel', 
            cpf: '295996630AA', 
            email: 'teste@gmail.com', 
            whatsapp: '34991273242', 
            address: {
                postalcode: '38405158', 
                street: 'Rua Honduras',
                number: '111',
                details: 'Casa da esquina',
                district: 'Tibery', 
                city_state: 'Uberlândia/MG'
            }, 
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }

        var signup = new SignupPage()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertContentShouldBe(expectedMessage)
    })
})