const baseUrl = "https://sl-musicwebaplication.azurewebsites.net/api/song"
Vue.createApp({
    data(){
        return {
            Records: [],
            singleRecord: null,
            idToGetBy: 0,
            deleteId: 0,
            deleteMessage: "",
            SongData: { title: "", artist: "", duration: 0 , yop: 0},
            addMessage: "",
            updateData: { title: "", artist: "", duration: 0 , yop: 0},
            updateMessage: ""
        }
    },
    created(){this.helperGetAndShow(baseUrl)},
    methods: 
    {
        getAllRecords() {
            this.helperGetAndShow(baseUrl)
        },
       
        async helperGetAndShow(url) { // helper metode: getAllCar + getByVendor are very similar
            try {
                const response = await axios.get(url)
                this.Records = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singleRecord = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteRecord(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addRecord() {
            try {
                response = await axios.post(baseUrl, this.SongData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateRecord() {
            const url = baseUrl + "/" + this.updateData.id
            try {
                response = await axios.put(url, this.updateData)
                this.updateMessage = "response " + response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")