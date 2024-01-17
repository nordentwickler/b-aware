import { createApp } from 'vue';
import Slider from '@components/Slider.vue';
import NavigationButton from "@components/NavigationButton.vue";
import Navigation from "@components/Navigation.vue";
import AccordionItem from "@components/AccordionItem.vue"
import Logo from "@components/Logo.vue";

import { SwiperSlide } from "swiper/vue"

import '@styles/app.pcss';

const app = createApp({
    components: {
        Slider,
        SwiperSlide,
        NavigationButton,
        Navigation,
        AccordionItem,
        Logo
    },
});

app.mount('#app');
