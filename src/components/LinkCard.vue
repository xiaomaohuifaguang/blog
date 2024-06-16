<template>
    <div>
        <!-- <el-collapse>
            <el-collapse-item :name="model.name" v-for="model in json.models">
                <template #title>
                    <el-text type="primary" size="large">{{ model.name }}</el-text>
                </template>
<div style="padding: 1rem;">
    <el-row :gutter="20">
        <el-col :span="8" style="margin-bottom: 1rem;" v-for="website in json[model.id]">
            <el-card @click="openUrl(website.url)">
                <template #header><el-text type="primary" size="large">{{ website.name
                                        }}</el-text></template>
                <el-text truncated>{{ website.description }}</el-text>
            </el-card>
        </el-col>
    </el-row>
</div>
</el-collapse-item>
</el-collapse> -->
        <div v-for="model in json.models">
            <h2>{{ model.name }}</h2>
            <el-row :gutter="20">
                <el-col :span="6" style="margin-bottom: 1rem;" v-for="website in json[model.id]">
                    <el-row>
                        <el-col :span="4" v-if="website.logo !='' ">
                            <el-image style="width: 100%;height: 100%;" :src="website.logo" fit="cover"/>
                        </el-col>
                        <el-col :span="website.logo == '' ? 24 : 20">
                            <el-card @click="openUrl(website.url)">
                        <template #header><el-text type="primary" size="large">{{ website.name }}</el-text></template>
                        <el-text truncated :title="website.description">{{ website.description }}</el-text>
                    </el-card>
                        </el-col>
                        
                    </el-row>
                    
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import {
    ElRow,
    ElCol,
    // ElCollapse,
    // ElCollapseItem,
    ElCard,
    ElText,
    ElImage
} from 'element-plus';
// import 'element-plus/es/components/row/style/css';
// import 'element-plus/es/components/col/style/css';
// // import 'element-plus/es/components/collapse/style/css';
// // import 'element-plus/es/components/collapse-item/style/css';
// import 'element-plus/es/components/card/style/css';
// import 'element-plus/es/components/text/style/css';
// import 'element-plus/es/components/image/style/css';
import 'element-plus/theme-chalk/base.css';
import 'element-plus/theme-chalk/el-row.css';
import 'element-plus/theme-chalk/el-col.css';
import 'element-plus/theme-chalk/el-card.css';
import 'element-plus/theme-chalk/el-text.css';
import 'element-plus/theme-chalk/el-image.css';


const json = ref({
    "name": "网站收藏",
    "models": [
        {
            "id": "default",
            "name": "常用"
        }
    ],
    "default": [
        {
            "name": "百度",
            "description": "广告网站",
            "url": "https://www.baidu.com",
            "icon": ""
        }
    ]
})

onMounted(() => {
    fetch('/blog/websites.json')
        .then(response => response.json())
        .then(data => {
            json.value = data
            console.log(json.value)
        });
})

const openUrl = (url: string) => {
    window.open(url);
}

</script>
<style lang="scss" scoped>
.el-card :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>