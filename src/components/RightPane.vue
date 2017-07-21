<template>
    <div class="right-pane">
        <el-tabs class="tabs" v-model="activeTabName" @tab-remove="closeTab" type="border-card">
            <el-tab-pane v-for="item in tabList" :key="item.name" :name="item.name" :label="item.label" :closable="item.closable">
                <component :is="item.component"></component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'

export default {
    name: 'RightPane',
    computed: {
        activeTabName: {
            get() {
                return this.$store.state.activeTabName;
            },
            set(value) {
                this.$store.commit("setActiveTabName", value);
            }
        },
        ...mapState([
            'tabList'
        ])
    },
    methods: {
        ...mapMutations([
            'closeTab'
        ])
    }
}
</script>
<style scoped>
.right-pane {
    height: 100%;
}

.tabs {
    height: 99%;
}
</style>

