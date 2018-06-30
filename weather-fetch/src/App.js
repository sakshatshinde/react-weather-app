import React from 'react';
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

//API key 
const API_KEY = "ba028c9c00722b1ebbf3115baddcc8e6";

class App extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
   
    //Weather Function
    getWeather = async (e) => {
        e.preventDefault();
        //the value of city & country is picked up from the form
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await API_CALL.json();
        if(city && country){
            console.log(data);
            this.setState({
                temperature: Math.round((data.main.temp) - 273) + ' C°',
                city: data.name,
                country: data.sys.country,
                humidity: (data.main.humidity) + ' %',
                description: data.weather[0].description,
                error: ''
            });
        }
        else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the correct values"
            });
        }
    }
    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Title/>
                                </div>

                                <div className="col-xs-7 form-container">
                                <Form getWeather={this.getWeather}/>
                                    <Weather 
                                    temperature = {this.state.temperature}
                                    city = {this.state.city}
                                    country = {this.state.country}
                                    humidity = {this.state.humidity}
                                    description = {this.state.description}
                                    error = {this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


                


export default App;