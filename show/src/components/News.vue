<template>
     <div id="quanxin-right">
     <div id="nn-top"> <span></span>楼市动向-News</div>
        <div id="news-right">
          <div v-for="i in arr">
            <h5>{{i.title}}</h5>
            <p>{{i.news}}</p>
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
  props: {
    a: String
  },
  created() {
    this.$http.get("http://localhost:8000/news").then(e => {
      this.arr = e.body;
    });
  }
};
</script>

<style>


#quanxin-right{
  margin-left:20px;
  margin-top:30px;
    background-color: #f7f7f7;
}
#nn-top{
  overflow: hidden;
  line-height: 30px;
}
#nn-top span{
  width: 10px;
  height: 10px;
  background-color: black;
  display: inline-block;
  margin-top: 5px;
  margin-right: 4%;
  margin-left: 10%;
}
#news-right{
  text-align: center;
}
#news-right div{
  margin-left: 8%;
  text-align: left;
  margin-top: 5%;
  position: relative;
}
#news-right div p{
    font-size: 12px;
    margin: 10px 3px;
}

</style>
