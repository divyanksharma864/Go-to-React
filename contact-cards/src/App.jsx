import Contact from './Contact'
import mrWhiskerson from "../images/mr_whiskerson.jpg"
import fluffykins from "../images/fluffykins.jpg"
import felix from "../images/fluffykins.jpg"
import pumpkin from "../images/pumpkin.jpg"

function App() {
  return(
    <div className="Contacts">
      <Contact
        img={mrWhiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )

}

export default App