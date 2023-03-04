<template>
    <section class="experience">
        <div class="experience-wrapper">
            <h1>My Experience</h1>
            <div class="experience-content">
            <div class="experience-img">
                <div class="experience-img__box">
                    <img src="../assets/images/diploma3d.png" alt="University Image">
                </div>
            </div>
            <div class="experience-text">
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>1000</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis!</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>1000</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis!</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>1000</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis!</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year"><div class="bullet-point"><div class="inner-bullet-point"></div></div>1000</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis!</div>
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

                .experience-img{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .experience-img__box{
                        img{
                            width: 80%;
                        }
                    }
                }

                .experience-text{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    .experience-timeline{
                        .experience-timeline-year{
                            position: relative;

                            .bullet-point{
                                height: 27px;
                                width: 22px;
                                border-radius: 50%;
                                background: orange;
                                position: absolute;
                                top: 50%;
                                left: -5%;
                                transform: translate(-50%, -50%);

                                .inner-bullet-point{
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 50%;
                                    background-color: white;
                                    transform: translate(60%, 86%);
                                }
                            }
                        }
                    }
                }
            }

        }
    }
</style>