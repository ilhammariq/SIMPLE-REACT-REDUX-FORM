import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeMahasiswa from './views/Mahasiswa/HomeMahasiswa';
import CreateMahasiswa from './views/Mahasiswa/CreateMahasiswa';
import EditMahasiswa from './views/Mahasiswa/EditMahasiswa';
import DetailMahasiswa from './views/Mahasiswa/DetailMahasiswa';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='mt-5'>
          <div className='text-center mb-5'>
            <h2>PANDA CODING REACT JS</h2>
          </div>
          <BrowserRouter>
            <Switch>
              <Route path='/SIMPLE-CRUD-REACT-REDUX-FORM/' component={HomeMahasiswa} exact />
              <Route path='/create' component={CreateMahasiswa} />
              <Route path='/detail/:id' component={DetailMahasiswa} />
              <Route path='/edit/:id' component={EditMahasiswa} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

