<template>
    <div>
        <my-component></my-component>
    </div>
</template>
<script>
import Vue from 'vue'
import Index from '../views/Index'

export default {
    name: 'tab',
    created() {
        Vue.component("my-component",Index)
    },
    comments: {
        Index
    }
}
</script>
