<template>
    <section class="expertise" id="expertise">
      <div class="expertise-wrapper">
        <div class="expertise-img-container flex-center-vertical">
          <img src="../assets/images/tech.png" alt="Tech People">
        </div>
        <div class="expertise-text flex-center-vertical">
          <div class="expertise-text__title">
            My mission is to develop <span> best design</span>.
          </div>
          <div class="expertise-text__subtitle">I will help you build and grow your business. I create clarifying strategy, websites and mobile apps.</div>
          <div class="expertise-text__details">
            <div class="expertise-text__details-skill">
               <div class="expertise-text__details-skill-header">
                 <div class="expertise-header-description">Web Design</div>
                 <div class="expertise-header-percentage">90%</div>
               </div>
              <div class="expertise-text__details-skill-progress">
                <div id="expertise-progress-1" class="expertise-progress"></div>
              </div>
            </div>
            <div class="expertise-text__details-skill">
              <div class="expertise-text__details-skill-header">
                <div class="expertise-header-description">Mobile App Design</div>
                <div class="expertise-header-percentage">80%</div>
              </div>
              <div class="expertise-text__details-skill-progress">
                <div id="expertise-progress-2" class="expertise-progress"></div>
              </div>
            </div>
            <div class="expertise-text__details-skill">
              <div class="expertise-text__details-skill-header">
                <div class="expertise-header-description">Desktop Apps</div>
                <div class="expertise-header-percentage">85%</div>
              </div>
              <div class="expertise-text__details-skill-progress">
                <div id="expertise-progress-3" class="expertise-progress"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </template>
   
   <script setup>
   </script>
   
   <style lang="scss" scoped>
     .expertise{
       min-height: 100vh;
       .expertise-wrapper{
         max-width: var(--container-width) ;
         margin:0 auto;
         padding: 50px 0;
         display: grid;
         grid-template-columns: 1fr 1fr;
         grid-column-gap: 10px;
         height: 100%;
   
         .expertise-img-container{
           img{
             width: 100%;
            //  transform: scale(1.5) translateY(23px);
           }
         }
   
         .expertise-text{
           padding: 20px;
           /* From https://css.glass */
           background: rgba(255, 255, 255, 0.2);
           border-radius: 16px;
           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
           backdrop-filter: blur(5px);
           -webkit-backdrop-filter: blur(5px);
           border: 1px solid rgba(255, 255, 255, 0.3);
   
           .expertise-text__title{
             font-weight: 300;
             font-size: 3.2rem;
             line-height: 54.2px;
           }
   
           .expertise-text__subtitle{
             font-weight: 300;
             font-size: 1.2rem;
             margin-top: 20px;
             margin-bottom: 25px;
           }
   
           .expertise-text__details{
   
             .expertise-text__details-skill{
               margin-bottom: 30px;
   
               .expertise-text__details-skill-header {
                 display: flex;
                 justify-content: space-between;
                 align-items: center;
                 text-transform: uppercase;
                 font-weight: 600;
                 margin-bottom: 10px;
                 .expertise-header-percentage{
                   font-weight: 300;
                 }
               }
                 .expertise-text__details-skill-progress{
                   width: 100%;
                   height: 10px;

                   .expertise-progress{
                     width: inherit;
                     height: inherit;
                     background: #e9e9e9;
                     position: relative;
                     border-radius: 10px;
   
                     &:after{
                       content: '';
                       background-image: linear-gradient(to right, gold , orange);
                       height: inherit;
                       position: absolute;
                       top: 0;
                       border-radius: 10px;
                     }
                   }
   
                   #expertise-progress-1{
                     &:after{
                       width: 90%;
                     }
                   }
   
                   #expertise-progress-2{
                     &:after{
                       width: 80%;
                     }
                   }
   
                   #expertise-progress-3{
                     &:after{
                       width: 85%;
                     }
                   }
   
                 }
             }
           }
         }
   
       }
     }
   
     @media only screen and (max-width:769px) {
       .expertise{
         height: auto;
   
         .expertise-wrapper{
           grid-template-columns: 1fr;
           padding: 25px;

           .expertise-img-container{
            img{
              width:100%;
            }
           }
   
           .expertise-text{
             .expertise-text__title{
               text-align: center;
               font-size: 2.6rem;
               line-height: 40px;
               text-transform: uppercase;
             }
           }
         }
       }
     }
   </style>