<template>
  <div id="box">
     <div id="lsdxnews">
       <div id="lsdxnews-left">
          <div class="line">
            <span></span>
            楼市动向-News
          </div>
          <div v-for="i in arr" id="list">
              <router-link :to="'./xiangq/'+i.id">
            <dl>
              <dt><img :src="i.img" alt=""></dt>
              <dd>{{i.title}}</dd><br>
              <p class="time">{{i.time}}</p><br>
              <div>{{i.news2}}</div>
            </dl>
            </router-link>
          </div>
        </div>
        <div id="lsdxnews-right">
          <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9kODI5YzJiMjZiYjc0MmViNmQ1NWZiOTc4ZWEwODU4YS5qcGc_p_p100_p_3D.jpg 

" alt="">
        </div>
     </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http.get("http://localhost:8000/news").then(e=> {
      this.arr = e.body;
    });
  }
};
</script>


<style>
#lsdxnews{
  width: 100%;
  overflow: hidden;
}
#lsdxnews-left{
  margin-left: 7%;
  width: 48%;
  float: left;
}
#lsdxnews-left span{
  width: 15px;
  height: 15px;
  background-color: black;
  display: inline-block;
}
#lsdxnews-right{
  margin-top: 5%;
  width: 45%;
  height: 600px;
  float: left;
}
#lsdxnews-right img{
  height: 600px ;
  display: block;
}
.line{
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-top: 10%;
}
#list{
  overflow: hidden;
  margin-top: 25px;
}
#list dl{
  overflow: hidden;
  line-height: 24px;
}
#list dl div{
  margin-top: 4px;
  /* margin-left: 5px; */
  font-size: 10px;
  color: #999999;
}
#list dt{
  float: left;
  overflow: hidden;
  margin-right: 5px;
}
#list dt img{
  display: block;
}
#list dd{
  display: inline-block;
}
.time{
  float: left;
  color: #7379ec;
  font-size: 10px;
}
</style>


