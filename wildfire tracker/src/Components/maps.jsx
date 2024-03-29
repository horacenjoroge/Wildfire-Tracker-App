import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'


const maps = ({ center ,zoom }) => {
  return (
    <div className='map'>
        <GoogleMapReact
              bootstrapURLKeys={{
                  key: 'AIzaSyBXWxdJD0YQnwxT81Mq4KkdD6ZJkm8BceY'
                }}
                  defaultCenter = {center}
                  defaultZoom = {zoom}

                
        >

        <LocationMarker lat={center.lat} lng={center.lng}/>
        </GoogleMapReact>

      
    </div>
  )
}

maps.defaultProps={
    center:{
        lat:42.3265,
        lng:-122.8756
    },
    zoom:6
}
export default maps
