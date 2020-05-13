import {
    store
} from "./../shared/cartData.js";


var header = new v({
    el: ".ba_header-main",
    delimiters: ['${', '}'],
    data() {
        return {
            
            cartData: store.state.cartData,
        }
    },

    computed: {
        cart() {
            return this.cartData[0]
        },
    },

    created() {
        // mini cart is on every page, that's why, we cal it once here
        store.getCart();
    },

    methods: {
        toggleNavMob() {
            const mobileNavMenu = document.querySelector('.main-navigation');

            mobileNavMenu.classList.add('left-0')

        },
        showMiniCart() {
            console.log(this.cartData.length)
            document.querySelector('.miniCartChild').classList.toggle('hidden');
            document.querySelector('.miniCartChild').addEventListener('click', function (e) {
                e.stopPropagation();
            })

        },

        accumulator(data) {
            return data.quantity += data.quantity
        }


    },
})