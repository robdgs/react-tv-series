import { useState } from 'react';
import CardList from './components/CardList';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import SeriesList from './components/SeriesList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
     <Navbar/>
      <CardList
        title="Top series"
        BASE_URL='https://edgemony-backend.herokuapp.com/series'
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        modalVisibility={onHandleModal}
      />
        <h1 className="SeriesList__title" >Last Added</h1>
      <SeriesList/>
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
   <Footer/>
    </div>
  );
}

export default App;