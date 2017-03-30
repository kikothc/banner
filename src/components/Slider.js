import React from 'react';
import $ from 'jquery';
import SlierList from './SlierList.js'
export default class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state={pos:0}
    }
    go(step){
        let pos=this.state.pos+step
        if(pos==this.props.images.length+1){
            this.sliders.css({left:0})
            pos=1
        }
        if(pos==-1){
            this.sliders.css({left:this.props.images.length*-500})
            pos=this.props.images.length-1
        }
        this.setState({pos});
        this.sliders.animate({left:pos*-500},1000)
    }
    play(){
        this.$timer=setInterval(()=>{
            this.go(1)
        },2000)
    }
    componentDidMount(){
        this.sliders=$('.sliders');
        if(this.props.autoplay){
            this.play()
        }
    }
    render(){
        let len=this.props.images.length;
        let style={
            width:500*(len+1)+'px'
        }
        return(
            <div className="slider-wrapper" onMouseOver={()=>{clearInterval(this.$timer)}}
                onMouseOut={()=>this.play()}>
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map((item,index)=>{
                        return   <li key={index} className="slider"><img src={item.src} alt={item.alt}/></li>
                     })
                    }
                    <li className="slider"><img src={this.props.images[0].src} alt={this.props.images[0].alt}/></li>
                </ul>  <SlierList images={this.props.images} go={this.go.bind(this)} play={
            this.play.bind(this)} pos={this.state.pos}
                ></SlierList>
            </div>





        )
    }
}