var app = new Vue({
    el:'#model',
    data:{
        name:null,
        age:null,
        sex:null
    }
});

var ap = new Vue({
    el:'#for',
    data: {
        array: [
            {
                name: '煎饼',
                price: 2
            },
            {
                name:'大米',
                price:3
            },
            {
                name:'牛奶',
                price:5
            }
        ]
    }
});

var vbind = new Vue({
    el:'#vbind',
    data:{
        url:'https://www.baidu.com',
        isActive:true
    }
});

Vue.component('temp',{
    template:'<button :class="{like:isActive}" @click="like()">赞 {{zan}}</button>',
    data:function () {
       return{
           zan:0,
           isActive:false
       }
    },
    methods:{
        like:function () {
            if(!this.isActive){
                this.zan++;
            }else{
                this.zan--;
            }
            this.isActive = !this.isActive;
        }
    }
})

new Vue({
    el:'#component'
});
