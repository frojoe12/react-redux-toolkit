import './App.css';
import { Counter } from './features/counter/Counter'

function App() {
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
    </div>
  );
}

export default App;
