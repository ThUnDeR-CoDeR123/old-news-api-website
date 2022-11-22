console.log("this is news wesite");


//initialize the news parameters
let source = 'bbc-news';
let apiKey = '2b9756a2775c446b882ef79ceb46aeda';

//grab the news container
let newsAccordion = document.getElementById('newsAccordion');


//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

//what t do when response is ready
xhr.onload = function () {
    if (this.status == 200) {
        let json=JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json);
        // console.log(json.articles[0].content);
        let newshtml =``;
        articles.forEach(function(element,index){
            // console.log(articles[news]);
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="flush-heading${index}">
                            <button class="accordion-button collapsed news-item" style="color:Blue;"type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                <strong>Breaking News ${index+1} :</strong>${element['title']}
                            </button>
                            </h2>
                            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordion">
                            <div class="accordion-body news-item">${element.content}<br><a href="${element.url}" target="_blank">Read more at</a></div>
                            </div>
                        </div>`
            newshtml+=news;
        });{
        }
        newsAccordion.innerHTML=newshtml;

    }
    else {
        console.log('some error occured!!');
    }
}

xhr.send();

    document.getElementById("searchTxt").addEventListener("input",function(){
        let inputVal=searchTxt.value;
        // console.log("input event fire" ,inputVal);
        let noteCards = document.getElementsByClassName("news-item");
        Array.from(noteCards).forEach(function(element){
            
            let cardTxt=element.innerText;
            console.log(cardTxt);
     
            if(cardTxt.includes(inputVal.toUpperCase())==false || cardTxt.includes(inputVal.toLowerCase())==false){
                element.style.display="none";
    
            }
            else{
                element.style.display='block';
            }
        });
    });
