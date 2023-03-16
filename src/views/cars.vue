<template>
    <div>
        <div class="cars">
         <div class="mainbox">
         <router-link to="/sell">
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
         </router-link>
         <router-link to="/sell">
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
         </router-link>
         <router-link to="/sell">
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
         </router-link>
         <router-link to="/sell">
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
         </router-link>
         <router-link to="/sell">
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
         </router-link>
         <router-link to="/sell">
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
         </router-link>
        
       
         
         </div>
        </div>




        <div class="contact">
       <div class="text">
        <span>contact us</span>
        <h3>keep in touch</h3>
        <form action="" @click.prevent>
             <div class="inp">
              <input type="text" placeholder="name..">
              <input type="text" placeholder="email..">
             </div>
             <input type="text" placeholder="message title ...">
             <textarea placeholder="message..." id="" cols="30" rows="10"></textarea>
             <button>send a message now</button>
        </form>
       </div>
     </div>


      <div class="filter">
      <div class="filtertext" @click="toggle">
        <h4>filter by </h4>
        <i class="fa-solid" :class="{'fa-chevron-left': check , 'fa-chevron-right': !check}"></i>
      </div>
   
        <div class="form" :class="{'active': check}">
         <div class="inp">
          <span>brand</span>
          <i class="fa-solid fa-chevron-down"></i>
         </div>
         <div class="inp">
          <span>brand</span>
          <i class="fa-solid fa-chevron-down"></i>
         </div>
         <div class="inp">
          <span>brand</span>
          <i class="fa-solid fa-chevron-down"></i>
         </div>
         <div class="inp">
          <span>brand</span>
          <i class="fa-solid fa-chevron-down"></i>
         </div>
         <button>view all vehicles</button>
           <span>reset</span>
        </div>
      </div>

   

    </div>
</template>

<script >
import { ref } from 'vue';

export default {

    setup(){
        let check = ref(false);

        const toggle = ()=>{
            check.value = !check.value; 
        }

        return{check , toggle}
    }
}

</script>

<style lang="scss" scoped>
a{
    color: #333;
}
.cars{
    margin-top: 180px;
    .mainbox{
        display: grid;
        width: 80%;
        grid-template-columns: repeat(2 , 1fr);
        gap: 10px;
        margin: 20px 18%;
    }
}

.filter{
    position: fixed;
    top: 30%;
    width: 50%;
    height: 300px;
    .filtertext{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: var(--main-color);
        cursor: pointer;
        width: 14%;
    }
    .form{
        background-color: #333333cb;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        flex-direction: column;
        padding: 20px;
        justify-content: space-around;
        transition: 0.5s;
        transform: translateX(-150%);
        &.active{
            transform: translateX(0);
        }
        .inp{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        span{
    
            text-decoration: underline;
            cursor: pointer;
        }
        button{
            cursor: pointer;
            padding: 7px 10px;
            background-color: var(--main-color);
            color: #fff;
            border-radius: 20px;
            font-size: 15px;
            border: none;
        }
    }
}


@media(max-width: 770px){
 .cars{
    .mainbox{
        grid-template-columns: repeat(1 , 1fr);
    }
 }

}

</style>