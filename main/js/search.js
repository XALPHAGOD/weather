const btn= document.getElementById("searchBtn");
const inpCity= document.getElementById("inpCity");
const output= document.getElementById("output");

const day= document.getElementById("day");
const date= document.getElementById("date");
const city= document.getElementById("city");
const temp= document.getElementById("temp");
const weatherStat= document.getElementById("weatherStat");

const weekDay= ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const yearMonth= ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const Dobj= new Date();

const getInfo= async (event)=>{
    event.preventDefault();
    // alert("Hi");

    if(inpCity.value == ""){
        city.innerText= "Please Enter Name Before Search";
    }
    else{

        // console.log(inpCity.value);

        try{
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${inpCity.value}&units=metric&appid=220cfcdfb35a028029aeb57061c7ee8a`;
            let respConv= await (await fetch(url)).json();
            let arrData= [respConv];

            // console.log(arrData[0].weather[0].description);

            
            day.innerText= `${weekDay[Dobj.getDay()]}`;
            date.innerText= `${yearMonth[Dobj.getMonth()]} ${Dobj.getDate()}`;
            city.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText= `${arrData[0].main.temp} °C`;       //alt + 0176 for degree symbol

            let mode= arrData[0].weather[0].main;
            // alert(mode);
            if(mode=="Clear"){
                weatherStat.innerHTML= `<i class="fas fa-sun fa-2x" style="color: rgb(255, 251, 0);"></i>`;
            }
            else if(mode=="Clouds"){
                weatherStat.innerHTML= `<i class="fas fa-cloud fa-2x" style="color: rgb(133, 133, 133);"></i>`;
            }
            else if(mode=="Rain"){
                weatherStat.innerHTML= `<i class="fas fa-cloud-showers-heavy fa-2x" style="color: rgb(0, 10, 100);"></i>`;
            }
            else if(mode== "Haze"){
                weatherStat.innerHTML= `<i class="fas fa-smog fa-2x" style="color: rgb(125, 124, 110);"></i>`;
            }
            else{
                weatherStat.innerHTML= `<i class="far fa-snowflake fa-2x" style="color: #0097e6;"></i>`;
            }

        }catch(err){
            day.innerText= "";
            date.innerText= "";
            city.innerText= "Enter Correct CityName";
            temp.innerText= "";
            weatherStat.innerHTML= "";
        }    
    }

}

btn.addEventListener("click", getInfo);