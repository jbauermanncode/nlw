//create map
const map = L.map('mapid').setView([-29.683651,-51.241673,13], 15);

// create and tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

// create and add maker
  map.on('click', (event) => {
      const lat = event.latlng.lat;
      const lng = event.latlng.lng;

      document.querySelector('[name=lat]').value = lat;
      document.querySelector('[name=lng]').value = lng;

      //remove icon
      marker && map.removeLayer(marker)

      // add icon layer
      marker = L.marker([lat, lng], {icon})
      .addTo(map)
  })

  // adicionar o campo de fotos
  function addPhotoField(){
      // pegar o container de fotos #images
      const container = document.querySelector('#images')
      // pegar o container para duplicar .new-image
      const fieldContainer = document.querySelector('.new-upload')
      // realizar o clone da última imagem adicionada.
      const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

      // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
      const input = newFieldContainer.children[0]

      if(input.value == ""){
          return
      }
      // limpar o campo antes de adicionar ao container de imagens
      input.value = ""

      // adicionar o clone ao container de #images 
      container.appendChild(newFieldContainer)
  }

  function deleteField(event){
      const span = event.currentTarget

      const fieldContainer = document.querySelectorAll(".new-upload")

      if(fieldContainer.length <=1){
          // limpar o valor do campo
          span.parentNode.children[0].value = ""
          return
      }

      // deletar o campo
      span.parentNode.remove();
  }

  // seleção do sim ou não
  function toggleSelect(event){

    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    // atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
  }

  function validate(event) {
      // validar se lat e lng estão preenchidos
      const needsLatAndLng = true;
      if(needsLatAndLng){
      event.preventDefault()
      alert('Selecione um ponto no mapa')
  }
}