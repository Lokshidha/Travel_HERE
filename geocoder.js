var geocoder = platform.getSearchService();

 function geocodeAndSearch(){

     let geocoderParams = {
         q : 'Nakkeeran'
     }

     function onResult(result){
         console.log(result);
     }

     geocoder.geocode(geocoderParams,onResult,alert);

 }

 geocodeAndSearch();