<template>
<div>
    <section class="about" id="about">
        <h1 class="heading-primary about__heading">About</h1>

        <div class="about__selfie">
            <img src="../assets/img/biopic.jpg" alt="selfie" class="about__selfie-img">
        </div>

        <div class="about__text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur similique praesentium numquam iste inventore eum. 
                Iusto accusamus nihil veniam vero earum, dolore dolorem aut optio? Unde nostrum distinctio voluptates quos!</p>
                <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur similique praesentium numquam iste inventore eum. 
                Iusto accusamus nihil veniam vero earum, dolore dolorem aut optio? Unde nostrum distinctio voluptates quos!</p>
        </div>
        <hr class=about__design-line>
    </section>

    <div class="bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 268">
            <path id="Path_9" data-name="Path 9" d="M0,2160l381.069-135.932,158.84,83.053,689.954-58.668,100.214,79.386L1920,1892.063V2160Z" transform="translate(0 -1892.063)"/>
        </svg>              
    </div>
</div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_about.scss";
</style>