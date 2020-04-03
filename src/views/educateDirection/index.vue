<template>
  <div>
    <div class="news-box">
      <div class="news_list w1080 middle">
        <div class="news_list_item justify" v-for="(item, index) in derictionList" :key="index" @click="toDetail(item)">
          <div class="item_img inline" @click="toDetail(item)">
            <img src="@/assets/bigData.jpg" alt="">
          </div>
          <div class="item_intro inline">
            <div class="item_title f20 c3 pointer" @click="toDetail(item)">{{item.name}}</div>
            <div class="item_info f14 c9 pointer" @click="toDetail(item)">{{item.describe}}</div>
            <div class="readAll float-right clearfix f12 pointer" @click="toDetail(item)">流程介绍</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEducateDirection } from '@/api/educateDirection'
export default {
  data() {
    return {
      derictionList: [],
      data: ''
    }
  },
  created() {
    this.getDeriction();
  },
  methods: {
    viewDetail(id) {
      // this.$router.push({ path: '/educateDirection/directionOverview', query: { train_direction_id: train_direction_id }})
      this.data = this.overView[id - 1];
    },
    getDeriction() {
      getEducateDirection().then(res => {
        var temp = res.data;
        this.derictionList = [];
        temp.forEach(item => {
          this.derictionList.push({
            name: item.trainDirectionName,
            describe: item.trainDirectionContent,
            train_direction_id: item.keyId,
          })
        });
        console.log(res.data)
      })
    },
    toDetail(item) {
      console.log(item)
      this.$router.push({path: '/educateDirection/directionOverview', query: { train_direction_id: item.train_direction_id }})
    }
  }
}
</script>

<style lang="scss">
.news-box {
  // height: 1246px;
  padding: 51px 0px 100px;
  .news_list {
    .news_list_item {
      height: 195px;
      width: 83%;
      padding: 43px 20px;
      box-sizing: border-box;
      border: 1px #dcdcdc solid;
      margin-bottom: 30px;
      &:hover {
        box-shadow: 0px 6px 12.2px .8px rgba($color: #b2b2b2, $alpha: 0.3);
      }
      .item_img {
        width: 130px;
        height: 130px;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 100%;
          height: 100%;
          border-radius: 50%
        }
      }
      .item_intro {
        width: 84%;
        .item_title {
          line-height: 40px;
          // &:hover {
          //   color: $mianColor;
          // }
        }
        .item_info {
          line-height: 24px;
        }
      }
      .readAll {
        width: 60px;
        height: 23px;
        // line-height: 24px;
        padding: 3px 0px;
        color: #409EFF;
        text-align: center;
        box-sizing: border-box;
        border: #409EFF 1px solid;
        border-radius: 4px;
        &:hover {
          color: #fff;
          background: #409EFF;
        }
      }
    }
  }
}
</style>

