import { useState } from 'react';
import './App.css';
     


const  Europe=[
  {
    imag:"/ Europe/germany(1).jpg",
  name:"Germany" ,
  Pros:"High demand for skilled engineers, good benefits and social safety \nnet , stable political and economic environment.",
  Cons:"Potential language barrier, bureaucracy can be challenging.",
  },
  {
    imag:"/ Europe/Netherlands(2).jpg",
    name:"Netherlands",
  Pros:"Focus on work-life balance, strong startup culture, international and diverse communities.",
  Cons:"High cost of living, potential for language barrier for those who don't speak Dutch.",
  
  
  },
  {
    imag:"/ Europe/unitedKingdom(3).jpg",
    name: "United Kingdom",
  Pros:"Large tech companies and startups, global influence, potential for career advancement.",
  Cons:"Cost of living in London can be high, potential for Brexit uncertainty.",
  
  
  },
  {
    imag:"/ Europe/Switzerland(4).jpg",
    name:"Switzerland",
  Pros:"Stable economy, high quality of life, strong focus on innovation.",
  Cons:"High cost of living, potential language barrier, strict immigration policies.",
  
  
  },
  {
    imag:"/ Europe/Denmark(5).jpg",
    name:"Denmark",
  Pros:"Work-life balance, strong government support for tech startups, welcoming environment.",
  Cons:"Relatively high taxes, potential for language barrier.",
  
  
  },
  {
    imag:"/ Europe/Ireland(6).jpg",
    name:"Ireland",
  Pros:"Strong government support for tech industry, low corporate tax rates, English as an official language.",
  Cons:"Can be expensive, potential for job market competition.",
  
  
  },
  {
    imag:"/ Europe/Sweden (7).jpg",
    name:"Sweden",
  Pros:"Strong focus on work-life balance, high quality of life, government support for tech innovation.",
  Cons:"Potentially high cost of living, potential for language barrier.",
  
  
  }
  ]
  
  const  NorthAmrica=[
    {
      imag:"/NorthAmrica/unitState(1).jpg",
    name:"unitState" ,
    Pros:"Global tech giants, strong venture capital funding, access to cutting-edge technology, opportunities for career advancement.",
    Cons:"High cost of living, competitive job market, potential for long work hours.",
    },
    {
      imag:"/NorthAmrica/canda(2).jpg",
      name:"canda",
    Pros:"Competitive salaries, affordable living costs in many cities, strong social safety net, multicultural and diverse population.",
    Cons:"Job market can be competitive, smaller tech scene compared to the US, colder climate in some regions.",
    
    
    },
    {
      imag:"/NorthAmrica/micsco(3).jpg",
      name: "micsco",
    Pros:"Access to major US tech markets, lower cost of living, opportunity to learn Spanish, vibrant culture.",
    Cons:"Political instability, bureaucratic challenges, potential for language barrier, lower average salaries compared to the US and Canada.",
    
    
    },
     ]
  
     const  SorthAmrica=[
      {
        imag:"/NorthAmrica/unitState(1).jpg",
      name:"Brazil" ,
      Pros:"Large market potential, strong government support for tech innovation, relatively low cost of living compared to North America.",
      Cons:"Political instability, bureaucratic challenges, potential for language barrier (Portuguese), high crime rates in some cities.",
      },
      {
        imag:"/NorthAmrica/canda(2).jpg",
        name:"Argentina",
      Pros:"Strong engineering talent pool, relatively affordable cost of living, a culture that values creativity and innovation.",
      Cons:"Economic instability, political uncertainty, potential language barrier (Spanish).",
      
      
      },
      {
        imag:"/SorthAmrica/Colombia(3).jpg",
        name: "Colombia",
      Pros:"Lower cost of living compared to other South American countries, growing startup scene, vibrant culture.",
      Cons:"Political instability in some regions, potential language barrier (Spanish), relatively smaller tech sector compared to Brazil and Argentina.",
      
      
      },
  
      {
        imag:"/SorthAmrica/Chile(4).jpg",
        name: "Chile",
      Pros:"Strong government support for tech development, access to international markets, relatively high average salaries.",
      Cons:"High cost of living, potential language barrier (Spanish), limited job opportunities in certain areas.",
      
      
      },
     
       ]
  
  
       const  Asia=[
        {
          imag:"/Asia/Singapore(1).jpg",
        name:"Singapore" ,
        Pros:"Strong government support for tech innovation, excellent infrastructure, English-speaking.",
        Cons:"High cost of living, competitive job market.",
        },
        {
          imag:"/Asia/Japan(2).jpg",
          name:"Japan",
        Pros:"High salaries, excellent work-life balance, advanced infrastructure.",
        Cons:"Language barrier, complex cultural norms, potential for limited career growth for non-native Japanese speakers.",
        
        
        },
        {
          imag:"/Asia/South Korea(3).jpg",
          name: "South Korea",
        Pros:"High salaries, excellent infrastructure, booming mobile development scene.",
        Cons:"Language barrier, competitive job market, complex cultural norms.",
        
        
        },
    
        {
          imag:"/Asia/India(4).jpg",
          name: "India",
        Pros:"Lower cost of living, high demand for software engineers, growing startup ecosystem.",
        Cons:"Competitive job market, potential for salary discrepancies, challenges with work-life balance.",
        
        
        },
        {
          imag:"/Asia/China(5).jpg",
          name: "China",
        Pros:"Huge market size, fast-paced growth, potential for high salaries, leading role in AI and mobile development.",
        Cons:"Language barrier, strict regulations, potential cultural differences, competitive job market.",
        
        
        },
       
         ]
       
         const  Africa=[
          {
            imag:"/Africa/Nigeria(1).jpg",
          name:"Nigeria" ,
          Pros:"High demand for software engineers, relatively low cost of living, strong government initiatives to support tech innovation.",
          Cons:"Political instability, unreliable infrastructure, potential for salary discrepancies.",
          },
          {
            imag:"/Africa/Kenya(2).jpg",
            name:"Kenya",
          Pros:"Strong mobile development expertise, thriving startup ecosystem, relatively stable political environment.",
          Cons:"High cost of living in major cities, limited access to advanced technology in certain regions.",
          
          
          },
          {
            imag:"/Africa/South Africa(3).jpg",
            name: "South Africa",
          Pros:"Advanced infrastructure, relatively stable economy, access to international tech companies.",
          Cons:"High cost of living, high unemployment rate, political challenges.",
          
          
          },
      
          {
            imag:"/Africa/Egypt(4).jpg",
            name: "Egypt",
          Pros:"Growing startup ecosystem, relatively low cost of living, strategic location for access to European and Middle Eastern markets.",
          Cons:"Political  instability, bureaucracy can be challenging, potential for limited access to advanced technologies.",
          
          
          },
          
          {
            imag:"/Africa/Rwanda(5).jpg",
            name: "Rwanda",
          Pros:"Stable political environment, government initiatives to attract tech investment, English-speaking.",
          Cons:"Limited access to advanced technology, relatively small tech sector.",
          
          
          },
         
           ]

        
         



  
