
// if(document.querySelector('.home') ){
//   document.querySelector('.home').addEventListener('click', showHomeNews)
// }
// function showHomeNews(){
//   fetch("https://api.worldnewsapi.com/search-news?api-key=ccea70b1d5714499945207a24f04862a&language=en&source-country=ke&categories=politics")
//   .then(res =>res.json())
//   .then(data => {
//     console.log(data)
//     let articles = data.news
//     let main = articles[0]
//     if(main.image){
//       document.querySelector(".main-news img").src = main.image
//     } else {
//       document.querySelector(".main-news img").src = "https://dummyimage.com/300"
//     }
//     document.querySelector('.main-news img').onclick = function(){
//       window.open(main.url, "_blank")
//     }

//     document.querySelector(".main-news h2").innerText = main.title

//     document.querySelector(".main-news p").innerText = main.text.slice(0, 500) + '...'

//     const cards = document.querySelectorAll('.card')
//     cards.forEach((card, index) => {
//       let article = articles[index + 1]
//       card.querySelector('img').src = article.image ||  "https://dummyimage.com/300"
//       card.querySelector('h3').innerHTML = article.title
//       card.querySelector('p').innerText = article.text.slice(0, 200) + '...'
//       card.querySelector('img').onclick = function(){
//         window.open(article.url, "_blank")
//       }
//     })
//   })
// }
 
//   if(document.querySelector('.tech')){
//     document.querySelector('.tech').addEventListener('click', showTechNews)
//   }
//   function showTechNews(){
   
//   fetch("https://api.worldnewsapi.com/search-news?api-key=ccea70b1d5714499945207a24f04862a&language=en&source-country=ke&categories=technology")
//   .then(res =>res.json())
//   .then(data => {
//     console.log(data)
//     let articles = data.news
//     let main = articles[0]
//     if(main.image){
//       document.querySelector(".main-news img").src = main.image
//     } else {
//       document.querySelector(".main-news img").src = "https://dummyimage.com/300"
//     }
//     document.querySelector('.main-news img').onclick = function(){
//       window.open(main.url, "_blank")
//     }

//     document.querySelector(".main-news h2").innerText = main.title

//     document.querySelector(".main-news p").innerText = main.text.slice(0, 500) + '...'

//     const cards = document.querySelectorAll('.card')
//     cards.forEach((card, index) => {
//       let article = articles[index + 1]
//       card.querySelector('img').src = article.image ||  "https://dummyimage.com/300"
//       card.querySelector('h3').innerHTML = article.title
//       card.querySelector('p').innerText = article.text.slice(0, 200) + '...'
//       card.querySelector('img').onclick = function(){
//         window.open(article.url, "_blank")
//       }
//   })
// })
//   }

//   if(document.querySelector('.health')){
//     document.querySelector('.health').addEventListener('click', showHealth)
//   }
//   function showHealth(){
//     fetch("https://api.worldnewsapi.com/search-news?api-key=ccea70b1d5714499945207a24f04862a&language=en&source-country=ke&categories=health")
//   .then(res =>res.json())
//   .then(data => {
//     console.log(data)
//     let articles = data.news
//     let main = articles[0]
//     if(main.image){
//       document.querySelector(".main-news img").src = main.image
//     } else {
//       document.querySelector(".main-news img").src = "https://dummyimage.com/300"
//     }
//     document.querySelector('.main-news img').onclick = function(){
//       window.open(main.url, "_blank")
//     }

//     document.querySelector(".main-news h2").innerText = main.title

//     document.querySelector(".main-news p").innerText = main.text.slice(0, 500) + '...'

//     const cards = document.querySelectorAll('.card')
//     cards.forEach((card, index) => {
//       let article = articles[index + 1]
//       card.querySelector('img').src = article.image ||  "https://dummyimage.com/300"
//       card.querySelector('h3').innerHTML = article.title
//       card.querySelector('p').innerText = article.text.slice(0, 200) + '...'
//       card.querySelector('img').onclick = function(){
//         window.open(article.url, "_blank")
//       }
//   })
// })
// }

