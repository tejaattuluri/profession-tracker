import React, { Component } from 'react';
import './Date.css';

class Date extends Component {
    render() {
        return (
            <div>
                <div class="dates">
                    <h1>Start Date  :27 June 2022</h1>
                    <h1>Days Elapsed:25</h1>
                    <h1>Due Date    :15 July 2022</h1>
                </div>
            </div>
        )
    }
}

export default Date;