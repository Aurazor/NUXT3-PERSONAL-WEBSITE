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
                    <div class="experience-timeline-year">1000</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis!</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year">1000</div>
                    <div class="experience-timeline-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, corporis!</div>
                </div>
                <div class="experience-timeline">
                    <div class="experience-timeline-year">1000</div>
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
        .experience-wrapper{
            h1{
                text-align: center;
            }

            .experience-content{
                display:grid;
                grid-template-columns: 1fr 1fr;

                .experience-img{
                    .experience-img__box{
                        img{
                            width: 100%;
                        }
                    }
                }

                .experience-text{
                    .experience-timeline{
                        .experience-timeline-year{

                        }
                    }
                }
            }

        }
    }
</style>