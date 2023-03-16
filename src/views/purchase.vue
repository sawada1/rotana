<template>
    <div>
     <div class="purchasetext">
       <span>find what you need</span>
       <h3>purchase order.</h3>
     </div>

     
     <div class="est">
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
         Aliquid aliquam quae harum saepe, unde, sunt neque soluta quas 
        ipsam id totam perspiciatis iste minima! Nulla alias delectus animi ipsa labore!</p>
         <div class="tex">
          <span @click="choose1 = 1" :class="{'active': choose1 == 1}" >specifications</span>
          <span class="dot"></span>
          <span @click="choose1 = 2" :class="{'active': choose1 == 2}" >features</span>
         </div>
       </div>


       <div class="mainform" :class="{'active': choose1==2}">
       <div class="finance" :class="{'active':fin==2}">
        <div class="form">
          <div class="inp">
           <p>payment method</p>
           <div class="btns">
            <button @click="fin = 1" :class="{'active': fin == 1}" >finance</button>
            <button  @click="fin = 2" :class="{'active': fin == 2}"  >cash</button>
           </div>
          </div>
          <div class="inp">
           <label for="">the selected vehicle *</label>
           <input type="text" >
          </div>
          <div class="inp">
           <label for="">price *</label>
           <input type="text" placeholder="price..." >
          </div>
          <div class="inp">
           <label for="">name *</label>
           <input type="text" placeholder="name">
          </div>
          <div class="inp">
           <label for="">mobile *</label>
           <input type="text" placeholder="mobile.." >
          </div>
         </div>
         <div class="form">
          <div class="inp">
           <label>total salary in ATM *</label>
           <input type="number" placeholder="salary">
          </div>
          <div class="inp">
           <label for="">total commitment *</label>
           <input type="number" >
          </div>
          <div class="inp">
           <label for="">is there a mortage loan ? *</label>
           <div class="radio">
           <div class="ra">
            <label for="">yes</label>
            <input type="radio" placeholder="price..." checked > 
           </div>
           <div class="ra">
            <label for="">no</label>
            <input type="radio" placeholder="price..." > 
           </div>
        
           </div>
          
          </div>
          <div class="inp">
           <label for="">the last instalment *</label>
           <input type="number" placeholder="">
          </div>
          <div class="inp">
           <label for="">the first instalment </label>
           <input type="number" placeholder="" >
          </div>
         </div>
         <div class="form">
          <div class="inp">
           <p>city</p>
            <input type="text" placeholder="city...">
          </div>
          <div class="inp">
           <label for="">employer*</label>
           <input type="text" placeholder="employer">
          </div>
          <div class="inp">
           <label for="">bank account *</label>
           <select>
            <option value="">select bank</option>
            <option value="">select bank</option>
            <option value="">select bank</option>
            <option value="">select bank</option>
           </select>
          </div>
          <div class="inp">
           <label for="">driving licence statues *</label>
           <div class="radio">
           <div class="ra">
            <label for="">yes</label>
            <input type="radio" placeholder="price..." checked > 
           </div>
           <div class="ra">
            <label for="">no</label>
            <input type="radio" placeholder="price..." > 
           </div>
        
           </div>
          </div>
          
         </div>
         <span class="btn">send</span>
       </div>
       <div class="cash" :class="{'active':fin==2}">
        <div class="form">
          <div class="inp">
           <p>payment method</p>
           <div class="btns">
            <button @click="fin = 1" :class="{'active': fin == 1}" >finance</button>
            <button  @click="fin = 2" :class="{'active': fin == 2}"  >cash</button>
           </div>
          </div>
          <div class="inp">
           <label for="">the selected vehicle *</label>
           <input type="text" >
          </div>
          <div class="inp">
           <label for="">price *</label>
           <input type="text" placeholder="price..." >
          </div>
          <div class="inp">
           <label for="">name *</label>
           <input type="text" placeholder="name">
          </div>
          <div class="inp">
           <label for="">mobile *</label>
           <input type="text" placeholder="mobile.." >
          </div>
         </div>
         <span class="btn">send</span>
       </div>


       
       </div>

       <div class="mainform" :class="{'active': choose1==1}">
         <div class="textt">
          <p>Lorem ipsum dolor sit amet consectetur
          , adipisicing elit. Non impedit iusto
           culpa beatae nulla earum consequuntur accusantium nemo nesciunt, vitae,
           eum at qui facere, aspernatur soluta odio doloribus quibusdam voluptatem.</p>
           <div class="iconss">
            <div class="icon">
                <i class="fa-solid fa-phone"></i>
                <span>phone: 01021313100</span>
            </div>
            <div class="icon">
                <i class="fa-brands fa-whatsapp"></i>
                <span>whatsapp: 01021313100</span>
            </div>
            <div class="icon">
                <i class="fa-solid fa-envelope"></i>
                <span>email: email@gmail.com</span>
            </div>
           </div>
           <p class="fill">or please fill the form below: you will recive a reply within a maximum of 24 hours</p>
         </div>
         <div class="finance" :class="{'active':fin==2}">
            <div class="form">
          <div class="inp">
           <p>payment method</p>
           <div class="btns">
            <button @click="fin = 1" :class="{'active': fin == 1}" >finance</button>
            <button  @click="fin = 2" :class="{'active': fin == 2}"  >cash</button>
           </div>
          </div>
          <div class="inp">
           <label for="">bank account *</label>
           <select>
            <option value="">select bank</option>
            <option value="">select bank</option>
            <option value="">select bank</option>
            <option value="">select bank</option>
           </select>
          </div>
          <div class="inp">
           <label for="">driving licence statues *</label>
           <div class="radio">
           <div class="ra">
            <label for="">yes</label>
            <input type="radio" placeholder="price..." checked > 
           </div>
           <div class="ra">
            <label for="">no</label>
            <input type="radio" placeholder="price..." > 
           </div>
        
           </div>
          </div>
          <div class="inp">
           <label for="">the selected vehicle *</label>
           <input type="text" >
          </div>
          <div class="inp">
           <label for="">price *</label>
           <input type="text" placeholder="price..." >
          </div>
          <div class="inp">
           <label for="">name *</label>
           <input type="text" placeholder="name">
          </div>
         </div>
         </div>
         <div class="cash" :class="{'active':fin==2}">
            <div class="form">
          <div class="inp">
           <p>payment method</p>
           <div class="btns">
            <button @click="fin = 1" :class="{'active': fin == 1}" >finance</button>
            <button  @click="fin = 2" :class="{'active': fin == 2}"  >cash</button>
           </div>
          </div>
          <div class="inp">
           <label for="">the selected vehicle *</label>
           <input type="text" >
          </div>
          <div class="inp">
           <label for="">price *</label>
           <input type="text" placeholder="price..." >
          </div>
          <div class="inp">
           <label for="">name *</label>
           <input type="text" placeholder="name">
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
      let choose1 = ref(1);

      let fin = ref(1);

      let main = ref(1);


      return{choose1 , fin , main}
    }
}

