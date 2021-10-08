let common_functions = {
    methods:{
        //提示框
        alertPanel(msg,time){
            this.alert.show = true;this.alert.msg = msg
            setTimeout(()=>{
                this.alert.show = false
            },time)
        },
        //清除掉该位置上随从的数据,index是索引值，type是删除的对象数组
        clearMinions(index,type){
            type[index].img = require('../assets/card.jpg');
            type[index].level = '';
            type[index].name = '';
            type[index].ad = ''
            type[index].hp = ''
            type[index].onField = false
            type[index].type = '';
            type[index].golden = false
        },
        //购买随从的复用函数,val为index值，gold为是否金色，参数为：true或false ,data为数据包
        purchaseMinionsCommon(val,gold,data){
            let add = {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : '',
                    golden : gold,
            }
            this.my.hand.push(add)
            this.my.hand[this.my.hand.length-1].img = this.bob_minions[val].img
            this.my.hand[this.my.hand.length-1].level = this.bob_minions[val].level
            this.my.hand[this.my.hand.length-1].name = this.bob_minions[val].name
            this.my.hand[this.my.hand.length-1].skill = this.bob_minions[val].skill
            this.my.hand[this.my.hand.length-1].type = this.bob_minions[val].type
            if(gold){
                //如果该随从三连了
                this.my.hand[this.my.hand.length-1].ad = data[0].ad + data[1].ad
                this.my.hand[this.my.hand.length-1].hp = data[0].hp + data[1].hp
            }else{
                this.my.hand[this.my.hand.length-1].ad = this.bob_minions[val].ad
                this.my.hand[this.my.hand.length-1].hp = this.bob_minions[val].hp
            }
        },
        //放置随从，然后将属性传递到场上的位置
        putIntoCommon(index){
            this.my_minions[this.putIndex].img = this.my.hand[index].img
            this.my_minions[this.putIndex].ad = this.my.hand[index].ad
            this.my_minions[this.putIndex].hp = this.my.hand[index].hp
            this.my_minions[this.putIndex].name = this.my.hand[index].name
            this.my_minions[this.putIndex].level = this.my.hand[index].level
            this.my_minions[this.putIndex].onField = true,
            this.my_minions[this.putIndex].skill = this.my.hand[index].skill
            this.my_minions[this.putIndex].type = this.my.hand[index].type
            if(this.my.hand[index].golden){
                this.my_minions[this.putIndex].golden = true
            }else{
                this.my_minions[this.putIndex].golden = false
            }

            //过滤出放置出去的随从
            this.my.hand = this.my.hand.filter((h,id)=>{
                return id != index
            })
        },
        //刷新时随从数据的替换函数
        replace(i,x){
            let random = Math.floor(Math.random()*x.length)//random为0-4
            this.$refs.bob_minions_image[i].src = x[random].img
            this.bob_minions[i].ad = x[random].attack;
            this.bob_minions[i].name = x[random].name;
            this.bob_minions[i].hp = x[random].health;
            this.bob_minions[i].level = x[random].level;
            this.bob_minions[i].img = x[random].img;
            //技能传递
            this.bob_minions[i].skill = x[random].skill;
            this.bob_minions[i].type = x[random].type
        },
        //如果放置的随从为金色,则触发三连效果
        isCombo(index){
            if(this.my.hand[index].golden){
                this.combo.status = true
                if(this.tavernLevel == 2){
                    for(let i=0;i<3;i++){
                        this.combo.combo_minions[i] = this.allMinions.threeLevels[Math.floor(Math.random()*this.allMinions.threeLevels.length)]
                    }
                }else if(this.tavernLevel == 3){
                    for(let i=0;i<3;i++){
                        this.combo.combo_minions[i] = this.allMinions.fourLevels[Math.floor(Math.random()*this.allMinions.fourLevels.length)]
                        console.log(this.combo.combo_minions[i])
                    }
                }else if(this.tavernLevel == 4){
                    for(let i=0;i<3;i++){
                        this.combo.combo_minions[i] = this.allMinions.fifLevels[Math.floor(Math.random()*this.allMinions.fifLevels.length)]
                    }
                }else if(this.tavernLevel == 5){
                    for(let i=0;i<3;i++){
                        this.combo.combo_minions[i] = this.allMinions.sixLevels[Math.floor(Math.random()*this.allMinions.sixLevels.length)]
                    }
                }else if(this.tavernLevel == 6){
                    for(let i=0;i<3;i++){
                        this.combo.combo_minions[i] = this.allMinions.sixLevels[Math.floor(Math.random()*this.allMinions.sixLevels.length)]
                    }
                }
                this.putIntoCommon(index)
                
            }else{
                this.putIntoCommon(index)
            }
        }
        
    }
}

export default common_functions