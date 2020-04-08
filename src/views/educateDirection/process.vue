<template>
  <div>
    <div class="liucheng-box">
      <div class="liucheng_list w1080 middle">
        <div class="liucheng_list_item justify" v-for="(e, index) in process" :key="index" @click="viewJob(e.keyId)">
          <div class="item_intro inline">
            <div class="item_title f20 c3 pointer" @click="viewJob(e.keyId)">{{e.flowName}}</div>
            <ul type="none" v-for="(m,index) in e.flowIntro" :key="index">
              <li class="row">
                <div :style="randomRgb()" class="circle auto"></div>
                <div class="item_info f14 c3 pointer">{{m}}</div>
              </li>
            </ul>
            <div class="readAll float-right clearfix f12 pointer" @click="viewJob(e.keyId)">浏览相关岗位</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProcess } from '@/api/educateDirection'
export default {
  data() {
    return {
      id: '',
      process: '',
      detail: '',
    }
  },
  created() {
    this.id = this.$route.query.train_direction_id;
    this.queryProcess();
  },
  methods: {
    randomRgb() {
      let R = Math.floor(Math.random() * 130+110);
      let G = Math.floor(Math.random() * 130+110);
      let B = Math.floor(Math.random() * 130+110);
      return {
        background: 'rgb(' + R + ',' + G + ',' + B + ')'
        };
    },
    viewJob(keyId) {
      // 后期要考虑职位未维护的情况
      this.$router.push({path: '/educateDirection/viewJob', query: {keyId: keyId} })
    },
    queryProcess() {
      getProcess(this.id).then(res => {
        this.process = res.data.flowInfo;
        console.log(this.process, 'process')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.liucheng-box {
  // height: 1246px;
  padding: 51px 0px 100px;
  .liucheng_list {
    .liucheng_list_item {
      width: 83%;
      padding: 10px 20px;
      box-sizing: border-box;
      &:hover {
        box-shadow: 0px 6px 12.2px .8px rgba($color: #b2b2b2, $alpha: 0.3);
      }
      .item_intro {
        width: 84%;
        .item_title {
          line-height: 40px;
        }
        .item_info {
          line-height: 24px;
          width: 645px;
        }
      }
      .readAll {
        width: 81px;
        height: 24px;
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
