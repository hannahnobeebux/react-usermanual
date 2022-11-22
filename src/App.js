// IMPORTING THE DEFAULT STYLE SHEET
import './App.css';

// IMPORTING HOOKS 
import {useState, useEffect} from 'react'

//IMPORTING STYLED COMPONENTS
import { HeaderOne, Footer, InputtedName} from './globalStyles';

//IMPORTING COMPONENTS 
import  Navbar  from './components/Navbar.js'
import Images from './components/Images.js'


//CREATING THE DATA IN THE FORM OF AN ARRAY WITH OBJECTS 
// EACH OBJECT HAS A KEY VALUE PAIR 
const pageInfo = [
  {title: "My Style", value: ["I’m curious and like to ask questions.", "I enjoy learning new things and understanding concepts to the best of my ability.", "Group tasks can be a great way to meet new people and get inspiration for the task at hand.", "I’m passionate and determined so getting things done whilst also having fun is the way to go!"]},
  {title: "How to contact me", value: ["Email", "Teams", "Phone calls", "I definetely prefer meeting in person!"] },
  {title: "How to help me", value: ["It may take me some time to fully understand a concept once explained so I may ask a lot of questions!"]},
  {title: "What people misunderstand about me", value: ["I can be quite talkative, but I am still focused on the task at hand."]},
  {title: "My Personality Type", value: ["ENFJ-T [Protagonist]"]},
  {title: "My Interests", value: ["Things that I like include reading, hiking, travelling and baking!"]},
  {title: "My Favourite color", value: ["Lavendar"]}
]

function DisplayingPageInfo () {
  return (
    <div className="info">
        {pageInfo.map((item, index) => {
          return (
            <div className = "individual">
              <h2>{item.title}</h2>
              <ul>
                {item.value.map((listItem) => {
                  return (
                    <li>{listItem}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
    </div>
  )
 }
 


function App() {

  // DEFINING THE USE STATE ARRAY --> FOR USER INPUT 
  const [name, setName] = useState("")


  // ONLY DISPLAYING NAME IF ENTERED 
  // useEffect(() => {
  //   if(name !== ""){
  //     setName()
  //   }
  // }, [name])

  return (
    <div className="App">
      <header>
        {/* USING STYLED COMPONENTS TO RENDER A HEADER ELEMENT */}
          <HeaderOne>Hannah's User Manual</HeaderOne>
      </header>

      <main>
        <Navbar />

        <InputtedName>Welcome {name}!</InputtedName>
         {/* USING A HOOK TO TAKE USER INPUT */}
         <input onChange = {(newName) => {setName(newName.target.value)}}/>

        <section className="all-info">
          <DisplayingPageInfo />
        </section>

        <Images />
      </main>

      <Footer>Made with ❤️ in London by Hannah</Footer>
    </div>
  );
}

export default App;
