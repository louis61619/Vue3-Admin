# Vue3-Admin

本項目是一個基於Vue3、Vuex、 ElementPlus 、TypeScript的後台管理系統的通用模板，如果覺得還不錯，請不要吝嗇你的star~

[項目地址](https://github.com/louis61619/Vue3-Admin)

[項目預覽](https://louis61619.github.io/Vue3-Admin)



## 技術棧

- 構建工具 :Webpack5.x

- 前端框架 :Vue 3.x

- UI框架 :Element Plus

- 可視化 :Echart5.x

- 文本編輯器 :WangEditor

- Git Hook 工具 :husky

- 程式碼規範 :EditorConfig + Prettier + ESLint

- 提交規範 :Commitizen + Commitlint

- 組件模板建構 :plop



## 環境變數

| Keys       | Introduction      |
| ---------- | ----------------- |
| VUE_APP_AP | 後端API的Base url |



## 項目規範

### 文檔命名規範

**資料夾** 使用小寫，多個單詞使用-分割，EX: nav-bar

**文件(.ts .vue .json .d.ts)** 使用小寫，多個單詞使用-分割，EX: nav-bar.vue

### 組件編寫規範

**組件**放在以組件名稱的資料夾下的src資料夾下，統一於index.ts中導出

**組件名稱** 除了全局導入的組件，統一大寫駝峰，EX: NavHeader

**組件樣式**小寫，多個單詞使用-分割，EX: nav-header



## 創建組件

```
npm run new
```

透過這條命令可以使用預先定義好的模板建構組件，只要輸入位於src/views下面的路徑就能自動進行建構

![image-20210905004455302](https://i.imgur.com/YEBzasG.png)



## git提交規範

統一使用npm run commit進行命令行交互式提交



## 畫面預覽

![image-20210905003913628](https://i.imgur.com/ibHJKb9.png)

![image-20210905003944692](https://i.imgur.com/Arf91pp.png)

![image-20210905004014602](https://i.imgur.com/SEcLVjG.png)
