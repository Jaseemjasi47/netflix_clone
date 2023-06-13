import React from 'react'
import Youtube from 'react-youtube'
import { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'
function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then(Response=>{
            setMovie(Response.data.results)
        }).catch(err=>{

        })
    }, [])
    const opts={
        height: 390,
        width: '100%',
        playerVars: {
        autoplay: 1,
        },
    };
        const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
            if (Response.data.results.length!==0){
                setUrlId(Response.data.results[0])
            }else{
            console.log('Array empty')
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                <div className='movieTitle' >
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                <h4>{obj.title}</h4>
                </div>
                )}
            </div>
            <div>
                { urlId && <Youtube opts={opts} videoId={urlId.key} />}
            </div>
        </div>
    )
}

export default RowPost
