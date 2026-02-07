class Player{
    constructor(initial) {
        //parametros refetente ao jogador, altura, largura, cor, etc...
        this.x = initial.x;
        this.y = initial.y;
        this.size = initial.size;
        this.step = initial.step;
        this.color = initial.color;
        //Este objeto define as direções do Player 
        this.keyboard = {left: false, right: false, up: false, down: false}
        //Este atributo será responsavel por chamar a função createElement, para criarmos o player no mapa (canvas)
        this.element = this.createElement()
        this.initEvents()
    }

    createElement(){
        //Irá criar uma div dentro do html que será o elemento referente ao player, as definições do estilo do player foram feitas no css, então a classe player foi adicionada a div recem criada
        const player = document.createElement('div');
        player.classList.add('player');
        player.style.width = `${this.size}px`
        player.style.height = `${this.size}px`
        player.style.backgroundColor = `${this.color}`

        return player;
    }

    update(){
        //Está função sempre será chamada pois ela irá atualizar o estado do player
        this.move()
        this.collisionWall()
        this.draw()   
    }

    move(){
        //Responsável por fazer o player andar ou não
        if(this.keyboard.right) this.x += this.step; //Isso é igual à this.keyboard.left == true; 
        if(this.keyboard.left) this.x -= this.step;
        if(this.keyboard.up) this.y -= this.step;
        if(this.keyboard.down) this.y += this.step;
             
            
    }

    collisionWall() {
        const cw = window.innerWidth;
        const ch = window.innerHeight;

        if(this.x < 0){
            this.x = 0;
        }
        if(this.y < 0){
            this.y = 0;
        }

        if((this.x + this.size) > cw){
            this.x = cw - this.size;
        }
        if((this.y + this.size) > ch){
            this.y = ch - this.size;
        }

    }

    draw(){
        //Está função será responsável por desenhar o elemento (player) através das coordenadas fornecidas por x e y
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }

    //Está função vai mapear as teclas utilizadas e atualizar dinâmicamente o objeto com as direções do player 
    initEvents(){
        const p = this;//Referencia aos atributos do player ao invés das teclas que serão testadas
        document.body.addEventListener('keydown', (e) =>{
            
            const key = e.key.toLocaleLowerCase()

            //Utilizando um IF para cada tecla de movimento é possivél realizar a movimentação nas diagonáis
            if(key == 'w'){ p.keyboard.up = true }
            if(key == 'a'){ p.keyboard.left = true }                        
            if(key == 's'){ p.keyboard.down = true }
            if(key == 'd'){ p.keyboard.right = true }

        })
        document.body.addEventListener('keyup', (e) =>{
            
            const key = e.key.toLocaleLowerCase()
            
            //Utilizando um IF para cada tecla de movimento é possivél realizar a movimentação nas diagonáis
            if(key == 'w'){ p.keyboard.up = false }
            if(key == 'a'){ p.keyboard.left = false }                        
            if(key == 's'){ p.keyboard.down = false }
            if(key == 'd'){ p.keyboard.right = false }

        })

    }

}