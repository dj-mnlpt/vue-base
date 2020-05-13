import v from "vue";
window.v = v;

let axios = require("axios");
window.axios = axios;

let jQuery = require("jquery");
window.jQuery = window.$ = jQuery;

// noty 

window.Noty = require("noty");

// javascript modules
require("./filter/money.js");
require("./modules/header.js");

// Vue components

require("./components/ProductForm.js");
require("./components/CartForm.js");
require("./components/MiniCart.js");