// if(document.querySelector('.sports')){
//   document.querySelector('.sports').addEventListener('click', showSports)
// }
// function showSports(){
//   fetch("https://api.worldnewsapi.com/search-news?api-key=ccea70b1d5714499945207a24f04862a&language=en&source-country=ke&categories=sports")
// .then(res =>res.json())
// .then(data => {
//   console.log(data)
//   let articles = data.news
//   let main = articles[0]
//   if(main.image){
//     document.querySelector(".main-news img").src = main.image
//   } else {
//     document.querySelector(".main-news img").src = "https://dummyimage.com/300"
//   }
//   document.querySelector('.main-news img').onclick = function(){
//     window.open(main.url, "_blank")
//   }

//   document.querySelector(".main-news h2").innerText = main.title

//   document.querySelector(".main-news p").innerText = main.text.slice(0, 500) + '...'

//   const cards = document.querySelectorAll('.card')
//   cards.forEach((card, index) => {
//     let article = articles[index + 1]
//     card.querySelector('img').src = article.image ||  "https://dummyimage.com/300"
//     card.querySelector('h3').innerHTML = article.title
//     card.querySelector('p').innerText = article.text.slice(0, 200) + '...'
//     card.querySelector('img').onclick = function(){
//       window.open(article.url, "_blank")
//     }
// })
// })
// }


//   if(window.location.pathname.includes("index.html")){
//     showHomeNews()
//   }
  
//   if(window.location.pathname.includes('technology.html')){
//     showTechNews()
//   }
//   if(window.location.pathname.includes('health.html')){
//     showHealth()
//   }
//   if(window.location.pathname.includes('sports.html')){
//     showSports()
//   }
  
function getNews(category){
  fetch(`https://api.worldnewsapi.com/search-news?api-key=ccea70b1d5714499945207a24f04862a&language=en&source-country=ke&categories=${category}`)
  .then( res => res.json())
  .then( data => {
    console.log(data)
    if(!data.news){
      console.log('No news returned API limit reached')
      return
    }
    let articles = data.news
    let main = articles[0]

    if(main.image){
      document.querySelector('.main-news img').src = main.image
    }else {
      document.querySelector('.main-news img').src = "https://dummyimage.com/300"
    }

    document.querySelector('.main-news h2').innerText = main.title
    document.querySelector('.main-news p').innerText = main.text?.slice(0, 500) + ''

    document.querySelector('.main-news img').onclick = function(){
      window.open(main.url, '_blank')
    }

    const cards = document.querySelectorAll('.card')
    cards.forEach((card,index) =>{
      let article = articles[index + 1]

      if(!article) return 

      card.querySelector('img').src = article.image || "https://dummyimage.com/300"
      card.querySelector('h3').innerText = article.title
      card.querySelector('p').innerText = article.text?.slice(0,200) + '...'

      card.querySelector('img').onclick = function(){
        window.open(article.url, '_blank')
      }
    })
  
  })
}
if(document.querySelector('.sports')){
  document.querySelector('.sports').addEventListener('click', () =>{
    getNews('sports')
    
  })
}
if(document.querySelector('.home')){
  document.querySelector('.home').addEventListener('click', () =>{
    getNews('politics')
  })
}
if(document.querySelector('.tech')){
  document.querySelector('.tech').addEventListener('click', () => {
    getNews('technology')
  })
}
if(document.querySelector('.health')){
  document.querySelector('.health').addEventListener('click', () =>{
    getNews('health')
  })
}

// function getLifestyleNews(){
//   fetch('https://api.worldnewsapi.com/search-news?api-key=ccea70b1d5714499945207a24f04862a&language=en&source-country=ke&categories=business')
//   .then(res =>res.json())
//   .then( data => {
//     if(!data.news) return
//     console.log(data.news)
//     let articles = data.news

//     const lifecards = document.querySelectorAll('.lifestyle-cards')
//     lifecards.forEach((lifecard, index) => {
//       let article = articles[index]

//       if(!article) return

//       lifecard.querySelector('img').src = article.image || "https://dummyimage.com/300"
//       lifecard.querySelector('h4').innerText = article.title

//       lifecard.querySelector('img').onclick = function(){
//         window.open(article.url, '_blank')
//       }
//     })
//   })
// }

const path = window.location.pathname;

// Check for both the root path (Netlify) and the explicit file (Local)
if (path === '/' || path.includes("index.html")) {
  getNews('politics');
} else if (path.includes("technology")) {
  getNews('technology');
} else if (path.includes("health")) {
  getNews('health');
} else if (path.includes("sports")) {
  getNews('sports');
}