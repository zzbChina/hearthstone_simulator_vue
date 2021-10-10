let heroData = {
    data(){
        return {
            heros:[
                //帕奇维克
                {
                    name : '帕奇维克',
                    health : 55,
                    img : require('../assets/英雄头像/帕奇维克.jpg'),
                    detail : '初始生命值为60点，而非40点。'
                },
                //挂机的阿凯
                {
                    name : '挂机的阿凯',
                    health : 40,
                    img : require('../assets/英雄头像/挂机的阿凯.jpg'),
                    detail : '跳过你的前两个回合。开局时获得一个等级3或等级4的随从。'
                },
                //阿莱克丝塔萨
                {
                    name : '阿莱克丝塔萨',
                    health : 40,
                    img : require('../assets/英雄头像/阿莱克丝塔萨.jpg'),
                },
                //疯狂金字塔
                {
                    name : '疯狂金字塔',
                    health : 40,
                    img : require('../assets/英雄头像/疯狂金字塔.jpg'),
                    detail : '随机使一个友方随从获得+2生命值。'
                },
                //雷诺
                {
                    name : '雷诺',
                    health : 40,
                    img : require('../assets/英雄头像/雷诺.jpg'),
                    detail : '使一个友方随从变成金色。（每场对战限一次。）'
                },
                //尤格-萨隆
                {
                    name : '尤格-萨隆',
                    health : 40,
                    img : require('../assets/英雄头像/尤格-萨隆.jpg'),
                    detail : '随机将鲍勃的酒馆中的一个随从置入你的手牌，并使其获得+1/+1。'
                },
                //加拉克苏斯大王
                {
                    name : '加拉克苏斯大王',
                    health : 40,
                    img : require('../assets/英雄头像/加拉克苏斯大王.jpg'),
                    detail : '使你的恶魔获得+1/+1。'
                }
            ]
        }
    }
}

export default heroData