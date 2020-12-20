import React from 'react'
import i1 from './PicSlider/slide1.png';
import slide1_fon from './PicSlider/slide1_fon.png';
import i2 from './PicSlider/1.png';
import slide2_fon from './PicSlider/slide5_fon.jpg';
import i3 from './PicSlider/3.png';
import slide3_fon from './PicSlider/slide6_fon.jpg';

export const SidebarData=[
    {
        title: 'INSTAGRAM',
        backColor: '#78C47A',
        backPicture: slide1_fon,
        colorTitle: '#3C475B',
        colorText: '#3C475B',
        path: '',
        pic: i1,
        info: {
            text: '',
            text1: '@cayman_security',
            text2: 'Посетите наш инстаграм.',
            text3: 'Мы будем рады ответить на все ваши вопросы.',
            
        },
        // coast: '',
        new: false
        
    },
    {
        title: 'Ranger 2',
        backColor: '#78C47A',
        backPicture: slide3_fon,
        colorTitle: 'white',
        colorText: 'white',
        path: '/products',
        pic: i2,
        description: 'Обзор 355°, детекция людей с помощью искусственного интеллекта и режим приватности',
        info: {
            text1: ' - Детекция людей',
            text2: ' - 1080P',
            text3: ' - Обзор 355°',
            text4: ' - Встроенная сирена',
            text5: ' - Интеллектуальное отслеживание',
            text6: ' - Режим приватности',
            text7: ' - Предупреждения об аномальных звуках',
            text8: ' - Ночное видение',
            text9: ' - Двусторонняя аудиосвязь',
            text10: ' - Облако'
        },
        coast: 5590,
        new: true
    },
    {
        title: 'С тепловизором',
        backColor: '#78C47A',
        backPicture: slide2_fon,
        colorTitle: 'white',
        colorText: 'white',
        path: '/products',
        pic: i3,
        info: {
            text: 'Разрешение: 2mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
            text2: 'Матрица: Sony IMX 222',
            text3: 'Процессор: Ambarella',
            text4: 'Водонепроницаемость: IP66',
            text5: 'Подсветка: 15м',
          

        },
        coast: 5590,
        new: false
    },
    {
        title: 'Какая то еще камера',
        backColor: '#78C47A',
        backPicture: slide3_fon,
        colorTitle: 'white',
        colorText: 'white',
        path: '/products',
        pic: i3,
        info: {
            text: 'Разрешение: 2mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
        },
        coast: 5590,
        new: false
    },
]