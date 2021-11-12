class ContatoService {
  getAll() {
    const contato = localStorage.getItem("contato");
    return contato ? JSON.parse(contato) : [];
  }

  get(id) {
    const contato = this.getAll();
    return contato[id];
  }

  create(dados) {
    const contato = this.getAll();
    contato.push(dados);

    localStorage.setItem("contato", JSON.stringify(contato));
  }

  update(dados, id) {
    const contato = this.getAll();
    contato.splice(id, 1, dados);
    localStorage.setItem("contato", JSON.stringify(contato));
  }

  delete(id) {
    const contato = this.getAll();
    contato.splice(id, 1);
    localStorage.setItem("contato", JSON.stringify(contato));
  }
}

export default new ContatoService();
