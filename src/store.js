import { reactive } from 'vue';

export const store = reactive({
    /* header */
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
    ],
    /* main */




    /* footer */
    footer_map_image: 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDsUcTjt43mTheN9ruCsQVgBE-wgN6_AfY&language=en&center=Notting+Hill,London&maptype=roadmap&zoom=14&size=382x300&markers=icon:https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2017/03/construction_map_pin.png|Notting+Hill,London&scale=2',
    contacts: [
        {
            icon: 'fa-solid fa-globe',
            contact_info: 'Corporate Location 1600 Amphitheatre Parkway London WC1 1BA'
        },
        {
            icon: 'fa-solid fa-house-chimney',
            contact_info: 'Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA'
        },
        {
            icon: 'fa-solid fa-phone-flip',
            contact_info: '1.800.458.556 / 1.800.532.2112'
        },
        {
            icon: 'fa-solid fa-phone-flip',
            contact_info: 'info@your-domain.com'
        },
        {
            icon: 'fa-regular fa-clock',
            contact_info: 'Monday – Friday: 9:00 AM – 6:00 PM'
        },
        {
            icon: 'fa-regular fa-clock',
            contact_info: 'Saturday – Sunday: 9:00 AM – 12:00 PM'
        }
    ],
    social: [
        {
            icon: 'fa-brands fa-facebook-f',
            url: '#',
            tooltip: 'facebook'
        },
        {
            icon: 'fa-brands fa-twitter',
            url: '#',
            tooltip: 'twitter'
        },
        {
            icon: 'fa-brands fa-youtube',
            url: '#',
            tooltip: 'youtube'
        },
        {
            icon: 'fa-brands fa-instagram',
            url: '#',
            tooltip: 'instragram'
        }
    ]
})