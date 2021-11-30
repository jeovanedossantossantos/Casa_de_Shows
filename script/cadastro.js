

const lista = document.querySelector('[data-lists]')
const formulario = document.querySelector('[data-new-list-form]')
const entrada = document.querySelector('[data-new-list-input]')
// console.log(lista)
const day_1 = document.querySelector('[day-1]')
const day_2= document.querySelector('[day-2]')
const day_3= document.querySelector('[day-3]')
const day_4= document.querySelector('[day-4]')
const day_5= document.querySelector('[day-5]')
const day_6= document.querySelector('[day-6]')
const day_7= document.querySelector('[day-7]')





let lists =[]



formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const lintName = entrada.value
    const daY1 = day_1.value
    const daY2= day_2.value
    const daY3= day_3.value
    const daY4= day_4.value
    const daY5= day_5.value
    const daY6= day_6.value
    const daY7= day_7.value

    if( lintName === null || lintName === '' ) return 
    if(daY1.checked === false && daY2.checked === false && daY3.checked === false && daY4.checked === false && daY5.checked === false && daY6.checked === false && daY7.checked === false ) return
    // if() return
    // if(day_3.checked === false) return
    // if(day_4.checked === false) return
    // if(day_5.checked === false) return
    // if(day_6.checked === false) return
    // if(day_7.checked === false) return

    const list = createList(lintName)
    entrada.value = null
    lists.push(list)
    //  console.log()
     //console.log(day_1.value)
    // console.log(day_3.value)
    // console.log(day_4.value)
    // console.log(day_5.value)
    // console.log(day_6.value)
    // console.log(day_7.value)

    render()


function createList(name, dia){
    return {id: Date.now().toString(), name: name, day: dia}
}
function render(){
    clearElement(lista)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerHTML = list.name + diasMaracados()
        lista.appendChild(item)
    })
}

function clearElement(e){
    while (e.firstChild){
        e.removeChild(e.firstChild)
    }
}

})
function diasMaracados(){
    let dias = ''

    if(day_1.checked === true){
        dias+=day_1.value
    }
    if(day_2.checked === true){
        dias+=day_2.value
    }
    if(day_3.checked === true){
        dias+=day_3.value
    }
    if(day_4.checked === true){
        dias+=day_4.value
    }
    if(day_5.checked === true){
        dias+=day_5.value
    }
    if(day_6.checked === true){
        dias+=day_6.value
    }
    if(day_7.checked === true){
        dias+=day_7.value
    }
    return dias
}
