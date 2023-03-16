<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
   <navbar/>
   <router-view v-slot="{Component}">
  <transition name="fade" mode="out-in">
       <component :is="Component"></component>
  </transition>
  </router-view>

  <div class="footer">
    <div class="mainbox">
      <div class="box">
       <img src="./assets/images/logo.svg" alt="">
       <p>Lorem ipsum dolor sit amet consectetur 
       adipisicing elit. Nesciunt nulla 
       nisi aliquid illo labore pariatur.</p>
       <span>follow us</span>
       <div class="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
       </div>
      </div>
      <div class="box">
       <h4>rotana</h4>
       <div class="list">
        <span>home</span>
        <span>cars</span>
        <span>office</span>
        <span>purchase</span>
       </div>
      </div>
      <div class="box">
       <h4>faQ</h4>
       <div class="list">
        <span>terms and condition</span>
        <span>privacy policy</span>
        <span>about us</span>
        <span>contact us</span>
       </div>
      </div>
      <div class="box">
       <h4>rotana</h4>
       <div class="cont">
         <div class="co">
          <i class="fa-solid fa-phone"></i>
           <p>+201021189596</p>
         </div>
         <div class="co">
          <i class="fa-solid fa-envelope"></i>
           <p>+201021189596</p>
         </div>
         <div class="co">
          <i class="fa-brands fa-whatsapp"></i>
           <p>+201021189596</p>
         </div>
         <div class="co">
          <i class="fa-solid fa-location-dot"></i>
           <p>+201021189596</p>
         </div>
       </div>
       <span>subscribe free newsletter</span>
       <div class="input">
        <input type="text" placeholder="email..">
        <button>submit</button>
       </div>

      </div>
    </div>
  </div>
</template>



<script>
 import navbar from './components/navnar.vue'
 export default {
  components:{
   navbar
  },
  setup(){

  }

 }
</script>

<style lang="scss">

:root{
    --main-color: #4EA069;
    --main-shadow:0 .5rem 1rem rgba(0,0,0,.1);
    --hover-color:#8fbd9f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
body{

}

.footer{
  width: 100%;
  background-color: #333;
  .mainbox{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 10px;
    color: #fff;
    padding: 30px;
    text-align: center;
    .box{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      span{
        color: var(--main-color);
      }
      .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        span{
          color: #fff;
        }
      }
      h4{
        color: var(--main-color);
      }
      .icons{
        display: flex;
        align-items: center;
        gap: 20px;
        
      }
      .cont{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .co{
          display: flex;
          align-items: center;
          gap: 10px;
          i{
            color: var(--main-color);
          }
        }
      }
      .input{
        width: 100%;
        input{
          background-color: transparent;
          border: none;
          outline: none;
          color: #fff;
          width: 50%;
        }
        button{
          background-color: var(--main-color);
          border: none;
          color: #fff;
          padding: 5px;
     cursor: pointer;
        }
        padding: 10px;
        border-bottom: 1px solid #fff;
      }
    }
  }
}


@media(max-width:920px){
  .footer{
    .mainbox{
      grid-template-columns: repeat(3 , 1fr);
      gap: 30px;
    }
  }
}
@media(max-width:720px){
  .footer{
    .mainbox{
      grid-template-columns: repeat(2 , 1fr);
      gap: 30px;
    }
  }
}
@media(max-width:520px){
  .footer{
    .mainbox{
      grid-template-columns: repeat(1 , 1fr);
      gap: 50px;
    }
  }
}




.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
</style>
