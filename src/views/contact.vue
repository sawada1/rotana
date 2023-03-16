<template>
    <div>
        <div class="textt">
         <span>contact us now</span>
         <h5>keep in touch</h5>
        </div>

        <div class="maincontact">
         <div class="box1">
           <div class="form">
            <div class="inp">
             <input type="text" placeholder="name..">
             <input type="text" placeholder="email..">
            </div>
            <input type="text" placeholder="message title...">
            <textarea placeholder="message..." id="" cols="30" rows="10"></textarea>
            <button>send a message</button>
           </div> 
         </div>
         <div class="box2">
              <div class="city">
                <div class="name">
                <div class="text">
                    <span>city name</span>
                 <i @click="check1 = !check1" class="fa-solid fa-plus"></i>  
                </div>
                 <p :class="{'active': check1}">Lorem ipsum dolor sit amet 
                 consectetur adipisicing elit. Nobis, laborum 
                 laboriosam eum impedit molestiae 
                 repudiandae. Esse, impedit veritatis! Nisi, commodi?</p>
                </div>
                <div class="name">
                <div class="text">
                    <span>city name</span>
                 <i @click="check2 = !check2" class="fa-solid fa-plus"></i>  
                </div>
                 <p :class="{'active': check2}">Lorem ipsum dolor sit amet 
                 consectetur adipisicing elit. Nobis, laborum 
                 laboriosam eum impedit molestiae 
                 repudiandae. Esse, impedit veritatis! Nisi, commodi?</p>
                </div>
                <div class="name">
                <div class="text">
                    <span>city name</span>
                 <i @click="check3 = !check3" class="fa-solid fa-plus"></i>  
                </div>
                 <p :class="{'active': check3}">Lorem ipsum dolor sit amet 
                 consectetur adipisicing elit. Nobis, laborum 
                 laboriosam eum impedit molestiae 
                 repudiandae. Esse, impedit veritatis! Nisi, commodi?</p>
                </div>
                <div class="name">
                <div class="text">
                    <span>city name</span>
                 <i @click="check4 = !check4" class="fa-solid fa-plus"></i>  
                </div>
                 <p :class="{'active': check4}">Lorem ipsum dolor sit amet 
                 consectetur adipisicing elit. Nobis, laborum 
                 laboriosam eum impedit molestiae 
                 repudiandae. Esse, impedit veritatis! Nisi, commodi?</p>
                </div>
              
              </div>

              <div class="frame">
              <iframe width="100%" height="600" frameborder="0" 
              scrolling="no" marginheight="0" marginwidth="0" 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cairo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
         </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
     let check1 = ref(false);
     let check2 = ref(false);
     let check3 = ref(false);
     let check4 = ref(false);

     return{
        check1,
        check2,
        check3,
        check4,
     }
    }
}

</script>

<style lang="scss" scoped>
 .textt{
    margin-top: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    h5{
        font-size: 20px;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            top: 110%;
            height: 3px;
            background-color: var(--main-color);
        }
    }
 }

 .maincontact{
    display: flex;
    margin-top: 50px;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    .box1{
        padding: 30px;
        width: 90%;
        background-color: #ccc;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .form{
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 100%;
            width: 100%;
            gap: 30px;

            input,textarea{
                padding: 10px;
               border: none;
               border-radius: 10px;
               font-size: 18px;
            }
          button{
            padding: 10px 20px;
            font-size: 18px;
            color: #fff;
            background-color: var(--main-color);
            cursor: pointer;
            border: none;
            border-radius: 10px;
          }
          .inp{
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
    }
    .box2{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .city{
            width: 50%;
            margin: 20px auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            .name{
                box-shadow: var(--main-shadow);
                padding: 10px;
                width: 100%;
                display: flex;
                gap: 10px;
                flex-direction: column;
                overflow: hidden;
                .text{
                    justify-content: space-between;
                display: flex;
                align-items: center;
                width: 100%;
                }
                i{
                    cursor: pointer;
                }
                p{
                    transform: translateY(-170%);
                    margin: -10px;
                    transition: 0.6s;
                    &.active{
                        transform: translateY(0);
                        margin: 0;
                    }
                }
            }
        }
        .frame{
            width: 80%;
            height: fit-content;
            margin: 20px auto;
        }
    }
 }


 @media(max-width:600px){
    .maincontact{
        .box1{
            .form{
                .inp{
                    flex-direction: column;
                }
            }
        }
    }
 }

</style>