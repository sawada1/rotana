<template>
    <div>
        <div class="title">
         <div class="tex">
          <router-link to="/careerpage">
            <i class="fa-solid fa-chevron-left"></i>
          </router-link>
          <h3>job title</h3>
         </div>
         <div class="textt">
          <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit.
           Voluptatibus quis neque cumque 
           sunt molestias, iusto placeat 
           assumenda id soluta similique 
          minima laudantium tempora iure
           optio repudiandae provident perspiciatis maiores ab?</p>
           <span>location | 2 days ago</span>
         </div>
        </div>
        <div class="form">
         <div class="inp">
          <input type="text" placeholder="first name..">
          <input type="text" placeholder="second name..">
         </div>
         <input type="email" placeholder="email..">
         <input type="text" placeholder="mobile..">
         <input type="text" placeholder="address..">
         <div class="up">
          <label for="">upload your resume</label>
          <input type="file">
         </div>
         <textarea placeholder="comment.." id="" cols="30" rows="10"></textarea>
         <button>send application</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
a{
    color: #fff;
}

.title{
    margin-top: 180px;
    margin-bottom: 30px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    .tex{
        display: flex;
        align-items: center;
        gap: 10px;
        a{
            background-color: var(--hover-color);
            padding: 10px 15px;
            border-radius: 50%;
        }
    }
    .textt{
        text-align: center;
        padding: 20px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        p{
            width: 60%;
        }
        span{
            color: var(--main-color);
        }
    }
}

.form{
    width: 80%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    input,textarea{
       padding: 10px;
       border-radius: 20px;
       border: none;
       background-color: var(--hover-color);
       color: #fff;
    }
    .inp{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .up{
        background-color: var(--hover-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;
        label{
            padding: 8px;
            color: #fff;
            font-size: 15px;
        }
        input{
            background-color: transparent;
        }
    }
    button{
        width: 50%;
        padding: 10px 15px;
        border: none;
        background-color: var(--main-color);
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        border-radius: 20px;
    } 
}


@media(max-width:700px){
    .title{
        .textt{
            flex-direction: column;
            gap: 20px;
            p{
                width: 100%;
            }
        }
    }
}
</style>