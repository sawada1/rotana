<template>
    <div>
        <div class="landing">
         <div class="bigbox">
             <h3>price <span>68,000</span> sar</h3>
             <div class="kind">
              <h3>chrysler <span>c300</span></h3>
              <p>new</p>
             
          
             </div>  
             <div class="colors">
               <div id="big" :style="{'background-color':thecolor}" class="maincolor">{{ colortext }}</div>
                  <div class="smallcolors">
                   <p>colors available</p>
                   <div class="thecolors">
                   <span   @click="changeColor(1) "   :class="{'active': color1 == 1}"  data-color="red"></span>
                   <span   @click="changeColor(2) "   :class="{'active': color1 == 2}"  data-color="black"></span>
                   <span   @click="changeColor(3)  "   :class="{'active': color1 == 3}"  data-color="gray"></span>
                   <span   @click="changeColor(4)  "   :class="{'active': color1 == 4}"  data-color="white"></span>  
                   </div>
                 
                  </div>
              
              </div> 
              <div class="icons">
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
            </div>
              <div class="icons">
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
            </div>

            <div class="btns">
             <button @click="test = !test">test drive</button>
             <button>purchase</button>
            </div>  


               <div class="textdrive" :class="{'active': test}">
               <span></span>
         <div class="container">
            <div class="text">
              <h3>test drive</h3>
              <i class="fa-solid fa-xmark" @click="test = false"></i>
            </div>
            <div class="text">
             <h3>chrysler <span>c300</span></h3>
             <p>new</p>
            </div>
            <form action="" @click.prevent>
               <input type="text" placeholder="name...">
               <input type="text" placeholder="number...">
               <input type="text" placeholder="email...">
               <input type="date" placeholder="name...">
               <span>submit</span>
            </form>
         </div>
           
         </div>    
         </div>

      
         
        </div>

        <div class="est">
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
         Aliquid aliquam quae harum saepe, unde, sunt neque soluta quas 
        ipsam id totam perspiciatis iste minima! Nulla alias delectus animi ipsa labore!</p>
         <div class="tex">
          <span @click="choose1 = 1" :class="{'active': choose1 == 1}" >estirior</span>
          <span class="dot"></span>
          <span @click="choose1 = 2" :class="{'active': choose1 == 2}" >interior</span>
         </div>
       </div>
    
       <div class="theimages" :class="{'active':choose1==2}" >
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/1-615.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
       
      
       </div>
       <div class="theimages" :class="{'active':choose1==1}" >
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
        <div class="image">
         <img src="../assets/images/img2.png" alt="">
         <div class="serach">
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
       
      
       </div>

       <div class="choose">
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
         Aliquid aliquam quae harum saepe, unde, sunt neque soluta quas 
        ipsam id totam perspiciatis iste minima! Nulla alias delectus animi ipsa labore!</p>
         <div class="tex">
          <span @click="choose2 = 1" :class="{'active': choose2 == 1}" >specifications</span>
          <span class="dot"></span>
          <span @click="choose2 = 2" :class="{'active': choose2 == 2}" >features</span>
         </div>
       </div>
       <div class="imgchoose">
         <div class="mainimg">
         <div class="theimages">
            <div class="image active">
  
                <img src="../assets/images/noun_service.svg" alt="">
            <h4>engine specifications</h4>
        
         
           
           </div>
           <div class="image">
            <img src="../assets/images/noun_service.svg" alt="">
            <h4>engine specifications</h4>
           </div>
           <div class="image">
            <img src="../assets/images/noun_service.svg" alt="">
            <h4>engine specifications</h4>
           </div>
         </div>
         <div class="paint">
        </div>
       
         </div>
        
       </div>

       <div class="similar">
        <h4>similar vehicles</h4>
        <div class="mainbox">
            <div class="boxcar">
        <i class="fa-solid fa-heart heart"></i>
         <img src="../assets/images/fiat.png" alt="">
            <div class="text">
             <h3>fiat <span>500</span></h3>
             <h3>price <span> 65,900</span> sar</h3>
            </div>
            <div class="icons">
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
            </div>
            <span class="new">new</span>

            <div class="det">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>details</span>
            </div>
        </div> 
            <div class="boxcar">
        <i class="fa-solid fa-heart heart"></i>
         <img src="../assets/images/fiat.png" alt="">
            <div class="text">
             <h3>fiat <span>500</span></h3>
             <h3>price <span> 65,900</span> sar</h3>
            </div>
            <div class="icons">
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
            </div>
            <span class="new">new</span>

            <div class="det">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>details</span>
            </div>
        </div> 
            <div class="boxcar">
        <i class="fa-solid fa-heart heart"></i>
         <img src="../assets/images/fiat.png" alt="">
            <div class="text">
             <h3>fiat <span>500</span></h3>
             <h3>price <span> 65,900</span> sar</h3>
            </div>
            <div class="icons">
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
              <i class="fa-solid fa-car"></i>
            </div>
            <span class="new">new</span>

            <div class="det">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>details</span>
            </div>
        </div> 
        </div>
       </div>
    </div>
