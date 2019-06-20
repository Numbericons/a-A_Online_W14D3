import React from 'react';
import { Link } from 'react-router-dom'


const Greeting = (props) => {
    let user = props.user;

    if (user) {
        return <div>
                    <h1>Hello, { user.username }</h1>
                    <button onClick={props.logout}>Logout</button>
            </div>
    } else {
        return <div>
            
            <Link to='/signup'>Sign Up</Link>
            <br/>
            <Link to='/login'>Log In</Link>
            </div>
    }
}

export default Greeting;

