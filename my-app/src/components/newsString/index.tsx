import React from "react";
import { useQuery } from "react-query";
import Marquee from "react-fast-marquee";

export const NewsString = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9a409da011msh8275383ec405230p175f08jsn14d7f6b42334',
            'X-RapidAPI-Host': 'philippine-news.p.rapidapi.com'
        }
    };
    
    const fetchNews = async () => {
        const res = await fetch('https://philippine-news.p.rapidapi.com/latest?limit=5', options);
        return res.json();
      };
    
    const { data, status } = useQuery('news', fetchNews)
    
    return(
        <span>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <Marquee gradient={false}>
                    {data[0].title}
                </Marquee>    
            )}
        </span>
    )
}