/*let meuCarro = new Object({
    fabricacao: "ford",
    modelo: 'Mustang',
    ano: '1968'
})

meuCarro['fabricacao']+= ' Fiat'


// comando object.keys retorna o imultaval no objeto
//console.log(Object.keys(meuCarro))

//comando abaixo, retorna todos os valores imutaveis ou não
//console.log(Object.getOwnPropertyNames(meuCarro))

//Criamos uma função com as informações que viram quando chamar a função
function carro(marca,modelo,ano,dono){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = modelo;
    this.dono = dono
}

//Aqui criamos as informações sobre o dono que estaram dentro do objeto
function Pessoa(nome,idade,sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo
}

//Aqui atribuimos as informações dentro do objeto acionando a função 'Pessoa'
let Joao = new Pessoa('João', '29', 'Masculino');

//Aqui atribuimos as informações dentro do objeto acionando a função 'carro'
let carroDoKen = new carro('Nissa ', '300zx ', 1992, Joao)



// aqui criamos um objeto como base
var Animal = {
    tipo: 'invertebrados',
    qualtipo:function(){
        console.log(this.tipo);
    }
}

//usamos o comando 'Objecto.create()' para criar um modelo igual usado dentro como parametro
var animal1 = Object.create(Animal);
animal1.qualtipo();

//Aqui fizemos o mesmo exemplo, porém alteramos algumas informações sobre o tipo de peixe.
var peixes = Object.create(Animal);
peixes.tipo = 'Peixes';
peixes.qualtipo()