<template>
    <section class="experience" id="experience">
        <div class="experience-wrapper">
            <h1>My Experience</h1>
            <div class="experience-content">
            <div class="experience-img">
                <div class="experience-img__box">
                    <img src="../assets/images/diploma3d.png" alt="University Image">
                </div>
            </div>
            <div class="experience-text">
                <div class="experience-timeline active">
                    <div class="experience-timeline-year"><div class="bullet-point "><div class="inner-bullet-point"></div></div>~2004</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sint culpa repudiandae eaque officia eum possimus odit optio laudantium neque.</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>2012</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus asperiores dolores sapiente optio ipsa accusamus qui magni beatae eius excepturi.</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>2019</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quod accusamus consequuntur velit facilis omnis ea. Inventore sit est ad accusantium.</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>2022</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorum recusandae, quam porro sint molestiae rerum vel harum, distinctio atque sequi.</div>
                </div>
            </div>
        </div>
        </div>
       
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .experience{
        height: calc(100vh - 50px);
        padding-top: 50px;
        margin-bottom: 30px;
        .experience-wrapper{
           height: 100%;
           padding: 0 50px;
           
            h1{
                font-size: 3.2rem;
                font-weight: 300;
                text-align: center;
            }

            .experience-content{
                display:grid;
                grid-template-columns: 1fr 1fr;
                height: 80vh;
                padding-top: 30px;
                /* From https://css.glass */
                background: rgba(255, 255, 255, 0.2);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                .experience-img{
                    align-self: center;

                    .experience-img__box{
                        position: relative;
                        img{
                            width: 80%;
                        }

                        // &::after{
                        //     content: "";
                        //     background-color: orange;
                        //     position: absolute;
                        //     height: 110%;
                        //     width: 63%;
                        //     top: -4%;
                        //     left: 7%;
                        //     border-radius: 48%;
                        //     z-index: -1;
                        // }
                    }
                }

                .experience-text{
                    align-self: center;
                    .experience-timeline{
                        color: gray;
                        margin-bottom: 30px;

                        .experience-timeline-year{
                            position: relative;

                            .bullet-point{
                                height: 27px;
                                width: 24px;
                                border-radius: 50%;
                                background: white;
                                position: absolute;
                                top: 50%;
                                left: -5%;
                                transform: translate(-50%, -50%);

                                .inner-bullet-point{
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 50%;
                                    background-color: black;
                                    transform: translate(72%, 86%);
                                }
                            }   

                        }
                        &.active{
                            color: black;
                            .experience-timeline-year{
                                .bullet-point{
                                    background-color: orange;
                                    .inner-bullet-point{
                                        background-color: white;
                                    }
                                }
                            }

                            .experience-timeline-text{
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
</style>