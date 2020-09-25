const btnEnviar = document.querySelector('#btn-enviar');
const estados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

function preencherSelect() {
  const selectElement = document.querySelector('#state');
  for (const key in estados) {
    if (estados.hasOwnProperty(key)) {
      const optionElement = document.createElement('option');
      optionElement.value = key;
      optionElement.innerText = estados[key];
      selectElement.appendChild(optionElement);
    }
  }
}

btnEnviar.addEventListener('click', function (event) {
  //event.preventDefault();
  const formElement = document.querySelector('#cadastro');
  const divElement = document.querySelector('.form-out')
  if (formElement.checkValidity()) {
    const fieldSetPersonal = document.querySelector('.personal-data').elements;
    const fieldSetJob = document.querySelector('.job-data').elements;
    for (let index = 0; index < fieldSetPersonal.length; index += 1) {
      const newDiv = document.createElement('div');
      if (fieldSetPersonal[index].className === 'radio') {
        if (fieldSetPersonal[index].checked) {
          newDiv.innerText = fieldSetPersonal[index].value
        }
      } else {
        newDiv.innerText = fieldSetPersonal[index].value.toUpperCase();
      }
      divElement.appendChild(newDiv);
    }
    for (let index = 0; index < fieldSetJob.length; index += 1) {
      const newDiv = document.createElement('div');
      newDiv.innerText = fieldSetJob[index].value.toUpperCase();
      divElement.appendChild(newDiv);
    }
  } else {
    alert('Preencha os campos obrigatórios!')
  }
})

document.querySelector('#btn-limpar').addEventListener('click', function () {
  document.querySelector('.form-out').innerHTML = '';
})

window.onload = preencherSelect;
