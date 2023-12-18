document.addEventListener("DOMContentLoaded", function () {

  if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      navigator.geolocation.watchPosition(onSuccess, onError);
  } else {
      alert("Геолокація не підтримується в вашому браузері");
  }

  function onSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const locationInfo = document.getElementById("locationInfo");
      const latitudeElement = document.querySelector("#latitude span");
      const longitudeElement = document.querySelector("#longitude span");

      latitudeElement.textContent = latitude.toFixed(6);
      longitudeElement.textContent = longitude.toFixed(6);

      locationInfo.classList.remove("hidden");
  }

  function onError(error) {
      console.error("Помилка отримання геолокації:", error.message);
  }
});