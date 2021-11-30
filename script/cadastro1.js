const lista = document.querySelector('[data-lists]')
const formulario = document.querySelector('[data-new-list-form]')
const entrada = document.querySelector('[data-new-list-input]')
const entrada2 = document.querySelector('[data-new-list-input2]')
// console.log(lista)
const day_1 = document.querySelector('[day-1]')
const day_2 = document.querySelector('[day-2]')
const day_3 = document.querySelector('[day-3]')
const day_4 = document.querySelector('[day-4]')
const day_5 = document.querySelector('[day-5]')
const day_6 = document.querySelector('[day-6]')
const day_7 = document.querySelector('[day-7]')

let lista1 = []
const days = [day_1, day_2, day_3,day_4,day_5,day_6,day_7]




formulario.addEventListener('submit', function(e){
    e.preventDefault()

    function Cantor() {
       
    
       
        let listaDias = []
        let tem = 0
        
    
        if (entrada.value === null || entrada.value === "") {
            return
        }
        if (entrada2.value === null || entrada2.value === "") {
            return
        }else{
            for(let i=0; i<days.length; i++){
                if(days[i].checked === true){
                    listaDias.push(days[i].value)
                    tem = 1
                }
            }
    
        }
        if(tem === 1){
            return {id:0, name: entrada.value, estilo: entrada2.value, days: listaDias }
        }
        
    
    
    }

    let dados = Cantor()
    let tam = dados.days.length
    let todosOsDias=""

    for(i=0; i<tam; i++){
        console.log(dados.days[i])
        todosOsDias+= ' ' + dados.days[i]
    }
    const item = document.createElement('li')
    item.classList.add('item')
    item.innerHTML = dados.name + ' ' +dados.estilo + todosOsDias
    lista.appendChild(item)



})


