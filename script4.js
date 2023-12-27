/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 34.04924594193164, lng: -118.24104309082031 },
    });
    const trafficLayer = new google.maps.TrafficLayer();
  
    trafficLayer.setMap(map);
  }
  
  window.initMap = initMap;

  
  function searchLocation() {
    const input = document.getElementById("pac-input");
    const geocoder = new google.maps.Geocoder();
  
    geocoder.geocode({ address: input.value }, function (results, status) {
      if (status === "OK") {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: results[0].geometry.location,
        });
  
        const marker = new google.maps.Marker({
          map: map,
          title: results[0].formatted_address,
          position: results[0].geometry.location,
        });
  
        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  