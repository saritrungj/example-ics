let http = new XMLHttpRequest();
http.open('get', 'example_data.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let restuarant = JSON.parse(this.responseText);
        let output = "";
        for (let item of restuarant) {
            output += `
                <div class="restaurant">
                    <img src="${item.profile_image_url}" alt="${item.profile_image_url}">
                    <p class="Name">${item.name}  </p>
                    <p class="Detail "> <i class="fa fa-calendar" aria-hidden="true"> </i>  ${item.operation_time[1].time_open} AM - ${item.operation_time[1].time_close} PM 
                        <span class='Rating'> <i class="fa fa-circle" aria-hidden="true"></i> ${item.rating}</span></p>
                    <p class="Rating"></p>
                    <div class="grid-container">
                    <div class="grid-item">
                    <img class="subImg1" src="${item.images[0]}" alt="${item.images}">
                    </div>
                    <div class="grid-item">
                    <img class="subImg2" src="${item.images[1]}" alt="${item.images}">
                    </div>
                    <div class="grid-item">
                    <img class="subImg3" src="${item.images[2]}" alt="${item.images}">
                    </div>
                    </div>        
                </div>
            `;
        }

        document.querySelector(".restaurants").innerHTML = output;
    }
}