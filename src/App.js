import React from 'react';
import './App.css';

import ArticleItem from "./components/article-item.component";

 

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      sliderValue: 10,
      products: require("./assets/products.json")
    }
  }

  increaseOrDecrease=(amount,operation) => {
    if(operation==="increase"){
      return ++amount
    }
    else{
      if(amount>1){
        return --amount
      }
      else{
        return amount;
      }
    } 
    
  }
 
  changeAmount= (idToFind, operation) => {
    const foundItem = this.state.products.find(item => item.productId===idToFind);
    if(foundItem.amount){
      console.log(this.state)
      this.setState(prev =>({...prev,
        products: 
        prev.products.map(item => {
          if(item.productId===idToFind){
            return {
              ...item,
              amount: this.increaseOrDecrease(item.amount,operation)
            }
          }
          else{
            return {
              ...item
            }
          }
        }) 
      }))
    }
    else{
      this.setState(prev =>({...prev,
        products: 
        prev.products.map(item => {
          if(item.productId===idToFind){
            return {
              ...item,
              amount: 2
            }
          }
          else{
            return {
              ...item
            }
          }
        }) 
      }));
    };
   
  }
  
  handleSliderChange= e => {
  this.setState({sliderValue: e.target.value})
}


  
  render(){ 
    return (
      <div>
        <div className="slidecontainer">
        <input type="range" min="1" max="100" value={this.state.sliderValue} className="slider" onInput={this.handleSliderChange} />
      </div>
        {
      this.state.products.slice(0,this.state.sliderValue).map((item,index) =>
       <ArticleItem  key={Math.random()} product={item} changeAmount={this.changeAmount} index={index}/>
      )
      }
    </div>
 )
    }
}

export default App;
