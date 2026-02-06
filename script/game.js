class Game {
    constructor(){
        this.map = document.querySelector('canvas');
        this.elements = []
    }

    addElement(element){
        //O parâmetro insertAdjacentElement irá inserir um elemento selecionado de acordo com a posição e o elemento em questão
        this.map.insertAdjacentElement('beforeend', element)
        this.elements.push(element)
    }

    //Função para inicializar o loop infinito que será o jogo em si e fara update do player
    update(){
        const _this = this;
        

        //utilizando o requestAnimationFrame garantimos a atualização do loop apenas quando idêntificado alguma alteração nas movimentações de frames
        //A função run ira realizar algumas ações e após estas execuções ela irá chamar o requestAnimationFrame, isso irá gerar um loop
        requestAnimationFrame((e) =>{
            for(let el of _this.elements){
                el.update()
            }
        }, this.update)
    }
}