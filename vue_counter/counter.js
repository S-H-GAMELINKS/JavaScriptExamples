new Vue({
    el: "#counter",
    data: {
        count: 0
    },
    methods: {
        sum: function() {
            this.count += 1
        },
        reset: function() {
            this.count = 0
        }
    }
})