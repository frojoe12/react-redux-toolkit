import React, {useState} from 'react';
import { createApi } from '@reduxjs/toolkit/dist/query';
import './App.css';
import { Counter } from './features/counter/Counter'


function App() {

  const [numDogs, setNumDogs] = useState(10)

  const data = [{id:"dog-34345",name:"Terrier",image: {url:""}},{id:"dog-34346",name:"Alsation",image: {url:""}}]

  const myObject={
    users:[
      {
        name:"Joe",
        age:21,
        id:"dsioufdh"
      },
      {
        name:"Steve",
        age:36,
        id:"d098dfg98"
      }
    ],
    appVersion:"1.12"
  }
  const { users, appVersion } = myObject
  return (
    <div className="App">
      <Counter />
      <div>
      <ul>
      {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
      </div>
      <span>Version: {appVersion}</span>
      <hr />
      <div><p>Dogs to fetch:</p><select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select></div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead><tr><th>Name</th><th>Picture</th></tr></thead>
          <tbody>
            {data.map(breed=>(<tr key={breed.id}>
                <td>{breed.name}</td>
                <td><img alt={breed.name} src={breed.image.url} height="250" /></td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
