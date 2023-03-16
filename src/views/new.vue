<template>
    <div>
        <div class="textt">
         <span>be aware of our</span>
         <h3>latest news</h3>
        </div>


<div class="mainnews">
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
      <div class="box">
          <div class="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, est!</p>
            <div class="icons">
             <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
            </div>
          </div>
        </div>

    </swiper-slide>
  <swiper-slide>
      <div class="box">
          <div class="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, est!</p>
            <div class="icons">
             <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
            </div>
          </div>
        </div>

    </swiper-slide>
  <swiper-slide>
      <div class="box">
          <div class="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, est!</p>
            <div class="icons">
             <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
            </div>
          </div>
        </div>

    </swiper-slide>
  <swiper-slide>
      <div class="box">
          <div class="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, est!</p>
            <div class="icons">
             <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
            </div>
          </div>
        </div>

    </swiper-slide>
  <swiper-slide>
      <div class="box">
          <div class="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, est!</p>
            <div class="icons">
             <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
            </div>
          </div>
        </div>

    </swiper-slide>
  <swiper-slide>
      <div class="box">
          <div class="text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, est!</p>
            <div class="icons">
             <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
            </div>
          </div>
        </div>

    </swiper-slide>
</swiper>
</div>

<div class="newscar">
<router-link to="/newpage">
    <div class="box">
    <div class="image">
     <img src="../assets/images/new3.png" alt="">
    </div>
    <div class="text">
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="icons">
        <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
             <span>read more</span>
     </div>
    </div>
  </div>
</router-link>
<router-link to="/newpage">
    <div class="box">
    <div class="image">
     <img src="../assets/images/new3.png" alt="">
    </div>
    <div class="text">
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="icons">
        <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
             <span>read more</span>
     </div>
    </div>
  </div>
</router-link>
<router-link to="/newpage">
    <div class="box">
    <div class="image">
     <img src="../assets/images/new3.png" alt="">
    </div>
    <div class="text">
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="icons">
        <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
             <span>read more</span>
     </div>
    </div>
  </div>
</router-link>
<router-link to="/newpage">
    <div class="box">
    <div class="image">
     <img src="../assets/images/new3.png" alt="">
    </div>
    <div class="text">
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="icons">
        <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
             <span>read more</span>
     </div>
    </div>
  </div>
</router-link>
<router-link to="/newpage">
    <div class="box">
    <div class="image">
     <img src="../assets/images/new3.png" alt="">
    </div>
    <div class="text">
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="icons">
        <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
             <span>read more</span>
     </div>
    </div>
  </div>
</router-link>
<router-link to="/newpage">
    <div class="box">
    <div class="image">
     <img src="../assets/images/new3.png" alt="">
    </div>
    <div class="text">
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <div class="icons">
        <div class="icon">
                <i class="fa-solid fa-tag"></i>
                <span>tag name</span>
             </div>
             <div class="icon">
                <i class="fa-regular fa-clock"></i>
                <span>2 days ago</span>
             </div>
             <span>read more</span>
     </div>
    </div>
  </div>
</router-link>
  
  

</div>

    </div>
</template>

<script>
import { ref } from 'vue';
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

<style lang="scss" scoped>

.textt{
    margin-top: 180px;
    margin-bottom: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h3{
        font-size: 20px;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            top: 110%;
            background-color: var(--main-color);
        }
    }
}


.mainnews{
    margin: 50px 0px;
    .box{
        background-image: url('../assets/images/new1.png');
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        background-position: 0%;
        background-size: cover;
        color: #fff;
        padding: 15px;
        transition: 0.5s;
        
        .text{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
            .icons{
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;
                gap: 10px;
                .icon{
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    i{
                        font-size: 14px;
                        color:var(--main-color)
                    }
                    span{
                        font-size: 14px;
                    }
                }
            }
        }
    }
}


.newscar{
    a{
        color: #333;
    }
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    gap: 25px;
    width: 80%;
    margin: 30px auto;
    .box{
        background-color: #fff;
        box-shadow: var(--main-shadow);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        margin: 10px;
        // height: 230px;
        transition: 0.6s;
        cursor: pointer;
        .image{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
     
                transition: 0.5s;
            }
        }
        .text{
            width: 100%;
            padding: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            .icons{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
              padding: 10px;
            span{
                font-size: 12px;
                text-decoration: underline;
            }
            .icon{
                display: flex;
                align-items: center;
                gap: 5px;
                span{
                    text-decoration: none;
                }
                i{
                    color: var(--main-color);
                }
            }
            }
        }
        &:hover{
          
             
                    transform: scale(1.1);
             
          
        }
    }
}


@media(max-width:950px){
    .newscar{
        grid-template-columns: repeat(1 , 1fr);
        .text{
            .icons{
                flex-direction: column;
                gap: 20px;
            }
        }
    }
}
</style>