export default function App() {
  const[country,setCountry]=useState("About")
   function handlewithcountry(namecountry){
    
    if(namecountry==="About")
      {setCountry("About")};
   

    if(namecountry==="Asia")
   {setCountry("Asia")};
 

    if(namecountry==="Europe")
      {setCountry("Europe")};
 
    
    if(namecountry==="NorthAmrica")
      {setCountry("NorthAmrica")};
    
    if(namecountry==="SorthAmrica")
      {setCountry("SorthAmrica")};
   
    
    if(namecountry==="Africa")
      {setCountry("Africa")};
   


   }
  
  return (
    <div>
            <header className='header'>
              <em className='em-text'>~<span className='span-em-text'>M</span>ore <span span className='span-em-text'>C</span>ountries <span className='span-em-text'>F</span>or <span className='span-em-text'>S</span>oftware <span className='span-em-text'>E</span>nginering~</em>
              <button className='mode-button'><i>Dark Mode</i></button>

            </header>
            
            <div className='option'>
<ul className="select-button">
<button className={country==="About" ?"button-contry-after-selct":"button-contry"} onClick={()=>handlewithcountry("About")}><i>About</i></button>
  <button className={country==="Europe" ?"button-contry-after-selct":"button-contry"} onClick={()=>handlewithcountry("Europe")}><i>Europe</i></button>
  <button className={country==="Asia" ?"button-contry-after-selct":"button-contry"} onClick={()=>handlewithcountry("Asia")} ><i>Asia</i></button>
  <button className={country==="NorthAmrica" ?"button-contry-after-selct":"button-contry"} onClick={()=>handlewithcountry("NorthAmrica")}><i>NorthAmrica</i></button>
  <button className={country==="SorthAmrica" ?"button-contry-after-selct":"button-contry"} onClick={()=>handlewithcountry("SorthAmrica")}><i>SorthAmrica</i></button>
  <button className={country==="Africa" ?"button-contry-after-selct":"button-contry"} onClick={()=>handlewithcountry("Africa")}><i>Africa</i></button>
  
</ul>
            </div>
  <div className='div-country'>
  {country ==="About" ?   <Ainformation /> :""}

{country ==="Europe" ?   <AEurope /> :""}
{country === "Asia"?   <AAsia /> :""}
{country  === "NorthAmrica" ?   <ANorthAmrica /> :""}
{country === "SorthAmrica"?   <ASorthAmrica /> :""}
{country === "Africa"?   <AAfrica /> :""}
</div>
      
    </div>
  );
}

function Ainformation(){
  return <div>
      <div className="div-text-for-frist-pags">
<p>
<h3>~Software Engineer in general~</h3>
<em>
Software engineering is the <span>branch of computer science</span> that deals with the design, development, testing, and maintenance of software applications. Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users.

Software engineers design and develop computer games, business applications, operating systems, network control systems, and middleware—to name just a few of the many career paths available.
<h3>~Software engineering in the world~</h3>
<em>Number of software developers
As of <span>2021</span>, there were <span>24.3 million</span> software developers in the world, and predictions estimate that there will be <span>45 million by 2030.</span></em>
<h3>~Software engineering careers~</h3>
<em>Some software engineering careers include:<br></br>
<span>DevOps engineer:</span> Helps organizations streamline software development and deployment by automating tasks.<br></br> 
<span>Back-end engineer:</span> Creates the functions behind the user interface, focusing on the system's core logic, design, and performance .<br></br>
<span>Cloud architect:</span> Oversees cloud computing strategies, including cloud application designs and cloud management .<br></br>
<span>Quality assurance engineer:</span> A common software engineering career path that requires extensive knowledge of software engineering
</em>
<h3>What factors make a country great for software engineers?</h3>
<em>
Software engineering is one of the most in-demand and well-paid professions in the world. As a result, there are many factors that software engineers must consider when choosing a country to work in. One of the most important factors is <span>quality of life</span>. This includes factors such as the working hours , quality of the healthcare system, the level of crime, and the availability of leisure activities.

Another important factor is <span>salary</span>. In many developed countries, software engineers are paid very well, but the cost of living can be high. Finally, another factor to consider is the <span>business environment</span>. In some countries, it is easier to start and grow a software engineering business than in others. All of these factors should be considered when choosing a country to work in as a software engineer.
<span className='sapn-spaicl'>You can choose from the options at the top of the page the continents of the world and the best countries to work as a software engineer.</span>
</em>


</em>




</p>
</div>
  </div>
}









function AEurope(){
  return <div>
    <div className="App">
      {Europe.map(country=> (<div className='flags-country-text'>  <div className='img'><img src={country.imag} alt='Sajed' />
    </div>
    <div className='text'>
      <h3><i>~{country.name}~</i></h3>
      <p>
        <em><span>Pros:</span>{country.Pros}</em><br></br>
        <em><span>Cons:</span>{country.Cons}</em>
      </p>
    </div>
    
    
      </div>
) )}



            </div>

  </div>
} 


function ANorthAmrica(){
  return <div>
    <div className="App">
      {NorthAmrica.map(country=> (<div className='flags-country-text'>  <div className='img'><img src={country.imag} alt='Sajed' />
    </div>
    <div className='text'>
      <h3><i>~{country.name}~</i></h3>
      <p>
        <em><span>Pros:</span>{country.Pros}</em><br></br>
        <em><span>Cons:</span>{country.Cons}</em>
      </p>
    </div>
    
    
      </div>
) )}



            </div>

  </div>
}

function ASorthAmrica(){
  return <div>
    <div className="App">
      {SorthAmrica.map(country=> (<div className='flags-country-text'>  <div className='img'><img src={country.imag} alt='Sajed' />
    </div>
    <div className='text'>
      <h3><i>~{country.name}~</i></h3>
      <p>
        <em><span>Pros:</span>{country.Pros}</em><br></br>
        <em><span>Cons:</span>{country.Cons}</em>
      </p>
    </div>
    
    
      </div>
) )}



            </div>

  </div>
}



function AAsia(){
  return <div>
    <div className="App">
      {Asia.map(country=> (<div className='flags-country-text'>  <div className='img'><img src={country.imag} alt='Sajed' />
    </div>
    <div className='text'>
      <h3><i>~{country.name}~</i></h3>
      <p>
        <em><span>Pros:</span>{country.Pros}</em><br></br>
        <em><span>Cons:</span>{country.Cons}</em>
      </p>
    </div>
    
    
      </div>
) )}



            </div>

  </div>
}



function AAfrica(){
  return <div>
    <div className="App">
      {Africa.map(country=> (<div className='flags-country-text'>  <div className='img'><img src={country.imag} alt='Sajed' />
    </div>
    <div className='text'>
      <h3><i>~{country.name}~</i></h3>
      <p>
        <em><span>Pros:</span>{country.Pros}</em><br></br>
        <em><span>Cons:</span>{country.Cons}</em>
      </p>
    </div>
    
    
      </div>
) )}



            </div>

  </div>
} 







 
/*
      */