</script>

<style lang="scss" scoped>
.purchasetext{
    margin-top: 170px;
    text-align: center;
    h3{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            background-color: var(--maincolor);
            top: 110%;
            height: 2px;
        }
    }
}

.est{
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
        // content: '';
        // width: 100%;
        // height: 3px;
        // background-color: #333;
        // position: absolute;
        // top: 130%;

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

.mainform{
    width: 100%;
    text-align: center;
    margin: 50px 0px;
    &.active{
        display: none;
    }
    .btn{
        text-align: center;
        background-color: var(--main-color);
        padding: 10px 20px;
        color: #fff;
        cursor: pointer;
        font-size: 18px;
        border-radius: 10px;
   
    }

    .textt{
        width: 80%;
        margin: 20px auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        .fill{
            background-color: var(--hover-color);
            padding: 10px;
            color: #fff;
            font-size: 15px;
            text-align: center;
        }
        .iconss{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            .icon{
                width: 100%;
                display: flex;
                align-items: center;
                gap: 10px;
                i{
                    color: var(--main-color);
                }
            }
        }
    }

    .cash{
        display: none;
        &.active{
            display: block;
        }
    }
    .finance{
        &.active{
            display: none;
        }
    }
    .form{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
         justify-content: space-around;
        height: 300px;
        margin: 50px auto;
        border-bottom: 2px solid var(--main-color);
        align-items: center;
        .inp{
            text-align: center;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
         
            .radio{
                display: flex;
                align-items: center;
                gap: 40px;
                .ra{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
            .btns{
                display: flex;
                align-items: center;
                button{
                    padding: 10px 15px;
                    cursor: pointer;
                    border: none;
                    font-size: 18px;
                    &.active{
                        background-color: var(--main-color);
                        color: #fff;
                    }
                  
                }
            }
            input,
            select
            {
                padding: 10px;
                border: none;
                border-radius: 20px;
                background-color: var(--hover-color);
                color: #fff;
                outline: none;
            }
        }
    }
}

@media(max-width:600px){
    label{
  font-size: 11px;
    }
}

</style>