import React from 'react'
import './TravelBlog.css';
import header from "./images/header.jpg"
import safetravel from "./images/safetravel.jpg"
import canada from "./images/Canada.jpg"
import finland from "./images/Finland.jpg"
import newzealand from "./images/NewZealand.jpg"


function TravelBlog(){

return (

    <div>
      
      <div className="headerMenu">
        <div className="menu">

            <a href="#"><span className="menuspan">HOME</span></a>
            <a href="#"><span className="menuspan">ABOUT</span></a>
            <a href="#"><span className="menuspan">BLOG</span></a>
            <a href="#"><span className="menuspan">CONTACT</span></a>
            <a className="quote">“To travel is to live” – Hans Christian</a>
            <a href="#" className="fa fa-facebook" id="social"></a>
            <a href="#" className="fa fa-twitter" id="social"></a>
            <a href="#" className="fa fa-instagram" id="social"></a>
            <a href="#" className="fa fa-youtube-play" id="social"></a>
            <a href="#" className="fa fa-pinterest" id="social"></a>
            <a href="./loginAssignment.html"><span className="menuspan">LOGIN</span></a>



        </div>

    </div>


    <div className="headerimage">
        <img src={header}></img>

    </div>

    <div className="lts_container">
        <h2>LET'S START <span>again</span></h2>
    </div>


    <div className="blog-container">
        <h5>Destinations Safe for Solo Female Travelers</h5>
    

    <div className="safeimage">
        <img className="safeclass" src={safetravel}></img>
        <p className="safetext">Traveling alone as a woman used to be a very controversial idea for me. When I first began
            planning my solo travels, many of my friends and family shared a number of reasons why I shouldn’t do this,
            and after hearing so much, I began to question whether it was a good idea. After all, traveling alone has
            the power to change us forever.</p>

        <p className="safetext"> I’m sure that many women planning to travel alone get similar responses from their friends
            and family. Still, research shows that solo female travel is more popular than ever. </p>

        <p className="safetext"> Over 70% of American women say they have traveled alone, and Google searches for “solo
            female travel” increased 230% in 2019, before COVID became a concern. </p>

        <p className="safetext"> Travel companies report that up to 80% of their solo travelers are women, and the number of
            Pinterest boards related to traveling alone as a woman have more than tripled in recent years.</p>

        <p className="safetext"> Here are the top 10 safest places for women to travel alone.</p>
        <h5> Finland </h5>
        <img className="safeclass" src={finland}></img>
        <p className="safetext">Land of the midnight sun and the Northern Lights, Finland is the ideal destination for nature lovers.</p>
        <p className="safetext">There's Lemmenjoki National Park, the largest wooded reserve in Europe, and multiple other wild areas,</p>
        <p className="safetext"> including the region with the greatest number of lakes in Europe.</p>

        <h5>Canada</h5>
        <img className="safeclass" src={canada}></img>

          <p className="safetext"> Canada is home to a wide range of landscapes, including centuries-old forests, snow-covered mountains, countrysides, and lakes.
            Its wilderness especially is spectacular and definitely worth the trip.
             What's more, their cities also have a special charm and a multicultural touch</p>

                <h5>New Zealand</h5>
                <img className="safeclass" src={newzealand}></img>

           <p className="safetext"> A country of otherworldly landscapes, New Zealand, or Middle Earth for Lord of the Rings fans,
             is the perfect destination for those who love adventure, sports, nature, or all of the above. 
                 This small country is made up of two main islands that boast extremely varied kinds of scenery. 
                     On the North Island, you'll find paradise beaches, active volcanoes, and colorful lakes.
                        On the South Island, it's quite a different scene: snowy peaks, glaciers, and open ocean full of seals and whales.</p>

    </div>

    <div className="footer"><p>Copyright &#x000A9; 2022 The Female Nomad | All Rights Reserved</p></div>

</div>


    </div>
)

}

export default TravelBlog;
