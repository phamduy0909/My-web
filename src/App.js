import './App.css';
import Header from './Index/Header.jsx'
import MainSidebar from './Index/MainSidebar';
import Main from './Index/Main';
import Footer from './Index/Footer';
import ControlSidebar from './Index/ControlSidebar';

function App() {
  return (
    <div>
      <div className="wrapper">
          <Header></Header>
          <MainSidebar></MainSidebar>
          <Main></Main>
          <Footer></Footer>
          <ControlSidebar></ControlSidebar>
      </div>
    </div>
  );
}

export default App;
