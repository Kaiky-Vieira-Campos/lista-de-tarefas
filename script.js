let contador = 0
const input = document.getElementById('texto')
const botao = document.getElementById('botao')
const main = document.getElementById('AreaLista')

function addtarefa(){
    //pegar o valor digitado no input
    let valor= input.value

    if(!valor) return alert('digite algo')
    contador++
    let novoitem = `<div id=${contador} class="item">
            <div onclick='marcar(${contador})' class="item-icone">
                <i id='icone_${contador}' class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick='marcar(${contador})' class="item-nome">
                ${valor}
            </div>
            <div class="item-botao">
                <button onclick='deletar(${contador})' class="delete"> <i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`
        //adicionar novo item
        main.innerHTML+= novoitem
        //zerar o campo 
        input.value=''
        input.focus()
}

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcar(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if(classe == 'item'){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_'+id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')
        
        item.parentNode.appendChild(item)

    }else{
        var icone = document.getElementById('icone_'+id)
        item.classList.remove('clicado')
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
        
    }
        
}



input.addEventListener('keyup', function(event){
    //se teclou o enter
    if(event.keyCode === 13){
        event.preventDefault()
        botao.click()
    }

})