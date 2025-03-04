describe("Consulta de encomendas no chabot", () => {
  context("cenário simples", () => {
    it("Deve indicar que a encomenda já foi entregue", () => {
      const codigoDeRastreio = "PD123456785BR";

      cy.abrirChatBote();
      cy.verificaMensagem(
        "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
      );
      cy.selecionarOpcao("Sim, por favor!");
      cy.verificaMensagem(
        "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
      );
      cy.enviarMensagem(codigoDeRastreio);
      cy.verificaMensagem(
        `Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`
      );
      cy.selecionarOpcao("Sim, está certo!");
      cy.verificaMensagem(
        "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
      );
      cy.verificaMensagem(
        "Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!",
        7000
      );
    });

    it("Deve indicar que a encomanda esta a caminho", () => {
      const codigoDeRastreio = "BR987654321BR";

      cy.abrirChatBote();
      cy.verificaMensagem(
        "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
      );
      cy.selecionarOpcao("Sim, por favor!");
      cy.verificaMensagem(
        "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
      );
      cy.enviarMensagem(codigoDeRastreio);
      cy.verificaMensagem(
        `Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`
      );
      cy.selecionarOpcao("Sim, está certo!");
      cy.verificaMensagem(
        "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
      );
      cy.verificaMensagem(
        "A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.",
        7000
      );
    });

    it("Deve indicar que a encomanda esta em rota de entrega", () => {
      const codigoDeRastreio = "QW112233445BR";

      cy.abrirChatBote();
      cy.verificaMensagem(
        "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
      );
      cy.selecionarOpcao("Sim, por favor!");
      cy.verificaMensagem(
        "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
      );
      cy.enviarMensagem(codigoDeRastreio);
      cy.verificaMensagem(
        `Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`
      );
      cy.selecionarOpcao("Sim, está certo!");
      cy.verificaMensagem(
        "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
      );
      cy.verificaMensagem(
        "Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦",
        7000
      );
    });

    it("Deve exibir erro para o codigo de rastreio nao encontrado", () => {
      const codigoDeRastreio = "AB123456789XY";

      cy.abrirChatBote();
      cy.verificaMensagem(
        "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
      );
      cy.selecionarOpcao("Sim, por favor!");
      cy.verificaMensagem(
        "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
      );
      cy.enviarMensagem(codigoDeRastreio);
      cy.verificaMensagem(
        `Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`
      );
      cy.selecionarOpcao("Sim, está certo!");
      cy.verificaMensagem(
        "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
      );
      cy.verificaMensagem(
        "Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?",
        7000
      );
      cy.selecionarOpcao("Encerrar atendimento");
      cy.verificaMensagem(
        "Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar."
      );
    });
  });

  context("exemplo de cenerios multiline", () => {
    const cenarios = [
      {
        titulo: "Deve indicar que a encomenda já foi entregue",
        codigoDeRastreio: "PD123456785BR",
        mensagemFinal:
          "Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!",
      },
      {
        titulo: "Deve indicar que a encomanda esta a caminho",
        codigoDeRastreio: "BR987654321BR",
        mensagemFinal:
          "A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.",
      },
      {
        titulo: "Deve indicar que a encomanda esta em rota de entrega",
        codigoDeRastreio: "QW112233445BR",
        mensagemFinal:
          "Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦",
      },
    ];

    cenarios.forEach((cenario) => {
      it(cenario.titulo, () => {
        cy.abrirChatBote();
        cy.verificaMensagem(
          "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
        );
        cy.selecionarOpcao("Sim, por favor!");
        cy.verificaMensagem(
          "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
        );
        cy.enviarMensagem(cenario.codigoDeRastreio);
        cy.verificaMensagem(
          `Confirmando: você informou o código de rastreio ${cenario.codigoDeRastreio}. Está tudo certo?`
        );
        cy.selecionarOpcao("Sim, está certo!");
        cy.verificaMensagem(
          "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
        );
        cy.verificaMensagem(cenario.mensagemFinal, 7000);
      });
    });
  });
});
