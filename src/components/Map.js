import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
export class Map extends Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.aea192bfa4bcd913e5e8bda121e144d2&q&center=${this.props.cityData.Data.lat},${this.props.cityData.lon}&zoom=15`} rounded />
            </div>
        )
    }
}

export default Map
