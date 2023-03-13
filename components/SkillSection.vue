<template>
    <section class="skill-section">
        <div class="skill-section-wrapper">
            <div class="skill-container">
                <div class="professional-img">
                    <img src="../assets/images/tech.png" alt="Tech People">
                </div>
                <ul class="skill-list">
                    <li>Java</li>
                    <li>HTML/CSS/SCSS</li>
                    <li>Javascript</li>
                    <li>Vue JS</li>
                    <li>Mongo Db</li>
                    <li>Git</li>
                    <li>Php</li>
                    <li>Flutter/Dart</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .skill-section{
        .skill-section-wrapper{
        
            .skill-container{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid black;

                .professional-img{
                    border: 1px solid blue;
                    width: 50%;
                    img{
                        width: 100%;
                    }
                }

                .skill-list{
                    li{
                        display: block;
                        position: absolute;
                        border: 1px solid red;
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;


                        &:nth-child(1){
                        left: 50%;
                        top: 0;
                        }

                        &:nth-child(2){
                        right: 0;
                        top: 0;
                        }

                        &:nth-child(3){
                        right: 0;
                        top: 50%;
                        }

                        &:nth-child(4){
                        right: 0;
                        bottom: 0;
                        }

                        &:nth-child(5){
                        left: 50%;
                        bottom: 0;
                        }

                        &:nth-child(6){
                        left: 0;
                        bottom: 0;
                        }

                        &:nth-child(7){
                        left: 0%;
                        top: 50%;
                        }

                        &:nth-child(8){
                        left: 0;
                        top: 0;
                        }


                    }

                    

                    
                }
            }
        }
    }
</style>