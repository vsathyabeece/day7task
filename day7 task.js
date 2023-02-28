var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    //a.Get all the countries from the Asia continent /region using the Filter function
   var res=result.filter((ele)=>ele.region==="Asia");
    console.log(res);
    var final=res.map((ele)=>ele.name);
    console.log(final);
   //b .Get all the countries with a population of less than 2 lakhs using Filter function
   var res=result.filter((ele)=>ele.population<200000);
   console.log(res);
   var final=res.map((ele)=>ele.name);
   console.log(final);
  //c. Print the following details name, capital, flag using forEach function
  var res=result.map((ele)=>ele.name);
  res.forEach((name)=>console.log(name));
  var res=result.map((ele)=>ele.capital).forEach((capital)=>console.log(capital));
  var res=result.map((ele)=>ele.flag).forEach((flag)=>console.log(flag));
//d. Print the total population of countries using reduce function
   var res=result.reduce((a,b)=>a+b.population,0);
  console.log(res);
  //e.Print the country which uses US Dollars as currency.
   let answer = result.filter((ele) => (ele.currencies !== undefined))
    let realanswer = answer.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
    console.log(realanswer);
    var final=realanswer.map((ele)=>ele.name);
    console.log(final);

}

    
   