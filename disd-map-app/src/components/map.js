import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = () => {
  const loader = new Loader({
      apiKey: "API_KEY",
      version: "weekly",

    });

    loader.load().then(() => {
      let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })

    });

  // var script = document.createElement('script');
  // script.src =
  //   'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
  // script.async = true;

  return (
    <div className='google-map'>
      <div id='map'></div>
    </div>
  );
};

export default GoogleMap;
