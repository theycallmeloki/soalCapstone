import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Signup  extends React.Component {
  render(){

    return (
      <div className="signupPage">
        <div className="papierlogo"> 
          <p className="loginpapier">Papier</p>
        </div>
        <FormItem className="singupform">
        
            <Input type="email" placeholder="Email" /> 
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="Mobile" />
            <Input type="Address" placeholder="Address" className="addresspad"/>
            <Input type="pincode" placeholder="Pincode" />
            <p className="askingSK">What do you want to do?</p>
            <Checkbox>
             Seller
            </Checkbox>
            <Checkbox>
             Keeper
            </Checkbox>
        </FormItem>
        <FormItem >
          <Button type="primary" className="regester"> <Link to="/BookSearch">Regester </Link></Button>
          
        </FormItem>
      </div>
    );
  }
}


export default Signup;