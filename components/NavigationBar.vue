<template>
    <nav>
    <div class="nav-brand">
      <div class="nav-brand-logo">
        <img src="../assets/images/icons/lion_logo_1.png" alt="Lion Logo">
      </div>
      <div class="nav-brand-text">
        NIKHIL AUKHAJ
      </div>
    </div>
    <div class="nav-items">
      <div class="nav-items-link"><a class="text-animate" href="#second-intro">Intro</a> </div>
      <div class="nav-items-link"><a class="text-animate" href="#expertise">Skills</a></div>
      <div class="nav-items-link"><a class="text-animate" href="#experience">Experience</a></div>
    </div>

    <div class="nav-items">
      <div class="nav-items-link rounded-link rounded-link-1"><a href="#">Contact</a></div>
      <div class="nav-items-link rounded-link rounded-link-2"><a href="#">Download CV</a></div>
    </div>

    <div class="nav-hamburger-menu"  >
      <!-- <template v-if="isHamburgerMenuOpen"> -->
        <img class="nav-hamburger-menu__img" src="../assets/images/icons/hamburger_close.png" alt="mobile menu icon close">
      <!-- </template>
      <template v-else>
        <img class="nav-hamburger-menu__img" src="../assets/images/icons/hamburger.png" alt="mobile menu icon">
      </template> -->
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
nav{
   background: white;
   position: fixed;
   top: 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: var(--nav-height);
   padding-left: 30px;
   padding-right: 15px;
   z-index: 3;
   //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   /* From https://css.glass */
   background: rgba( 255, 255, 255, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 11px );
    -webkit-backdrop-filter: blur( 11px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    

   .nav-brand{
     font-weight: bold;
     font-size: 1.3rem;
     display: flex;
     justify-content: center;
     align-items: center;

     .nav-brand-logo{
       display: flex;
       justify-content: center;
       align-items: center;
       width: 30px;
       margin-right: 10px;

       img{
         width: 100%;
       }
     }

   }

   .nav-items{
     text-transform: uppercase;
     display: flex;
     align-items: center;

     .nav-items-link{
       display:inline-block;
       margin: 0 10px;
       cursor: pointer;
       color: #3e3e3e;

        a{
          transition: 0.4s ease;

          &:hover.text-animate{
            color: var(--color-primary);
          }
        }

     }

     .rounded-link{
       padding: 5px 20px;
       border-radius: 20px;

       a{
         color: white;
       }
     }

     .rounded-link-1{
       background-color: var(--color-primary);
     }

     .rounded-link-2{
       background-color: var(--color-tertiary);
       margin-left: 0;
     }
   }

   .nav-hamburger-menu{
     display: none;
   }
 }

 @media only screen and (max-width: 800px) {
   nav {
     .nav-items {
       display: none;
     }

     .nav-hamburger-menu {
       width: 30px;
       display: flex;
       justify-content: center;
       align-items: center;
       cursor: pointer;

       .nav-hamburger-menu__img {
         width: 100%;
       }
     }
   }
 }
</style>