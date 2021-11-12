import mensagens from "./mensagens";

const ContatoValidator = {
  nome: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  email: {
    required: mensagens.required,
    maxLength: { value: 100, message: mensagens.maxLength + ": 100" },
  },
};

export default ContatoValidator;
