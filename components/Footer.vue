<template>
    <footer>
        <div class="footer-wrapper">
            <div class="footer-title">Nikhil Aukhaj</div>
            <div class="footer-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique maiores, iure saepe velit unde vitae omnis aut fugiat nihil!</div>
            <div class="footer-icons">
                <div class="footer-icon">
                    <img src="../assets/images/social_icons/facebook.svg" alt="Facebook Icon by Icons8">
                </div>
                <div class="footer-icon">
                    <img src="../assets/images/social_icons/twitter.svg" alt="Twitter Icon by Icons8">
                </div>
                <div class="footer-icon">
                    <img src="../assets/images/social_icons/linkedin.svg" alt="LinkedIn Icon by Icons8">
                </div>
                <div class="footer-icon">
                    <img src="../assets/images/social_icons/github.svg" alt="Github Icon by Icons8">
                </div>
            </div>
            <div class="footer-copyright">	&copy; Nikhil Aukhaj 2023</div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    footer{
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        .footer-wrapper{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 30px 0;

                .footer-title{
                    font-weight: bold;
                    font-size: 2.1rem;
                }

                .footer-desc{
                    margin: 10px 0;
                }

                .footer-icons{
                    display: flex;

                    .footer-icon{
                        margin: 0 10px;
                        cursor: pointer;
                    }
                }
        }
    }
</style>