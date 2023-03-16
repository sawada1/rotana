<template>
    <div>
        <div class="image">
         <img src="../assets/images/offer.png" alt="">
        </div>
        <div class="theoffer">
          <h4>offer details</h4>
          <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Sint debitis aspernatur 
          explicabo expedita voluptatibus magnam quas tenetur beatae nam est
           labore magni aperiam delectus, dicta aut dignissimos, voluptas placeat dolorum.</p>
          <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Sint debitis aspernatur 
          explicabo expedita voluptatibus magnam quas tenetur beatae nam est
           labore magni aperiam delectus, dicta aut dignissimos, voluptas placeat dolorum.</p>
        </div>

        <div class="text1">
          <h4>vehicles included in the offer.</h4>
        </div>
        <div class="mainboxx">
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
</template>

<script setup>

</script>

<style lang="scss" scoped>

*{
    text-align: center;
}
h4{
    display: inline-block;
        font-size: 20px;
        position: relative;
        margin: 10px 0px;
        &::before{
            content: '';
            width: 100%;
            top: 110%;
            background-color: var(--main-color);
            position: absolute;
            height: 3px;
        }
    }
.image{
    margin-top: 170px;
    width: 90%;
    img{
        width: 100%;
    }
}
.theoffer{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0px;
    gap: 20px;
    text-align: center;

    p{
   width: 70%;
    }
}

.mainboxx{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 20px;
    width: 90%;
    margin: 50px auto;
}


@media(max-width:1000px){
    .mainboxx{
        grid-template-columns: repeat(3 , 1fr);
    }
}
@media(max-width:800px){
    .mainboxx{
        grid-template-columns: repeat(2 , 1fr);
    }
}
@media(max-width:600px){
    .mainboxx{
        grid-template-columns: repeat(1 , 1fr);
    }
}

</style>