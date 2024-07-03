function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.9170, lng: -49.0715, titulo: 'Festitália', descricao: 'Descrição do Evento 1' },
        { lat: -26.9187, lng: -49.0655, titulo: 'O Circo Aquático', descricao: 'Descrição do Evento 2' },
        { lat: -26.9222, lng: -49.0625, titulo: 'BCX-2024', descricao: 'Descrição do Evento 3' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 4', descricao: 'Descrição do Evento 4' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 5', descricao: 'Descrição do Evento 5' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 6', descricao: 'Descrição do Evento 6' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 7', descricao: 'Descrição do Evento 7' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 8', descricao: 'Descrição do Evento 8' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 9', descricao: 'Descrição do Evento 9' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 10', descricao: 'Descrição do Evento 10' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 11', descricao: 'Descrição do Evento 11' },
        { lat: -26.9222, lng: -49.0625, titulo: 'Evento 12', descricao: 'Descrição do Evento 12' },

    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}