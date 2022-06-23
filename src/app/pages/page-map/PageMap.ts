import './page-map.scss';
import {Page} from '../../lib/Page';
import * as L from 'leaflet';

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
        <div class="leaflet-area"></div>
    </div>
</div>
`;

const osmUrl = 
// "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
   'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

class PageMap extends Page{
    public map_area: HTMLElement;
    public markup: string;
    public map: any;
    public osmLayer: any;

    constructor(){
        super("page-map");
        this.map_area = null;
        this.markup = page_map_markup;
        this.map = null;
        this.osmLayer = null;
    }

    Init(){
        let instance = this;
        let page_map = document.getElementById(this.id);

        if ( page_map === null ){
            document.body.insertAdjacentHTML('beforeend', this.markup);
            this.page = document.getElementById(this.id);

            instance.osmLayer = new L.TileLayer(osmUrl);
            instance.map_area = document.querySelector("#page-map .leaflet-area");
            let map = new L.Map(instance.map_area);
            instance.map = map;
            setTimeout(function(){ 
                instance.map.setView(new L.LatLng(51.147990,14.997320), 14);
            },200);
            instance.map.addLayer(instance.osmLayer);  
        }
    }


    Show(){
        this.page = document.getElementById("page-map");
        if ( this.page === null ){
            this.Init();
            this.SetCallbacks();
        }
    }

    SetCallbacks(){
        let instance = this;
        let logout_button = document.getElementById("page-map-button-logout");
        logout_button.addEventListener("click",function(e){
            const page_map = document.getElementById("page-map");
            page_map.parentElement.removeChild(page_map);
    
            instance.RemoveFromDOM();
            instance.app.pageLogin.Show();
        });

            // Get the latitude and longitue with a mouse click
        instance.map.on('click', function(e) {        
            let latitude = e.latlng.lat;
            let longitude = e.latlng.lng;
            //alert("you clicked on lat="+latitude+" and lng="+longitude);

            let address_url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            // AJAX call
            fetch(address_url)
            .then(response => response.json())
            .then(data => {
                var addressLatLng = [latitude, longitude];  
                let address = data.display_name;
                var marker = new L.marker(addressLatLng).addTo(instance.map);
                marker.bindPopup(address).openPopup();

            })
            .catch(error => console.error(error));        
        });
    }
}

export {PageMap};
