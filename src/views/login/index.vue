<template>
  <div class="login-container">
    <div class="title-container">
      <h2 class="title m20">山东财经大学</h2>
      <h3 class="title m40">信管专业咨询系统</h3>
    </div>

    <!-- 登录板块 -->
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div v-show="!isRegister">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="学号/工号"
            name="username"
            type="text"
          />
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <!-- 身份 -->
        <el-form-item prop="identity">
          <el-radio-group class="btns" v-model="loginForm.identity">
            <el-radio label="学生"></el-radio>
            <el-radio label="管理员"></el-radio>
          </el-radio-group>
        </el-form-item>

        <div class="btns">
          <el-button :loading="loading" type="primary" style="width:35%;" @click.native.prevent="handleLogin">登录</el-button>
          <el-button :loading="loading" type="primary" style="width:35%" @click.native.prevent="toRegister">注册</el-button>
        </div>
      </div>
    </el-form>

    <!-- 注册板块 -->
    <el-form ref="loginForm" :model="registerForm" :rules="registerRules" class="login-form" auto-complete="on" label-position="left">
      <div v-show="isRegister">
        <!-- 姓名 -->
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="form" />
          </span>
          <el-input
            ref="username"
            v-model="registerForm.username"
            placeholder="姓名"
            name="username"
            type="text"
          />
        </el-form-item>
        <!-- 学号 -->
        <el-form-item prop="userId">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="userId"
            v-model="registerForm.userId"
            placeholder="学号/工号"
            name="学号"
            type="text"
          />
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <span class="svg-container">
            <svg-icon icon-class="table" />
          </span>
          <el-input
            ref="phone"
            v-model="registerForm.phone"
            placeholder="手机号"
            name="phone"
            type="text"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="registerForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            @keyup.enter.native="handleRegister"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="repeatPassword">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="repeatPassword"
            v-model="registerForm.repeatPassword"
            :type="passwordType"
            placeholder="确认密码"
            name="repeatPassword"
          />
        </el-form-item>
        <!-- 图形验证码-待做 -->

        <div class="btns">
          <el-button :loading="loading" type="primary" style="width:35%;" @click.native.prevent="handleRegister">注册</el-button>
          <el-button :loading="loading" type="text" style="width:35%" @click.native.prevent="toLogin">取消</el-button>
        </div>
      </div>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
</template>

<script>
import { validUserId, validatePhoneNumber } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUserId = (rule, value, callback) => {
      if (!validUserId(value)) {
        callback(new Error('请输入正确的学号或工号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      let isChinese = false
      for (let i = 0; i < value.length; i++) {
        const char = value.charCodeAt(i)
        if (char < 0 || char > 255 || char === 32) {
          isChinese = true;
        }
      }
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      }else if (isChinese) {
        callback(new Error('密码中不要包含汉字和空格'));
      } else{
        callback()
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    const phoneValidate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'));
      } else if (!validatePhoneNumber(value)) {
        callback(new Error('请输入合法手机号！'));
      } else {
        callback();
      }
    }
    const validateIdentify = (rule, value, callback) => {
      if(value == '') {
        callback(new Error('请选择身份'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userId: '20160616300',
        password: '111111',
        identity: ''
      },
      loginRules: {
        userId: [{ required: true, trigger: 'blur', userId: validateUserId }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        identity: [{ required: true, validator: validateIdentify, trigger: 'change' }],
      },
      registerForm: {
        username: 'admin',
        userId: '',
        phone: '',
        password: '',
        repeatPassword: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'change' }],
        userId: [{ required: true, trigger: 'change', validator: validateUserId }],
        phone: [{ required: true, trigger: 'change', validator: phoneValidate }],
        password: [{ required: true, trigger: 'change', validator: validatePassword }],
        repeatPassword: [{ required: true, trigger: 'change', validator: checkPassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      isRegister: false
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toRegister() {
      this.isRegister = true
    },
    toLogin() {
      this.isRegister = false
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 60px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      // margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.m20{
  margin-bottom: 20px;
}
.m40{
  margin-bottom: 40px;
}
.btns{
  display:flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
