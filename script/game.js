class Game {
    constructor(){
        this.map = document.getElementById('game');
        this.instances = []
    }

    add(instance){
        //O parâmetro insertAdjacentElement irá inserir um elemento selecionado de acordo com a posição e o elemento em questão
        this.map.insertAdjacentElement('beforeend', instance.element)
        this.instances.push(instance)
    }

    //Função para inicializar o loop infinito que será o jogo em si e fara update do player
    update(game){
        for(let i of game.instances){
            i.update()
        }
        requestAnimationFrame((ev) => game.update(game))
    }
}