import { Component } from "react";
import Header from "../Header";
import "../Home/index.css"

class Home extends Component{
    render(){
        return(
            <>
            <div class="container">
            <div class="music-player">
            <Header/>
            <img src="../../../public/logo512.png" alt="songalbum" class="song-img"/>
            <h1>Despacito</h1>
            <p>Luis Fonis. peter</p>

            <audio controls>
                <source src="" type='audio/mpeg'/>
            </audio>

            </div>
            </div>
            </>
        )
    }
}

export default Home;