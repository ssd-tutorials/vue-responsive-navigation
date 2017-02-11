import Vue from 'vue';
import EventHandler from './core/VueEventHandler';

window.EventHandler = new EventHandler;

Vue.component(
    'navigation-handler',
    require('./components/Navigation/NavigationHandler.vue'
));
Vue.component(
    'drop-down-wrapper',
    require('./components/Navigation/DropDownWrapper.vue'
));
Vue.component(
    'navigation',
    require('./components/Navigation/Navigation.vue'
));

new Vue({
    el: '#app',
    mounted() {
        document.body.addEventListener('click', event => window.EventHandler.fire('body-clicked', event));
    }
});