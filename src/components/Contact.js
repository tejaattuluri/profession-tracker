import React, { Component } from 'react'
import './contact.css';

class Contact extends Component {
    render() {
        return (        
            <div className='contact'>
                {/* This is a form */}
                <form action="">
                    <div><input type="text" name="" id="" placeholder="First name"/></div>
                    <div><input type="text" name="" id="" placeholder="Last name"/></div>
                    <div><input type="text" name="" id="" placeholder="Email"/></div>
                    <div><input type="text" name="" id="" placeholder="Select profession"/></div>
                    <div><input type="text" name="" id="" placeholder="Company"/></div>
                    <div><input type="submit" value="submit"/></div>
                </form>
            </div>    
            );
    }
}

export default Contact;