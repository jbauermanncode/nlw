const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-29.683651,-51.241673,13], 15);

// create and tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchors: [170,2]
})




// create and add maker
    L.marker([-29.683651,-51.241673,13], {icon})
    .addTo(map)

    /* image gallery */

    function selectImage(event) {
        const button = event.currentTarget

        
        

        // remover todas classes .active
        const buttons = document.querySelectorAll(".images  button")
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button) {
            button.classList.remove("active")
        }
        
        // selecionar a image clicada
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

        // atualizar o container da image
        imageContainer.src = image.src

        // adicionar a classe .active para este botão
        button.classList.add("active")
    }
    
    