import React, { Component } from 'react'
import UserService from '../services';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: this.props.match.params._id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state._id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br><div className="content-wrapper">
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.user.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> User Email ID: </label>
                            <div> { this.state.user.emailId }</div>
                        </div>
                    </div>

                </div>
            </div></div>
        )
    }
}

export default ViewUserComponent