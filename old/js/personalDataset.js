var places = [

];

function init(){
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
}

init();
/*
EASTER BREAK
Switzerland
Basel - A
Geneva - T
Greece
Athens - A
Italy
Rome - A
Florence - T
Pisa - T
Genoa - T
Bergamo - T/A

ROLAND GARROS
France
Paris A/A

JULHO (FAMILIA)
Netherlands
Amsterdam - A
Belgium
Brussels - B
Portugal
Lisbon - A/A
Cascais - T/T

SUMMER BREAK
	Poland
Krakow - A
Czech Republic
Prague - T/B
Austria
Vienna - B
Slovakia
Bratislava - T/T
 Hungary
Budapest - B
Croatia
Split - B
Hvar - BALSA
Dubrovnik - CARRO
Zadar - CARRO
Zagreb - B/CARRO
Germany
Munich - B/A

LAST EUROTRIP SPAIN
Barcelona - A/A/T
Valencia - T
Madrid - T
Zaragoza - T

LOCAL TRIPS
England
Liverpool
Birkenhead - T
Ormskirk - T
Manchester  - 14T
York - B/B
London - 7 T / 3A
Canterbury - T/T
Edinburgh - A/T*/
