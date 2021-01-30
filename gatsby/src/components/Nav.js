import React from 'react';
import { Link } from "gatsby"

export default function Nav() {
return (

    <ul>
        <li>
            <Link to="/FirstPage">FirstPage</Link>
        </li>
        <li>
            <Link to="/SecondPage">SecondPage</Link>
        </li>
    </ul>
)

}