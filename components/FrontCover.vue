<template>
    <section class="front-cover">
      <div class="front-cover-wrapper">
      <div class="front-cover-text">
        <div class="front-cover-text__title">Hello,</div>
        <div class="front-cover-text__desc">This is <span>Nikhil Aukhaj</span></div>
        <div class="front-cover-text__subtitle">A software engineer from Mauritius</div>
      </div>
    
      <div class="front-cover-img">
          <div class="img-box">
            <img src="../assets/images/icons/profile-avatar3.png" alt="Profile Avatar">
          </div>
      </div>
      </div>
    
    </section>
    </template>
    
    <script setup>
    </script>
    
    <style lang="scss" scoped>
    
    .front-cover{
      //margin-top:var(--nav-height);
      //height: calc(100vh - var(--nav-height));
      height: 100vh;
    //   background: url("../assets/images/backgrounds/wall2.png");
    //   background-image: url("../assets/images/backgrounds/pattern.svg");
      background-size: cover;
      display: grid;
      align-items: center;
      padding: 0 30px;
    
    
      .front-cover-wrapper {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        height: 82%;
        align-items: center;
        justify-items: center;
        padding: 0 40px;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        margin-top: 40px;
    
    
        .front-cover-text {
          font-weight: 100;
          transform: translateY(-10%);
    
          .front-cover-text__title{
            font-size: 4.1rem;
          }
    
          .front-cover-text__desc{
            font-size: 3.1rem;
    
            span{
              font-weight: bold;
            }
          }
    
          .front-cover-text__subtitle{
            font-size: 1.75rem;
          }
        }
    
        .front-cover-img {
    
            .img-box{
              border: 2px solid gold;
              background-color: orange;
              border-radius: 50%;
              overflow: hidden;
              width: 80%;
    
              img{
                width: 100%;
                transform: translateY(8px);
              }
            }
        }
      }
    }
    </style>