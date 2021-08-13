import React, { useState } from 'react';
import axios from 'axios'
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { render } from '@testing-library/react';

function App() {
    const [pizzas, setPizzas] = useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
                console.log(data);
                setPizzas(data.pizzas)
            })
            // fetch('http://localhost:3000/db.json')
            //     .then((resp) => resp.json())
            //     .then((json) => {
            //         setPizzas(json.pizzas)
            //     })
    }, [])
    console.log(pizzas);
    return ( <
        div className = "wrapper" >
        <
        Header / >
        <
        div className = "content" >
        <
        Route path = "/"
        render = {
            () => < Home items = { pizzas }
            /> }
            exact / >
            <
            Route path = "/cart"
            component = { Cart }
            exact / >
            <
            /div> < /
            div >
        );
    }

    export default App;