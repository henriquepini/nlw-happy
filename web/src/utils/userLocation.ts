function getLocation() {
  if (navigator.geolocation) {
    const pos = navigator.geolocation.getCurrentPosition;

    console.log(pos);
  }
}

export default getLocation;