<template>
    <div>
       <div class="mainfaq">
        <div class="box">
         <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</h5>
         <span>answer</span>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
        </div>
        <div class="box">
         <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</h5>
         <span>answer</span>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
        </div>
        <div class="box">
         <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</h5>
         <span>answer</span>
        <p>Lorem ipsum dolor, sit 
        amet consectetur adipisicing elit.
         Nulla quidem earum quisquam necessitatibus 
         animi voluptates, quasi labore repellat repellendus
         ratione odio, quae corrupti a possimus impedit omnis fuga cum? Exercitationem.</p>
        <p>Lorem ipsum dolor, sit 
        amet consectetur adipisicing elit.
         Nulla quidem earum quisquam necessitatibus 
         animi voluptates, quasi labore repellat repellendus
         ratione odio, quae corrupti a possimus impedit omnis fuga cum? Exercitationem.</p>
        </div>
        <div class="box">
         <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</h5>
         <span>answer</span>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
        </div>
        <div class="box">
         <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</h5>
         <span>answer</span>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
        </div>
        <div class="box">
         <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ?</h5>
         <span>answer</span>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
         <p>Lorem ipsum, dolor sit amet 
         consectetur adipisicing elit. Eos, suscipit? 
         Corporis obcaecati neque maxime 
         non quibusdam iusto rerum blanditiis nobis.</p>
        </div>
       </div> 
    </div>
</template>

<script>

</script>

<style lang="scss">
.mainfaq{
    margin-top: 170px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    gap: 30px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    .box{
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: #fff;
        box-shadow: var(--main-shadow);
        padding: 15px;
        height: fit-content;
        margin: 15px;

        span{
            color: var(--main-color);
        }
        p{
            color: gray;
        }
    }
}

@media(max-width:770px){
    .mainfaq{
        grid-template-columns: repeat(1 , 1fr);
        margin-top: 200px;
    }
}

</style>