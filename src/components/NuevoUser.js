import React, { Component } from 'react';

import axios from 'axios';

class NuevoUser extends Component {

  state={
      first_name:"",
      last_name:"",
      email:"",
      user:{},
      status:''
  }

  nombreRef=React.createRef();
  apellidoRef=React.createRef();
  emailRef=React.createRef();

  
    
    

    addUser=() =>{
        
       
        var body={  
            first_name: this.nombreRef.current.value,
            last_name: this.apellidoRef.current.value,
            email: this.emailRef.current.value,
            
        };
    
            console.log("body" + body);

            axios.post('https://reqres.in/api/users', body)
                .then(res => {
                    this.setState({
                        user:res.data.data,
                        status:'done'
                    })
                  
                })
                
            
            
        
    }

    render() {
        
        //comprobamos si redirect ==true
      

        return (

            <aside id="sidebar">
            
                <div  className="sidebar-item">
                    <h3 style={{fontSize:'45px', color:'grey', textAlign:'center'}}>Nuevo contacto</h3>
                    <p style={{fontSize:'22px', textAlign:'center'}}> Añade nuevos contactos a tu red</p>
                    <form onSubmit={this.addUser} className="form-nuevo">
                        <input type="text" name="first_name" placeholder="First name"  ref={this.nombreRef} />
                        <input type="text" name="last_name"  placeholder="Last name"  ref={this.apellidoRef}/>
                        <input type="text" name="email" placeholder="Email" ref={this.emailRef}/>
                        <input type="submit" name="submit" value="ADD"   onClick={this.addUser} style={{backgroundColor:'green', color:'white', fontWeight:'bold', height:'40px'}}/>
                    </form>
                
                </div>
                {this.state.status === 'done' &&
                <div>
                <p>Usuarios guardado con exito</p>
                </div>


        }

            </aside>
        );
    }
}

export default NuevoUser;