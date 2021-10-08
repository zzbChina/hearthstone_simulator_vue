# hearthstone_simulator

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


说明
1.随从的技能
---战吼：
    1.指定型战吼：指定一个随从触发战吼效果
    2.全体型战吼：没有指定目标，触发战吼效果
---被动：
    1.战斗中被动：在战斗中触发被动效果
        --持续型：在战斗中持续触发
        --一次型：在战斗中只触发一次
    2.选人中被动：在选人环节执行的被动效果
        --持续型：在选人环节中持续触发
        --开始结算型：在选人环节一开始就结算
        --结束结算型：在选人环节结束时结算
    
