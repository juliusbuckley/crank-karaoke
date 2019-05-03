import React from 'react';
import withPosts from 'nextein/posts';
import Navigation from '../components/Navigation'


const data = {
    title: 'About',
    header: "Hi, I'm Ebrima.",
  };

const content = `
Chicken & Mumbo Sauce is an event-based collective that specializes in producing unique and 
authentic experiences and content that reflect the ever-growing 
creative community and culture of the DMV onto the world.`

export default withPosts(() => {
    return(
        <div class="about-container">
            <Navigation />
            <br></br>
            <br></br>
            <img src="static/img/mumbo.jpg" class="flyerimage" />
            <div class="about-section">
                {content} 
                <br></br>
                <img src="static/img/dylan_the_gypsy.jpg" class="aboutcolumn" />
                <img src="static/img/newimpressionz.png" class="aboutcolumn" />
                <img src="static/img/fresco.jpg" class="aboutcolumn" />
            </div>
        </div>
    )
})
