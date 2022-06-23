const page_map_markup = `
<div id="page-map" class="page">
    <div id="page-map-header">
        <div class="title">Vorlesung03 Map und SCSS</div>
        <div class="settings-button"></div>

        <div id="page-map-settings-dropdown">
            <button id="page-map-settings-button" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul class="dropdown-menu" aria-labelledby="page-map-settings-button">
            <li><a class="dropdown-item" id="page-map-button-logout" href="#">Logout</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </div>
    <div id="page-map-area">
        <div class="area"></div>
    </div>
</div>
`;

const osmUrl = 
 "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
//   'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

function show_page_map(){
    document.body.insertAdjacentHTML("beforeend",page_map_markup);

    let osmLayer = new L.TileLayer(osmUrl);
    let maparea = document.querySelector("#page-map-area .area");
    let map = new L.Map(maparea);
    setTimeout(function(){ 
        map.setView(new L.LatLng(51.147990,14.997320), 14);
    },200);
    map.addLayer(osmLayer);  

    let logout_button = document.getElementById("page-map-button-logout");
    logout_button.addEventListener("click",function(e){
        const page_map = document.getElementById("page-map");
        page_map.parentElement.removeChild(page_map);

        show_page_login();
    })

}
