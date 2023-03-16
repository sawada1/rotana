<template>
    <div>
        <div class="textmain">
         <span>join our team</span>
         <h4>find your career</h4>
         <p>Lorem ipsum dolor sit amet, 
         consectetur adipisicing elit.
          Soluta totam similique eius 
          exercitationem error obcaecati eaque minima quisquam dolore, enim
          repudiandae omnis repellendus 
          deleniti incidunt rerum suscipit, aliquid quidem tenetur!</p>
        </div>

          <div class="mainbox">
            <h4>our <span>opportunites</span></h4>
            <div class="textt">
             <span>3 opportunites</span>
             <div class="search">
              <input type="search" placeholder="job title or key...">
              <input type="search" placeholder="location">
              <span>search</span>
             </div>
            </div>  
            <div class="opportunites">
            <router-link to="/careerpage">
                <div class="opp">
              <h5>job title</h5>
              <div class="tex">
                <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. 
              Perspiciatis atque tempore facilis delectus doloremque. Officia.</p>
              <span>location 2 days ago</span>    
              </div>
          

            </div> 
            
            </router-link>
            <router-link to="/careerpage">
                <div class="opp">
              <h5>job title</h5>
              <div class="tex">
                <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. 
              Perspiciatis atque tempore facilis delectus doloremque. Officia.</p>
              <span>location 2 days ago</span>    
              </div>
          

            </div> 
            
            </router-link>
            <router-link to="/careerpage">
                <div class="opp">
              <h5>job title</h5>
              <div class="tex">
                <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. 
              Perspiciatis atque tempore facilis delectus doloremque. Officia.</p>
              <span>location 2 days ago</span>    
              </div>
          

            </div> 
            
            </router-link>
           
            
               </div>       
          </div>
    
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  a{
        color: gray;
    }
.textmain{
  
    margin-top: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
    p{
        width: 70%;
    }
    h4{
        font-size: 20px;
        position: relative;
        &::before{
            content: '';
            width: 100%;
            top: 110%;
            height: 3px;
            position: absolute;
            background-color: var(--main-color);
        }
    }
}

.mainbox{
    background-color: #ccc;
    padding: 20px;
    h4{
        text-align: center;
        font-size: 25px;
        span{
            color: var(--main-color);
        }
    }
    .textt{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0px;
        span{
            background-color: var(--main-color);
            color: #fff;
            cursor: pointer;
            padding: 10px 15px;
            border-radius: 10px;
        }
        .search{
            display: flex;
            align-items: center;
            gap: 20px;
            input{
                border: none;
                outline: none;
                padding: 10px;
                border-radius: 10px;
            }
        }
    }

    .opportunites{
        display: grid;
        grid-template-columns: repeat(1 , 1fr);
        gap: 20px;
        .opp{
            background-color: #fff;
            margin: 20px;
            padding: 40px;
            display: flex;
            gap: 20px;
            flex-direction: column;
            box-shadow: var(--main-shadow);
            transition: 0.5s;
            cursor: pointer;
            &:hover{
                transform: translateX(10px);
            }
            h5{
                font-size: 20px;
                color: var(--main-color);
            }
            .tex{
                text-align: center;
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;
                p{
                    
                }
            }
        }
    }
}


@media(max-width:700px){
    .mainbox{
        .textt{
            .search{
                flex-direction: column;
            }
        }
    }
}
@media(max-width:500px){
    .mainbox{
        .textt{
         flex-direction: column;
         gap: 20px;
        }
        .opportunites{
            .opp{
                .tex{

                    flex-direction: column;
                    gap: 20px;
                }
            }
        }
    }
}

</style>