const player = new Player({
    x: 0,
    y: 0,
    size: 50,
    step: 5,
    color: 'green'
})

const game = new Game()

game.add(player)


//utilizando o requestAnimationFrame garantimos a atualização do loop apenas quando idêntificado alguma alteração nas movimentações de frames
//A função run ira realizar algumas ações e após estas execuções ela irá chamar o requestAnimationFrame, isso irá gerar um loop

requestAnimationFrame((t) => game.update(game))