</template>

<script>



import {ref} from 'vue'
export default {
    setup(){
      let colortext = ref('red');
      let color1 = ref(1);
      let thecolor = ref('red');


      let changeColor = (num)=>{
        color1.value = num;
        if(color1.value == 1){
            colortext.value = 'red';
            thecolor.value = 'red';
        }
        else if(color1.value == 2){
            colortext.value = 'black';
            thecolor.value = 'black';
        }
        else if(color1.value == 3){
            colortext.value = 'gray';
            thecolor.value = 'gray';
        }
        else if(color1.value == 4){
            colortext.value = 'green';
            thecolor.value = 'green';
        }
      }

      let test = ref(false);

      let choose1 = ref(1);
      let choose2 = ref(1);

     let tooglechoose1 = ()=> {
        choose1.value = !choose1.value
     }


      return{
        colortext,
        color1,
       thecolor,
       changeColor,
       test,
       choose1,
       choose2,
       tooglechoose1
    }
    }
}

</script>

<style lang="scss" scoped>

.imgchoose{
    width: 100%;
    
    margin-bottom: 300px;
    position: relative;
  
   
    .mainimg{
       width: 100%;
       position: relative;
       transition: 0.6s;
       &.active{
        display: none;
       }
       .paint{
        left: 0;
        width: 100%;
        height: 300px;
        background-color: var(--hover-color);
        position: absolute;
        top: 80%;
      
       
    }
     
        .theimages{
      
            width: 100%;
            display: grid;
        grid-template-columns: repeat(3 , 1fr);
        .image{
            overflow: visible;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            gap: 10px;
            padding: 10px;
            h4{
                font-size: 15px;
            }
            &.active{
                height: 180px;

                background-color: var(--hover-color);
            }
            img{
                width: 150px;
            }
        }
        }
       
    }
}


