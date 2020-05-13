import {
    store
} from "./../shared/cartData.js";

if (document.querySelector('.shopify-product-form')) {

    let productForm = new v({
        el: ".shopify-product-form",

        data() {
            return {
                form: {
                    id: document.getElementById("variant-id").value,
                    quantity: 1,
                },
            };
        },

        created() {
            // mini cart is on every page, that's why, we cal it once here
            store.getCart();
        },
        

        methods: {
            addToCart() {
                // axios
                //     .post("/cart/add.js", this.form)
                //     .then(function (response) {
                //         new Noty({
                //             type: "success",
                //             timeout: 3000,
                //             layout: "topRight",
                //             text: "Product added to cart",
                //         }).show();
                //     })
                //     .catch(function (error) {
                //         new Noty({
                //             type: "error",
                //             layout: "topRight",
                //             text: "Product added to cart",
                //         }).show();
                //     });
                axios.post('/cart/add.js', this.form )
                .then( (response) => {

                    // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if(found){
                            found.quantity += parseInt(this.form.quantity);
                            
                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        }else{
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // open mini cart
                        // $('.mini-cart').dropdown('show');

                         this.showMiniCart();

                    new Noty({
                        type: 'success',
                        timeout: 3000,
                        layout: 'topRight',
                        text: 'Product added to cart!'
                    }).show();

                })
                .catch( (error) =>  {
                    console.log(error);
                    new Noty({
                        type: 'error',
                        layout: 'topRight',
                        text: 'Some notification text' // fix if the item is existing, it notifies here
                    }).show();
                });

            },
            showMiniCart(){
                // fix for boostrap dropdown javascript opening and closing
                // $('.miniCartParent').toggleClass('hidden'); // the minicart will pop up after click the add to card/
                // $('.mini-cart .dropdown-menu').addClass('show');
                // $('.mini-cart .dropdown-item-text').removeClass('show');

                document.querySelector('.miniCartChild').classList.remove('hidden');
                // $('.miniCartChild').fadeOut(2000);
                setTimeout(() => document.querySelector('.miniCartChild').classList.add('hidden'), 2000)

                
            }
        },
    });

}

// import { store } from "./../shared/cartData.js";


// if (document.querySelector('.shopify-product-form')) {

//     let productForm = new v({
//         el:".shopify-product-form",

//         data(){
//             return{
//                 form:{
//                     id: document.getElementById('variant_id').value ,
//                     quantity: 1,
//                 }

//             }
//         },

//         methods:{

//             addToCart(){
                // axios.post('/cart/add.js', this.form )
                //     .then( (response) => {

                //         // add data to mini cart object
                //             // check if product already exist
                //             let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                //             if(found){
                //                 found.quantity += parseInt(this.form.quantity);
                                
                //                 // you can reset the quanity back to 1 if you want
                //                 // this.form.quantity = 1;
                //             }else{
                //                 // add item at the start of array
                //                 store.state.cartData[0].items.unshift(response.data);
                //             }
                //             // open mini cart
                //             // $('.mini-cart').dropdown('show');

                //             // this.closeMiniCart();

                //         new Noty({
                //             type: 'success',
                //             timeout: 3000,
                //             layout: 'topRight',
                //             text: 'Product added to cart!'
                //         }).show();

                //     })
                //     .catch( (error) =>  {
                //         console.log(error);
                //         new Noty({
                //             type: 'error',
                //             layout: 'topRight',
                //             text: 'Some notification text'
                //         }).show();
                //     });
//             },

            // closeMiniCart(){
            //     // fix for boostrap dropdown javascript opening and closing
            //     $('.mini-cart').addClass('show');
            //     $('.mini-cart .dropdown-menu').addClass('show');
            //     $('.mini-cart .dropdown-item-text').removeClass('show');
            // }


//         }
//     });

    
// }