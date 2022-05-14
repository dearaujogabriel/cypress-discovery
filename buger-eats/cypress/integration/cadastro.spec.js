/// <reference types="cypress"/>

describe('cadastro', () => {
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Gabriel', 
            cpf: '15044419245', 
            email: 'teste@gmail.com', 
            whatsapp: '34991273242', 
            endereco: {
                cep: '38405158', 
                rua: 'Rua Honduras',
                numero: '111',
                complemento: 'Casa da esquina',
                bairro: 'Tibery', 
                cidade_uf: 'Uberlândia/MG'
            }, 
            metodo_entrega: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        cy.get('input[type="file"]').attachFile(entregador.cnh)
        cy.get('button[class="button-success"]').click()
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage);
    })
})