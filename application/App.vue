<template>
    <div class="Application">
        <component :is="ViewComponent" />
    </div>
</template>

<script>
import HpmePage  from './pages/Home';
import AboutPage  from './pages/About';

const routes = {
  '/': HpmePage,
  '/about': AboutPage
}

export default {
    components: {
    },
    data() {
        return {
            currentRoute: window.location.pathname,
        };
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
        }
    },
};
</script>

<style lang="scss">
.Application {}
</style>
