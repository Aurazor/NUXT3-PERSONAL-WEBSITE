<template>
    <div id="app">
        <NavigationBar />
        <slot/>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
 @import '../assets/_helpers/scss/_variables.scss';
 @import '../assets/_helpers/scss/custom_styles.scss';

 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,700;1,400&display=swap');

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow-x: hidden;
    background-image: url("../assets/images/backgrounds/pattern8.svg");

    section {
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      color: black;
    }

    ul {
      list-style: none;
    }

    .app-container {
      max-width: var(--container-width);
      margin: 0 auto;

    }
  }

</style>