import React from 'react';

const Form = props => (
            <form onSubmit = {props.getWeather}>

               { /*The property 'name' is passed onto the getWeather () -> const city & country */ }
                <input type = 'text' name = 'city' placeholder = "City.." />
                <input type = 'text' name = 'country' placeholder = "Country.." />
                <button type = "submit">
                    Get Weather
                </button>
                
            </form>
);

export default Form;