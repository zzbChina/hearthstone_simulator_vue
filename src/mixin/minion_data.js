let minionData = {
    /*
        随从属性说明
        level == 随从的星级
        name --随从的昵称，名字
        type -- 随从的类型
        attack -- 随从的攻击力
        health -- 随从的生命值
        skill -- 随从的技能   
            type : skill 的内置属性，表示该随从具体是触发什么类型技能效果的
        img  -- 随从的图片资源
    */
    data(){
        return{
            minions:[
    //龙star
                //1.异变多彩龙
                {
                    level : 1,
                    name : '异变多彩龙',
                    type : '龙',
                    attack : 1 ,
                    health : 3 ,
                    skill : {
                        type : 'passive',
                        //被动
                        passive(){
                            if(this.golden){
                                this.ad = this.ad * 3
                            }else{
                                this.ad = this.ad * 2
                            }
                        }
                    },
                    img:require('../assets/随从头像/龙/异变多彩龙.jpg')
                },
                //1.红色雏龙
                {
                    level : 1,
                    name : '红色雏龙',
                    type : '龙',
                    attack : 1 ,
                    health : 2 ,
                    skill : {
                        type: 'passive',
                        //圣盾
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/龙/红色雏龙.jpg')
                },
                //3.青铜守卫
                {
                    level : 3,
                    name : '青铜守卫',
                    type : '龙',
                    attack : 2 ,
                    health : 1 ,
                    skill : {
                        type : 'passive',
                        //圣盾
                        shield(){

                        }
                    },
                    img:require('../assets/随从头像/龙/青铜守卫.jpg')

                },
                //4.深蓝刃鳞龙人
                {
                    level : 4,
                    name : '深蓝刃鳞龙人',
                    type : '龙',
                    attack : 5 ,
                    health : 5 ,
                    skill : {
                        type: 'passive_end',
                        //回合结束使一名友军 + 3 攻击力
                        passive_end(index){
                            if(this.my_minions[index].golden){
                                let number = []
                                for(let i=0;i<this.my_minions.length-1;i++){
                                    if(this.my_minions[i].name != ''){
                                        number.push(i)
                                    }
                                }
                                console.log(2)
                                let random = Math.floor(Math.random()*number.length) 
                                this.my_minions[number[random]].ad += 6
                            }else{
                                console.log(1)
                                let number = []
                                for(let i=0;i<this.my_minions.length-1;i++){
                                    if(this.my_minions[i].name != ''){
                                        number.push(i)
                                    }
                                }
                                let random = Math.floor(Math.random()*number.length) 
                                this.my_minions[number[random]].ad += 3
                            }
                        }
                    },
                    img:require('../assets/随从头像/龙/深蓝刃鳞龙人.jpg')
                },
                //5.狂野的拉佐格尔
                {
                    level : 5,
                    name : '狂野的拉佐格尔',
                    type : '龙',
                    attack : 4 ,
                    health : 6 ,
                    skill : {
                        type : 'passive_end',
                        //圣盾
                        passive_end(index){
                            this.my_minions.forEach((m)=>{
                                if(m.type == '龙'){
                                    if(this.my_minions[index].golden){
                                        this.my_minions[index].ad += 2;
                                        this.my_minions[index].hp += 2;
                                    }else{
                                        this.my_minions[index].ad += 1;
                                        this.my_minions[index].hp += 1;
                                    }
                                }
                            })
                            // console.log(x)
                        }
                    },
                    img:require('../assets/随从头像/龙/狂野的拉佐格尔.jpg')

                },
                
    //龙end

    //机械star
                //微型木乃伊  一
                {
                    level : 1,
                    name : '微型木乃伊',
                    type : '机械',
                    attack : 1 ,
                    health : 2 ,
                    skill : {
                        type: 'passive_end',
                        //回合结束使一名友军 + 1 攻击力
                        passive_end(index){
                            if(this.my_minions[index].golden){
                                let number = []
                                for(let i=0;i<this.my_minions.length-1;i++){
                                    if(this.my_minions[i].name != '' && i != index){
                                        number.push(i)
                                    }
                                }
                                let random = Math.floor(Math.random()*number.length) 
                                this.my_minions[number[random]].ad += 2
                            }else{
                                let number = []
                                for(let i=0;i<this.my_minions.length-1;i++){
                                    if(this.my_minions[i].name != '' && i != index){
                                        number.push(i)
                                    }
                                }
                                let random = Math.floor(Math.random()*number.length) 
                                this.my_minions[number[random]].ad += 1
                            }
                        }
                    },
                    img:require('../assets/随从头像/机械/微型木乃伊.jpg')
                },
    //机械end

    //元素star  
                //熔融岩石 二
                {
                    level : 2,
                    name : '熔融岩石',
                    type : '元素',
                    attack : 2 ,
                    health : 4 ,
                    skill : {
                        type: 'passive',
                        //圣盾
                        passive(){
                            // let random = Math.floor(Math.random()*7) // 0-6
                            // this.my_minions[random].ad += 3;
                            this.hp += 3;
                        }
                    },
                    img:require('../assets/随从头像/元素/熔融岩石.jpg')
                },
    //元素end

    //海盗star
                
                {
                    level : 2,
                    name : '喊号食人魔',
                    type : '海盗',
                    attack : 2,
                    health : 6,
                    skill : {
                        type : 'passive',
                        passive(){

                        }
                    },
                    img : require('../assets/随从头像/海盗/喊号食人魔.jpg')
                },
                //3.海上掠夺者
                {
                    level : 3,
                    name : '海上掠夺者',
                    type : '海盗',
                    attack : 4,
                    health : 5,
                    skill : {
                        type : 'passive',
                        passive(){
                            this.my_minions.forEach((m)=>{
                                if(m.name == '海上掠夺者'){
                                    //如果海山掠夺者金色
                                    if(m.golden){
                                        m.ad += 2;
                                        m.hp += 2;
                                    }else{
                                        m.ad += 1;
                                        m.hp += 1;
                                    }
                                }
                            })
                        }
                    },
                    img : require('../assets/随从头像/海盗/海上掠夺者.jpg')
                },
                //4.掘金者
                {
                    level : 4,
                    name : '掘金者',
                    type : '海盗',
                    attack : 4,
                    health : 4,
                    skill : {
                        type : 'passive_end',
                        passive_end(index){
                            this.my_minions.forEach((m)=>{
                                if(m.golden){
                                    if(this.my_minions[index].golden){
                                        this.my_minions[index].ad += 4;
                                        this.my_minions[index].hp += 4;
                                    }else{
                                        this.my_minions[index].ad += 2;
                                        this.my_minions[index].hp += 2;
                                    }
                                }
                            })
                        }
                    },
                    img : require('../assets/随从头像/海盗/掘金者.jpg')
                },
                //4.撕心狼队长
                {
                    level : 4,
                    name : '撕心狼队长',
                    type : '海盗',
                    attack : 4 ,
                    health : 5 ,
                    skill : {
                        type: 'passive',
                        //圣盾
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/海盗/撕心狼队长.jpg')
                },
    //海盗end

    //鱼人star
                //1.石塘猎人
                {
                    level : 1,
                    name : '石塘猎人',
                    type : '鱼人',
                    attack : 2,
                    health : 3,
                    skill : {
                        type : 'battleCry_single',
                        battleCry_single(id,isGolden){
                            //如果该随从为金色
                            if(isGolden){
                                if(this.my_minions[id].type == '鱼人'){
                                    this.my_minions[id].ad += 2;
                                    this.my_minions[id].hp += 2;
                                }
                            }else{
                                if(this.my_minions[id].type == '鱼人'){
                                    this.my_minions[id].ad += 1;
                                    this.my_minions[id].hp += 1;
                                }
                            }
                            
                        }
                    },
                    img : require('../assets/随从头像/鱼人/石塘猎人.jpg')
                },
                //1.鱼人猎潮者
                {
                    level : 1,
                    name : '鱼人猎潮者',
                    type : '鱼人',
                    attack : 2,
                    health : 1,
                    skill : {
                        type : 'battleCry_single',
                        battleCry_single(){
                            
                        }
                    },
                    img:require('../assets/随从头像/鱼人/鱼人猎潮者.jpg')
                },
                //2.老瞎眼
                {
                    level : 2,
                    name : '老瞎眼',
                    type : '鱼人',
                    attack : 2 ,
                    health : 4 ,
                    skill : {
                        type: 'passive',
                        //
                        passive(){
                            this.hp += 3;
                        }
                    },
                    img:require('../assets/随从头像/鱼人/老瞎眼.jpg')
                },
                //2.鱼人领军
                {
                    level : 2,
                    name : '鱼人领军',
                    type : '鱼人',
                    attack : 3 ,
                    health : 3 ,
                    skill : {
                        type: 'passive',
                        //
                        passive(){
                            this.hp += 3;
                        }
                    },
                    img:require('../assets/随从头像/鱼人/鱼人领军.jpg')
                },
                //3.寒光先知
                {
                    level : 3,
                    name : '寒光先知',
                    type : '鱼人',
                    attack : 2,
                    health : 3,
                    skill : {
                        type : 'battleCry_all',
                        battleCry_all(id,isGolden){
                            if(isGolden){
                                this.my_minions.forEach((m)=>{
                                    if(m.name != '' && m.type == '鱼人'){
                                        m.hp += 4
                                    }
                                })
                            }else{
                                this.my_minions.forEach((m)=>{
                                    if(m.name != '' && m.type == '鱼人'){
                                        m.hp += 2
                                    }
                                })
                            }
                        }
                    },
                    img:require('../assets/随从头像/鱼人/寒光先知.jpg')
                },
                //3.邪鳍导航员
                {
                    level : 3,
                    name : '邪鳍导航员',
                    type : '鱼人',
                    attack : 4,
                    health : 4,
                    skill : {
                        type : 'battleCry_all',
                        battleCry_all(id,isGolden){
                            if(isGolden){
                                this.my_minions.forEach((m)=>{
                                    if(m.name != '' && m.type == '鱼人'){
                                        m.ad += 2;
                                        m.hp += 2;
                                    }
                                })
                            }else{
                                this.my_minions.forEach((m)=>{
                                    if(m.name != '' && m.type == '鱼人'){
                                        m.hp += 1;
                                        m.ad += 1;
                                    }
                                })
                            }
                        }
                    },
                    img:require('../assets/随从头像/鱼人/邪鳍导航员.jpg')
                },
                //5.拜格尔国王
                {
                    level : 5,
                    name : '拜戈尔格国王',
                    type : '鱼人',
                    attack : 6,
                    health : 3,
                    skill : {
                        type : 'battleCry_all',
                        battleCry_all(id,isGolden){
                            if(isGolden){
                                this.my_minions.forEach((m)=>{
                                    if(m.name != '' && m.type == '鱼人'){
                                        m.ad += 4
                                        m.hp += 4
                                    }
                                })
                            }else{
                                this.my_minions.forEach((m)=>{
                                    if(m.name != '' && m.type == '鱼人'){
                                        m.hp += 2;
                                        m.ad += 2;
                                    }
                                })
                            }
                        }
                    },
                    img:require('../assets/随从头像/鱼人/拜戈尔格国王.jpg')
                },
                
    //鱼人end
    //野兽star
                //食腐土狼 一
                {
                    level : 1,
                    name : '食腐土狼',
                    type : '野兽',
                    attack : 2,
                    health : 2,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/食腐土狼.jpg')
                },
                //暴怒的巨蜥 二
                {
                    level : 2,
                    name : '暴怒的巨蜥',
                    type : '野兽',
                    attack : 3,
                    health : 2,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/暴怒的巨蜥.jpg')
                },
                //3.巨大的金刚鹦鹉
                {
                    level : 3,
                    name : '巨大的金刚鹦鹉',
                    type : '野兽',
                    attack : 5,
                    health : 3,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/巨大的金刚鹦鹉.jpg')
                },
                //3.瘟疫鼠群
                {
                    level : 3,
                    name : '瘟疫鼠群',
                    type : '野兽',
                    attack : 2,
                    health : 2,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/瘟疫鼠群.jpg')
                },
                //4.长鬓草原狮
                {
                    level : 4,
                    name : '长鬓草原狮',
                    type : '野兽',
                    attack : 6,
                    health : 5,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/长鬓草原狮.jpg')
                },
                //4.洞穴多头蛇
                {
                    level : 4,
                    name : '洞穴多头蛇',
                    type : '野兽',
                    attack : 2,
                    health : 4,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/洞穴多头蛇.jpg')
                },
                //5.熊妈妈
                {
                    level : 5,
                    name : '熊妈妈',
                    type : '野兽',
                    attack : 5,
                    health : 5,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/熊妈妈.jpg')
                },
                //6.巨狼戈德林
                {
                    level : 6,
                    name : '巨狼戈德林',
                    type : '野兽',
                    attack : 4,
                    health : 4,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/巨狼戈德林.jpg')
                },
                //6.阴森巨蟒
                {
                    level : 6,
                    name : '阴森巨蟒',
                    type : '野兽',
                    attack : 7,
                    health : 7,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/阴森巨蟒.jpg')
                },
                //6.迈克斯纳
                {
                    level : 6,
                    name : '迈克斯纳',
                    type : '野兽',
                    attack : 2,
                    health : 8,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/野兽/迈克斯纳.jpg')
                },
                
                
    //野兽end

    //野猪人star
    //野猪人end

    //恶魔star
    //恶魔end

    //中立star
                //2.克苏恩的子嗣
                {
                    level : 2,
                    name : '克苏恩的子嗣',
                    type : '中立',
                    attack : 2,
                    health : 2,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/中立/克苏恩的子嗣.jpg')
                },
                //2.无私的英雄
                {
                    level : 2,
                    name : '无私的英雄',
                    type : '中立',
                    attack : 2,
                    health : 1,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/中立/无私的英雄.jpg')
                },
                //3.驯兽师
                {
                    level : 3,
                    name : '驯兽师',
                    type : '中立',
                    attack : 4,
                    health : 3,
                    skill : {
                        type : 'battleCry_single',
                        battleCry_single(id,isGolden){
                            if(isGolden){
                                if(this.my_minions[id].type == '野兽'){
                                    this.my_minions[id].ad += 4;
                                    this.my_minions[id].hp += 4;
                                }
                            }else{
                                if(this.my_minions[id].type == '野兽'){
                                    this.my_minions[id].ad += 2;
                                    this.my_minions[id].hp += 2;
                                }
                            }
                        }
                    },
                    img:require('../assets/随从头像/中立/驯兽师.jpg')
                },
                //4.管理者埃克索图斯
                {
                    level : 4,
                    name : '管理者埃克索图斯',
                    type : '中立',
                    attack : 6,
                    health : 3,
                    skill : {
                        type : 'passive_end',
                        passive_end(id,isGolden){
                            if(isGolden){
                                for(let i=0;i<this.my_minions.length;i++){
                                    if(this.my_minions[i].name != ''){
                                        this.my_minions[i].ad += 2;
                                        this.my_minions[i].hp += 2;
                                        return
                                    }
                                }
                            }else{
                                for(let i=0;i<this.my_minions.length;i++){
                                    if(this.my_minions[i].name != ''){
                                        this.my_minions[i].ad += 1;
                                        this.my_minions[i].hp += 1;
                                        return
                                    }
                                }
                            }
                        }
                    },
                    img:require('../assets/随从头像/中立/管理者埃克索图斯.jpg')
                },
                //5.瑞文戴尔男爵
                {
                    level : 5,
                    name : '瑞文戴尔男爵',
                    type : '中立',
                    attack : 1,
                    health : 7,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/中立/瑞文戴尔男爵.jpg')
                },
                //6.扎普斯里维克
                {
                    level : 6,
                    name : '扎普斯里维克',
                    type : '中立',
                    attack : 7,
                    health : 10,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/中立/扎普斯里维克.jpg')
                },
                //6.红衣纳迪娜
                {
                    level : 6,
                    name : '红衣纳迪娜',
                    type : '中立',
                    attack : 7,
                    health : 4,
                    skill : {
                        type : 'passive',
                        passive(){
                            
                        }
                    },
                    img:require('../assets/随从头像/中立/红衣纳迪娜.jpg')
                }
    //中立end
            ]
        }
    }
}
export default minionData