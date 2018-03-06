load = () => {
    document.getElementById('find').addEventListener("click", findMe);
}

findMe = () => {

    let output = document.getElementById('map');

    output.innerHTML = (navigator.geolocation) ?
        "<p>Seu navegador suporta Geolocalização</p>" :
        "<p>Seu navegador não suporta Geolocalização</p>";


    localizacion = posicion => {
        let latitude = posicion.coords.latitude;
        let longitude = posicion.coords.longitude;
        const imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="
            + latitude + "," + longitude +
            "&size=600x300&markers=color:red%7C"
            + latitude + "," + longitude +
            "&key=AIzaSyC1KfDlEYcrTDF_F3Z2IsaXHmDRUF5_tQU";

        output.innerHTML = "<img src='" + imgURL + "'>";
    }

    error = () => {
        output.innerHTML = "<p>Não é possível obter sua localização</p>";
    }

    navigator.geolocation.getCurrentPosition(localizacion, error);
}

window.onload = load();