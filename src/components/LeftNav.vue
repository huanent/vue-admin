<template>
  <div class="left-nav">
    <div class="logo">
      <i class="el-icon-menu"></i>
      <a>后台管理系统</a>
    </div>
    <el-menu theme="dark" @select="addTab">
      <el-submenu index="manager">
        <template slot="title">导航一</template>
        <el-menu-item index="User">用户管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LeftNav',
  methods: {
    ...mapMutations('navTabs', [
      'addTab'
    ])
  }
}
</script>
<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 3.5rem;
  border-bottom: solid 0.01rem #48576a;
}

i {
  margin-right: 0.5rem;
}

.left-nav {
  padding: 0.3rem;
}
</style>

