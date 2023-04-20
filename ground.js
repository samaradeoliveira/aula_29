class Ground {
    //método para criar o corpo do chão
    constructor(x, y, w, h) {

        //para deixar estático(parado)
        var options = {
            isStatic: true
        };

        //criando o corpo
        this.body = Bodies.rectangle(x, y, w, h, options);
        //pegando medidas do corpo, separado
        this.w = w;
        this.h = h;
        //adicionando o corpo no mundo
        World.add(world, this.body);
    }

    //método para exibir o corpo do chão
    show() {
        //variável para pegar as posições do corpo
        var pos = this.body.position;

        //push e pop restringe as configurações somente para o chão
        push();
        //centralizar
        rectMode(CENTER);
        //não ter borda
        noStroke();
        //pintar/preencher com uma cor
        fill(95, 158, 160);
        //desenhar o retângulo do chão
        rect(pos.x, pos.y, this.w, this.h);
        pop();

    }

}