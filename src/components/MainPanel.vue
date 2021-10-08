<template>
  <div class="mian_panel">
      <div class="logo">
          <img :src="require('../assets/logo.jpg')" alt="">
      </div>
      <!-- 酒馆鲍勃面板 -->
      <div class="bob">
            <div class="bob_head">
                <img :src="require('../assets/bob.png')" alt="">
            </div>
            <div class="tavern_level">{{tavernLevel}}</div>
            <div class="tavern_levelUp" @click="upMyLevel" v-show="need_money>=0"></div>
            <div class="my_money">
                <div class="refresh" @click="refresh">刷新 </div>
                <div class="money"  >剩余金币:&nbsp;&nbsp;&nbsp;<span ref="myMoney">{{my.money}}</span></div>
            </div>
            <!-- 回合 -->
            <div class="all_turn">第{{all_turns}}回合</div>
            <div class="next_turn" @click="nextTurn">下一回合</div>
            <!-- 升级酒馆所需金币 -->
            <transition name="animate__animated animate__bounce" leave-active-class="animate__zoomOut">
            <div class="need_money" v-show="need_money>=0">{{need_money}}</div>
            </transition>
            <!-- 开挂状态 -->
            <div class="open_hook" @click="addMyMoney">金币+100</div>
      </div>
      <!-- 随从区块 -->
      <div class="combat_area">
          <!-- 鲍勃的随从 -->
          <div class="bob_retinues">
              <ul>
                  <li v-for="(r,index) in 7" :key="r.index">
                      <img :src="bob_minions[index].img" alt="" ref="bob_minions_image" @click="select(index)">
                      <div class="level">{{bob_minions[index].level}}</div>
                      <div class="nickname">{{bob_minions[index].name}}</div>
                      <div class="ad">{{bob_minions[index].ad}}</div>
                      <div class="hp">{{bob_minions[index].hp}}</div>
                      <transition name='vue_mask'>
                      <div class="mask" ref="purchase_mask" v-show="bob_minions[index].isShow">
                          <button class='purchase' @click="purchaseMinions(index)">购买</button>
                          <button class='cancel' @click="cancelPurchase(index)">取消</button>
                      </div>
                      </transition>
                  </li>
              </ul>
          </div>
          <!-- 你的随从 -->
          <div class="your_retinues">
              <ol>
                  <li v-for="(m,index) in 7" :key="m.index" @click="putMinions(index)">
                      <img :src="my_minions[index].img" alt="" ref="my_minions_image" >
                      <div class="level">{{my_minions[index].level}}</div>
                      <div class="nickname">{{my_minions[index].name}}</div>
                      <div class="ad" ref="myMinionAttack">{{my_minions[index].ad}}</div>
                      <div class="hp" ref="myMinionHealth">{{my_minions[index].hp}}</div>
                      <transition name='vue_mask'>
                      <div class="mask" ref="purchase_mask" v-show="my_minions[index].isShow">
                          <button class='purchase' @click="putYourMinions(index)" v-show="my_minions[index].name == '' ">放置</button>
                          <button class='exchange'  v-show="my_minions[index].name != '' " @click.stop="exchangePlace(index)">交换</button>
                          <button class='sell'  v-show="my_minions[index].name != '' " @click="sellIt(index)">出售</button>
                          <button class='cancel' @click.stop="cancelPutYourMinions(index)">取消</button>
                      </div>
                      </transition>
                      <div class="gold_mask" v-show="my_minions[index].golden"></div>
                  </li>
              </ol>
          </div>
      </div>
      <!-- 我的面板 -->
      <div class="mine">
          <div class="my_hero">
              <button class="chose_one">选择英雄</button>
          </div>
          <div class="my_hand" ref="hands">
              <ul>
                  <li v-for="(h,index) in my.hand" :key="h.index" ref="hand" @click="putInto(index)">
                      <img :src="h.img" alt="">
                      <div class="level">{{h.level}}</div>
                      <div class="nickname">{{h.name}}</div>
                      <div class="ad">{{h.ad}}</div>
                      <div class="hp">{{h.hp}}</div>
                      <div class="gold_mask" v-show="h.golden"></div>
                  </li>
              </ul>
              <div class="status" v-show="status.put">放置状态</div>
              <div class="status" v-show="!status.put">我的手牌: <span>{{my.hand.length}}</span> 张</div>
          </div>
      </div>

      <!-- 提示面板 -->
      <transition name="animate__animated animate__bounce" enter-active-class="animate__bounceIn" leave-active-class="animate__zoomOut">
      <div class="alert" v-show="alert.show">
          {{alert.msg}}
      </div>
      </transition>

      <!-- 交换随从面板 -->
      <div class="exchange_place" v-show="exchange.open">
          <div class="close" @click="exchange.open = false">关闭</div>
          <div class="body">
              <ul>
                  <li v-for="(c,index) in 7" :key="c.index" @click="exchangeBtn(index)">
                      <div class="prompt">与该随从交换</div>
                  </li>
              </ul>
          </div>
      </div>

      <!-- 战吼选择面板 -->
      <div class="battleCry" v-show="fight.battleCry">
          <div class="box">
              <ul>
                  <li v-for="(b,index) in this.my_minions" :key="b.index" @click="choseTargetOfBattleCry(index)">
                      <img :src="b.img" alt="">
                  </li>
              </ul>
          </div>
          <div class="cancel" @click="fight.battleCry = false">取消</div>
      </div>

      <!-- 三连选择面板 -->
      <div class="combo" v-show="combo.status">
          <div class="chose">
              <ul>
                  <li v-for="(c,index) in combo.combo_minions" :key="c.index" @click="choseComboMinion(index)">
                      <img :src="combo.combo_minions[index].img" alt="">
                      <div class="level">{{combo.combo_minions[index].level}}</div>
                      <div class="nickname">{{combo.combo_minions[index].name}}</div>
                      <div class="ad">{{combo.combo_minions[index].attack}}</div>
                      <div class="hp">{{combo.combo_minions[index].health}}</div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import minionsData from '../mixin/minion_data'
