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
            dadosReturn.classList.add('errorActive')
            cepInvalido.textContent = 'CEP INCORRETO, POR FAVOR, INSIRA UM CEP VÁLIDO!'
        } else{
            dadosReturn.classList.remove('errorActive')
            cepInvalido.textContent = ''
        }
    })
    
    const error = fetch(url).then(resp => {}).catch((error) => {
        dadosReturn.classList.add('errorActive')
        cepInvalido.textContent = 'CEP INCORRETO, POR FAVOR, INSIRA UM CEP VÁLIDO!'
    })

    if(dadosReturn.classList.contains('errorActive')){
        dadosReturn.classList.remove('errorActive')
        cepInvalido.textContent = ''
    }

}

button.addEventListener('click', handleClick)