.est,
.choose
{
    width: 100%;
    text-align: center;
    margin: 50px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    p{
        width: 60%;
    }
    .tex{
        width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    &::before{
        content: '';
        width: 100%;
        height: 3px;
        background-color: #333;
        position: absolute;
        top: 130%;

    }
    .dot{
        height: 10px;
        width: 10px;
        background-color: #333;
        border-radius: 50%;
    }
    span{
        font-size: 20px;
        opacity: 0.5;
        position: relative;
        cursor: pointer;
        &.active{
          opacity: 1;
          border-bottom: 3px solid var(--main-color);
          padding: 5px 0px;
        }
    }
    }
}
 .landing{
    background-image: url('../assets/images/1-615.png');
    background-size: cover;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    .bigbox{
        background-color: #33333388;
        width: 600px;
        margin-top: 30px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #fff;
        h3{
            span{
                color: var(--main-color);
            }
        }
        .kind{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
                background-color:var(--main-color);
                padding: 10px 15px;
            }
        }
        .icons{
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-around;
      i{
        padding: 5px 15px;
        border-right: 1px solid #ccc;
      
      }
    }
    .colors{
        display: flex;
        align-items: center;
        gap: 30px;
        .maincolor{
            // background-color: black;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .smallcolors{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            p{
                font-size: 13px;
            }
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin: 0px 10px;
                cursor: pointer;
                position: relative;
                &.active{
                    &::before{
                        content: '';
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: blue;
                        position: absolute;
                        top: 110%;
                        right: 40%;
                    }
                }
            }
            span:nth-child(1){
                background-color: red;
            }
            span:nth-child(2){
                background-color: black;
            }
            span:nth-child(3){
                background-color: gray;
            }
            span:nth-child(4){
                background-color: green;
            }
        
        }
    }
    .btns{
        display: flex;
        align-items: center;
        gap: 20px;
        button{
            border: none;
            padding: 10px 15px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 17px;
            &:nth-child(1){
            background-color: var(--main-color);
            color: #fff;
            }
            &:nth-child(2){
            background-color: #fff;
            color:var(--main-color);
            }
        }
    }
    .textdrive{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
         background-color: #33333361;
         width: 100%;
         height: 100%;
         z-index: 1111;
         display: flex;
         align-items: center;
         justify-content: space-between;
         flex-direction: column;
         transition: 0.5s;
         transform: translateY(-170%);
         &.active{
            transform: translateY(0);
         }
         .container{
          display: flex;
        //   align-items: center;
          flex-direction: column;
          background-color: #fff;
          box-shadow: var(--main-shadow);
          padding: 30px;
          gap: 30px;
          width: 400px;
          border-radius: 10px;
          
          .text{
            color: #333;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            i{
                cursor: pointer;
            }
            p{
                background-color: var(--main-color);
                padding: 10px 15px;
                color: #fff;
            }
          }
          form{
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            gap: 10px;
            input{
                width: 100%;
                padding: 10px;
                border: none;
                outline: none;
                border-bottom: 2px solid #333;
            }
            span{
                background-color: var(--main-color);
                padding: 10px 15px;
            }
          }
         }
    }
    }
 }


 .theimages{
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    width: 90%;
    margin: 20px auto;
    gap: 20px;
    transition: 0.6s;
    &.active{
        display: none;
    }
    .image{
        position: relative;
        overflow: hidden;
        &:hover{
            .serach{
                transform: translateY(0);
            }
        }
        .serach{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--main-color);
            transition: 0.5s;
            transform: translateY(-150%);
            i{
                color: #fff;
                font-size: 20px;
            }
        }
    }
 }


 .similar{
    text-align: center;
    h4{
        position: relative;
        display: inline-block;
        &::before{
            content: '';
            position: absolute;
            width:100%;
            height: 2px;
            background-color: var(--main-color);
            top: 110%;
        }
    }
    margin: 60px 0px;
    .mainbox{
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        width: 90%;
        margin: 20px auto;
        gap: 20px;
    }
 }


@media(max-width:800px){
    .similar{
        .mainbox{
            grid-template-columns: repeat(2 , 1fr);
        }
    }
}
@media(max-width:600px){
    .similar{
        .mainbox{
            grid-template-columns: repeat(1 , 1fr);
        }
    }
}


 @media(max-width:850px){
    .theimages{
        grid-template-columns: repeat(2 , 1fr);
        &.active{
            top: -500px;
        }
    }
 }
 @media(max-width:650px){
    .theimages{
    
        grid-template-columns: repeat(1 , 1fr);
        &.active{
            top: -700px;
        }
    }
 }

 @media(max-width:600px){
    .imgchoose{
        .mainimg{
            .theimages{
                .image{
                    img{
                        width: 100px;
                    }
                }
               
            } 
        }
    }
 }
 @media(max-width:450px){
    .imgchoose{
        .mainimg{
            .theimages{
                .image{
                    h4{
                        font-size: 12px;
                    }
                    img{
                        width: 50px;
                    }
                }
               
            } 
        }
    }
 }

</style>