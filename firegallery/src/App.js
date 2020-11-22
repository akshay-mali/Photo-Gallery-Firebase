import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForms from './components/UploadForms';
import {useState} from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForms />
      <ImageGrid setSelectedImage = {setSelectedImage}/>
      {selectedImage && <Modal selectedImage = {selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
