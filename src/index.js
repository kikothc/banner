import React from 'react';
import {render} from 'react-dom';
import Slider from './components/Slider'
require('./components/Slider.css');
const images=[
    {src:require('./images/1.jpg'),alt:'1'},
    {src:require('./images/2.jpg'),alt:'2'},
    {src:require('./images/3.jpg'),alt:'3'}
]
render(<Slider
    images={images}
    autoplay={true}
    speed={1}
    delay={2}
    />,app)
