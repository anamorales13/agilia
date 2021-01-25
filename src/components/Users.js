import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import ReactPaginate from 'react-paginate';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

class Users extends Component {

    state = {
        users: [],
        pages: "",
        status: "",
        userPerPage: 6,
        currentPage: 0,
        offset: 0,
        elements: [],
        open: false
    }




    constructor(props) {
        super(props);
        this.getUser();

    }

    getUser = () => {
        var pages = this.state.currentPage + 1;

        axios.get('https://reqres.in/api/users?page=' + pages)
            .then(res => {
                this.setState({
                    users: res.data.data,
                    pages: res.data.total_pages,
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

    openModal = (id) => {
        this.setState({ open: true, destino: id });

    }
    onCloseModal = () => { this.setState({ open: false }); }


    handlePageClick = users => {


        const selectedPage = users.selected;
        const offset = selectedPage * this.state.userPerPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset

        }, () =>
            this.getUser());



    }

    delete = (body) => {
        console.log("body" + body);
        axios.delete('https://reqres.in/api/users/' + body)
            .then(res => {
                this.setState({
                    status: 'sucess'
                })
            })
    }

   edituser=(body)=>{
    axios.put('https://reqres.in/api/users/' + body)
    .then(res => {
        this.setState({
            status: 'sucess'
        })
    })
   }

    render() {

        let paginationElement;

        if (this.state.pages > 1) {
            paginationElement = (
                <ReactPaginate
                    previousLabel={"← Anterior"}
                    nextLabel={"Siguiente →"}
                    breakLabel={<span className="gap">...</span>}
                    pageCount={this.state.pages}
                    onPageChange={this.handlePageClick}
                    forcePage={this.state.currentPage}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-link"}
                    previousClassName={"page-link"}
                    previousLinkClassName={"page-item"}
                    nextClassName={"page-link"}
                    nextLinkClassName={"page-item"}
                    disabledClassName={"disabled"}
                    activeClassName={"page-item active"}
                    activeLinkClassName={"page-link"}
                />
            )
        }

        var listarusers = this.state.users.map((user) => {
            return (

                <Card className="card-root">
                    <CardActionArea>
                        <img src={user.avatar} />
                        <hr />
                        <CardContent>
                            <div className="group-nombre">
                                <h3 className="card-nombre">{user.first_name + " " + user.last_name}</h3>
                                <h3>{user.email}</h3>

                            </div>
                            <button className="btn-delete" onClick={() => { if (window.confirm('\n' + '¿Estás seguro de eliminar el usuario ' + user.first_name + " " + user.last_name + "?")) this.delete(user.id); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                          
                            <div style={{marginTop:'5px'}}>
                                <form>
                                    <input placeholder="Email" ref={this.emailRef} />
                                    <button style={{backgroundColor:'green', color:'white', fontWeight:'bold'}}  onClick={() => { if (window.confirm('\n' + '¿Estás seguro de editar el usuario ' + user.first_name + " " + user.last_name + "?")) this.edituser(user.id); }}>EDIT</button>
                                </form>
                            </div>

                        </CardContent>

                    </CardActionArea>

                </Card>
            )
        })

        return (

            <div>
                <h2></h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    {listarusers}

                </div>

                {paginationElement}
               

            </div>
        );
    }
}

export default Users;