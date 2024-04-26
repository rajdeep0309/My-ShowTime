import './movie.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'  


const movie = ({movieText,movieTextCount,setmovieTextCount,setPlaySts,playSts}) => {
  return (
    <div className='movie-name'>
      <div className="movie-text">
        <p>{movieText.text1}</p>
        <p>{movieText.text2}</p>
      </div>
      <div className="movie-explore">
        <p>Book Ticket</p>
        <img src={arrow_btn} alt="loading" />

      </div>
      <div className="movie-dot-play">
            <div className="movie-dots">
              <li onClick={()=>setmovieTextCount(0)}  className={movieTextCount===0?"movie-dot orange":"movie-dot"}></li>
              <li onClick={()=>setmovieTextCount(1)}  className={movieTextCount===1?"movie-dot orange":"movie-dot"}></li>
              <li onClick={()=>setmovieTextCount(2)}  className={movieTextCount===2?"movie-dot orange": "movie-dot"}></li>
            </div>
      </div>
      <div className="movie-video-play">
        <img onClick={()=>setPlaySts(!playSts)} src={playSts?pause_icon:play_icon} alt="Error" />
        <p>see the Trailer</p>
      </div>
    </div>
  )
}
export default movie;
