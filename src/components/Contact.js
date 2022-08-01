import React, { Component } from 'react'
import './contact.css';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            profession:'',
            company:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputElement=this.handleInputElement.bind(this);
    }

    handleInputElement(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        const user={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            profession: this.state.profession,
            company: this.state.company
        }
        console.log(user);
        event.preventDefault(); //sometimes page will refresh after submit, this will avoid that
    }

    render() {        
        return (        
            <div className='contact'>
                {/* This is a form */}
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name="firstName" id="" value={this.state.firstName} onChange={this.handleInputElement} placeholder="First name"/></div>
                    <div><input type="text" name="lastName" id="" value={this.state.lastName} onChange={this.handleInputElement} placeholder="Last name"/></div>
                    <div><input type="text" name="email" id="" value={this.state.email} onChange={this.handleInputElement} placeholder="Email"/></div>
                    <div><input type="text" name="profession" id="" value={this.state.profession} onChange={this.handleInputElement} placeholder="Select profession"/></div>
                    <div><input type="text" name="company" id="" value={this.state.company} onChange={this.handleInputElement} placeholder="Company"/></div>
                    <div><input type="submit" value="submit"/></div>
                </form>
            </div>    
            );
    }
}

export default Contact;