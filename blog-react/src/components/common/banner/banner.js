import React, { Component } from "react"
import style from "./style.css";

// 引入轮播插件
import { Carousel } from 'antd';

const carouselImgs = [
    require('./banner_1.png'),
    require('./banner_2.png'),
    require('./banner_3.png'),
]
class Banner extends Component {
    constructor(props) {
        super(props);
        this.renderCarousel = this.renderCarousel.bind(this)
    }
    render() {
        return (
            <Carousel autoplay>
                {this.renderCarousel(carouselImgs)}
            </Carousel>
        )
    }

    // 循环轮播图
    renderCarousel(imgs) {
        return imgs.map((item, index) =>
            <div key={index} className={style.carouselContainer}>
                <img src={item} />
           </div>
        )
    }
}
export default Banner
