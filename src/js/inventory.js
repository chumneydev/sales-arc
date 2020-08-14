axios.get('http://192.168.12.3:8182/internal-projects/sales-site/inventory.json')
    .then((response) => {
        //console.log(response.data);

   $.each(response.data, function (index, item) {
    //console.log(item.year);
    //        <div>${item.year}</div>


    /*var lowerYear = item.year.toLowerCase();
    var lowerMake = item.make.toLowerCase();
    var lowerModel = item.model.toLowerCase();*/
    
    var content = `
        <div class="wrap mix ${item.model}">
            <div class="vehicle">
                <div class="vehicle-image">
                    <img src = "https://via.placeholder.com/250x150/000/?text=Vehicle+Image" />
                </div>    
                <h2 class="title">${item.year} ${item.make} ${item.model}</h2>
                <!--pricing-->
                <div class="pricing">
                    <div class="price-text"><p>Sales Price</p></div>
                    <div class="price-amnt"><p>${item.price}</p></div>
                </div>
                <!--pricing-->
                <!--description-->
                <div class="description">
                    <h3>Features</h3>
                    <ul>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna</li>
                        <li>Inceptos Vulputate Magna </li>
                    </ul>
                </div>
                <!--description-->
                <!--buttons-->
                <div class="buttons">
                    <ul class="button-block">
                        <li class="button-item"><a href="#" class="button">View Inventory</a></li>
                        <li class="button-item"><a href="#" class="button">Compare</a></li>
                    </ul>
                </div>
                <!--buttons-->
            </div>
        </div>`;

        $('#inventory-wrapper').append(content);
      /* $("<tr>").append(
           $("<td>").text(item.classRoom),
           $("<td>").text(item.classLimit)
       ).appendTo("#mytable tbody");*/

   });









    });