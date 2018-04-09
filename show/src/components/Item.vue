<template>
  <div>
      <div class="de">
        <div class="h1">
        {{b}} 
        <div>{{c}}</div>
      </div>
      <div class="con" v-for="i in arr">
        <router-link :to="'./xiangq/'+i.id">
        <img :src="i.img">
        <div class="main">
            <div><h3>{{i.name}}</h3></div>
            <div class="ma-item">地区：{{i.name}}</div>
            <div class="ma-item">户型：{{i.des}}</div>
            <div class="ma-item">价格：{{i.price}}</div>
        </div>
        </router-link>
      </div>
      <div class="btn">
       <button>浏览更多{{b}}</button>
   </div>
    </div>
   
  </div>
</template>

<script>
export default {
    data(){
        return{
            b:"",
            c:"",
            arr:[],
        }
    },
    props:{
        a:String
    },
    created(){
        this.$http.post('http://localhost:8000/',{fenlei:this.a,one:0,two:3},{emulateJSON:true}).then(e=>this.arr=e.body)
        if(this.a==1){
            this.b="全新楼盘"
            this.c="- New Apartment -"
        }else if(this.a==2){
            this.b="二手楼盘"
            this.c="- New Shops -"
        }else if(this.a==3){
            this.b="全新商铺"
            this.c="- Second Hand -"
        }
    }
}
</script>

<style>
.h1{
    width: 100%;
    line-height: 80px;
    font-size: 26px;
    text-align: center;
}
.h1 div{
    line-height: 0;
    margin-bottom: 30px;
    margin-top: -12px;
    color: #ccc;
    vertical-align: top;
    font-size: 14px;
}
.con{
  width: 30%;
  margin-left: 2.5%;
  margin-bottom: 40px;
  float: left;
}
.con img{
    width: 100%;
    font-size: 0;
    vertical-align: middle;
}
.de{
  width: 86%;
  margin-top: 20px;
  margin-left: 12%;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  overflow: hidden;
}
.main{
    background-color: #fff;
}
.main h3{
    font-weight: bold;
    margin: 6px 4px;
}
.btn{
    width: 100%;
    line-height: 80px;
    text-align: center;
}
.btn button{
    width: 130px;
    line-height: 40px;
    font-size: 12px;
    background-color: #f7f7f7;
    border: 1px solid #3a79e8;
}
.ma-item{
    font-size: 14px;
    line-height: 30px;
}
</style>
