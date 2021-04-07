const getGeolocation = () => {
  console.log('geolocation module! 📦')

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('geolocation:', position.coords.latitude, position.coords.longitude)
    })
  }
}

export default getGeolocation