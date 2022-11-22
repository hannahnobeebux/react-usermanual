// IMPORTING THE DEFAULT STYLE SHEET
import './App.css';

// IMPORTING HOOKS 
import {useState, useEffect} from 'react'

//IMPORTING STYLED COMPONENTS
import { HeaderOne, Footer, InputtedName, HeaderTwo} from './globalStyles';

//IMPORTING COMPONENTS 
import  Navbar  from './components/Navbar.js'
import Images from './components/Images.js'
import Secret from './components/Secret';



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

  // CREATING A FUNCTION THAT WILL HANDLE THE TOGGLE OF THE BUTTON AND CHANGING THE BACKGROUND COLOR 
  const handleClickUp = (event) => {
  //   setActive (current => !current)
    event.currentTarget.style.backgroundColor = 'green';
    // if (event.currentTarget.style.backgroundColor = 'green'){
    //   event.currentTarget.style.backgroundColor = 'grey'
    // } else {
    //   event.currentTarget.style.backgroundColor = 'green';
    // }
  }

  const handleClickDown = (event) => {
    event.currentTarget.style.backgroundColor = 'red'
  }

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

              {/* <button className="up" 
              style =  {{
                backgroundColor: isActive ? 'salmon' : '',
                color: isActive ? 'white' : '',
              }}
                 onClick = {handleClick} > 👍   </button> */}

           
            <button onClick = {handleClickUp} >👍</button>  
            <button onClick = {handleClickDown} >👎</button>

            </div>
          )
        })}
    </div>
  )
 }
 


function App() {

  // DEFINING THE USE STATE ARRAY --> FOR USER INPUT 
  const [name, setName] = useState("")

  // CHANGING BACKGROUND COLOUR DEPENDING ON WHETHER A BUTTON IS CLICKED 
  // const [active, setActive] = useState(false)

  //ONCLICK FUNCTION TO HANDLE THE SECRET COMPONENT 

  const [isShown, setIsShown] = useState(false);
  const secondHandleClick = event => {
    setIsShown(current => !current);
  }

  // ONLY DISPLAYING NAME IF ENTERED - OTHERWISE, PROMPTING THE USER TO ENTER THEIR NAME
  useEffect(() => {
    if(name === ""){
      setName("...please enter your name")
    } 
  }, [name])

  return (
    <div className="App">
      <header>
        {/* USING STYLED COMPONENTS TO RENDER A HEADER ELEMENT */}
          <HeaderOne>Hannah's User Manual</HeaderOne>
      </header>

      <main>
        <Navbar />

        {/* <InputtedName>Welcome {name}!</InputtedName> */}
         {/* USING A HOOK TO TAKE USER INPUT */}
         <InputtedName>Welcome {name}!</InputtedName>
         <input onChange = {(newName) => {setName(newName.target.value)}}/>

        <section className="all-info">
          <DisplayingPageInfo />
        </section>

        <HeaderTwo>Here are some images showing my interests and hobbies!</HeaderTwo>
        <Images />

        {/* CALLS THE ONCLICK FUNCTION THAT IS DEFINED AT THE TOP OF "App" */}
        <button className="secret-button" onClick={secondHandleClick}>Shhh... click here for an extra fact!</button>
        
        <div className = "secretSection">
          {/* WHEN THE BUTTON IS CLICKED, THE STATE CHANGES (boolean) AND THE COMPONENT IS CALLED WITH SPECIFIC PROPS! */}
          {isShown && 
            <Secret mainHeader="You found my secret!" secondHeader="Sike.. I don't have any 😜" content="but this is a cool feature!"/>
          }
        </div>
      
      </main>

      {/* STICKY FOOTER! */}
      <Footer>Made with ❤️ in London by Hannah</Footer>
    </div>
  );
}

export default App;
