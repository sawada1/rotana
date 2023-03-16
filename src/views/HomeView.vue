<template>
  <div>
    <div class="home">
      <div class="mainbox">
       <div class="box">
        <h3>mercedes benz a-200</h3>
        <p>Lorem ipsum dolor, sit amet 
        consectetur adipisicing elit. 
        Asperiores nostrum at, nam dolore quasi illo eaque, laboriosam dolores unde minus
         consequatur veniam fuga laborum quis. Quod explicabo necessitatibus quia odio.</p>
         <router-link to="/purchase">
          <button>purchase</button> 
         </router-link>
        
       </div>
       <div class="image">
        <img src="../assets/images/Mercedes-car-PNG-Free.png" alt="">
       </div>
      </div>
  </div>

  <div class="why">
     <div class="text">
      <span>why choose</span>
      <h4>rotana cars.</h4>
     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing 
     elit. Aut, pariatur. Reiciendis sapiente, repellendus possimus quam veniam aliquam 
     saepe vel soluta magnam alias porro? Deserunt commodi quam in ea vitae eveniet?</p>
  </div>

    <div class="whyboxes">
     <div class="box">
     <img src="../assets/images/noun_Pricing.svg" alt="">
     <div class="text">
       <h5>lowest price in the market</h5>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio corrupti aspernatur laudantium, dolores quidem pariatur.</p>
     </div>
      
     </div>
     <div class="box">
     <img src="../assets/images/noun_insuranc.svg" alt="">
     <div class="text">
       <h5>lowest price in the market</h5>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio corrupti aspernatur laudantium, dolores quidem pariatur.</p>
     </div>
      
     </div>
     <div class="box">
     <img src="../assets/images/noun_service.svg" alt="">
     <div class="text">
       <h5>lowest price in the market</h5>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio corrupti aspernatur laudantium, dolores quidem pariatur.</p>
     </div>
      
     </div>
    </div>


    <div class="who">
     <div class="textbox">
       <div class="text">
         <span class="know">know more about us</span>
         <h3>who rotana are</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse ex possimus beatae at nam! Neque
           ducimus molestiae quod fugit earum.</p>
           <div class="checks">
            <div class="check">
              <i class="fa-solid fa-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="check">
              <i class="fa-solid fa-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="check">
              <i class="fa-solid fa-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
           </div>
           <span class="view">view all vehicles</span>
       </div>
     </div>

     <div class="image">
      <img src="../assets/images/toyta.png" alt="">
     </div>
    
    </div>


    <div class="latest">
     <div class="text">
      <span>get our</span>
      <h3>latest vehicles</h3>
     </div>
       <div class="mainbox">
      

        <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"

    :breakpoints="{
        0:{
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
    }"

    :autoplay="{
        delay: 3000,
     disableOnInteraction: false,
    }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
   
    <swiper-slide>
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
            <span class="offer">offer</span>

            <div class="det">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>details</span>
            </div>
        </div>

    </swiper-slide>
    <swiper-slide>
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

    </swiper-slide>
    <swiper-slide>
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

    </swiper-slide>
    <swiper-slide>
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

    </swiper-slide>
    <swiper-slide>
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

    </swiper-slide>
 

  </swiper>


       </div>
    </div>


     <div class="brands">
      <div class="text">
       <span>our vehicles brands</span>
       <h4>authorized distributer</h4>
       <div class="mainbox">
        <div class="box">
         <img src="../assets/images/v1.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v2.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v3.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v4.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v5.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v1.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v2.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v3.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v4.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v5.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v1.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v2.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v3.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v4.svg" alt="">
        </div>
        <div class="box">
         <img src="../assets/images/v4.svg" alt="">
        </div>
       </div>
      </div>
     </div>


     <div class="banner">
       <div class="text">
        <span>know more about us</span>
        <h4>who rotana are</h4>
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Mollitia, ipsa. Ipsa dolores quas iure eveniet!</p>
        <div class="btns">
         <button>corporate</button>
         <button>corporate</button>
        </div>
       </div>
     </div>


<div class="mini">
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"

    :breakpoints="{
        0:{
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
    }"

    :autoplay="{
        delay: 3000,
     disableOnInteraction: false,
    }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  
<swiper-slide>
   <div class="box">
     <img src="../assets/images/fiat.png" alt="">
     <h3>fiat <span>500</span></h3>
   </div>
</swiper-slide>
<swiper-slide>
   <div class="box">
     <img src="../assets/images/fiat.png" alt="">
     <h3>fiat <span>500</span></h3>
   </div>
</swiper-slide>
<swiper-slide>
   <div class="box">
     <img src="../assets/images/fiat.png" alt="">
     <h3>fiat <span>500</span></h3>
   </div>
</swiper-slide>
<swiper-slide>
   <div class="box">
     <img src="../assets/images/fiat.png" alt="">
     <h3>fiat <span>500</span></h3>
   </div>
</swiper-slide>
<swiper-slide>
   <div class="box">
     <img src="../assets/images/fiat.png" alt="">
     <h3>fiat <span>500</span></h3>
   </div>
</swiper-slide>
<swiper-slide>
   <div class="box">
     <img src="../assets/images/fiat.png" alt="">
     <h3>fiat <span>500</span></h3>
   </div>
</swiper-slide>

</swiper>
</div>



  </div>

</template>

<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

