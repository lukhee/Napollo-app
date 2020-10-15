import React from 'react';
import MusicTabs from './Tabs'
import imgUrl from '../../general/imgs/artist1.jpg'

const musicData = [
    {
        id: 1,
        url: imgUrl,
        title: 'Shape Of You',
        name: 'Farzana',
        likes: 400
    }, {
        id: 2,
        url: imgUrl,
        title: 'Shape Of You',
        name: 'Farzana',
        likes: 400
    }, {
        id: 3,
        url: imgUrl,
        title: 'Shape Of You',
        name: 'Farzana',
        likes: 400
    }, {
        id: 4,
        url: imgUrl,
        title: 'Shape Of You',
        name: 'Farzana',
        likes: 400
    }, {
        id: 5,
        url: imgUrl,
        title: 'Shape Of You',
        name: 'Farzana',
        likes: 400
    }
]


const HotMusic = () => {
    return (
        <div>
            <MusicTabs musicData={musicData}/>
        </div>
    );
};

export default HotMusic;