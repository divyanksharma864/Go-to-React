import Header from "./Components/Header"
import Entry from "./Components/Entry"
import Data from "./data.js"

export default function App() {
  

    const entryElements = Data.map((entry) => {

     
     /* return (
        <Entry                                      //   In the backend is it doing this:
          key={entry.id}                            //   React has system under the hood to keep track to each element of array we passed as data with a uniquie ID. 
          img={entry.img}                           //   img={Data[0].img}
          title={entry.title}                       //   title={Data[0].title}
          country={entry.country}                   //   country={Data[0].country}
          googleMapsLink={entry.googleMapsLink}     //   googleMapsLink={Data[0].googleMapsLink}
          dates={entry.dates}                       //   dates={Data[0].dates}
          text={entry.text}                         //   country={Data[0].country}
        />
      )
    })
*/

// A more efficient way of calling all the data from the outer source is * as we want all the data therefore we can use it * is:-

        return (
          <Entry          
            key={entry.id}                          
            entry ={entry}    //
          />
        )
      })

    return (
      <>
      <Header />
      <main className="container">
       {entryElements}
      </main>
      </>
    )







  // return (
  //   <>
  //   <Header />
  //   <main className="container">
  //     <Entry 
  //       img = {{
  //         src: "../Images/Lugano_Lake.jpg",
  //         alt: "Lake Lugano"
  //       }}
  //       title = "Lake Lugano"
  //       country = "Switzerland"
  //       googleMapsLink = "https://www.google.com/maps/place/Lake+Lugano/@45.9696564,8.9095428,25419m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47842e8a9ab83885:0x86d13125d560eb81!8m2!3d45.9862544!4d8.9699889!16zL20vMDFyZjc4?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
  //       dates = "12 Jan, 2021 - 24 Jan, 2021"
  //       text = "Lake Lugano is a glacial lake which is situated on the border between southern Switzerland and northern Italy. The lake, named after the city of Lugano, is situated between Lake Como and Lago Maggiore."
  //     />
  //   </main>
  //   </>
  // )

}