import { reactive } from 'vue';

export const store = reactive({
    header_sections: [
        {
            label: 'Home',
            url: '#',
            active: true,
        },
        {
            label: 'About',
            url: '#',
            active: false,
        },
        {
            label: 'Services',
            url: '#',
            active: false,
        },
        {
            label: 'Work',
            url: '#',
            active: false,
        },
        {
            label: 'Articles',
            url: '#',
            active: false,
        }
    ]
})