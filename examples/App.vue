<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
    <m-card
      :imgSrc="require('./assets/springBoot.jpg')"
      summary="SpringBoot+ChatGLM 实战AI数字人面试官系统"
    />
    <m-card
      :imgSrc="require('./assets/ai.jpg')"
      summary="AIGC实战 -人人必修的人工智能课"
    >
      <template v-slot:footer>
        <div
          class="footer"
          style="padding: 0 8px; font-size: 14px; text-align: left"
        >
          <div
            class="level"
            style="color: #9199a1; margin-bottom: 3px; font-size: 13px"
          >
            中级 · 120人报名
          </div>
          <div class="inline" style="display: flex">
            <span class="dis">金蛇迎春</span>
            <span class="price">￥86.00</span>
            <span class="price2">￥299</span>
          </div>
        </div>
      </template>
    </m-card>

    <m-card :imgHeight="90" :imgSrc="require('./assets/sf.jpg')" :width="370">
      大厂校招、社招 算法数据结构类问题一网打尽。
      <template v-slot:footer>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 3px 8px;
          "
        >
          <div class="level">4步骤 · 4门课</div>
          <div class="level">1170收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dis {
  border: 1px solid rgba(242, 13, 13, 0.2);
  border-radius: 2px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(242, 13, 13, 0.6);
  padding: 3px 4px;
  margin-right: 5px;
}

.price {
  color: #f01414;
  margin-right: 5px;
  font-weight: 700;
  align-self: center;
}

.price2 {
  text-decoration: line-through;
  color: #6d7278;
  align-self: center;
}

.level {
  font-size: 12px;
  color: #9199a1;
}
</style>
