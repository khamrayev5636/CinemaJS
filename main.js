const elList = document.querySelector(".cinema__list");
const elTemp = document.querySelector(".cinema__temp").content;


const elFragment = document.createDocumentFragment();

for (const kino of kinolar) {
    
    const elCinemaClone = elTemp.cloneNode(true);

    elCinemaClone.querySelector(".cinema__title").textContent = kino.title;
    elCinemaClone.querySelector(".cinema__year").textContent = "Year: " +  kino.year;
    elCinemaClone.querySelector(".cinema__text").textContent ="Cast: " + kino.cast.splice("").join(", ");
    elCinemaClone.querySelector(".cinema__genres").textContent ="Genres: " + kino.genres.splice(" ").join(" ");

    elFragment.appendChild(elCinemaClone);
}

elList.appendChild(elFragment);