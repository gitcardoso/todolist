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
    }

})

function gerarId(){

    // Math.floor --> Arredondar número
    // Math.Random --> Gerar número random
    return Math.floor(math.random * 3000)
}