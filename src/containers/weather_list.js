import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    renderWeather = (cityData) => {
        const name = city.data.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const humids = cityData.list.map(weather => weather.main.pressure)
        const pressures = cityData.list.map(weather => weather.main.humidity)


        return(
            <tr key={name}>
                <td><GoogleMap/></td>
                 <td><Chart color='red' data={temps}/> </td>
                <td><Chart color='green' data={humids}/> </td>
                <td><Chart color='black' data={pressures}/> </td> 
            </tr>
        )
    }

    render(){
        console.log(this.props.weather)
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>CITY</th>
                        <th>TEMPERATURE (K)</th>
                        <th>PRESSURE (hPa)</th>
                        <th>HUMIDITY (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return{ weather }
}

export default connect(mapStateToProps)(WeatherList)