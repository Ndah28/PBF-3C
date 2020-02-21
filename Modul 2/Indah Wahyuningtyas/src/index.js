import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myPhoto from './indah.jpg';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hello = () =>{
    return <p>hello</p>
}

const MyBio = () =>{
    return(
        <div className="MyBio">
            <header className="App-header">
                <h2 id="MyBio">Biodata</h2>
                <img src={myPhoto} alt="" id="indah"/>
                <p>
                    <table id="table" align="center" className="table table-bordered" cellpadding="10">
                        <tr>
                            <td>Nama</td><td>: Indah Wahyuningtyas</td>
                        </tr>
                        <tr>
                            <td>NIM</td><td>: 1741720099</td>
                        </tr>
                        <tr>
                            <td>Jurusan</td><td>: Teknologi Informasi</td>
                        </tr>
                        <tr>
                            <td>Prodi</td><td>: DIV Teknik Informatika</td>
                        </tr>
                        <tr>
                            <td>Kelas</td><td>: TI-3C</td>
                        </tr>
                        <tr>
                            <td>Alamat</td><td>: Pasuruan</td>
                        </tr>
                    </table>
                </p>
            </header>
        </div>
    );
}

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(<p> hello word</p>, document.getElementById('root'));
ReactDOM.render(<MyBio/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
