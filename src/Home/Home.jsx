import "./Home.css"

import React from 'react'
import Home2 from "../Home2/Home2"

export default function Home() {
    return (<>
    <div className="mainPage">
        <div >
            <img className="main" src="https://images4.alphacoders.com/975/97548.jpg" alt=""></img>
            <div class="imgtext">Title of Vertical Gallery</div>
            <div class="imgtexts">Travel/August 21, 2017</div>
            <img className="side" src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt=""></img>
            <div class="imgtext3">The Sound Cloud</div>
            <div class="imgtext4">You Loved is Doomed</div>
            <div class="imgtexts2">Travel/August 21, 2017</div>
            <img className="side1" src="https://images2.alphacoders.com/475/475841.jpg" alt="" ></img>
            <div class="imgtext1">The Sound Cloud</div>
            <div class="imgtext2">You Loved is Doomed</div>
            <div class="imgtexts1">Travel/August 21, 2017</div>
        </div>
        <div className="text">THE LATEST</div>

        <div class="peoplerev">
            <div class="rev1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZj-HYAE9v66HG11S8B3YKExaewJRqMjKvIA&usqp=CAU" alt="" class="img"></img>
                    <p class="info">Joshua Tree Overnight Adventure</p>
                    <p class="infos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus modi laborum tempore quas saepe dolor. Harum nam, officia provident, cum placeat ipsum sapiente quos officiis dolorem facere ipsam ullam dicta, excepturi odit? Hic dignissimos numquam, repudiandae eligendi architecto quasi.</p>
            </div>
            <div class="rev1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZj-HYAE9v66HG11S8B3YKExaewJRqMjKvIA&usqp=CAU" alt="" class="img"></img>
                    <p class="info">Joshua Tree Overnight Adventure</p>
                    <p class="infos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus modi laborum tempore quas saepe dolor. Harum nam, officia provident, cum placeat ipsum sapiente quos officiis dolorem facere ipsam ullam dicta, excepturi odit? Hic dignissimos numquam, repudiandae eligendi architecto quasi.</p>
            </div>
            <div class="rev1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZj-HYAE9v66HG11S8B3YKExaewJRqMjKvIA&usqp=CAU" alt="" class="img"></img>
                    <p class="info">Joshua Tree Overnight Adventure</p>
                    <p class="infos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus modi laborum tempore quas saepe dolor. Harum nam, officia provident, cum placeat ipsum sapiente quos officiis dolorem facere ipsam ullam dicta, excepturi odit? Hic dignissimos numquam, repudiandae eligendi architecto quasi.</p>
            </div>
        </div>
        <Home2/>
        </div>
    </>
    )
}