import commonFunction from '../mixin/common_function'
import 'animate.css'
export default {
    name : 'MainPanel',
    mixins:[minionsData,commonFunction],
    data(){
        return{
            bob_minions : [
                {
                    level:'',
                    name : '',
                    ad : '',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : true
                }
            ],
            my_minions : [
                {
                    level:'',
                    name : '',
                    ad : '',
                    hp : '',
                    type : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    type : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    type : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                },
                {
                    level:'',
                    name : '',
                    ad:'',
                    hp : '',
                    type : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                },
                {
                    level:'',
                    name : '',
                    type : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                },
                {
                    level:'',
                    name : '',
                    type : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                },
                {
                    level:'',
                    name : '',
                    type : '',
                    ad:'',
                    hp : '',
                    isShow : false,
                    skill:{
                        type : '',
                    },
                    img : require('../assets/card.jpg'),
                    golden : false,
                    onField : false
                }
            ],
            //酒馆等级
            tavernLevel:1,
            allMinions:{
                oneLevels:[],
                twoLevels:[],
                threeLevels:[],
                fourLevels:[],
                fifLevels:[],
                sixLevels:[]
            },
            //对应酒馆等级的鲍勃随从池
            tavern_minions:{
                two : [],
                three : [],
                four : [],
                fif : [],
                six : []
            },
            //我的金币
            my:{
                money : 3,
                hand: [
                    
                ],
                
            },
            //游戏回合
            all_turns : 1,
            //提示信息
            alert:{
                show : false,
                msg : ''
            },
            //状态管理
            status:{
                put : false, //放置状态
                exchange : false, //交换状态
                hook : false
            },
            //指定位置放入随从的index
            putIndex : 0,
            //升级酒馆所需金币
            need_money : 5,
            //三连需要的info数据
            goldenData : [
                {
                    ad : 0,
                    hp : 0,
                },
                {
                    ad : 0,
                    hp : 0
                }
            ],
            //交换随从面板
            exchange:{
                open : false,
                toggleIndex : '', //交换者的index值
                goalIndex : ''  //准备交换目标的index值
            },
            fight:{
                battleCry : false, // 战吼面板
                battleCryGoalIndex : ''  //战吼对象的index
            },
            //三连随从数据
            combo:{
                status : false,
                combo_minions:[
                    {
                        name : '',
                        attack : '',
                        health : '',
                        img:require('../assets/card.jpg'),
                    },
                    {
                        name : '',
                        attack : '',
                        health : '',
                        img:require('../assets/card.jpg'),
                    },
                    {
                        name : '',
                        attack : '',
                        health : '',
                        img:require('../assets/card.jpg'),
                    }
                ]
            }
        }
    },
    methods:{
        //刷新酒馆
        refresh(){
            if(this.my.money >= 1){
                this.my.money -= 1;
                if(this.tavernLevel == 1){
                    for(let i=0;i<3;i++){
                        this.replace.call(this,i,this.allMinions.oneLevels)
                    }
                }else if(this.tavernLevel == 2){
                    for(let i=0;i<4;i++){
                        this.replace.call(this,i,this.tavern_minions.two)
                    }
                }else if(this.tavernLevel == 3){
                    for(let i=0;i<4;i++){
                        this.replace.call(this,i,this.tavern_minions.three)
                    }
                }else if(this.tavernLevel == 4){
                    for(let i=0;i<5;i++){
                        this.replace.call(this,i,this.tavern_minions.four)
                    }
                }else if(this.tavernLevel == 5){
                    for(let i=0;i<5;i++){
                        this.replace.call(this,i,this.tavern_minions.fif)
                    }
                }else{
                    for(let i=0;i<6;i++){
                        this.replace.call(this,i,this.tavern_minions.six)
                    }
                }
            }else{
                return;
            }
        },
        //选择打开购买随从面板
        select(index){
            if(this.bob_minions[index].name != ''){
                for(let i of this.bob_minions){
                    i.isShow = false
                }
                this.bob_minions[index].isShow = true
            }       
        },
        //增加金币数量
        addMyMoney(){
            this.my.money += 100;
            this.status.hook = true
        },
        //提升我的酒馆等级
        upMyLevel(){
            if(this.my.money < this.need_money){
                this.alertPanel.call(this,'金币不足，无法升级酒馆',1500)
            }else{
                if(this.tavernLevel < 6){
                    this.tavernLevel += 1;
                    //检测异变多彩的被动效果
                    this.my_minions.forEach((m)=>{
                        if(m.name == '异变多彩龙'){
                            m.skill.passive.call(m) //.call()改变this的指向，指向m对象
                        }
                    })
                    this.my.money -= this.need_money
                    //变化升级下一个等级需要的金币
                    if(this.tavernLevel < 6){
                        this.need_money = this.tavernLevel + 5
                    }else{
                        this.need_money = -1
                    }
                }else{
                    return;
                }
            }
        },
        //取消购买随从
        cancelPurchase(index){
            this.bob_minions[index].isShow = false
        },
        //点击进入下一个回合
        nextTurn(){
            this.all_turns += 1;
            this.my.money += 1;
            this.refresh();
            this.my.money = 2 + this.all_turns   
            if(this.need_money>=1){
                this.need_money -= 1;
            }
            if(this.my.money > 10){
                this.my.money = 10
            }

            //依次触发所有选人回合结束时拥有效果的随从
            this.my_minions.forEach((m,index)=>{
                if(m.skill.type == 'passive_end'){
                    if(m.golden){
                        m.skill.passive_end.call(this,index,true)
                    }else{
                        m.skill.passive_end.call(this,index,false)
                    }
                }
            })
            this.alertPanel.call(this,`第${this.all_turns}回合`,800)
        },
        //购买随从
        purchaseMinions(index){
            if(this.my.hand.length == 10){
                this.alertPanel('手牌已满，无法购买',800)
            }else{
                if(this.my.money >= 3){
                    this.purchaseMinionsCommon.call(this,index,false)
                    
                    let renumber = 0
                    for(let i of this.my.hand){
                        //在所有非金色的随从中找相同
                        if(i.golden != true){
                            //找到一个相同renumber加一
                            if(i.name == this.my.hand[this.my.hand.length-1].name){
                                renumber += 1;
                                this.goldenData[0].ad = this.my.hand[this.my.hand.length-1].ad// 把数据导入三连数据对象中
                                this.goldenData[0].hp = this.my.hand[this.my.hand.length-1].hp
                                //找到两个相同
                                if(renumber == 3){
                                    this.my_minions.forEach((m,id)=>{
                                        if(m.name == this.my.hand[this.my.hand.length-1].name && m.golden != true){
                                            this.clearMinions(id,this.my_minions) // 清除该位置上的随从数据
                                        }
                                    })
                                    this.goldenData[renumber-2].ad = this.my.hand[this.my.hand.length-1].ad// 把数据导入三连数据对象中
                                    this.goldenData[renumber-2].hp = this.my.hand[this.my.hand.length-1].hp
                                    this.my.hand = this.my.hand.filter((c)=>{
                                        //是金色直接返回给新数组，不是金色进行判断                                   
                                        return c.golden || c.name != this.my.hand[this.my.hand.length-1].name
                                    })
                                    
                                    this.purchaseMinionsCommon.call(this,index,true,this.goldenData)
                                }else{
                                    for(let i=0;i<this.my_minions.length;i++){
                                        if(this.my_minions[i].golden != true){
                                            //在你的场上找到一个相同的
                                            if(this.my_minions[i].name == this.my.hand[this.my.hand.length-1].name){
                                                renumber += 1;
                                                this.goldenData[renumber-2].ad = this.my_minions[i].ad // 把数据导入三连数据对象中
                                                this.goldenData[renumber-2].hp = this.my_minions[i].hp
                                                if(renumber == 3){
                                                    this.my_minions.forEach((m,c_id)=>{
                                                        if(m.name == this.my.hand[this.my.hand.length-1].name && m.golden != true){
                                                            this.clearMinions(c_id,this.my_minions) // 清除该位置上的随从数据
                                                        }
                                                    })
                                                    this.my.hand = this.my.hand.filter((c)=>{
                                                        //是金色直接返回给新数组，不是金色进行判断                                   
                                                        return c.golden || c.name != this.my.hand[this.my.hand.length-1].name
                                                    })
                                                    this.purchaseMinionsCommon.call(this,index,true,this.goldenData)
                                                    //成功购买
                                                    this.my.money -= 3;
                                                    this.bob_minions[index].isShow = false // 成功购买随从，关闭遮罩层
                                                    this.clearMinions.call(this,index,this.bob_minions);
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.my.money -= 3;
                    this.bob_minions[index].isShow = false // 成功购买随从，关闭遮罩层

                    this.clearMinions(index,this.bob_minions);
                    
                }else{
                    this.alertPanel('金币不足，无法购买随从',1500)
                }
            }
        },
        //打开放置随从面板
        putMinions(index){
            for(let m of this.my_minions){
                m.isShow = false
            }
            this.my_minions[index].isShow = true
            this.putIndex = index
        },
        //取消放置你的随从
        cancelPutYourMinions(index){
            if(this.status.put){
                this.$refs.hands.style.width = '450px'
                for(let h of this.$refs.hand){
                    h.style.margin = '10px 0 0 -45px'
                }
                this.status.put = false
            }else{
                this.my_minions[index].isShow = false
                console.log(this.my_minions[index].isShow)
            }
        },
        //放置我的随从
        putYourMinions(){
            this.$refs.hands.style.width = '1100px'
            for(let h of this.$refs.hand){
                h.style.margin = '10px 0 0 10px'
            }
            this.status.put = true

           
        },
        //将手牌随从放置在战场上
        putInto(index){
            if(this.status.put){
                if(this.my_minions[this.putIndex].onField == false){
                    //判断该随从是否是单目标战吼随从，是的话就触发其战吼
                    if(this.my.hand[index].skill.type == 'battleCry_single'){
                        this.fight.battleCryGoalIndex = index; //将该战吼随从的索引号传给battleCryGoalIndex这个对象            
                        this.fight.battleCry = true // 打开战吼选择面板
                        //判断该随从是否为海盗,调用函数
                        if(this.my.hand[index].type == '海盗'){
                            this.my_minions.forEach((m)=>{
                                if(m.name == '海上掠夺者'){
                                    m.skill.passive.call(this)
                                }
                            })
                        }
                    //判断是否为多目标战吼随从，是的话触发其战吼
                    }else if(this.my.hand[index].skill.type == 'battleCry_all'){
                        if(this.my.hand[index].golden){
                            //判断是否为金色随从
                            this.my.hand[index].skill.battleCry_all.call(this,index,true);
                        }else{
                            this.my.hand[index].skill.battleCry_all.call(this,index,false);
                        }
                        //判断该随从是否为海盗,调用函数
                        if(this.my.hand[index].type == '海盗'){
                            this.my_minions.forEach((m)=>{
                                if(m.name == '海上掠夺者'){
                                    m.skill.passive.call(this)
                                }
                            })
                        }
                         //调用三连效果函数
                        this.isCombo.call(this,index)
                    }else{
                        //判断该随从是否为海盗,调用函数
                        if(this.my.hand[index].type == '海盗'){
                            this.my_minions.forEach((m)=>{
                                if(m.name == '海上掠夺者'){
                                    m.skill.passive.call(this)
                                }
                            })
                        }
                        
                        //调用三连效果函数
                        this.isCombo.call(this,index)
                        
                    }
                }else{
                    this.alertPanel.call(this,'该位置已放置了一个随从',1500)
                }
            }
        },
        //选择战吼对象
        choseTargetOfBattleCry(id){
            if(this.my_minions[id].name == ''){
                let sum = 0;
                for(let i of this.my_minions){
                    if(i.name == ''){
                        sum++;
                    }
                }
                if(sum == 7){
                    this.putIntoCommon.call(this,this.fight.battleCryGoalIndex)
                    this.fight.battleCry = false //选择目标后，关闭战吼选择面版
                }else{
                    //必须选择一个有随从目标的位置
                    this.alertPanel.call(this,'请选择一个正确的目标',800)
                }
                
            }else{
                if(this.my.hand[this.fight.battleCryGoalIndex].golden){
                    this.my.hand[this.fight.battleCryGoalIndex].skill.battleCry_single.call(this,id,true); //id传递目标索引，true表示该随从是否为金色
                }else{
                    this.my.hand[this.fight.battleCryGoalIndex].skill.battleCry_single.call(this,id,false);
                }
                this.putIntoCommon.call(this,this.fight.battleCryGoalIndex) // 调用复用函数
                this.fight.battleCry = false //选择目标后，关闭战吼选择面版
            }
        },
        //出售我的随从
        sellIt(index){
            this.clearMinions.call(this,index,this.my_minions)
            this.my.money += 1;
        },
        //交换两个随从之间的位置
        exchangePlace(index){
            this.exchange.open = true;
            this.exchange.toggleIndex = index;
        },
        //确认与目标交换位置
        exchangeBtn(id){
            if(id == this.exchange.toggleIndex){
                this.alertPanel.call(this,'该随从不可选中',1000)
            }else{
                let temp = this.my_minions[this.exchange.toggleIndex];
                this.my_minions[this.exchange.toggleIndex] = this.my_minions[id];
                this.my_minions[id] = temp ;
            }
            //交换成功后清除遮罩层
            this.exchange.open = false
        },
        //选择三连的奖励对象
        choseComboMinion(id){
            let info = {
                level:'',
                name : '',
                ad:'',
                hp : '',
                isShow : false,
                img : '',
                golden : false,
            };
            this.my.hand.push(info)
            this.my.hand[this.my.hand.length-1].img = this.combo.combo_minions[id].img
            this.my.hand[this.my.hand.length-1].level = this.combo.combo_minions[id].level
            this.my.hand[this.my.hand.length-1].name = this.combo.combo_minions[id].name
            this.my.hand[this.my.hand.length-1].skill = this.combo.combo_minions[id].skill
            this.my.hand[this.my.hand.length-1].type = this.combo.combo_minions[id].type
            this.my.hand[this.my.hand.length-1].ad = this.combo.combo_minions[id].attack
            this.my.hand[this.my.hand.length-1].hp = this.combo.combo_minions[id].health
            this.combo.status = false
        }
    },
    watch:{
        'my.money':{
            handler(){
                console.log('金币变化了')
                this.$refs.myMoney.classList.add('active')
                setTimeout(()=>{
                    this.$refs.myMoney.classList.remove('active')
                },100)
                // this.$refs.myMoney.fontSize = '15px'
            }
        },
        //监测每个随从的属性值变化，每次变化都让数据昌盛变化
        'my_minions.ad':{
            deep:true,//深度监视
            ad:{
                deep:true,
                 handler(){
                //不处与放置状态才变化数据
                    alert('变化了');
                    // if(this.status.put != true){
                    //         for(let i=0;i<this.my_minions.length;i++){
                    //             this.$refs.myMinionAttack[i].classList.add('active')
                    //             setTimeout(()=>{
                    //                 this.$refs.myMinionAttack[i].classList.remove('active')
                    //             },100)
                    //         }
                    //         for(let i=0;i<this.my_minions.length;i++){
                    //             this.$refs.myMinionHealth[i].classList.add('active')
                    //             setTimeout(()=>{
                    //                 this.$refs.myMinionHealth[i].classList.remove('active')
                    //             },100)
                    //         }
                    // }
                        
                }
            }
        }
    },
    mounted(){
        // 将不同等级的随从进行分类
        this.minions.forEach((m)=>{
            if(m.level == 1){
                this.allMinions.oneLevels.push(m)
            }else if(m.level == 2){
                this.allMinions.twoLevels.push(m)
            }else if(m.level == 3){
                this.allMinions.threeLevels.push(m)
            }else if(m.level == 4){
                this.allMinions.fourLevels.push(m)
            }else if(m.level == 5){
                this.allMinions.fifLevels.push(m)
            }else{
                this.allMinions.sixLevels.push(m)
            }
        })

        this.tavern_minions.two = this.allMinions.oneLevels.concat(this.allMinions.twoLevels);
        this.tavern_minions.three = this.tavern_minions.two.concat(this.allMinions.threeLevels);
        this.tavern_minions.four = this.tavern_minions.three.concat(this.allMinions.fourLevels);
        this.tavern_minions.fif = this.tavern_minions.four.concat(this.allMinions.fifLevels);
        this.tavern_minions.six = this.tavern_minions.fif.concat(this.allMinions.sixLevels);

        this.refresh();
        this.my.money = 3; //重置酒馆金币为3个

        
    }
}
</script>

<style lang='less'>

</style>