import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1>hello worlds</h1>;
}

function Logo(props)  {
  const userPic = <img src={logo} />;
  return userPic;
}

function App(props) {

  return (
    <div>
  <Header/>
  <h1>{props.title}</h1>
   <Logo/>
  </div>
  );
}

export default App;
