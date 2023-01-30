let cl = console.log;

const imgUrl="https://image.tmdb.org/t/p/w1280";
 
var moviesInfo = document.getElementById("moviesInfo");
let result = "";
movieArr.forEach(function(movie){
    result += `<div class="col-lg-3 col-md-6 col-xs-12">
    <div class="card mt-4 mb-4">
        <figure class="moviecard">
        <img src="${imgUrl}${movie.backdrop_path}" alt="${movie.title}" title="${movie.title}">
            <figcaption class="text-white p-3 bg-dark">
                <div class="row">
                    <div class="col-sm-10">
                        <h5>
                            ${movie.title}
                        </h5>
                    </div>
                    <div class="col-sm-2">
                        ${movie.vote_average}
                    </div>
                </div>
            </figcaption>
            <div class="overview bg-white p-4">
                <h4>overview :</h4>
                <p>${movie.overview}</p>
            </div>
        </figure>
    </div>
</div>`;
})

moviesInfo.innerHTML = result;