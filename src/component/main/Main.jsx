import React from 'react';
import './main.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
// import img9 from '../../assets/img(9).jpg'


import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
const Data  = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!! '
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'phan thiet',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$500',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch phan thiet tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    {
        id:5,
        imgSrc: img5,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'nha trang',
        location: 'Viet Nam',
        grade: 'gia cho 1 chuyen du lich ',
        fees: '$700',
        description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    },
    // {
    //     id:9,
    //     imgSrc: img9,
    //     destTitle: 'nha trang',
    //     location: 'Viet Nam',
    //     grade: 'gia cho 1 chuyen du lich ',
    //     fees: '$700',
    //     description: 'Ban đang lên kế hoạch cho chuyến du lịch Nha Trang tự túc  của mình nhưng lại loay hoay chưa biết nên bắt đầu từ đâu? Vậy hãy cùng khám phá ngay bí kíp du lịch Nha Trang tự túc SIÊU TIẾT KIỆM sau đây để chuẩn bị tốt nhất cho chuyến đi sắp tới nhé!Let’s go!!!'
    // },
]
const Main = () => {
    return (
    <section className='main container secyion'>
        <div className="secTitle"> 
        <h3 className="title">
            MoSt visited destination
        </h3>
        </div>
    <div className="secContent grid">
        {
        
        Data.map(({id, imgSrc, destTitle, location, grade ,  fees, description  }) => {
            return(
                <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>
                        <div className="cardInfor">
                            <h1 className="destTitle">{destTitle}</h1>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className='icon'/>
                                <span className='name'><h1>{location}</h1></span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className="    ">
                                <p>{description}</p>
                            </div>
                             <button className='btn flex'>
                                    details <HiOutlineClipboardCheck className='icon'/>
                             </button>
                        </div>
                </div>

            )
            })
        }

    </div>
    </section>
    )
    }


export default Main;