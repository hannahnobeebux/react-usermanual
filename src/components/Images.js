import React from 'react'

import baking from '../assets/baking.png'
import books from '../assets/books.png'
import flying from '../assets/flying.png'

import hiking from '../assets/hiking.png'
import matcha from '../assets/matcha.png'
import paris from '../assets/paris.png'
import sunset from '../assets/sunset.png'
import sushi from '../assets/sushi.png'
import turkey from '../assets/turkey.png'

function Images () {
    const imgArr = [
        {
            imgName: baking, 
            altText: "baking"
        }, 
        {
            imgName: books, 
            altText: "books"
        }, 
        {
            imgName: flying, 
            altText: "flying"
        },
        {
            imgName: hiking, 
            altText: "hiking"
        },
        {
            imgName: matcha, 
            altText: "flying"
        },
        {
            imgName: paris, 
            altText: "paris"
        },
        {
            imgName: sunset, 
            altText: "sunset"
        },
        {
            imgName: sushi, 
            altText: "sushi"
        },
        {
            imgName: turkey, 
            altText: "turkey"
        },
      
    ]; 

    return (
        imgArr.map((item, index) => {
            return (<img src = {item.imgName} alt={item.altText} height={100} width={100} />)
        })
    )
}

export default Images