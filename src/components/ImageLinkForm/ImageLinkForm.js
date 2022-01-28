import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit }) => {
    return(
      <div className="ma4 mt0">
        <p className="f3">
            {'Image Brain Dectector'}
        </p>
        <div className="center">
        <div className="form center pa4 br3 shadow-5">
            <input className="f5 pa2 w-50" type='text' accept="image/png, image/gif, image/jpeg"  onChange={ onInputChange }/>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
            onClick={onButtonSubmit}>Detect</button>
        </div>
        </div>
      </div>
    );
}


export default ImageLinkForm;