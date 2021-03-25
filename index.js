const baseUrl = ""
Vue.createApp({
    data(){
        return {
            records: [],
        }
    },
    created(){this.helperGetAndShow(baseUrl)},
    methods: 
    {
        async helperGetAndShow(url) { // helper metode: getAllCar + getByVendor are very similar
            try {
                const response = await axios.get(url)
                this.records = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
    }
}).mount("#app")