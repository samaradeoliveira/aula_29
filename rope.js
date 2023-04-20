class Rope {
  //o constructor recebe quantos seguimentos a corda tem pelo "nlink"
  //e a posição X/Y pelo "pointA", onde esta corda ficará fixa.
  constructor(nlink, pointA) {
    //recebendo o número de retângulos
    this.nlink = nlink;
    //cria um grupo de corpos para objetos terem comportamentos semelhantes
    const group = Body.nextGroup(true);
    //cria cada vértice da corda separadamente usando retângulos e depois adc ao grupo
    const rects = Composites.stack(100, 100, this.nlink, 1, 5, 5, function (x, y) {
      return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { group: group } });
    });

    //recebendo o valor onde a corda ficará fixa
    this.pointA = pointA;

    //em cada vertice da corda  aplica restrição a cada um dos retângulos
    this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, { stiffness: 0.1, length: 0.1, render: { type: 'line' } });
    //adc a física e o objeto ao mundo
    World.add(engine.world, this.body);

    //adc restrição entre o objeto e ponto de fixação
    Composite.add(rects, Constraint.create({
      pointA: this.pointA,
      bodyB: rects.bodies[0],
      pointB: { x: -25, y: 0 },
      length: 10,
      stiffness: 0.1
    }));

  }

  //torna o corpo da corda nulo/exclui
  break() { //Matter.Composite.clear(this.rope,true);
    this.body = null;
  }

  //para exibir
  show() {
    if (this.body != null) {
      //percorre a matriz do corpo para pegar cada vertice e exibí-la conforme o método 
      //draw vertices logo abaixo
      for (let i = 0; i < this.body.bodies.length - 1; i++) {
        this.drawVertices(this.body.bodies[i].vertices);
      }
    }
  }

  //aplica características 
  drawVertices(vertices) {
    beginShape();
    //cor de todos os vertices 
    fill('#4B0082');
    //sem borda
    noStroke();
    //desenha todos os vértices 
    for (let i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y);
    }
    //fecha as configurações
    endShape(CLOSE);
  }

}