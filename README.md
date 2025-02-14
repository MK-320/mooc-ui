# mooc-ui 组件库by drgeek

### 快速开始
#### 1.安装组件库
```bash
  npm i mooc-ui-drgeek
```
#### 2.引入组件库
```javascript
在 main.js 中引入组件库

// 全部引入
import 'mooc-ui-drgeek/dist/css/index.css'
import MUI from "mooc-ui-drgeek";
Vue.use(MUI);

// 按需引入（全局注册）
import 'mooc-ui-drgeek/dist/css/demo.css'
import { Demo } from "mooc-ui-drgeek";
Vue.use(Demo);
```

```javascript
 在某个.vue文件中
// 按需引入（局部注册）
import 'mooc-ui-drgeek/dist/css/card.css'
import { Card } from "mooc-ui-drgeek"

export default {
    components: {
        Card // 局部注册
    }
}
```