const btnNumero = document.querySelectorAll('#btn-numero')
const display = document.getElementById('display')

for (let i = 0; i < btnNumero.length; i++) {
    btnNumero[i].addEventListener('click', () => {
        var resultado = eval(display.textContent += btnNumero[i].textContent)

        const result = document.getElementById('result')
        result.addEventListener('click', () => {
            display.textContent = resultado
        }, false)
        
        const raiz = document.getElementById('raiz')
        raiz.addEventListener('click', () => {
            display.textContent = Math.sqrt(resultado)
        }, false)
        
        const apagar = document.getElementById('apagar')
        apagar.addEventListener('click', () => {
            display.textContent = ''
        },false)

    }, false)
}


function animar() {
    const interface = document.getElementById('interface')
    interface.style.opacity = '1'
    interface.style.transform = 'translateY(0)'
}

