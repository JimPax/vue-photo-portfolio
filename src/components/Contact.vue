<template>
    <div>
        <div class="contact__bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 267.937">
            <path id="Path_5" data-name="Path 5" d="M0,2160l381.069-135.932,158.84,83.053,689.954-58.668,100.214,79.386L1920,1892.063V2160Z" transform="translate(1920 2160) rotate(180)"/>
        </svg>
        </div>
        <section class="contact" id="contact">
            <h1 class="heading-primary contact__heading">Contact</h1> 
            <div class="contact__box">
                <h1 class="heading-primary contact__box-heading">You can find me at</h1>
                <a href="mailto: abc@example.com" class="contact__mail">mail@gmail.com</a>

                <div class="contact__social">
                    <svg class="contact__social-icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-facebook"></use>
                    </svg>
                    <svg class="contact__social-icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-instagram"></use>
                    </svg>
                </div>
                <span class="circle c1"></span>
                <span class="circle c2"></span>
                <span class="circlek k1"></span>
                <span class="circlek k2"></span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_contact.scss";
</style>