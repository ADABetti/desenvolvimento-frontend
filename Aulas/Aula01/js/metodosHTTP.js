//Jamais usar GET para tratar de dados sensíveis:
fetch('https://compras.com/pagamento/cartao=123123123/validade=2030-04/codigo=342', {
  methods: 'GET',
})

// Importante usar httpS para que os dados sejam criptografados
fetch (`https://compras.com/pagamento`, {
  methods: 'POST',
  body: {
    cartao: '123123123',
    validade: '2030-04',
    codigo: '342'
  },
  headers: {
    secretWord : 'Token secreto do fulano'
  }
})