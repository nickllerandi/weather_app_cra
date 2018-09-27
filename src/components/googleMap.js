import React, {Component} from "react";
const GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = 'AIzaSyD936p5XNK8CqlIownpE_lzDCUi1elxMAg';

class GoogleMap extends Component {

    componentDidMount() {
        GoogleMapsLoader.load((google) => {
            new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            });
        });
    }

    render() {
        return (
            <div ref="map" />
        )
    }
}

export default GoogleMap;


