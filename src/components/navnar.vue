<template>
    <div>
        <div class="navbar" :class="{'active': check}">
    <i class="fa-solid fa-bars bar" @click="toggle"></i>
    <div class="logo">
    <router-link to="/">
      <img src="../assets/images/logo.svg" alt="">
    </router-link>
     
    </div>
    <div class="list" :class="{'active':checkToggle}">
     <ul>
      <li>
      <router-link to="/" @click="toggle ">
       home
      </router-link>
    
      </li>
      <li>
      <router-link to="/cars" @click="toggle ">
       cars
      </router-link>
   
      </li>
      <li>
       <router-link to="/offer" @click="toggle ">offers</router-link>
      </li>
      <li>
      <router-link to="/purchase" @click="toggle ">purchase</router-link>
      </li>
      <li>
      <router-link to="/faq" @click="toggle ">faQ</router-link>
      </li>
      <li>
      <router-link to="/about" @click="toggle ">
       about
      </router-link>
    
      </li>
      <li>
      <router-link to="/contact" @click="toggle ">contact</router-link>
      </li>
      <li>
      <router-link to="/career" @click="toggle ">
       careers
      </router-link>
 
      </li>
      <li>
      <router-link to="/news" @click="toggle ">
       news
      </router-link>
  
      </li>
     </ul>
    </div>
    <div class="btns">
     <span>ع</span>
     <i class="fa-solid fa-heart"></i>
     <i @click="togglesearch" class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="search-bar" :class="{'active':searchbtn}">
       <div class="form">
        <div class="inp">
        <label for="">select the vehicle type</label>
        <i class="fa-solid fa-chevron-down"></i>
         
        </div>
        <div class="inp">
        <label for="">select the vehicle type</label>
        <i class="fa-solid fa-chevron-down"></i>
        </div>
        <input type="search">
        <span>search</span>
       </div>
    </div>
  </div>
    </div>
</template>

<script>
import{ref} from 'vue'
export default {
    setup(){
        const check = ref(false);
    const checkToggle = ref(false);
    const searchbtn = ref(false);
    const thescroll = ()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY == 0){
          check.value = false;
        }
        if(window.scrollY >= 40){
          // console.log('scrolling');
          check.value = true
        }
      });
    }

    thescroll();

    const toggle = ()=>{
      checkToggle.value = !checkToggle.value;
    }
    const togglesearch = ()=>{
      searchbtn.value = !searchbtn.value;
    }


    return{check , checkToggle , toggle , searchbtn , togglesearch}
    }
}

</script>

<style lang="scss" scoped>


.navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.269);
  padding: 30px;
  width: 95%;
  margin: 10px auto;
  position: fixed;
  top: 30px;
  right: 0px;
  left: 0px;
  z-index: 11111;
  transition: 0.6s;
  

  &.active{
    top: -15px;
    width: 100%;
  }


  .bar{
    color: #fff;
    padding: 30px;
    border-radius: 10px;
    font-size: 20px;
    background-color: var(--main-color);
    cursor: pointer;
    display: none;
  }
  
  .list{
    ul{
      display: flex;
      gap: 5px;
      align-items: center;
      li{
        margin: 0px 5px;
        a{
          font-size: 20px;
          cursor: pointer;
          color: gray;
          transition: 0.5s;
    
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
          text-decoration: underline;
        }
          &:hover{
            color: var(--main-color);
          }
        }
      }
    }
  }
  .btns{
    display: flex;
    align-items: center;
    gap: 10px;
    span,i{
      background-color: var(--main-color);
      padding: 10px 15px;
      color: #fff;
      cursor: pointer;
      border-radius: 20px;
      transition: 0.5s;
      &:hover{
        background-color: var(--hover-color);
      }
    }
  }

  .search-bar{
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--hover-color);
    padding: 10px;

    width: 75%;
    transition: 0.6s;
    transform: translateX(150%);
     &.active{
      transform: translateX(0);
     }
    .form{
      display: flex;
     align-items: center;
     gap: 10px;
     width: 100%;
     justify-content: space-between;
     color: #7a7a7a;
     .inp{
      display: flex;
      align-items: center;
      gap: 15px;
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      label{
        font-size: 17px;
        // color: #fff;
      }
      i{
        color: var(--main-color);
        cursor: pointer;
      }
     }
     input{
      border: none;
      padding: 10px;
      border-radius: 10px;
      outline: none;
      background-color: #fff;
     }
     
     span{
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      color: #4EA069;
      cursor: pointer;
     }
    }
    
  }
 
  
}



@media(max-width:1000px){
  .navbar{
    .logo{
      img{
        width: 130px;
      }
    
    }
    .list{
        ul{
          li{
            a{
              font-size: 16px;
            }
          }
        }
      }
      .btns{
        i,span{
          font-size: 13px;
          padding: 7px 10px;
        }
      }
  }
}
@media(max-width:850px){
  .navbar{
    .bar{
      display: block;
    }
    .logo{
      img{
        width: 180px;
      }
    }
    .list{
      position: absolute;
      top: 100%;
      left: 0;
      width: 50%;
      transition: 0.5s;
      transform: translateX(-150%);
      &.active{
        transform: translateX(0);
      }
      ul{
        flex-direction: column;
        background-color: var(--hover-color);
        padding: 20px;
        gap: 17px;
        height: 100vh;
        li{
          a{
            font-size: 22px;
            &.router-link-exact-active {
          color: #fff;
          text-decoration: underline;
        }
     
          }
        }
      }
    }
    .search-bar{
      width: 100%;
      .form{
        .inp{
          label{
            font-size: 14px;
          }
        }
      }
    }
  }
}


@media(max-width:562px){
  .navbar{
   .logo{
    img{
      width: 100px;
      margin: 0px 10px; 
    }
   }
   .bar{
    font-size: 15px;
    padding: 15px;
   }


    .search-bar{
      .form{
        flex-direction: column;
        .inp{
        label{
          // font-size: 12px;
        }
      }   
      }
     
    }
  }
}


</style>