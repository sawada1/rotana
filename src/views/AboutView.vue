<template>
  <div>
    <div class="about">
    <span>know more about us</span>
    <h3>welcome to rotana</h3>
    <p>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Dignissimos velit porro earum. Deleniti, incidunt molestias.</p>
  </div> 
    <div class="image">
     <img src="../assets/images/tblack.png" alt="">
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
             <button>seend a message now</button>
        </form>
       </div>
     </div>
    </div>

 
</template>





<style lang="scss">
.about{
  margin-top: 180px;
  text-align: center;
  margin-bottom: 50px;
  h3{
    font-size: 27px;
    margin: 20px 0px;
  }
  span{
    letter-spacing: 5px;
  }
}

.image{
  width: 90%;
  margin: 20px auto;
  img{
    width: 100%;
    object-fit: cover;
  }
}


  
</style>
