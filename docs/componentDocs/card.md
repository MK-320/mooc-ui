# Card
卡片组件

### 示例：
<m-card  :imgSrc="require('./../.vuepress/publish/ai.jpg')" summary="剑指Python面试-Offer直通车 人人必修的人工智能课"></m-card>

### 代码：
```html
<template>
<m-card
imgSrc="java.png"
summary="剑指Java面试-Offer直通车  百度资深面试官授课"
/>
</template>
```

### Attributes
| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
|-----------|--------------|-------------|----------|--------|
| width     | 卡片宽度     | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 卡片概述     | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | false    | -      |