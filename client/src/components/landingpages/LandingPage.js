import React, {useContext, useState} from "react";
import { GlobalState } from "../../GlobalState";
import { Link} from "react-router-dom";
import ProductItem from "../mainpages/utils/productItem/ProductItem";
import './landingPage.css'
import LoadMore from "../mainpages/products/LoadMore";
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Header from "../headers/Header";
import Filters from "../mainpages/products/Filters";


function LandingPage() {
      const state = useContext(GlobalState);
    const [products, setProducts] = state.productsAPI.products;
    
    return <div className="lp">
         <Header/>
        <div className='slider'>
            <div className="ccss">
                <div  id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner"> 
                            <div class="carousel-item active">
                        <img className='slider-images' src="./pics/aaAAA.png"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>AA, AAA, AAAA and C2 batteries</h5>
                            <p>Original batteries with premium quality from brands like Energizer,Duracell & Camelion.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className='slider-images' src="./pics/diypack.png"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>18650 batteries</h5>
                            <p>Build your custom 18650 battery pack with our wide range of varities. Shop 18650 batteries for your DIY projects and gadgets.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className='slider-images' src="./pics/keepb.png"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Battery Protection</h5>
                            <p>Always store your batteries in cool and dry places when not in use. Do not expose batteries to extreme conditions.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                            <img className='slider-images' src="./pics/cbat.jpg" alt="..." />
                              <div class="carousel-caption d-none d-md-block">
                            <h5>Battery Replacement</h5>
                            <p>Replace old batteries in calculators, key fobs, watches, toys and other gadgets with our range of Lithium batteries</p>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
            
                <div className='spic-9'>
                    <div className="pic-pics">
                        <div className="sp">
                        <Flip left>
                            {/* <Link to='/detail/6122db4106484d0016723343'> */}
                                <img className="side-pic" src='./pics/truu.jpg' alt='battery'/>
                            {/* </Link> */}
                            </Flip>
                        </div>
                        <div className="sp">
                            <Flip right>
                                <img className="side-pic" src='./pics/bf1.jpg' alt='battery'/>
                            </Flip>
                        </div>
                    </div>
                </div>
        </div>
        {/* ====== */}
        <div className='warm-text'>
           Offering premium services & quality products at affordable prices
        </div>
        {/* .... */}
        <div className='small-products'>
            <div className="s-i">
                <a href='https://www.praisejoint1.com/detail/615bf25f58f93900165d78f4'>
                    <div className="ii">
                        <img className="s-img" src="https://images.unsplash.com/photo-1602845712625-a2b4e3c05311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="batteries and chargers" /> <div className="overlay1">
                            <div className="text1">Key Fob battery replacement. Get coin batteries to replace the dead one in your key fob. </div>
                            </div>
                    </div>
                </a>
            </div>
            <div className="s-i">
                <a href='https://www.praisejoint1.com/detail/612db69884bfd200164dd959'>
                    <div className="ii">
                        <img className="s-img" src="https://c0.wallpaperflare.com/preview/810/789/251/electronics-diy-circuit-board-attiny2313.jpg" alt="batteries and chargers" /> <div className="overlay1">
                            <div className="text1">18650 batteries for diy projects, drilling machines, portal hand fan, toys, RC cars, boats and drones.</div>
                            </div>
                    </div>
                </a>
            </div>
            <div className="s-i">
                <a href="https://www.praisejoint1.com/detail/614897d484f83600162f5b10">
                    <div className="ii">
                        <img className="s-img" src="https://c4.wallpaperflare.com/wallpaper/233/791/699/battery-car-danger-electric-wallpaper-preview.jpg" alt="batteries and chargers" /> <div className="overlay1">
                            <div className="text1">We provide your with original car batteries from brands including Energizer, Guardian, & Bosch. </div>
                            </div>
                    </div>
                </a>
            </div>
            <div className="s-i">
                <a href="https://www.praisejoint1.com/detail/612ac9f809f35500161761df">
                    <div className="ii">
                        <img className="s-img" src="https://www.jameco.com/Jameco/workshop/JamecoBuilds/battery-level-indicator-fig3.png" alt="batteries and chargers" />
                        <div className="overlay1">
                        <div className="text1">9v batteries for diy projects, drilling machines, multimeters and other gadgets.</div>
                        </div>
                    </div>
                </a>
            </div>
                <a href='https://www.praisejoint1.com/detail/615bf16258f93900165d78f3'>
            <div className="s-i">
                    <div className="ii">
                        <img className="s-img" src='./pics/tvr.jpg'/>
                    <div className="overlay1">
                     <div className="text1">AAA batteries in stock for remotes, toys, radios, gamepads, etc.
                        </div>
                    </div>
                    </div>
            </div>
            </a>
             <a href='https://www.praisejoint1.com/detail/615bf16258f93900165d78f3'>
            <div className="s-i">
                    <div className="ii">
                        <img className="s-img" src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/273626348_352686053529214_22901362168682199_n.png?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG_yQlDWT8KbEPpowKChzHxAVgjBWrgvVcBWCMFauC9V3oNRB5H4F7DO63Wjs3xnoWV6B9k06hbz8ugXgUB31Ry&_nc_ohc=UZpgXss04CUAX_eS5xj&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AT-cbnrHoTMWrrk5yzww0TlEMQnByWHeccU7GrMXujsSSw&oe=62133CC8" alt="batteries and chargers" />
                        <div className="overlay1">
                        <div className="text1">Guardian batteries. All number of plates Available for cars, trucks,generators & many more.</div>
                        </div>
                    </div>
                </div>
                </a>
            <div className="s-i">
                <a href="https://www.praisejoint1.com/detail/614b06604884f40016d66392">
                    <div className="ii">
                        <img className="s-img" src="https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/273678831_352685763529243_404334318495198826_n.png?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEgMPICsyiUjGH39Tnxm7G701ot7NxT8oHTWi3s3FPygU9-7zi9sNkKjsMDKh5y__3DDwGY7Qb5W5ik4y9GomlD&_nc_ohc=2kGYTFz2s54AX-BLzVo&_nc_oc=AQkrNOOdb-wZNY3ks_zewCFrVjbJWMNuEe6lQP62RtNDSsv8en0fjSAGlIGLrsU0eko&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&oh=00_AT_RtnC6PM0q9_izQvNipPsP2epx537RyTdBPsivT4GcdQ&oe=6212A687" alt="batteries and chargers" />
                        <div className="overlay1">
                            <div className="text1"> Car batteries. All number of plates Available for cars, trucks,generators & many more.</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="s-i">
                <a href="https://www.praisejoint1.com/detail/619b617f06d8d3001691de11">
                    <div className="ii">
                        <img className="s-img" src="./pics/kb2.jpg" alt="batteries and chargers" />
                        <div className="overlay1">
                            <div className="text1">Do not buy a new key fob ! Replace the old battery with a new one. Coin batteries for key fobs for sale.</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        {/* mobile carousel */}
        <div className="m-ccss">
                <div  id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner"> 
                            <div class="carousel-item active">
                        <img className='landing-image-1' src="./pics/kfb.jpeg"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className="ca-image" src="https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/273678831_352685763529243_404334318495198826_n.png?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEgMPICsyiUjGH39Tnxm7G701ot7NxT8oHTWi3s3FPygU9-7zi9sNkKjsMDKh5y__3DDwGY7Qb5W5ik4y9GomlD&_nc_ohc=2kGYTFz2s54AX-BLzVo&_nc_oc=AQkrNOOdb-wZNY3ks_zewCFrVjbJWMNuEe6lQP62RtNDSsv8en0fjSAGlIGLrsU0eko&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&oh=00_AT_RtnC6PM0q9_izQvNipPsP2epx537RyTdBPsivT4GcdQ&oe=6212A687"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className="ca-image" src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/273626348_352686053529214_22901362168682199_n.png?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG_yQlDWT8KbEPpowKChzHxAVgjBWrgvVcBWCMFauC9V3oNRB5H4F7DO63Wjs3xnoWV6B9k06hbz8ugXgUB31Ry&_nc_ohc=UZpgXss04CUAX_eS5xj&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AT-cbnrHoTMWrrk5yzww0TlEMQnByWHeccU7GrMXujsSSw&oe=62133CC8"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className="ca-image" src="./pics/j5.jpg"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className="ca-image" src="https://www.jameco.com/Jameco/workshop/JamecoBuilds/battery-level-indicator-fig3.png"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className="ca-image" src="https://c4.wallpaperflare.com/wallpaper/233/791/699/battery-car-danger-electric-wallpaper-preview.jpg" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                            <div class="carousel-item">
                        <img className="ca-image" src="https://images.unsplash.com/photo-1602845712625-a2b4e3c05311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"  alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                            </div>
                    </div>
                </div>
        </div>
            <Zoom top>
        <div className="ban">
                <img className="ban-img" src="./pics/rtyyt.png" alt="praisejoint1patteries"/>
            </div>
            </Zoom>
            <Zoom bottom>
        <div className="ban">
                <img className="ban-img" src="./pics/whatsAppl.png" alt="praisejoint1patteries" />
            </div>
            </Zoom>
                
        {/* <div className="ads-banner">
            <div className="banner">
                <img className="banner-img" src="./pics/fc.png" alt="praisejoint1patteries"/>
            </div>
            <div className="banner">
                <img className="banner-img" src="./pics/rtyyt.png" alt="praisejoint1patteries"/>
            </div>
        </div> */}
        {/* products................... */}
        {/* <div className="filter-Holder">
      <Filters/>
      </div>
        <div className="landing-products">
             {products.map((product) => {
            return (
              <ProductItem
                key={product._id}
                product={product}
              />
            );
            })}
        </div>*/}
        <Link to='/shop'>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          }}>
     <div style={{width:'80vw'}}> <img style={{width:'100%',height:'100%'}} src="./pics/proceedtoshop.png" alt="proceed to the pj1 shop"/></div>
            </div> 
            </Link>
        <div className="foorter">
            <div className="f-info">
              <div className="icon">
                   <img className="the-png" src="./pics/online-shopping.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
               Place an order via WhatsApp or Call. Make an enquiry about a battery brand or specific product for your devices.
                </div>
                
            </div>
            <div className="f-info">
                <div className="icon">
                     <img className="the-png" src="./pics/m-p.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
                 All mobile money and transactions for payments online are powered and protected by Paystack. A well secured way of conducting online mobile money and card transactions accross Africa.
                </div>
               
            </div>
            <div className="f-info">
                <div className="icon">
                   <img className="the-png" src="./pics/warranty.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
                6 months warranty on rechargeable batteries selling at discounted prices. We offer amazing support to our clients who need help in procuring the ideal batteries and chargers for their gadgets and devices.
                </div>
               
            </div>
            <div className="f-info">
                <div className="icon">
                    <img className="the-png" src="./pics/location.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
                Send your live location via WhatsApp to have your items delivered to your office, churches, mosques and homes. Our delivery services are customer friendly and secured.
                </div>
            </div>
        </div>
        <div className="pj1-logo">
            <img className="the-name" src="./pics/9.png" alt="aaa batteries, car batteries, charger, 18640 battery charger"/>
        </div>
        {/* ******************************************************* */}
    </div>;
}

export default LandingPage;
