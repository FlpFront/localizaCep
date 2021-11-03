const input = document.querySelector('[data-form="input"]')
const button = document.querySelector('[data-form="button"]')

function handleClick(event){
    event.preventDefault();
    const cepUpdate = input.value.replace('-', '').replace('.', '').replace(' ', '').trim()
    const cep = cepUpdate
    const url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url).then(response => response.json()).then(data => {
        cepAtual.textContent = data.cep
        logradouro.textContent = data.logradouro
        bairro.textContent = data.bairro
        cidade.textContent = data.localidade
        uf.textContent = data.uf

        if(data.erro === true){
            errorAlert.classList.add('errorActive')
        }
            
    })
    
    const error = fetch(url).then(resp => {}).catch((error) => {
        errorAlert.classList.add('errorActive')
    })

    if(errorAlert.classList.contains('errorActive')){
        errorAlert.classList.remove('errorActive')
    }

}

button.addEventListener('click', handleClick)