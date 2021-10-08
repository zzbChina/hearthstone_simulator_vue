<template>
  <div>
    <img :src="require('./assets/bg.jpg')" alt="" class="bg">
    <MainPanel/>
  </div>
</template>

<script>
import MainPanel from './components/MainPanel.vue'
export default {
  name: 'App',
  components: {
    MainPanel
  },
  mounted(){
  }
}
</script>

<style lang='less'>
@border:rgba(121, 84, 37);
@shit :rgba(180, 105, 7);
@lightshit : rgb(248, 151, 25);
@darkshit : rgb(78, 47, 0);
.bg{
  position: absolute; top: 0; left: 0;
  width: 100%;
  height: 100%;
}
.mian_panel{
    position: absolute; left: 50%; top : 50%;
    transform : translate(-50%,-50%);
    width: 100%;
    height: 100%;
    min-width: 1400px;
    min-height: 700px;
    user-select: none;
    .logo{
      position: absolute; top : 20px ;left : 0;
      width: 240px;
      height: 120px;
      border: 10px solid @darkshit;
      border-radius: 12px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        transform: scale(1.2);
        border-radius: 10px;
      }
    }
    .bob{
        position: absolute; top: 25px; left: 50%;
        width: 1200px;
        height: 120px;
        margin: 0 0 0 -600px;
        .bob_head{
            position: absolute; top: 0px; left: 50%;
            width: 120px;
            height: 120px;
            box-sizing: border-box;
            border: 4px solid rgba(121, 84, 37, 0.9);
            border-radius: 50%;
            margin: 0 0 0 -60px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .my_money{
            position: absolute; left: 50%; top: 10px;
            width: 150px;
            height: 100px;
            box-sizing: border-box;
            border-radius: 10px;
            border: 5px solid rgba(121, 84, 37);
            background: rgba(180, 105, 7);
            margin: 0 0 0 200px;
            .refresh{
                position: absolute; left: 0; top: 0;
                width: 140px;
                height: 40px;
                background: rgb(160, 0, 0);
                color: white;
                text-align: center;
                line-height: 40px;
                cursor: pointer;
                font-size: 16px;
                border-radius: 5px 5px 0 0;
                transition: all .2s;
            }
            .refresh:hover{
                background: rgb(255, 49, 49);
            }
            .money{
                position: absolute; top: 40px; left: 0;
                width: 140px;
                height: 46px;
                font-size: 18px;
                line-height: 46px;
                text-align: center;
                span{
                  display: inline-block;
                  position: absolute;right: 0; top:0;
                  width: 46px;
                  height: 46px;
                  text-align: center;
                  line-height: 46px;
                  font-size: 18px;
                  transition: all .2s;
                }
                span.active{
                  font-size: 30px;
                }
            }
        }
        .tavern_level{
            position: absolute; left: 50%; top: 90px;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            border-radius: 50%;
            border: 5px solid rgba(121, 84, 37, 0.9);
            text-align: center;
            line-height: 30px;
            color: white;
            background: burlywood;
            margin: 0 0 0 -60px;
        }
        .tavern_levelUp{
            position: absolute; left: 50%; top: 0;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            text-align: center;
            line-height: 40px;
            color: yellow;
            border: 5px solid rgba(121, 84, 37, 0.9);
            background: rgba(180, 105, 7, 0.9);
            margin: 20px 0 0 50px;
            transition: all .2s;
            cursor: pointer;
            user-select: none;
        }
        .tavern_levelUp:hover{
            background: rgba(252, 143, 0, 0.9);
        }
        .need_money{
            position: absolute ; top: 20px; left: 50%;
            width: 30px;
            height: 50px;
            border: 3px solid @border;
            background: @shit;
            text-align: center;
            line-height: 46px;
            box-sizing: border-box;
            margin: 10px 0 0 -100px;
            border-radius: 5px;
            color: white;
        }
        //开挂
        .open_hook{
            position : absolute;right : 0;top:50%;
            width : 120px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 8px;
            border: 4px solid @border;
            background : @shit;
            cursor: pointer;
            margin : -20px 0 0 0;
            transition : all .2s;
        }
        .open_hook:hover{
            opacity: 0.8;
        }
    }

    .combat_area{
        position: absolute; left: 50%; top : 50%;
        transform : translate(-50%,-50%);
        width: 1000px;
        height: 400px;
        background: rgba(121, 84, 37, 0.9);
        border-radius: 10px;
        box-shadow: 0 0 20px black;
        .bob_retinues,.your_retinues{
            width: 1000px;
            height: 200px;
            ul,ol{
                li{
                    position: relative;
                    float: left;
                    width: 100px;
                    height: 150px;
                    margin: 21px 0 0 30.5px;
                    border-radius: 10px;
                    background: pink;
                    border: 4px solid rgb(104, 59, 0);
                    cursor: pointer;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                    }
                    .level{
                        position: absolute; top: 0; left: 0;
                        width: 30px;
                        height: 35px;
                        background: rgb(139, 0, 139);
                        text-align: center;
                        line-height: 35px;
                        color: rgb(255, 174, 0);
                        border-radius: 6px 0 0 0;
                        font-weight: bolder;
                    }
                    .nickname{
                        position: absolute; bottom: 32px; left: 0;
                        width: 100px;
                        height: 30px;
                        text-align: center;
                        line-height: 24px;
                        font-size: 12px;
                        color: white;
                        
                        text-shadow: 0 0 5px black;
                        box-sizing: border-box;
                        background: rgb(211, 155, 0);
                        border-top: 3px solid rgb(104, 59, 0);
                        border-bottom: 3px solid rgb(104, 59, 0);
                    }
                    .ad,.hp{
                        position: absolute; left: 0;bottom: 0;
                        width: 30px;
                        height: 30px;
                        box-sizing: border-box;
                        background: red;
                        border-radius: 0 6px 0 6px;
                        background: rgb(182, 109, 0);
                        font-size: 20px;
                        text-align: center;
                        line-height: 24px;
                        color: white;
                        text-shadow: 0 0 10px white;
                        border: 3px solid rgb(110, 72, 0);
                        transition: all .2s;
                    }
                    .hp{
                        left: 70px;
                        border-radius: 6px 0 6px 0;
                        background: rgb(187, 0, 0);
                    }
                    .ad.active{
                      font-size: 30px;
                      color: rgb(72, 255, 0);
                    }
                    .hp.active{
                      font-size: 30px;
                    }
                    .mask{
                        position: absolute; top: 0; left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                        background: rgba(0, 0, 0, 0.815);
                        transition: all .3s;
                        z-index: 1;
                        .purchase,.cancel,.exchange,.sell{ 
                            position: absolute; left: 50%; top : 20%;
                            transform : translate(-50%,-50%);
                            width: 80px;
                            height: 30px;
                            font-size: 15px;
                            color:white;
                            line-height: 30px;
                            border-radius: 10px;
                            background: orange;
                            cursor: pointer;
                            transition: all .2s;
                        }
                        .exchange{
                            top: 20%;
                            background: rgb(207, 0, 214);
                        }
                        .sell{
                            top: 50%;
                        }
                        .cancel{
                            top: 80%;
                            background: red;
                        }
                        .purchase:hover,.cancel:hover,.sell:hover,.exchange:hover{
                            opacity: 0.8;
                        }
                    }
                    .gold_mask{
                        position: absolute; top: -4px; left: -4px;
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                        border: 4px solid rgb(255, 230, 0);
                        background: rgba(255, 187, 0, 0.2);
                    }
                }
                li:hover img{
                    opacity: 0.9;
                }
            }
        }
    }
    .all_turn,.next_turn{
        position: fixed; top: 50%; left: 50%;
        width: 160px;
        height: 50px;
        border-radius: 10px;
        border: 4px solid rgb(231, 170, 0);
        box-sizing: border-box;
        text-align: center;
        line-height: 42px;
        background:rgba(121, 84, 37) ;
        color: rgb(231, 170, 0);
        margin: -20px 0 0 -690px;
        transition: all .2s;
    }
    .next_turn{
        margin: -20px 0 0 530px;
        cursor: pointer;
    }
    .next_turn:hover{
        background: rgb(187, 113, 16);
    }

    .mine{
        position: absolute; left: 50%; bottom: 0;
        width: 1200px;
        height: 150px;
        // background: pink;
        margin: 0 0 0 -600px;
        .my_hero{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            box-sizing: border-box;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 5px solid rgb(121, 84, 37);
            background: @shit;
            .chose_one{
                position: absolute; left: 50%; top : 50%;
                margin: -15px 0 0 -40px;
                width: 80px;
                height: 30px;
                text-align: center;
                line-height: 20px;
                font-size: 12px;
                font-weight: bolder;
                color: @darkshit;
                border-radius: 5px;
                border: 4px solid @border;
                background: rgb(255, 199, 45);
                transition: all .2s;
            }
            .chose_one:hover{
                transform: scale(1.1);
                background: rgb(255, 223, 135);
            }
        }
        .my_hand{
            position: absolute;right: 0; top: 0;
            width: 450px;
            height: 150px;
            border-left: 3px solid @shit;
            transition: all .2s;
            li{
                    position: relative;
                    float: left;
                    width: 80px;
                    height: 130px;
                    margin: 10px 0 0 -45px;
                    border-radius: 10px;
                    background: pink;
                    border: 4px solid rgb(104, 59, 0);
                    cursor: pointer;
                    transition: all .3s;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                    }
                    .level{
                        position: absolute; top: 0; left: 0;
                        width: 30px;
                        height: 35px;
                        background: rgb(139, 0, 139);
                        text-align: center;
                        line-height: 35px;
                        color: rgb(255, 174, 0);
                        border-radius: 6px 0 0 0;
                        font-weight: bolder;
                    }
                    .nickname{
                        position: absolute; bottom: 32px; left: 0;
                        width: 80px;
                        height: 30px;
                        text-align: center;
                        line-height: 24px;
                        font-size: 2px;
                        color: white;
                        text-shadow: 0 0 5px black;
                        box-sizing: border-box;
                        background: rgb(211, 155, 0);
                        border-top: 3px solid rgb(104, 59, 0);
                        border-bottom: 3px solid rgb(104, 59, 0);
                        overflow: hidden;
                    }
                    .ad,.hp{
                        position: absolute; left: 0;bottom: 0;
                        width: 30px;
                        height: 30px;
                        box-sizing: border-box;
                        background: red;
                        border-radius: 0 6px 0 6px;
                        background: rgb(230, 176, 0);
                        font-size: 20px;
                        text-align: center;
                        line-height: 24px;
                        color: white;
                        text-shadow: 0 0 10px white;
                        border: 3px solid rgb(110, 72, 0);
                    }
                    .hp{
                        left: 51px;
                        border-radius: 6px 0 6px 0;
                        background: rgb(187, 0, 0);
                    }
                    .gold_mask{
                        position: absolute; top: -4px; left: -4px;
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                        border: 4px solid rgb(255, 230, 0);
                        background: rgba(255, 187, 0, 0.2);
                    }
            }
            .status{
              position: absolute; right: -80px; top: 50%;
              width: 120px;
              height: 50px;
              text-align: center;
              line-height: 40px;
              font-size : 14px;
              font-weight: border;
              box-sizing: border-box;
              background: @shit;
              color: rgb(70, 37, 0);
              border: 5px solid @darkshit;
              border-radius: 10px;
              margin: -25px 0 0 0;
                span{
                  font-size : 14px;
                  font-weight: border;
                  color: greenyellow;
                }
            }
        }
    }
    .alert{
        position: absolute; left: 50%; top : 50%;
        margin: -30px 0 0 -150px;
        width: 300px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: @darkshit;
        font-weight: bolder;
        border-radius: 10px;
        border: 5px solid @border;
        background: @shit;
        z-index: 5;
    }
    // 交换随从面板
    .exchange_place{
        position:fixed; top : 0; left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        .close{
            position : absolute ; right : 100px ; top: 60px;
            width: 160px;
            height : 50px ;
            box-sizing: border-box;
            text-align: center;
            line-height: 42px;
            font-size: 20px;
            color : white ;
            border-radius: 10px;
            border: 4px solid @border;
            background : @shit;
            transition: all .2s;
            cursor: pointer;
        }
        .close:hover{
            opacity: 0.8;
        }
        .body{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            width: 1000px;
            height: 200px;
            margin-top: 100px;
            background: rgba(255, 255, 255, 0.1);
            ul{
                li{
                    position: relative;
                    float: left;
                    width: 100px;
                    height: 160px;
                    margin: 16px 0 0 30.5px;
                    border-radius: 10px;
                    background: rgba(46, 46, 46, 0);
                    border: 4px solid rgb(104, 59, 0);
                    cursor: pointer;
                    .prompt{
                        position: absolute; top: -60px; left: 50%;
                        width: 120px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        border-radius: 10px;
                        background: white;
                        font-weight: bolder;
                        font-size: 15px;
                        margin: 0 0 0 -60px;
                        opacity: 0;
                        transition: all .2s;
                    }
                    .prompt:before{
                        position: absolute; bottom: -40px; left: 50%;
                        content : '';
                        border:20px solid transparent;
                        border-top-color: white;
                        margin-left: -20px;
                    }
                }
                li:hover{
                    border: 4px solid white;
                }
                li:hover .prompt{
                    transform: translateY(-20px);
                    opacity: 1;
                }
            }
        }
    }
    .battleCry{
        position:fixed; top : 0; left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        .box{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            width: 1000px;
            height: 200px;
            border-radius:10px;
            border: 5px solid @darkshit;
            background : @shit;
            ul{
                li{
                     position: relative;
                    float: left;
                    width: 100px;
                    height: 160px;
                    margin: 16px 0 0 30.5px;
                    border-radius: 10px;
                    background: rgba(46, 46, 46, 0);
                    border: 4px solid rgb(104, 59, 0);
                    cursor: pointer;
                    img{
                        width: 100%;
                        height:100%;
                        border-radius: 6px;
                        transition: all .2s;
                    }
                }
                li:hover img{
                    transform:  scale(1.2);
                }
            }
        }
        .cancel{
            position: absolute; left: 50%; top : 80%;
            transform : translate(-50%,-50%);
            width : 160px;
            height : 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 10px;
            border: 4px solid @darkshit;
            background: @shit;
            cursor: pointer;
            transition: all .2s;
        }
        .cancel:hover{
            background: @lightshit;
        }
    }

    //三连选择面板
    .combo{
        position : fixed;top : 0;left:0;
        width : 100%;
        height : 100%;
        background : rgba(0, 0, 0, 0.445);
        .chose{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            width: 400px;
            height: 210px;
            background: rgb(194, 142, 0);
            border-radius: 10px;
            border: 3px solid @border;
            ul{
                li{
                    position : relative;
                    float: left;
                    width: 100px;
                    height: 150px;
                    border-radius: 10px;
                    border: 4px solid @border;
                    margin: 27px 0 0 19px;
                    cursor: pointer;
                    transition :all .2s;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                        
                    }
                    .level{
                        position: absolute; top: 0; left: 0;
                        width: 30px;
                        height: 35px;
                        background: rgb(139, 0, 139);
                        text-align: center;
                        line-height: 35px;
                        color: rgb(255, 174, 0);
                        border-radius: 6px 0 0 0;
                        font-weight: bolder;
                    }
                    .nickname{
                        position: absolute; bottom: 32px; left: 0;
                        width: 100px;
                        height: 30px;
                        text-align: center;
                        line-height: 24px;
                        font-size: 12px;
                        color: white;
                        
                        text-shadow: 0 0 5px black;
                        box-sizing: border-box;
                        background: rgb(211, 155, 0);
                        border-top: 3px solid rgb(104, 59, 0);
                        border-bottom: 3px solid rgb(104, 59, 0);
                    }
                    .ad,.hp{
                        position: absolute; left: 0;bottom: 0;
                        width: 30px;
                        height: 30px;
                        box-sizing: border-box;
                        background: red;
                        border-radius: 0 6px 0 6px;
                        background: rgb(182, 109, 0);
                        font-size: 20px;
                        text-align: center;
                        line-height: 24px;
                        color: white;
                        text-shadow: 0 0 10px white;
                        border: 3px solid rgb(110, 72, 0);
                        transition: all .2s;
                    }
                    .hp{
                        left: 70px;
                        border-radius: 6px 0 6px 0;
                        background: rgb(187, 0, 0);
                    }
                }
                li:hover{
                    border-color:white
                    
                }
            }
        }
    }
}
.vue_mask-enter,.vue_mask-leave-to{
    opacity: 0;
}
.vue_mask-enter-to,.vue_mask-leave{
    opacity: 1;
}
</style>
