import React from 'react';
export default class Slider extends React.Component{
    render(){
        return(
            <div className="sss">
                <div className="arrow">
                    <span onClick={()=>{this.props.go(-1)}} className="btn arrow-left">&lt;</span>
                    <span onClick={()=>{this.props.go(1)}} className="btn arrow-right">&gt;</span>
                </div>
                <div className="dots">
                    {
                        this.props.images.map((item,index)=>{
                            return <span key={index} className={"dot "+((this.props.pos==index||index==0&&this.props.pos==3)?'active':'')} onClick={()=>{this.props.go(index-this.props.pos)}}></span>
                        })
                    }
                </div>
            </div>
        )
    }
}