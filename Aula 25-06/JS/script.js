function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.914871499911904, lng: -49.084480919537626, titulo: 'Festitália', descricao: 'Descrição do Evento 1' },
        { lat: -26.859040379651635, lng: -49.09370582179066, titulo: 'O Circo Aquático', descricao: 'Descrição do Evento 2' },
        { lat: -26.91536691607652, lng: -49.084693704504964, titulo: 'BCX-2024', descricao: 'Descrição do Evento 3' },
        { lat: -26.809636405881523, lng: -49.08697839338789, titulo: 'Sunset Container British Beer', descricao: 'Descrição do Evento 4' },
        { lat: -26.897473191245023, lng: -49.07776710742246, titulo: 'TubaFest', descricao: 'Descrição do Evento 5' },
        { lat: -26.915313700582097, lng: -49.08469932223065, titulo: 'VII Prêmio Queijo Brasil', descricao: 'Descrição do Evento 6' },        
        { lat: -26.8989768964856, lng: -49.07568900538646, titulo: '2º Medieval in Norden', descricao: 'Descrição do Evento 7' },         
        { lat: -26.918363873168637, lng: -49.06808512220519, titulo: '26º FENATIB Festival Nacional de Teatro para Crianças e Jovens de Blumenau', descricao: 'Descrição do Evento 8' },         
        { lat: -26.91528990622592, lng: -49.08480186553958, titulo: 'Oktoberfest', descricao: 'Descrição do Evento 9' },        
        { lat: -26.921583123531374, lng: -49.063374649829925, titulo: 'Feira Brique de Blumenau', descricao: 'Descrição do Evento 10' },       
        { lat: -26.91152060396189, lng: -49.07144111096752, titulo: 'Dia Mundial do Rock', descricao: 'Descrição do Evento 11' },   
        { lat: -26.922002372328095, lng: -49.05881821958108, titulo: '3ª Temporada de Exposições do MAB – ano 2024', descricao: 'Descrição do Evento 12' }, 
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function (evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}