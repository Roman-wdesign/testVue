var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green.jpg",
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: "./assets/vmSocks-green.jpg"
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: "./assets/vmSocks-blue.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})