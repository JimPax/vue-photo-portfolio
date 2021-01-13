<template>
    <footer class="footer">
        <nav class="navigation">
            <ul class="navigation__list">
                <li class="navigation__item"><router-link :to="{ path: '/', hash: '#about' }" class="navigation__link">About</router-link></li>
                <li class="navigation__item"><router-link :to="{ path: '/', hash: '#portfolio' }" class="navigation__link">Portfolio</router-link></li>
                <li class="navigation__item"><router-link :to="{ path: '/', hash: '#contact' }" class="navigation__link">Contact</router-link></li>
            </ul>
        </nav>
        <div class="footer__logo-box">
            <div class="footer__logo"></div>
            <h2 class="footer__heading">John Words</h2>
        </div>
        <p class="footer__copyright">
            &copy; 2021 created by <a href="https://jimpax.netlify.app/" class="footer__link">Jim Pax</a>.
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_footer.scss";
</style>