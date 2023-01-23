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
    ],
    footer_map_image: 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDsUcTjt43mTheN9ruCsQVgBE-wgN6_AfY&language=en&center=Notting+Hill,London&maptype=roadmap&zoom=14&size=382x300&markers=icon:https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2017/03/construction_map_pin.png|Notting+Hill,London&scale=2',
    contacts: [
        {
            icon: '<i class="fa-solid fa-globe"></i>',
            contact_info: 'Corporate Location 1600 Amphitheatre Parkway London WC1 1BA'
        },
        {
            icon: '<i class="fa-solid fa-house-chimney"></i>',
            contact_info: 'Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA'
        },
        {
            icon: '<i class="fa-solid fa-phone-flip"></i>',
            contact_info: '1.800.458.556 / 1.800.532.2112'
        },
        {
            icon: '<i class="fa-solid fa-phone-flip"></i>',
            contact_info: 'info@your-domain.com'
        },
        {
            icon: '<i class="fa-regular fa-clock"></i>',
            contact_info: 'Monday – Friday: 9:00 AM – 6:00 PM'
        },
        {
            icon: '<i class="fa-regular fa-clock"></i>',
            contact_info: 'Saturday – Sunday: 9:00 AM – 12:00 PM'
        }
    ],
    social: [
        {
            icon: '<i class="fa-brands fa-facebook-f"></i>',
            url: '#'
        },
        {
            icon: '<i class="fa-brands fa-twitter"></i>',
            url: '#'
        },
        {
            icon: '<i class="fa-brands fa-youtube"></i>',
            url: '#'
        },
        {
            icon: '<i class="fa-brands fa-instagram"></i>',
            url: '#'
        }
    ]
})