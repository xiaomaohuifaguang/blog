<template>
    <div class="nav-container">
        <div v-for="model in json.models" :key="model.id" class="category-section">
            <h2 class="category-title">{{ model.name }}</h2>
            <el-row :gutter="16">
                <el-col 
                    :xs="24" 
                    :sm="12" 
                    :md="8" 
                    :lg="6" 
                    v-for="website in json[model.id]" 
                    :key="website.url"
                    class="card-col"
                >
                    <div class="link-card" @click="openUrl(website.url)">
                        <div class="card-content">
                            <div class="logo-wrapper" v-if="website.logo">
                                <img :src="website.logo" :alt="website.name" class="site-logo" />
                            </div>
                            <div class="logo-placeholder" v-else>
                                <span class="placeholder-text">{{ getFirstChar(website.name) }}</span>
                            </div>
                            <div class="site-info">
                                <h3 class="site-name">{{ website.name }}</h3>
                                <p class="site-desc" :title="website.description">{{ website.description }}</p>
                            </div>
                        </div>
                    </div>
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
} from 'element-plus';
import 'element-plus/theme-chalk/base.css';
import 'element-plus/theme-chalk/el-row.css';
import 'element-plus/theme-chalk/el-col.css';

const json = ref({
    "name": "网站收藏",
    "models": [],
})

onMounted(() => {
    fetch('/blog/websites.json')
        .then(response => response.json())
        .then(data => {
            json.value = data
        })
        .catch(err => {
            console.error('Failed to load websites.json:', err)
        })
})

const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
}

const getFirstChar = (name: string) => {
    return name.charAt(0).toUpperCase()
}
</script>

<style lang="scss" scoped>
.nav-container {
    padding: 0.5rem 0;
}

.category-section {
    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.category-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e4e7ed;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.card-col {
    margin-bottom: 1rem;
}

.link-card {
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #e4e7ed;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    height: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        border-color: #409eff;
    }

    &:active {
        transform: translateY(-2px);
    }
}

.card-content {
    display: flex;
    align-items: center;
    gap: 0.875rem;
}

.logo-wrapper {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    overflow: hidden;
    background: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
}

.site-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
}

.logo-placeholder {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder-text {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
}

.site-info {
    flex: 1;
    min-width: 0;
}

.site-name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #303133;
    margin: 0 0 0.25rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.site-desc {
    font-size: 0.8125rem;
    color: #909399;
    margin: 0;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

// Dark mode support
@media (prefers-color-scheme: dark) {
    .category-title {
        color: #e0e0e0;
        border-bottom-color: #4a4a4a;
    }

    .link-card {
        background: #2a2a2a;
        border-color: #4a4a4a;

        &:hover {
            border-color: #409eff;
        }
    }

    .logo-wrapper {
        background: #3a3a3a;
    }

    .site-name {
        color: #e0e0e0;
    }

    .site-desc {
        color: #a0a0a0;
    }
}

// Responsive adjustments
@media (max-width: 768px) {
    .link-card {
        padding: 0.875rem;
    }

    .logo-wrapper,
    .logo-placeholder {
        width: 40px;
        height: 40px;
    }

    .site-logo {
        width: 24px;
        height: 24px;
    }

    .placeholder-text {
        font-size: 1.125rem;
    }
}
</style>
