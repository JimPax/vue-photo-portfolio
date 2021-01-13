<template>
<div>
    <header class="header">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Photography</span>
            <span class="heading-primary--sub">John Words</span>
        </h1>

        <nav class="navigation">
            <ul class="navigation__list">
                <li class="navigation__item" id="n1"><a href="#about" class="navigation__link">About</a></li>
                <li class="navigation__item" id="n2"><a href="#portfolio" class="navigation__link">Portfolio</a></li>
                <li class="navigation__item" id="n3"><a href="#contact" class="navigation__link">Contact</a></li>
            </ul>
        </nav>

        <div class="social">
            <svg class="social__icon">
                <use xlink:href="../assets/img/sprite.svg#icon-facebook"></use>
            </svg>
            <svg class="social__icon">
                <use xlink:href="../assets/img/sprite.svg#icon-instagram"></use>
            </svg>
        </div>
    </header>
</div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_header.scss";
</style>