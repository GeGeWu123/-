<template>
  <div class="kefu_container">
    <div id="message" v-scroll-bottom="sessions">
      <ul v-if="currentSessionId==sessions.id">
        <li v-for="(entry,index2) in sessions.messages" :key="index2">
          <p class="time">
            <span>{{entry.date | time}}</span>
          </p>
          <div class="main" :class="{self:entry.self}">
            <img class="avatar" :src="entry.self ? '../../assets/1.jpg' : sessions.user.img" alt="">
            <p class="text">{{entry.content}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="uesrtext">
      <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" v-on:keyup="addMessage"></textarea>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'message',
  data () {
    return {
      img: '../../assets/1.jpg',
      sessions:{
      	id:1,
      	user:{
      		name:'示例介绍',
      		img:'../../assets/2.png'
      	},
      	messages:[{
      		content:'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
      		date: new Date()
      	},{
      		content:'项目地址(原作者): https://github.com/coffcer/vue-chat',
      		date:new Date()
      	},{
      		content:'本项目地址(重构): https://github.com/is-liyiwei',
      		date:new Date()
      	}]
      },
      currentSessionId:1,
      filterKey:'',
      content:''
    }
  },
  // computed:mapState([
  // 	'sessions',
  // 	'currentSessionId'
  // ]),
  filters:{
  	time (date) {
      if (date) {
        date = new Date(date);
      }
  		return `${date.getHours()}:${date.getMinutes()}`;
  	}
  },
  directives: {/*这个是vue的自定义指令,官方文档有详细说明*/
    // 发送消息后滚动到底部,这里无法使用原作者的方法，也未找到合理的方法解决，暂用setTimeout的方法模拟
    'scroll-bottom' (el) {
      //console.log(el.scrollTop);
      setTimeout(function () {
        el.scrollTop+=9999;
      },1)
    }
  },
  methods: {
    addMessage (e) {
  		if (e.ctrlKey && e.keyCode ===13 && this.content.length) {
        console.log(e, 'e')
  			this.sessions.messages.push({
          content: this.content,
          date: new Date(),
          self:true
        })
  			this.content='';
      }
  	}
  }
}
</script>

<style lang="scss" scoped>
.kefu_container {
  position: relative;
  overflow: hidden;
  background-color: #eee;

  margin: 20px auto;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;

  #message {
    padding: 15px;
    max-height: 68%;
    overflow-y: scroll;
    ul {
      list-style-type: none;
      li {
        margin-bottom: 15px;
      }
    }
    .time {
      text-align: center;
      margin: 7px 0;
      > span {
        display: inline-block;
        padding: 0 18px;
        font-size: 12px;
        color: #FFF;
        background-color: #dcdcdc;
        border-radius: 2px;
      }
    }
    .main {
      .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
        width: 30px;
        height: 30px;

      }
      .text {
        display: inline-block;
        padding: 0 10px;
        max-width: 80%;
        background-color: #fafafa;
        border-radius: 4px;
        line-height: 30px;
        margin-top: 0px;
      }
    }
    .self {
      text-align: right;
      .avatar {
        float: right;
        margin: 0 0 0 10px;
        border-radius: 3px;
        width: 30px;
        height: 30px;
      }
      .text {
        display: inline-block;
        padding: 0 10px;
        max-width: 80%;
        background-color: #b2e281;
        border-radius: 4px;
        line-height: 30px;
      }
    }
  }
  #uesrtext {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 30%;
    border-top: solid 1px #DDD;
    > textarea {
      padding: 10px;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
}
</style>
