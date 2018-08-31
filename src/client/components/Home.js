import React from 'react'

const Home = () => {

    return (
        <div>
            <p>i'm the home component</p>
            <button onClick={() => console.log('i click this')}>click me</button>
        </div>
    )
}

export default Home