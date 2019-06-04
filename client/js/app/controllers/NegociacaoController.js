class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
          data,
          this._inputQuantidade.value,
          this._inputValor.value
        );

        let form = document.querySelector('form');
        form.reset();
        this._inputData.focus();

        console.log(negociacao);
        return negociacao;
    }
}