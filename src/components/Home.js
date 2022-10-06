import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahasiswa from './Mahasiswa';
import {Link, useNavigate} from 'react-router-dom';


function Home(){

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setitem('Name',name);
        localStorage.setitem('Age',age);
        localStorage.setitem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Mahasiswa.map(function(e){
            return e.id
        }).indexOf(id);

        Mahasiswa.splice(index,1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped borederd hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Nama 
                            </th>
                            <th>
                                Umur
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Mahasiswa && Mahasiswa.length > 0
                            ?
                            Mahasiswa.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data avaible"
                        }
                    </tbody>

                </Table>
                        <br>
                        </br>
                        <Link className='d-grid gap-2' to="/create">
                            <Button size="1g">Create</Button>
                        </Link>
            </div>
        </Fragment>
    )
}

export default Home;