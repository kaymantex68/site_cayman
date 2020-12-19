import React from 'react'
import i1 from './PicSlider/slide1.png';
import slide1_fon from './PicSlider/slide1_fon.jpg';
import i2 from './PicSlider/2.png';
import i3 from './PicSlider/3.png';

export const SidebarData=[
    {
        title: '',
        backColor: '#78C47A',
        backPicture: slide1_fon,
        colorText: 'white',
        path: '/',
        pic: i1,
        info: {
            text: '@INSTAGRAM',
            text1: 'cayman_security',
            text2: 'Посетите наш инстаграм.',
            text3: 'Мы будем рады ответить на все ваши вопросы',
            
        },
        coast: '',
        new: false
        
    },
    {
        title: 'IP купольная',
        backColor: '#78C47A',
        colorText: '#3C475B',
        path: '/products',
        pic: i2,
        info: {
            text: 'Разрешение: 5mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
            text2: 'Матрица: Sony IMX 572',
            text3: 'Процессор: Ambarella',
            text4: 'Водонепроницаемость: IP66',
            text5: 'Подсветка: 15м'
        },
        coast: '5590₽',
        new: true
    },
    {
        title: 'С тепловизором',
        backColor: '#78C47A',
        colorText: '#3C475B',
        path: '/products',
        pic: i3,
        info: {
            text: 'Разрешение: 2mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
            text2: 'Матрица: Sony IMX 222',
            text3: 'Процессор: Ambarella',
            text4: 'Водонепроницаемость: IP66',
            text5: 'Подсветка: 15м',
            text6: 'Комплект: Камера, диск, и прочая херня'

        },
        coast: '5590₽',
        new: false
    },
    {
        title: 'Какая то еще камера',
        backColor: '#78C47A',
        colorText: '#3C475B',
        path: '/products',
        pic: i3,
        info: {
            text: 'Разрешение: 2mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
        },
        coast: '5590₽',
        new: false
    },
]