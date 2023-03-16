<template>
    <div>
        <div class="tab">
          <div class="text">
            <div class="tex">
            <router-link to="/career">
                <i class="fa-solid fa-chevron-left"></i>
            </router-link>
            
                <h3>job title</h3>
            </div>
            <span>location | 2 days ago</span>
          </div>
          <router-link to="/job">
            <button>apply now</button>  
          </router-link>
        
        </div>
        <div class="resp">
         <h3>responsabilties:</h3>
         <ul>
          <li>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatibus.
          </li>
          <li>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatibus.
          </li>
          <li>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatibus.
          </li>
         </ul>
        </div>
        <div class="resp">
         <h3>requirements:</h3>
         <ul>
          <li>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatibus.
          </li>
          <li>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatibus.
          </li>
          <li>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatibus.
          </li>
         </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
ul{
    list-style:circle;
}
a{
    color: #fff;
}
 .tab{
    margin-top: 180px;
    background-color: var(--main-color);
    margin-bottom: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .tex{
            display: flex;
            align-items: center;
            gap: 10px;
            a{
                background-color: var(--hover-color);
                border-radius: 50%;
                padding: 10px 15px;
                i{
                    font-size: 20px;
                }
            }
        }
    }
    button{
        padding: 10px 15px;
        cursor: pointer;
        background-color: #fff;
        border: none;
        color: var(--main-color);
        font-size: 18px;
    }
 }

 .resp{
    width: 80%;
    margin: 50px auto;
    display: flex;
    gap: 30px;
    flex-direction: column;
    ul{
        flex-direction: column;
        display: flex;
        gap: 30px;
    }
 }

</style>