import React from "react";
import "./article-item.styles.scss";

import {ReactComponent as Ruble} from "../assets/ruble.svg";
import {ReactComponent as ShoppingCart} from "../assets/buy.svg";
import {ReactComponent as ArrowUp} from "../assets/up-arrow.svg";
import {ReactComponent as ArrowDown} from "../assets/down-arrow.svg";



class ArticleItem extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            btnName: "proKilogram"
        }
    }

    handleClick = e => {
        e.preventDefault();
        this.setState({btnName: e.target.value});
    }

    render(){
    const {product, changeAmount}  = this.props;
        return(
            <div className="article-container">
                <div className="firstColumn">
                    <a href="#">
                        <img src={require(`../assets/article-image.jpg`)} alt="#"/>
                    </a>
                </div>
                <div className="secondColumn">
                    <div className="secondColumn__code">Код: <span>{product.code}</span></div>
                    <div className="secondColumn__Title">{product.title}</div>
                    <div className="secondColumn__subTitle"><span className="criterion">Могут понадобиться: </span><span className="needs">{product.assocProducts}</span></div>
                </div>
                <div className="thirdColumn">
                    <div className="isInStock">Наличие</div>
                    <div>
                        <span className="cartClub">По карте <br/> клуба</span>
                        <span className="goldCartPrice">{this.state.btnName==="proKilogram" ? product.priceGoldAlt : product.priceGold}</span>
                        <span>
                            <Ruble className="ruble"/>
                        </span>
                    </div>
                    <div>
                        <span className="standartPrice">{this.state.btnName==="proKilogram" ? product.priceRetailAlt : product.priceRetail}</span>
                        <span>
                            <Ruble className="ruble"/>
                        </span>
                    </div>
                    <div>
                        <span className="priceRetail">
                            Можно купить за {product.priceRetail} балла
                        </span>
                    </div>
                    <div>
                        <button className={this.state.btnName==="proKilogram" ? "active" : "notActive"} value="proKilogram" onClick={this.handleClick}>За м. кв.</button>
                        <button className={this.state.btnName==="proPacking" ? "active" : "notActive"} value="proPacking" onClick={this.handleClick}>За упаковку</button>
                    </div>
                    <div className="oderComponent">
                        <input type="text" className="amount" value={product.amount ? product.amount : "1"} ></input>
                        <span className="arrows">
                            <ArrowUp className="arrowUp" onClick={() => {
                                changeAmount(product.productId,"increase")
                                }} />
                            <ArrowDown className="arrowDown" onClick={() => {
                                changeAmount(product.productId,"decrease")
                                }}  />
                        </span>
                        <button className="orderBtn"><ShoppingCart className="ShoppingCart" key={product.productId} />в корзину</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleItem;