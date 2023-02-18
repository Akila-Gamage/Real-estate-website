 /*====================== Search Page ======================*/
$(function() {
    $("#spinner").spinner({
        min: 0,
        max: 12,
        spin: function(event, ui) {
            $(this).change();
        }
    });
});

$(function() {
    $("#spinner2").spinner({
        min: 0,
        max: 12,
        spin: function(event, ui) {
            $(this).change();
        }
    });
});

$(function() {
    $("#property").selectmenu();
});

$(function() {
    $("#time").selectmenu();
});

$(function() {
    $("#slider-range").slider({
        range:true,
        min: 100000,
        max: 1000000,
        values: [ 75, 300 ],
        slide: function( event, ui){
            $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
        }
    });

    $("#amount").val(" $" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
});

var data = {
            
    "properties": [
        {
            "id":"prop1",
            "type":"House",
            "size":"1,247sqft",
            "bedrooms":2,
            "bathrooms":2,
            "price":404900,
            "tenure":"Freehold",
            "picture":"./assets/img/prop1/prop1-1.webp",
            "url":"./properties/property1.html",
            "added": {
                "month":"October",
                "day":12,
                "year":2022
            }
        },
        {
            "id":"prop2",
            "type":"House",
            "size":"1,630sqft",
            "bedrooms":3,
            "bathrooms":2,
            "price":199900,
            "tenure":"Freehold",
            "picture":"./assets/img/prop2/prop2-1.webp",
            "url":"./properties/property2.html",
            "added": {
                "month":"September",
                "day":14,
                "year":2022
            }
        },
        {
            "id":"prop3",
            "type":"Apartment",
            "size":"1,813sqft",
            "bedrooms":3,
            "bathrooms":4,
            "price":975000,
            "tenure":"Freehold",
            "picture":"./assets/img/prop3/prop3-1.webp",
            "url":"./properties/property3.html",
            "added": {
                "month":"August",
                "day":09,
                "year":2022
            }
        },
        {
            "id":"prop4",
            "type":"Apartment",
            "size":"1,200sqft",
            "bedrooms":2,
            "bathrooms":2,
            "price":999999,
            "tenure":"Freehold",
            "picture":"./assets/img/prop4/prop4-1.webp",
            "url":"./properties/property4.html",
            "added": {
                "month":"November",
                "day":16,
                "year":2022
            }
        },
        {
            "id":"prop5",
            "type":"Apartment",
            "size":"1,215sqft",
            "bedrooms":1,
            "bathrooms":1,
            "price":460000,
            "tenure":"Freehold",
            "picture":"./assets/img/prop5/prop5-1.jpg",
            "url":"./properties/property5.html",
            "added": {
                "month":"December",
                "day":126,
                "year":2022
            }
        },
        {
            "id":"prop6",
            "type":"House",
            "size":"2,052sqft",
            "bedrooms":4,
            "bathrooms":2,
            "price":245000,
            "tenure":"Freehold",
            "picture":"./assets/img/prop6/prop6-1.webp",
            "url":"./properties/property6.html",
            "added": {
                "month":"June",
                "day":12,
                "year":2022
            }
        },
        {
            "id":"prop7",
            "type":"House",
            "size":"1,761sqft",
            "bedrooms":3,
            "bathrooms":2,
            "price":649900,
            "tenure":"Freehold",
            "picture":"./assets/img/prop7/prop7-1.webp",
            "url":"./properties/property7.html",
            "added": {
                "month":"January",
                "day":12,
                "year":2022
            }
        },
]};


$(function() {
	$( "#Search" ).on("click", function(){
		
		var propType = $("#property").val();
	    var maxBed =  $("#spinner").val();
        var minBed =  $("#spinner2").val();
		var date =  $("#time").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( propType == data.properties[i].type) || (propType=="Any"))
			   if (( minBed >= data.properties[i].bedrooms && maxBed <= data.properties[i].bedrooms ))
			   if (( date == data.properties[i].added.month) || (date=="Anytime"))
			   if (( data.properties[i].price >= minPrice && data.properties[i].price <= maxPrice ))
			   {
				   {
					   {
						   {
							   output+="<div class='output_card'><h2 class='price'><li>" + "<span>$</span>" + data.properties[i].price +"</li></h2>" + "<img src=" + data.properties[i].picture + ">" + "<li><p class='details'>" + data.properties[i].bedrooms +'&nbsp;&nbsp;<i class="fa-solid fa-bed"></i>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;'+ data.properties[i].bathrooms +'&nbsp;&nbsp;<i class="fa-solid fa-bath"></i>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;'+data.properties[i].size +"</p></li>" + "<button class='button view_more'><a href='" + data.properties[i].url + "'>Visit Page</a></button><button class='like button'><i class='bx bx-heart' ></i></button></div>";
						   } 
                        } 
                    } 
                } 
            }
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
	});

$(function() {
        $( ".add__favourites-button, .like" ).on("click", function(){

            try{
                $(this).attr('disabled',true);

                var propIdToAdd = $(this).closest("p").attr("id");

                var myFavouriteProp = JSON.parse(localStorage.getItem("favProp"));

                if(myFavouriteProp == null){
                    myFavouriteProp = [];
                }

                if(myFavouriteProp != null){
                    for(var j=0; j < myFavouriteProp.length; j++){
                        if(propIdToAdd == myFavouriteProp[j]){
                            alert("This property is already in your favourites");
                            myFavouriteProp = [];
                        }
                    }
                }

                myFavouriteProp.push(propIdToAdd);

                localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));

                alert("This property added to the favourites");

            }
            catch(e){
                if (e==QUOTA_EXCEEDED_ERR){
                    console.log("Error: Local storage limit exceeds");
                }
                else{
                    console.log("ERROR: Saving to Local Storage");
                }
            }

        });
});
   

