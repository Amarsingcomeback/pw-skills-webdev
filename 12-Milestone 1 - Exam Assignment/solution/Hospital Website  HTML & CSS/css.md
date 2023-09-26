.flex{
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 3rem auto;
    height: 80vh;
    flex-wrap: wrap;
}
.left-box{
    display: flex;
    align-items: center;
}
.center-box h1{
    margin-top: 1rem;
    font-size: 3.5rem;
    color: #fff;
    font-weight: 900;
    margin-bottom: 1rem;
}
.center-box p{
    font-size: 1.2rem;
    color: #fff;
    line-height: 2rem;
    margin-bottom: 1rem
}
.twobtn button{
    padding: 1rem 2.5rem;
    border-radius: 1.5rem;
}
.left-btn{
    background-color: #23A6F0;
    border: none;
}
.right-btn{
    border: 1px solid #fff;
    background-color: transparent;
}
.right-box{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 2.5rem;
    border-radius: 1rem;
    width: 30%;
    height: 90%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.right-box button{
    width: 100%;
    /* margin-top: 3rem;
    margin-bottom: 3rem; */
}
form input,select{
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}
form label{
    font-weight: 700;
    color: #1a1919;
    margin-bottom: 0.5rem;
    margin-top: 0.5;
    display: inline-block;
}
form button{
    background-color: #23A6F0;
    padding: 1rem 2rem;
    border: none;
    color: #fff;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
form h2{
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}






.landing-madicine{
    width: 75%;
    margin: 0 auto;
    height: 100vh;
}

.lm-header{
    height: 30%;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.lm-header div h1{
    margin-bottom: 1rem;
}
.lm-header div p{
    line-height: 1.5rem;
}
.lm-card{
  height: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
}
.card{
    width: 30%;
}
.card-header{
    background-color: #8EC2F2;
    padding: 1.5rem;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}
.card-header i{
    padding: 1.5rem;
    background-color: #FFFFFF;
    border-radius: 50%;
    color: #23A6F0;
    
}
.card-header h3{
    color: #FFFFFF;
}
.card-foot{
    padding: 1.5rem;
}
.card-foot ul li{
    margin: 0.5rem auto;
    list-style: none;
}
.card-foot{
    border-radius: 1rem;
    border: 1px solid #23A6F0;
}




/* testimonila */
.star{
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.testimonial .star div img{
   border: 1px solid #23A6F0;
   border-radius: 50%;
}
.testimonial{
    height: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    /* flex-wrap: wrap; */
  }
  .star{
    width: 30%;
    padding: 1rem;

}
.star p {
    margin-top: 1rem;
}
.star i{
    font-size: 1.5rem;
}
.faq{
    text-align: center;
}
.faq h1{
    font-weight: 800;
    margin-bottom: 1rem;
}
.faq p{
    line-height: 1.5rem;
}



/* grid-6 */
.grid{
    display: grid;
    grid-template-columns: repeat(3,24%);
    justify-content: space-evenly;
    width: 75%;
    margin: 12rem auto;
    gap: 3rem;
    height: 80vh;
    text-align: justify;
    font-weight: 700;

}
.grid div p{
    color: #8EC2F2;
}
.grid i{
   position: relative;
   right: 1rem;
   color: #23A6F0;
}




/* landing madicine */
/* .landing-madicine-2{
    margin-top: 20rem;
    
}
.card{
    width: 100%;
    margin-bottom: 1rem;
} */

/* pricing section */








@media (max-width: 640px) {
    .main{
        /* padding: 0 1rem; */
    }
    nav{
        /* padding: 1rem 1rem; */
        width: 100%;
    }
    nav .left-logo ul{
        display: none;
    }
    nav .btn{
        display: none;
    }
    .nav-icon{
        display: initial;
        font-size: 1.5rem;
       
    }
   
    .twobtn{
        width: 100%;
    }
    .twobtn button{
        width: 100%;
        margin: 1rem auto;
    }
    .flex{
        width: 100%;
        padding: 0 1rem;
        margin: auto auto;
        justify-content: center;
    }
    
    .right-box{
        margin: 5rem auto;
        width: 100%;
        /* border: 1px solid yellow; */
        height: 80%;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        
    }
    .right-box form{
        padding: 1rem;
    }
    .mt{
        margin: 20rem auto;
    }
    .lm-card{
        width: 100%;
    }
    .card{
        width: 100%;
        flex-direction: column;
    }
    .landing-madicine-2{
        width: 100%;
        margin: 10rem auto;
    }
    .testimonial{
        width: 100%;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .star{
        width: 100%;
    }

}
 