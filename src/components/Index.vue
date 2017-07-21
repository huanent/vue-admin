<template>
    <div>
        <div class="nav">
            <left-nav></left-nav>
        </div>
        <div class="pane">
            <right-pane></right-pane>
        </div>
    </div>
</template>
<script>
import LeftNav from './LeftNav'
import RightPane from './RightPane'

export default {
    name: 'Home',
    components: {
        LeftNav,
        RightPane
    }
}
</script>
<style>
.nav {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 15rem;
    background-color: #324157;
}

.pane {
    position: absolute;
    left: 15rem;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>

