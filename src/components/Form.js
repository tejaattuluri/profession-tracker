import React, { Component } from 'react'
import './form.css';

class Form extends Component {
    render() {
        return (        
            <div>
                {/* This is a form */}
                <form action="">
                    <div><input type="text" name="" id="" placeholder="username"/></div>
                    <div><input type="text" name="" id="" placeholder="password"/></div>
                    <div><input type="submit" value="submit"/></div>
                    <div><input type="submit" value="Forgot Password"/></div>
                    <div><input type="submit" value="Create new account"/></div>
                </form>
            </div>    
            );
    }
}

export default Form