import { useEffect } from 'react'
import './welcome.scss'
import Button from '../../button/Button'
import hoverEffect from 'hover-effect'

import HomeSection from '../HomeSection'


import {
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion
} from '../../../assets/images'

const chamImgs = [champAshe, champAhri, champGaren]

const Welcome = props => {
    
    // phần animation này thú vị nè
    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1? 0: index + 1].getAttribute('src')

            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })

            animates.push(animation)
            
            // console.log('animates',animates)
            // console.log('welcomeImgs', welcomeImgs)

            welcomeImgs.forEach(e => e.remove())
        })  

        // console.log('animates',animates)

        let currItem = 0;
        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if(!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000)
        }
        setInterval(autoImageSlide, 3000)

    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome to</span>
                        <h2 className='main-color'>Summoner's Rift</h2>
                    </div>
                    <div className="description m-t-4">
                        Liên Minh Huyền Thoại là một trò chơi chiến thuật đồng đội nơi hai đội với năm vị tướng mạnh mẽ sẽ đối đầu nhau nhằm mục tiêu phá hủy căn cứ đối phương. Chọn một trong hơn 150 vị tướng để tạo ra những pha thi đấu xuất thần, hạ gục đối thủ, san phẳng trụ địch và hướng đến chiến thắng vinh quang.
                    </div>
                    <div className="btns m-t-4">
                        <Button className={'btn-main'}>PLAY NOW</Button>
                        <Button className= {'btn-second'}>GET STARTD</Button>
                    </div>
                </div>
            </div>

            <div className="welcome__img relative">
                <div className="welcome__img__slide" id='welcome__img__slide'>
                    {
                        chamImgs.map((cham, index) => (
                            <img src={cham} key={index}></img>
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome