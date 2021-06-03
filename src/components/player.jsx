import React, { useRef,useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,
        faAngleLeft,
        faAngleRight,
        faPause,
      } from '@fortawesome/free-solid-svg-icons'

const Player = ({currentsong, isplaying, setisplaying}) => {
  // reff
  const audioref = useRef(null)
  // event handler
  const playsonghandler = () => {
    if (isplaying) {
      audioref.current.pause();
        setisplaying(!isplaying);
    } else {
      audioref.current.play();
        setisplaying(!isplaying);
    }
  }
  const timeupdatehandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setsonginfo({...songinfo, currentTime:current, duration})
  }
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ('0' + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandler = (e) => {
    audioref.current.currentTime = e.target.value;
    setsonginfo({...songinfo, currentTime: e.target.value})
  }
  // state
  const [songinfo, setsonginfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <div className='player'>
        <div className="time-control">
          <p>{getTime(songinfo.currentTime)}</p>
          <input min={0}
                  max={songinfo.duration}
                    type="range"
                      value={songinfo.currentTime}
                        onChange={dragHandler}
                   />
          <p>{getTime(songinfo.duration)}</p>
        </div>
      <div className="play-control">
        < FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
        < FontAwesomeIcon 
        onClick={playsonghandler} 
        className='play' size='2x' 
        icon={isplaying ? faPause : faPlay} />
        < FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} />
      </div>
      <audio
      onTimeUpdate={timeupdatehandler}
      onLoadedMetadata={timeupdatehandler}
      ref={audioref}
      src={currentsong.audio}
      ></audio>
    </div>
  )
}

export default Player;
