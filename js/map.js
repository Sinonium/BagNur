DG.then(function () {
    map = DG.map('map', {
        center: [42.844406, 74.603390],
        zoom: 18
    });
    DG.marker([42.844556, 74.603395]).addTo(map);
});