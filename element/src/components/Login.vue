<template>
  <div class="app">
    <div class="form">
      <el-form ref="form" :model="form" :rules="rules">
          <el-form-item>
          <div>账号登录</div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="账户" prefix-icon="el-icon-mobile-phone" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码" prefix-icon="el-icon-search" class="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="button" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {User} from '@/api/index.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]}
    }
  },
  methods: {
    // 表单校验
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 登录接口调用
          User(this.form).then(res => {
            // 判断服务器是否响应成功
            if (res.meta.status === 200) {
              console.log(res.meta)
              this.$router.push('home')
            } else {
              this.$message.error(res.meta.msg)
            }
          })
        } else {
          console.log('error submit!!')
          console.log(1)
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss' >
.app {
  position: fixed;
  background: url("../assets/beijing.jpg");
  width: 100%;
  height: 100%;
  .form {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
  }
  .button {
    width: 100%;
  }
}
</style>
