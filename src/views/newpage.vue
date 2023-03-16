<template>
    <div>
        <div class="container">
         <div class="image">
          <img src="../assets/images/new3.png" alt="">
         </div>
          <div class="text1">
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
          <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Nam hic veniam magni 
          libero delectus eligendi sunt tenetur 
          fugit? A quos sequi vel ea molestiae 
          dolores at eveniet nostrum fugit impedit?</p>
          <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Nam hic veniam magni 
          libero delectus eligendi sunt tenetur 
          fugit? A quos sequi vel ea molestiae 
          dolores at eveniet nostrum fugit impedit?</p>
          <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Nam hic veniam magni 
          libero delectus eligendi sunt tenetur 
          fugit? A quos sequi vel ea molestiae 
          dolores at eveniet nostrum fugit impedit?</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
    margin-top: 180px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    margin-bottom: 50px;
    .text1{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        padding: 5px;
        .icons{
            display: flex;
            align-items: center;
            gap: 20px;
            flex-direction: column;
            .icon{
                display: flex;
                align-items: center;
                gap:5px;
                flex-direction: column;
                i{
                    color: var(--main-color);
                }
            }
        }
    }
}

</style>