$(function() {
    $( ".remove__favourites-button" ).on("click", function(){


            $(this).attr('disabled',true);

            var propIdToRemove = $(this).closest("p").attr("id");

            myFavouriteProp = JSON.parse(localStorage.getItem("favProp"));

            if(myFavouriteProp != null){
                for(var j=0; j < myFavouriteProp.length; j++){
                    if(propIdToRemove == myFavouriteProp[j]){
                        alert("This property has been removed");
                        delete myFavouriteProp[j];
                        localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));
                        myFavouriteProp[j] = [];
                    
                    }
                }
            }

            if(myFavouriteProp == null){
                alert("You have no favourite items");
            }
    });
});

$(function() {
    $(".view__Favourites,.nav__button").on("click", function(){

        console.log("Restoring array data from local storage");

        myFavouriteProp = JSON.parse(localStorage.getItem("favProp"));

        var output = "<ul>";

        if (myFavouriteProp != null){
            
            for(var i = 0; i < data.properties.length; i++){
                for(j = 0; j < myFavouriteProp.length; j++){
                    if (data.properties[i].id == myFavouriteProp[j]){
                        
                        output+="<div class='favourite_card'><h5 class='favorite_title'><li>" +"<span class='fav_bedroom'>"+data.properties[i].bedrooms +"</span>"+ " Bedrooms" + " " + "<span class='fav_type'>"+data.properties[i].type +"</span>"+ "</li></h5>" + "<img src=" + data.properties[i].picture + ">" + "<li><button class='button view_more'><a href=' " + data.properties[i].url + " '>Visit page</a></button></li></div>";

                    }
                }
            }
        }else{
            alert("There are no favourites to show")
        }
        output+="</ul>";

        document.getElementById("Placeholder2").innerHTML = output;
    });
});

$(function() {
    $(".clear__Favourites").on("click", function(){

        $("#Placeholder2").remove();
        myFavouriteProp = JSON.parse(localStorage.getItem("favProp"));
        localStorage.clear();
    });
});

$(function(){         
    $('input[type="number"]').niceNumber();
    
});
    

/*===================================== PROPERTY PAGES JS =========================================*/

/*============================= IMAGE GALLERY =================================*/
$(document).ready(function(){
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.thumbnail-slider'
      });
      $('.thumbnail-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });
  });

  $(document).ready(function(){
    $(".tab").on("click",function(){
        var categoryId = $(this).data("id");

        $(".tab, .tab-pane").removeClass("active");
        $(this).addClass("active");
        $("#"+categoryId).addClass("active");
    });
  });

/*=============== SCROLL REVEAL ANIMATION ===============*/
window.sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true
});

sr.reveal('.image__gallery, .prop__page-title,.registration-form, .back__button, .home__button,.search-container');
// sr.reveal('.footer__info', {delay: 400});
// sr.reveal('.back__button, .home__button');
// sr.reveal('.detail__card, .tab__card', {origin: 'left'});
// sr.reveal('.registration-form, .description__card', {origin: 'right'});