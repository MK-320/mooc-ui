<template>
  <div :style="width ? { width: width + 'px' } : {}" class="m-card">
    <div
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
      class="m-card-img"
    >
      <img :src="imgSrc" alt="" />
    </div>
    <div v-if="summary" class="m-card-summary">
      {{ summary }}
    </div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "m-card",
  //设置卡片组件的属性，包括宽度，图片的高度，图片的地址，
  props: {
    width: {
      //整个卡片的宽度
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      //卡片的简介
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@use './card.scss';
//所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件
//你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：
</style>
