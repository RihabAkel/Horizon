import React from 'react'
import './Dashboard.css'
import Particles from "react-tsparticles";
import styled from 'styled-components';
import Typed from 'react-typed'
import pic1 from'./pic1.jpg' 

const partiles = {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": false,
          "value_area": 100
        }
      },
      "color": {
        "value": "#f2f2f2"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#f2f2f2"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.19240944730386272,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1.872463273808071,
          "size_min": 3.248308849205381,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 128.27296486924183,
        "color": "#ffffff",
        "opacity": 0.352750653390415,
        "width": 0.8017060304327615
      },
      "move": {
        "enable": true,
        "speed": 1.206824121731046,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 481.0236182596568,
          "rotateY": 561.194221302933
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "grab"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 89.32849335314796,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  };

function Home() {
    return (
        <Background >
          <Particles 
          className="particles-canvas"
          height="100vh" width="100vw" params={partiles}/>
          <Me>
              <h1>
                  This is your cloud Horizon
              </h1>
              <WhatDo>
              <Typed
                    strings={[
                        "Get your data stored",
                        "Secure data in secure cloud",
                        "Easy and efficient teamwork"
                      ]}
                      typeSpeed={50}
                      backSpeed={60}
                      loop
                />  
              </WhatDo>
                
              
          </Me>
        </Background>
    )
}

export default Home;



export const Background = styled.section`
            background-color: #000;
            height: 865px;
            display: block;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            background-size: cover;
            position:'absolute';
            top: 0;
            left: 0;
            width: "100%";
            height: "100%";
            z-index: -1;

`;


const Me = styled.h1`
    color: #f2f2f2;
    margin: -20px 0px;
    position: absolute;
    text-align: center;
    top: 40%;
    width: 100%;
    text-decoration : none;
` 


const WhatDo = styled.h2`
       flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
`


const Btn = styled.a`
              padding: 10px 10px 10px 10px;
              margin: 3àpx 30px;
              border : 1px solid ;
              pointer: cursor;
              background-color:#000;
              color: #f2f2f2;
              text-size: 2rem;
              text-decoration : none;
              font-weight: 500;
              transition: all 0.3s ease-in;
              text-transform: uppercase;
              &:hover{
                color:#99ceff;
              }
`