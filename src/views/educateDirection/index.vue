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
      overView: [
        {
          id: 1,
          item: '信息系统开发方向',
          children: [
            {
              subitem: '系统规划与需求分析',
              subitemDetail: '（1）提出系统开发的要求。业务需求初步调研，调查分析用户的总体需求，了解新系统应达到的总体目标。（2）制定项目开发计划。（3）分析信息系统目标，确定信息系统项目边界，完成项目范围定义和项目内容分解。（4）可行性分析。业务需求详细调研，调查系统应达到的功能目标；调查系统应用环境的现状；调查系统用户的人员状况；管理人员、技术人员、用户群数量。'
            },
            {
              subitem: '系统设计',
              subitemDetail: '（1）业务流程设计。（2）系统功能设计，划分子系统和功能模块，设计详细功能。（3）系统数据结构设计，建立完整数据字典。'
            },
            {
              subitem: '系统开发',
              subitemDetail: '（1）程序设计和编写。（2）系统调试，据系统说明书和系统实施方案，对程序设计的结果进行全面的检查，找出并纠正其中的错误，把错误尽量消灭在系统正式运行以前。（3）编写系统使用说明书，包括系统运行环境的介绍、应用系统的介绍、操作说明、系统输出报表的相关说明、系统管理与维护说明等'
            },
            {
              subitem: '系统测试',
              subitemDetail: '任务包括计算机等硬件设备的购置、安装和调试，应用程序的编制和调试，人员培训，数据文件转换，系统调试与转换等。'
            },
            {
              subitem: '系统运行维护',
              subitemDetail: '（1）系统正式运行（2）随着业务需求和流程的改变，对系统进行维护和修改（3）记录系统在上线后出现的问题，将问题专业化并产生问题反馈记录提交到相关的部门。'
            },
          ]

        },
        {
          id: 2,
          item: '企业信息化方向',
          children: [
            {
              subitem: '第一阶段：电子数据处理（EDP）阶段',
              subitemDetail: '企业开始有了计算机，并从事一些简单的数据处理。其中可能计算机会很多，但是没有中心服务器的概念，每台计算机的地位相互平等。这阶段的计算机在数据处理中的应用仅限于减轻人员在计算方面的劳动强度，如用于计算工资、统计账目等，属于电子数据处理业务。对企业单项业务进行处理，较少涉及管理内容。'
            },
            {
              subitem: '第二阶段：事务处理阶段（TPS）',
              subitemDetail: '随着企业业务需求的增长和技术条件的发展，计算机间逐渐产生了部门间信息共享的需求。计算机在局部事务处理中产生了管理功能，但并没有形成对企业全局的管理。'
            },
            {
              subitem: '第三阶段：管理信息系统阶段（MIS）',
              subitemDetail: '管理信息系统是用系统思想建立起来的，以电子计算机为基本信息处理手段，以现代通信设备为基本传输工具，并能为管理决策提供信息服务的人机系统。MIS阶段，信息系统形成了对企业全局的计算机应用。强调以企业管理系统为背景，以基层业务系统为基础。并且强调企业各业务系统间的信息联系，以完成企业总体任务为目标。它能为企业各级领导提供管理需要的信息，但信息的范围还更多的侧重于企业内部。'
            },
            {
              subitem: '第四阶段：决策支持阶段（DSS）',
              subitemDetail: '其实当前的计算机信息系统已经从管理信息系统发展成更强调支持企业高层决策的决策支持系统了。'
            }
          ]

        },
        {
          id: 3,
          item: '财经大数据方向',
          children: [
            {
              subitem: '数据分析定义',
              subitemDetail: '数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，提取有用信息和形成结论而对数据加以详细研究和概括总结的过程。这一过程也是质量管理体系的支持过程。在实用中，数据分析可帮助人们作出判断，以便采取适当行动。从事数据分析有关工作的人成为数据分析师。就业方向：政府、金融、电信、零售、互联网、电商、医学等行业专门从事数据分析与数据挖掘的人员'
            }
          ]
        },
      ],
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
.clearfix {
  &:after, &:before {
    display: block;
    content: " ";
    clear: both;
  }
}
.float-right {
  float: right;
}

.pointer {
  cursor: pointer;
}

.f20 {
  font-size: 20px;
  font-family: PingFangSC-Regular, sans-serif;
}
.f14 {
  font-size: 14px;
  font-family: PingFangSC-Regular, sans-serif;
}
.f12 {
  font-size: 12px;
  font-family: PingFangSC-Regular, sans-serif;
}
.c3 {
  color: #333;
}

.c6 {
  color: #666;
}

.c9 {
  color: #999;
}
.middle {
  margin: 0 auto;
  height: 100%;
}

.w1080 {
  width: 1200px;
  padding: 0 60px;
}
.justify {
  text-align: justify;
  &::after {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    height: 0;
    content: '';
    vertical-align: top;
  }
}

.inline {
  display: inline-block;
  vertical-align: text-top;
}
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

