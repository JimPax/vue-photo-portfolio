<template>
    <section class="portfolio" id="portfolio">
        <h1 class="heading-primary portfolio__heading">Portfolio</h1>

        <div class="portfolio__albums">
            <figure class="portfolio__figure" v-for="(category, index) in categories" :key="index">
                    <router-link :to="{ name: 'Album', params: { category: category.name } }">
                    <img v-bind:src="require('../assets/img/art grafiti/' + category.img)" :alt="category.alt" class="portfolio__img">
                    <figcaption class="caption">{{category.name}}</figcaption>
                </router-link>
            </figure>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Portfolio',
    data: function() {
        return {
            categories: [],
            getLoadedAPI: false
        }
    },

    mounted() {
        axios.get('/static/categories.json').then((response) => {
            this.categories = response.data.categories;
            this.getLoadedAPI = true;
        });
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_portfolio.scss";
</style>