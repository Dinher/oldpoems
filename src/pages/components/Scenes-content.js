import React, { Component } from 'react'

import IMAGES_LIST from '../../data/image-list.json';

function suffleArray(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default class Body extends Component {
  constructor(){
    super();
    /*
    let n  = 53;  //number photos in folder
    let arr = new Array(n);
    let popArr = (arr)=>{
      let temp = []
      for(let i = 0; i < arr.length;i++){
        temp[i] = i
      }
      return temp;
    }
    let images = popArr(arr);
    images = suffleArray(images);
    images = images.filter( (value, index) => {
      return index < 21;
    */
    var n = IMAGES_LIST.length;
    var keys = Object.keys(JSON.parse(JSON.stringify(IMAGES_LIST)));
    keys = suffleArray(keys);
    let images = []
    for (let i = 0; i < 24; i++){
      images.push(keys[i]);
    }

    this.state = {
      images: images
    }
  }

  render() {
    return (
      <div id="body_container">
        <ul id="img_container">
          {this.state.images.map(i=>
            <li>
              <img data-src="" src={require("../../../public/images/scenes/compressed/"+i+".jpg")} alt={IMAGES_LIST[i]}/>
              <p className="caption">{IMAGES_LIST[i].split(' - ')[0]}<strong>{IMAGES_LIST[i].split(' - ')[1]}</strong></p>
            </li>
          )}
        </ul>
        <h2 id="message">Hi, oldpoems.ink is currently under construction</h2>
      </div>
    )
  }
}
