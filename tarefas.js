let novatarefa = document.querySelector('#novatarefa');
let btnaddtarefa = document.querySelector('#btnaddtarefa');
let listatarefas = document.querySelector('#listatarefas');


novatarefa.addEventListener('keypress', (e) => {
    //keycode.info para descobrir código das teclas
    //13 == ENTER
    if (e.keycode == 13) { 

        let tarefa = {

            nome: novatarefa.value,
            id: gerarId(), //Geraremos o ID com função de números aleatórios, pois não temos BD
        }


        //To do:: Adicionar a tarefa ao HTML
        adicionartarefa(tarefa);
    }
});

btnaddtarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: novatarefa.value,
        id: gerarId(),
    }
    adicionartarefa(tarefa);
});

//Gerando ID
function gerarId(){
    // Math.floor --> Arredondar número
    // Math.Random --> Gerar número random
    return Math.floor(Math.random * 3000);
}

function adicionartarefa(tarefa){
    //adicionar tag
    let li = criarTagLi(tarefa);
    listatarefas.appendChild(li);

    //Resetar caixa de texto após adicionar tarefa
    novatarefa.value = '';

}

//Criar tags para adicionar ao HTML

function criarTagLi(tarefa){
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    //Adicionar class à tag.
    span.classList.add('textotarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btneditar = document.createElement('button');
    btneditar.classList.add('btnacao');
    btneditar.innerHTML = '<i class="fa fa-pencil"></i>';

    let btnexcluir = document.createElement('button');
    btnexcluir.classList.add('btnacao');
    btnexcluir.innerHTML = '<i class="fa fa-trash"></i>'


    div.appendChild(btneditar);
    div.appendChild(btnexcluir);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}