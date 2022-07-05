import React, { Component } from 'react'
import UserService from '../services';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            _id: this.props.match.params._id,
            user_name: '',
            password: '',
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state._id === '_add'){
            return
        }else{
            UserService.getUserById(this.state._id).then( (res) =>{
                let user = res.data;
                this.setState({
                    user_name: user.user_name,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailId : user.emailId
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {user_name: this.state.user_name, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state._id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(user, this.state._id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    changeUserNameHandler= (event) => {
        this.setState({user_name: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state._id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
            <br></br>
            <div className="content-wrapper">
            <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
            {
                this.getTitle()
            }
            <div className = "card-body">
            <form>
            <div className = "form-group">
            <label> user Name: </label>
            <input placeholder="user Name" name="user_name" className="form-control" 
            value={this.state.user_name} onChange={this.changeUserNameHandler}/>
            </div>
            <div className = "form-group">
            <label> password: </label>
            <input placeholder="password" name="password" className="form-control" 
            value={this.state.password} onChange={this.changePasswordHandler}/>
            </div>
            <div className = "form-group">
            <label> First Name: </label>
            <input placeholder="First Name" name="firstName" className="form-control" 
            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
            </div>
            <div className = "form-group">
            <label> Last Name: </label>
            <input placeholder="Last Name" name="lastName" className="form-control" 
            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
            </div>
            <div className = "form-group">
            <label> Email Id: </label>
            <input placeholder="Email Address" name="emailId" className="form-control" 
            value={this.state.emailId} onChange={this.changeEmailHandler}/>
            </div>

            <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
            </div>
            </div>
            </div>

            </div>
            </div>
            )
    }
}
export default CreateUserComponent
