import React, {Component} from 'react';
import axios from 'axios';

class User extends Component{

    state={
        users:[],
        pages:"",
        status:""
    }

    constructor(props){
        super(props);
        this.getUser();

    }

    getUser=()=>{
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                this.setState({
                    users: res.data.data, 
                    pages: res.data.pages,
                    status: 'sucess',

                });

            })
            .catch(err => {
                this.setState({
                    users: {},
                    status: 'failed'
                });
            });
    }

    render(){
        return(

        <div>
            <h1>Hola</h1>
            <h2>{this.state.users.length}</h2>
        </div>
        );
    }
}

export default User;