<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router=true
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <div class="tu"></div>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="user">
                <i class="el-icon-menu"></i>
              <span>导航二</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                选项2
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- header部分 -->
        <el-header>
          <div class="system-title">电商后台管理系统</div>
          <div>
          <el-button type="text" @click="logout">退出</el-button>
          </div>
        </el-header>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getuserlist } from '@/api/index.js'
export default {
  data: () => ({}),
  created () {
    getuserlist({ params: { pagenum: 1, pagesize: 10 } }).then(res => {
      console.log(res)
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
  width: 100%;
  position: absolute;
}
.tu {
  width: 100%;
  height: 100px;
  background: url("../assets/link-01.png") center center no-repeat;
  background-size: cover;
}
.el-container {
  height: 100%;
}
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;

  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
  .system-title {
    font-size: 28px;
    color: white;
    text-align: center;
    flex: 1;
  }
</style>
