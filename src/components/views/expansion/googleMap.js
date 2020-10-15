import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Button from '@material-ui/core/Button';

const array = [
    {
        id: 1, 
        location: {lat: 41.3954, lng: 2.162, __typename: "Location"}
    },
    {
        id: 2,
        location: {lat: 41.3917, lng: 2.1649, __typename: "Location"}
    },
    {
        id: 3,
        location: {lat: 41.3773, lng: 2.1585, __typename: "Location"}
    },
    {
        id: 4,
        location: {lat: 41.3797, lng: 2.1682, __typename: "Location"}
    },
    {
        id: 5,
        location: {lat: 41.4055, lng: 2.1915, __typename: "Location"}
    },
    {
        id: 6,
        location: {lat: 41.4001, lng: 2.1813, __typename: "Location"}
    },
]

const MapContainer = ({ isAdding, getLocation }) => {

  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

  const footer = (
    <div className="footer">
      <div className="inner-footer">
      <span className="location-text">Choose location and press</span>
      <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
        Next
      </Button>
      </div>
    </div>
  );

  const mapStyles = () => {
    if (!isAdding) {
      return {
        marginTop: "-20px",
        height: "100%",
        width: "100%"
      }
    } else {
      return {
        marginTop: "-20px",
        height: "100%",
        width: "100%"
      }
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

     return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU'
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={13}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        >
          {
            array ?
            array.map(item => {
              return (
              <Marker 
              key={item.id}
              position={item.location}
              onClick={() => onSelect(item)}
              />
              )
            }) : null
          }
          {
            isAdding ? 
            <Marker
            position={currentPosition}
            ref={() => markerRef}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
          {
            selected.location ?
            (
              <InfoWindow
              position={selected.location}
              onCloseClick={() => setSelected({})}
            >
              <div className="infowindow">
                <p>{selected.title}</p>
                <img src={selected.image} className="small-image" alt="rental"/>
                <p>likes: {selected.price}</p>
                <p>location: {selected.sqm}</p>
                <p>Songs: {selected.bedrooms}</p>
              </div>
            </InfoWindow>
            ) : null
          }
        </GoogleMap>
      </LoadScript>
      {
        isAdding ?
        footer :
        null
      }
    </>
     )
  }
export default MapContainer;