export default {
  name: 'HomeView',
  components: {
    Swiper,
      SwiperSlide,
  },
  setup(){
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y , Autoplay],
      };
  }
}
</script>


<style lang="scss">
   .home{
    background-image: url('../assets/images/Mask.jpg');
    height: 700px;
    // background-position: 0%;
    background-size: cover;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    .mainbox{
      margin-top: 100px;
      display: flex;
      align-items: center;
      padding: 30px;
      .box{
        width: 50%;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 30px;
        h3{
          font-size: 35px;
        }
        p{
          // color: gray;
          line-height: 30px;
        }
        button{
          background-color: var(--main-color);
          border: none;
          padding: 10px 20px;
          font-size: 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.5s;
          color: #fff;
          &:hover{
            transform: translateX(10px);
          }
        }
      }
      .image{
        width: 50%;
        img{
          width: 100%;  
        }
      }
    }
   }



.why{
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  width: 90%;
  margin: 50px auto;
  text-align: center;
  .text{
    width: 50%;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    color: #fff;
    border-radius: 20px;
    gap: 10px;
    h4{
      color: black;
      font-size: 27px;
    }
  }
  p{
    width: 50%;
    line-height: 30px;
  }
}



.whyboxes{
  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  gap: 20px;
  width: 80%;
  margin: 50px auto;
  .box{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #fff;
    box-shadow: var(--main-shadow);
    padding: 20px;
    margin: 10px;
    border-radius: 20px;
    gap: 15px;
    transition: 0.5s;
    &:hover{
      background-color: var(--hover-color);
    }
    h5{
      font-size: 17px;
    }
    cursor: pointer;
    .text{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

    }
     
  }
}


.who{
  display: flex;
  align-items: center;
  height: 500px;
  .textbox{
    width: 50%;
    background-color: var(--main-color);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    .text{
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      color:#fff;
      p{
        text-align: center;
        color: #ccc;
      }
      .checks{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        .check{
          display: flex;
          align-items: center;
          gap: 10px;
          i{
            background-color:rgb(2, 69, 2);
            padding: 5px 7px;
            border-radius: 50%;
          }
        }
      }
      h3{
        font-size: 25px;
        color: #333;
      }
      .view{
        background-color: rgb(2, 69, 2);
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.5s;
        &:hover{
          transform: translateX(10px);
        }
      }
    }
  }
  .image{
    width: 50%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}


.latest{
  .text{
    text-align: center;
  }
  margin-top: 70px;
  margin-bottom: 50px;
  .mainbox{
    width: 90%;
    margin: 50px auto;
 
  }
}


.brands{
  width: 100%;
  margin: 60px 0px;
  .text{
    text-align: center;
  }
  .mainbox{
    display: grid;
    grid-template-columns: repeat(5 , 1fr);
    gap: 10px;
    width: 100%;
    .box{
      background-color: var(--hover-color);
      margin: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 25px;
      cursor: pointer;
      transition: 0.5s;
      &:hover{
        transform: scale(1.1);
        background-color: #fff;
        box-shadow: var(--main-shadow);
      }
    }
  }
}

.mini{
  // margin: 50px 15%;
  margin: 50px 5%;
  width: 100%;
  .box{
    display: flex;
    align-items: center;
    h3{
      span{
        color: var(--main-color);
      }
    }
    img{
      width: 100px;
    }
  }
}

.banner{
  background-image: url('../assets/images/banner2.png');
  height: 300px;
  width: 100%;
  margin-bottom: 50px;
  background-position: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .text{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    color: #fff;
    span{
      font-size: 20px;
    }
    h4{
      font-size: 27px;
    }
    p{
      color: #ccc;
    }
    .btns{
      display: flex;
      align-items: center;
      gap: 20px;
      button{
        background-color: var(--main-color);
        padding: 10px 20px;
        cursor: pointer;
        border: none;
        color: #fff;

      }
    }
  }
}

@media(max-width:1050px){
  .brands{
    .mainbox{
      grid-template-columns: repeat(4 , 1fr);
    }
  }
}
@media(max-width:975px){
  .brands{
    .mainbox{
      grid-template-columns: repeat(3 , 1fr);
    }
  }
}






@media(max-width:950px){

  .whyboxes{
    grid-template-columns: repeat(2 , 1fr);
  }
}






@media(max-width:800px){
  .home{
    height: 1050px;
    background-position: 50%;
    .mainbox{
      flex-direction: column;
      margin-top: 150px;
      gap: 50px;
      .box{
        width: 100%;
      }
      .image{
        width: 100%;
      }
    }
  }
  .why{
    flex-direction: column;
    .text{
      width: 100%;
    }
    p{
      width: 100%;
    }
  }

   .whyboxes{
    grid-template-columns: repeat(1 , 1fr); 
  }
  .who{
    flex-direction: column;
    margin-bottom: 400px;
    .image{
   width: 100%;
    }
    .textbox{
      width: 100%;
      p{
        font-size: 14px;
      }
      .text{
        gap: 30px;
      }
    }
  }
  .brands{
    .mainbox{
      grid-template-columns: repeat(2 , 1fr);
    }
  }
}

@media(max-width:600px){
  .brands{
    .mainbox{
      grid-template-columns: repeat(1 , 1fr);
    }
  }
  .swiper-button-prev,
  .swiper-button-next{
    display: none;
  }
}




</style>
