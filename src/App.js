import React, { Component } from 'react';
import Logo from './components/Logo/logo';
import Image from './components/Image-linkform/imagelink';
import Rank from './components/Rank/rank';
import Part from './components/praticejs';
import FaceUrl from './components/FaceUrl/FaceUrl';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'df94abe293b0409dae64057d7a9baad1'
 });

class App extends Component {
  constructor(){
    super();
    this.state ={
      input:'',
      ImageUrl:'',
      box: {},
    }
  }
   
  
  faceLocation = (data) => {
   const face = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputimage');
   const width = Number(image.width);
   const height = Number(image.height);
   console.log(face);
   return{
     leftCol: face.left_col * width,
     topRow: face.top_row * height,
     rightCol : width - (face.right_col * width),
     bottomRow : height - (face.bottom_row* height)
     
   }
   
  }

  displayBox = (box) => {
    this.setState({box: box})
    console.log(box);
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onSubmit = () => {

    this.setState({ImageUrl: this.state.input})

    app.models.predict

    ( Clarifai.FACE_DETECT_MODEL, 

    this.state.input )
    .then(response=>this.displayBox(this.faceLocation(response))
    .catch(err => console.log(err))
    );    
  }

 
  render(){
    return (
      <div className="App font">
        <Part/>
        
          <Logo/>
          <Rank />
          <Image onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
          <FaceUrl box={this.state.box} ImageUrl={this.state.ImageUrl} />

      </div>
    )};
}

export default App;
