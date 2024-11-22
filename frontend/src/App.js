import { useState } from "react";
import "./App.css";
import axios from "axios";

// login for patient
//signup for patient
function PLogin() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // api request start
    console.log(username);
    console.log(password);
    // api request end
    setusername('');
    setpassword('');

  };
  return (
    <>
      <div className="plogin">
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <input 
          value={password}
          type="password"
          placeholder="password"
          onChange={(e)=> setpassword(e.target.value)}></input>
          <button>submit</button>
        </form>
      </div>
    </>
  );
}
function PSignup() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // api request start
    console.log(username);
    console.log(password)
    // api request end
    setusername('');
    setpassword('');

  };
  return (
    <>
      <div className="psignup">

        <form onSubmit={handleSubmit}>
          <input
            value={username}
            type="text"
            placeholder="set username"
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <input 
          value={password}
          type="password"
          placeholder="set password"
          onChange={(e)=> setpassword(e.target.value)}></input>
          <button>submit</button>
        </form>
      </div>
    </>
  );
}

function PatientUser() {
  const [login, setlogin] = useState(1);

  return (
    <>
      <div className="rolebuttons">
        <button onClick={() => setlogin(0)}>Login</button>
        <button onClick={() => setlogin(1)}>Signup</button>
      </div>
      {!login ? <PLogin /> : <PSignup />}
    </>
  );
}

function DLogin() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // api request start
    console.log(username);
    console.log(password);
    // api request end
    setusername('');
    setpassword('');

  };
  return (
    <>
      <div className="dlogin">
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <input 
          value={password}
          type="password"
          placeholder="password"
          onChange={(e)=> setpassword(e.target.value)}></input>
          <button>submit</button>
        </form>
      </div>
    </>
  );
}
function DSignup() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // api request start
    console.log(username);
    console.log(password)
    // api request end
    setusername('');
    setpassword('');

  };
  return (
    <>
      <div className="dsignup">

        <form onSubmit={handleSubmit}>
          <input
            value={username}
            type="text"
            placeholder="set username"
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <input 
          value={password}
          type="password"
          placeholder="set password"
          onChange={(e)=> setpassword(e.target.value)}></input>
          <button>submit</button>
        </form>
      </div>
    </>
  );
}

function DoctorUser() {
  const [login, setlogin] = useState(1);

  return (
    <>
      <div className="rolebuttons">
        <button onClick={() => setlogin(0)}>Login</button>
        <button onClick={() => setlogin(1)}>Signup</button>
      </div>
      {!login ? <DLogin /> : <DSignup />}
    </>
  );
}

function RoleSelectionPage() {
  const [role, setRole] = useState(null);

  return (
    <div className="canvas">
      {role === null ? (
        <div className="roleselect">
          <h1>Are you a Doctor or a patient looking to book an appointment?</h1>
          <div className="rolebuttons">
            <button onClick={() => setRole(0)}>Doctor</button>
            <button onClick={() => setRole(1)}>Patient</button>
          </div>
        </div>
      ) : role === 1 ? (
        <PatientUser />
      ) : (
        <DoctorUser />
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <RoleSelectionPage />
    </>
  );
}

export default App;
