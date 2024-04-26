import { useEffect, useState } from "react";
import NavBar from "./component/NavBar/NavBar";
import BackGround from "./component/BackGround/BackGround";
import "./App.css";
import Movie from "./component/Movie/movie";
import { Routes,Route } from "react-router-dom";
import Log from "./component/Log/Log";  

const App = () => {
          let movieText=[
            {
              text1:"Dark",
              text2:"Matter"
              
            },
            {
              text1:"Indulge in",
              text2:" your passion"
            },
            {
              text1:"Give in to",
              text2:"your desires"
            },
          ]

          const [movieTextCount,setmovieTextCount]=useState(2);
          const [playSts,setPlaySts]=useState(false);
          useEffect(()=>{
              setInterval(()=>{
                              setmovieTextCount((count)=>(count+1)%3);
              },5000);
      
          },[])
          
          
          
          
          
          return (
            <>
              <div>
                <BackGround playSts={playSts} movieTextCount={movieTextCount} />
                {/* <NavBar/>  */}
                <Routes>
                  <Route path='/' element={<NavBar/>}/>
                  <Route path="/movie" element={
                
                
                  <Movie
                    movieTextCount={movieTextCount}
                    setmovieTextCount={setmovieTextCount}
                    movieText={movieText[movieTextCount]}
                    setPlaySts={setPlaySts}
                    playSts={playSts}
                  />
                  }/>
                  <Route path="/login" element={<Log/>}/>
                </Routes>

                {/* <Movie
                    movieTextCount={movieTextCount}
                    setmovieTextCount={setmovieTextCount}
                    movieText={movieText[movieTextCount]}
                    setPlaySts={setPlaySts}
                    playSts={playSts}
                />
                 */}
              </div>
              
            </>
          )
}
export default App;
