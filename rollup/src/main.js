import Vue from 'vue';
import router from './routes/routes.js';
import './styles/reset.scss';

if (ENV !== 'production') {
	document.write(`<script src=http://${(location.host || locahost).split(':')[0]}:35729/>livereload.js?snipver=1></script>`)
}

const app = new Vue({
	router
}).$mount('#app');
