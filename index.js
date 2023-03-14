let weather={
    apiKey:"200ad87f68b23d4de5cfe65142109041",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".wind").innerText="Wind Speed: "+speed+"Km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/2000x1000/?"+name+"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};


document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
   if(event.key=="Enter"){
    weather.search();
   }
});

weather.fetchWeather("Denver");

