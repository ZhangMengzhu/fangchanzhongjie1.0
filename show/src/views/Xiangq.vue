<template>
    <div>
        <div v-for="i in arr">
            <div id="xq">
             <p>首页>{{i.name }}</p>
            </div>
            <div class="conm">
                <div class="co-img">
                    <img :src="i.img" alt="">
                </div>
                <div class="xqbox">
                    <div class="b-1"></div>
                    <div class="all">项目名称 <span>project name</span></div>
                    <div class="cankao">参考价：<span>35,000</span></div>
                    <div class="jianjie">产品简介：自己填写</div>
                    
                        <button id="zxzx">在线咨询</button>
                    
                    <div class="im">
                        <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8wMDI3YTVhYjU5ODkzMDc0MmQ3MjU4NWI1ODUzZjVjOC0xMzB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg " alt="">
                    </div>
                </div>
                    
            </div>
        </div>
        <footer class="footer">
          <p>地产REALSTATE   2020 All Rights Reserved.</p>
        </footer>
        </div>

        
    </template>
    <script>
        export default {
            name:"Xiangq",
            data(){
                return {
                    arr:[]
                }
            },
            created(){
                this.$http.post("http://localhost:8000/xiangq",
                {id:this.$route.params.id },{emulateJSON:true}).then(e=>this.arr=e.body)
            }
        }
    </script>
    <style>
    #xq{
      width: 100%;
      line-height: 70px;
      color: #000000;
      font-size: 13px;
      padding-left: 100px;
      box-sizing: border-box;
      background: #f4f4f4;
    }
    .conm{
        width: 85%;
        margin: 0 7%;
        margin-top: 50px;
        background-color: #ccc;
        overflow: hidden;
    }
    .co-img{
        width: 50%;
        margin-top: 50px;
        float: left;
        
    }
    .co-img img{
        width: 275px;
        height: 342px;
        margin-left: 110px;
        margin-top: 20px;
    }
    .xqbox{
        width: 50%;
        float: left;
        margin-top: 90px;
        overflow: hidden;
    }
    .b-1{
        width: 5px;
        height: 20px;
        background-color: #000;
        float: left;
    }
    .all{
        margin-left: 5px;
        font-size: 16px;
        font-weight: bold;
        float: left;
    }
    .all span{
        color: #adadad;
        font-size: 12px;
    }
    .cankao{
        width: 100%;
        color: #A9A9A9;
        font-size: 16px;
        line-height: 80px;
        float: left;
    }
    .cankao span{
        color: #cc3333;
        font-size: 20px;
    }
    .jianjie{
        width: 80%;
        padding-right: 5%;
        font-size: 13px;
        line-height: 25px;
        margin-bottom: 20px;
        color: #808080;
        float: left;
    }
    
    
    
    #zxzx{
        width: 120px;
        /* float: left; */
        display: block;
        background-color: black;
        line-height: 30px;
        color: white;
        margin-bottom: 30px;
    }
    /* .io{
        width: 100%;
        float: left;
    }
    .io button{
        font-family: 微软雅黑;
        font-size: 14px;
        padding: 12px 60px;
        border-width: 1px;
        border-color: rgb(0, 0, 0);
        background-color: rgb(5, 5, 5);
        color: rgb(255, 255, 255);
        margin-bottom: 40px;
    } */
    .im{
        float: left;
        margin-bottom: 50px;
    }
    
    
    .footer{
      width: 100%;
      line-height: 80px;
      color: #8d9095;
      text-align: center;
      font-size: 12px;
      margin-top: 80px;
      background-color: #262626;
      float: left;
    }
    </style>
    