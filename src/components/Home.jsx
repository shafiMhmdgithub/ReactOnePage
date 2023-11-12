import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillTwitterCircle,
  AiFillGithub,

} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>WebyTech</h1>
            <p>Solutions to all your Problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt='Graphics'/>
        <div>
            <p>
                We are one and only solution to the tech Problems  you face very day. we are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rem, ratione error exercitationem ipsa
                 illum quos, delectus laudantium, illum quos, delectus laudantium, 
                excepturi a consequuntur doloribus sapiente placeat hic doloremque quis! Assumenda, sunt illo? 
                excepturi a consequuntur doloribus sapiente placeat hic doloremque quis! Assumenda, sunt illo?</p>

        </div>
    </div>

    <div className="home4" id='brand'>
        <div>
            <h1>Brands</h1>
            <article>
              <div style={{ 
                animationDelay:"0.3s"
               }}>
                <AiFillGoogleCircle/>
                <p>Google</p>

                </div>  
                <div style={{ 
                animationDelay:"0.5s"
               }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>

                </div>  
                <div style={{ 
                animationDelay:"0.7s"
               }}>
                <AiFillTwitterCircle/>
                <p>Twitter</p>

                </div>  
                <div style={{ 
                animationDelay:"1s"
               }}>
                <AiFillGithub/>
                <p>Github</p>

                </div>  
            </article>
        </div>
    </div>
    </>
  )
}

export default Home