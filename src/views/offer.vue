<template>
    <div>
        <div class="mainimages">
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
        <router-link to="/offerpage">
            <div class="image">
          <img src="../assets/images/offer.png" alt="">
          <h4>toyota special offer</h4>
         </div>
        </router-link>
       
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

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mainimages{
    a{
        color: #222;
    }
    margin-top: 170px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 10px;
    text-align: center;
    .image{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
        img{
            object-fit: cover;
        }
    }
}

@media(max-width:1000px){
    .mainimages{
        grid-template-columns: repeat(3 , 1fr);
    }
}
@media(max-width:800px){
    .mainimages{
        grid-template-columns: repeat(2 , 1fr);
    }
}
@media(max-width:600px){
    .mainimages{
        grid-template-columns: repeat(1 , 1fr);
    }
}

</style>