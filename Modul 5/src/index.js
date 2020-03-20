import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// const Hello = () =>{
//     return <p>hello</p>
// }
// const MyBio = () =>{
//     return(
//         <div className="MyBio">
//             <header className="App-header">
//                 <h2 id="MyBio">Biodata</h2>
//                 <img src={myPhoto} alt="" id="indah"/>
//                 <p>
//                     <table id="table" align="center" className="table table-bordered" cellpadding="10">
//                         <tr>
//                             <td>Nama</td><td>: Indah Wahyuningtyas</td>
//                         </tr>
//                         <tr>
//                             <td>NIM</td><td>: 1741720099</td>
//                         </tr>
//                         <tr>
//                             <td>Jurusan</td><td>: Teknologi Informasi</td>
//                         </tr>
//                         <tr>
//                             <td>Prodi</td><td>: DIV Teknik Informatika</td>
//                         </tr>
//                         <tr>
//                             <td>Kelas</td><td>: TI-3C</td>
//                         </tr>
//                         <tr>
//                             <td>Alamat</td><td>: Pasuruan</td>
//                         </tr>
//                     </table>
//                 </p>
//             </header>
//         </div>
//     );
// }

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(<MyBio/>, document.getElementById('root'));
