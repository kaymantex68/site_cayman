import i1 from '../src/Img_products/1.png';
import i1_brand from '../src/Img_products/brand_1.png';
import i2 from '../src/Img_products/2.png';
import i2_brand from '../src/Img_products/brand_2.png';
import i3 from '../src/Img_products/3.png';
import i3_brand from '../src/Img_products/brand_3.png';
import i4 from '../src/Img_products/4.png';
import i5 from '../src/Img_products/5.png';
import i6 from '../src/Img_products/6.png';
import i7 from '../src/Img_products/7.png';
export const Data=[
    {
        model: 'ST-2203',   
        id: 'ST_2203',
        brand: 'ST',        
        type: ['IP камера уличная','ip' ,'outdoor'],
        description:'Антивандальная с вариофокальным объективом 2.8-12мм. Встроенный микрофон.',
        path: '/',
        pic: i1,
        pic_brand: i1_brand,
        coast: '5590₽',
        old_coast: false,
        new: true,
        info: {
            text: ['Разрешение:', '2mpx'],
            text1: ['Вариофокальный объектив:', '2.8-12mm'],
            text2: ['Матрица:', 'Sony IMX 323'],
            text3: ['Процессор:', 'HiSilicon'],
            text4: ['Водонепроницаемость:', 'IP66'],
            text5: ['Подсветка:', '30м'],
            text6: ['Протокол:', 'ONVIF 2.4'],
            text7: ['Облачный сервис:', 'FREEIP'],
            text8: ['Габариты:', '43х65х287'],
            text9: ['Звук:', 'встроенный микрофон'],
            text10: ['Разъемы:', 'Ethernet'],
            text11: ['Режим день/ночь:', 'Авто'],
            text12: ['Количество светодиодов:', '30шт'],
            text13: ['Тревожные выходы:', 'есть'],
            text14: ['Поддержка Trassir:', 'есть'],
            text15: ['Количество потоков:', '3'],
            text16: ['Максимальное разрешение:', '1920х1080'],
            text17: ['Молниезащита:', 'есть'],
            text18: ['Количество кадров:', '25к/с'],
            text19: ['Коридорный формат:', 'ROI'],
        },
        
        
    },
    {
        model: 'RT-3456',
        id: 'RT_3456',
        brand: 'Dahua',
        type: ['IP камера купольная','ip' , 'outdoor'],
        path: '/products',
        pic: i2,
        pic_brand: i3_brand,
        info: {
            text: 'Разрешение: 5mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
            text2: 'Матрица: Sony IMX 572',
            text3: 'Процессор: Ambarella',
            text4: 'Водонепроницаемость: IP66',
            text5: 'Подсветка: 15м'
        },
        coast: '5590₽',
        old_coast: false,
        new: true
    },
    {
        model: 'AXIS DF324',
        id: 'AXIS_DF324',
        brand: 'Dahua',
        type: ['IP камера уличная','ip' , 'outdoor'],
        path: '/products',
        pic: i3,
        pic_brand: i2_brand,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'ST RT-3456',
        id: 'ST_RT_3456_1',
        brand: 'ST',
        type: ['IP камера купольная','ip' ,'indoor'],
        path: '/products',
        pic: i4,
        pic_brand: i1_brand,
        info: {
            text: 'Разрешение: 2mpx',
            text1: 'Вариофокальный объектив: 3,6mm',
        },
        coast: '5590₽',
        old_coast: false,
        new: false
    },
    {
        model: 'SVN-1234',
        id: 'SVN_1234_2',
        brand: 'ST',
        type: ['IP камера купольная','ip' ,'indoor'],
        path: '/products',
        pic: i5,
        pic_brand: i1_brand,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'DAHUA F-23-23',
        id: 'DAHUA_F_23_23',
        brand: 'ST',
        type: ['IP камера уличная','ip' ,'outdoor'],
        path: '/products',
        pic: i6,
        pic_brand: false,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'D-Link DES-1002',
        id: 'D_Link_DES_1002',
        brand: 'ST',
        type: 'Коммутатор сетевой',
        path: '/products',
        pic: i7,
        pic_brand: i1_brand,
        info: {
            text: '8 POE + 2 UpLink 1000m/s',
            text1: 'Вариофокальный объектив: 3,6mm',
            text2: 'Матрица: Sony IMX 222',
            text3: 'Процессор: Ambarella',
            text4: 'Водонепроницаемость: IP66',
            text5: 'Подсветка: 15м',
            text6: 'Комплект: Камера, диск, и прочая херня'
        },
        coast: '5590₽',
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'ST-22df03', 
        id: 'ST_22df03',  
        brand: 'ST',        
        type: ['IP камера уличная','ip' ,'outdoor'],
        description:'Антивандальная с вариофокальным объективом 2.8-12мм. Встроенный микрофон.',
        path: '/',
        pic: i3,
        pic_brand: i1_brand,
        coast: '5590₽',
        old_coast: false,
        new: true,
        info: {
            text: ['Разрешение:', '2mpx'],
            text1: ['Вариофокальный объектив:', '2.8-12mm'],
            text2: ['Матрица:', 'Sony IMX 323'],
            text3: ['Процессор:', 'HiSilicon'],
            text4: ['Водонепроницаемость:', 'IP66'],
            text5: ['Подсветка:', '30м'],
            text6: ['Протокол:', 'ONVIF 2.4'],
            text7: ['Облачный сервис:', 'FREEIP'],
            text8: ['Габариты:', '43х65х287'],
            text9: ['Звук:', 'встроенный микрофон'],
            text10: ['Разъемы:', 'Ethernet'],
            text11: ['Режим день/ночь:', 'Авто'],
            text12: ['Количество светодиодов:', '30шт'],
            text13: ['Тревожные выходы:', 'есть'],
            text14: ['Поддержка Trassir:', 'есть'],
            text15: ['Количество потоков:', '3'],
            text16: ['Максимальное разрешение:', '1920х1080'],
            text17: ['Молниезащита:', 'есть'],
            text18: ['Количество кадров:', '25к/с'],
            text19: ['Коридорный формат:', 'ROI'],
        },
        
    },
    {
        model: 'ST-22403',  
        id: 'ST_22403', 
        brand: 'ST',        
        type: ['IP камера уличная','ip' ,'outdoor'],
        description:'Антивандальная с вариофокальным объективом 2.8-12мм. Встроенный микрофон.',
        path: '/',
        pic: i4,
        pic_brand: i1_brand,
        coast: '5590₽',
        old_coast: false,
        new: true,
        info: {
            text: ['Разрешение:', '2mpx'],
            text1: ['Вариофокальный объектив:', '2.8-12mm'],
            text2: ['Матрица:', 'Sony IMX 323'],
            text3: ['Процессор:', 'HiSilicon'],
            text4: ['Водонепроницаемость:', 'IP66'],
            text5: ['Подсветка:', '30м'],
            text6: ['Протокол:', 'ONVIF 2.4'],
            text7: ['Облачный сервис:', 'FREEIP'],
            text8: ['Габариты:', '43х65х287'],
            text9: ['Звук:', 'встроенный микрофон'],
            text10: ['Разъемы:', 'Ethernet'],
            text11: ['Режим день/ночь:', 'Авто'],
            text12: ['Количество светодиодов:', '30шт'],
            text13: ['Тревожные выходы:', 'есть'],
            text14: ['Поддержка Trassir:', 'есть'],
            text15: ['Количество потоков:', '3'],
            text16: ['Максимальное разрешение:', '1920х1080'],
            text17: ['Молниезащита:', 'есть'],
            text18: ['Количество кадров:', '25к/с'],
            text19: ['Коридорный формат:', 'ROI'],
        },
        
    },
    {
        model: 'ST-22033', 
        id: 'ST_22033_2',   
        brand: 'ST',        
        type: ['IP камера уличная','ip' ,'outdoor'],
        description:'Антивандальная с вариофокальным объективом 2.8-12мм. Встроенный микрофон.',
        path: '/',
        pic: i5,
        pic_brand: i1_brand,
        coast: '5590₽',
        old_coast: false,
        new: true,
        info: {
            text: ['Разрешение:', '2mpx'],
            text1: ['Вариофокальный объектив:', '2.8-12mm'],
            text2: ['Матрица:', 'Sony IMX 323'],
            text3: ['Процессор:', 'HiSilicon'],
            text4: ['Водонепроницаемость:', 'IP66'],
            text5: ['Подсветка:', '30м'],
            text6: ['Протокол:', 'ONVIF 2.4'],
            text7: ['Облачный сервис:', 'FREEIP'],
            text8: ['Габариты:', '43х65х287'],
            text9: ['Звук:', 'встроенный микрофон'],
            text10: ['Разъемы:', 'Ethernet'],
            text11: ['Режим день/ночь:', 'Авто'],
            text12: ['Количество светодиодов:', '30шт'],
            text13: ['Тревожные выходы:', 'есть'],
            text14: ['Поддержка Trassir:', 'есть'],
            text15: ['Количество потоков:', '3'],
            text16: ['Максимальное разрешение:', '1920х1080'],
            text17: ['Молниезащита:', 'есть'],
            text18: ['Количество кадров:', '25к/с'],
            text19: ['Коридорный формат:', 'ROI'],
        },
        
    },
    {
        model: 'ST-22203',  
        id: 'ST_22033_3',    
        brand: 'ST',        
        type: ['IP камера уличная','ip' ,'outdoor'],
        description:'Антивандальная с вариофокальным объективом 2.8-12мм. Встроенный микрофон.',
        path: '/',
        pic: i6,
        pic_brand: i1_brand,
        coast: '5590₽',
        old_coast: '8900₽',
        new: true,
        info: {
            text: ['Разрешение:', '2mpx'],
            text1: ['Вариофокальный объектив:', '2.8-12mm'],
            text2: ['Матрица:', 'Sony IMX 323'],
            text3: ['Процессор:', 'HiSilicon'],
            text4: ['Водонепроницаемость:', 'IP66'],
            text5: ['Подсветка:', '30м'],
            text6: ['Протокол:', 'ONVIF 2.4'],
            text7: ['Облачный сервис:', 'FREEIP'],
            text8: ['Габариты:', '43х65х287'],
            text9: ['Звук:', 'встроенный микрофон'],
            text10: ['Разъемы:', 'Ethernet'],
            text11: ['Режим день/ночь:', 'Авто'],
            text12: ['Количество светодиодов:', '30шт'],
            text13: ['Тревожные выходы:', 'есть'],
            text14: ['Поддержка Trassir:', 'есть'],
            text15: ['Количество потоков:', '3'],
            text16: ['Максимальное разрешение:', '1920х1080'],
            text17: ['Молниезащита:', 'есть'],
            text18: ['Количество кадров:', '25к/с'],
            text19: ['Коридорный формат:', 'ROI'],
        },
        
    },
    {
        model: 'DAHUA F-23-23',
        id: 'DAHUA_F_23_23_2',   
        brand: 'ST',
        type: ['IP камера уличная','ip' ,'outdoor'],
        path: '/products',
        pic: i5,
        pic_brand: false,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'DAHUA F-23-23',
        id: 'DAHUA_F_23_23_4', 
        brand: 'ST',
        type: ['IP камера уличная','ip' ,'outdoor'],
        path: '/products',
        pic: i4,
        pic_brand: false,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'DAHUA F-23-23',
        id: 'DAHUA_F_23_23_5', 
        brand: 'ST',
        type: ['IP камера уличная','ip' ,'outdoor'],
        path: '/products',
        pic: i3,
        pic_brand: false,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'DAHUA F-23-23',
        id: 'DAHUA_F_23_23_6', 
        brand: 'ST',
        type: ['IP камера уличная','ip' ,'outdoor'],
        path: '/products',
        pic: i2,
        pic_brand: false,
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
        old_coast: '7000₽',
        new: false
    },
    {
        model: 'DAHUA F-23-23',
        id: 'DAHUA_F_23_23_7', 
        brand: 'ST',
        type: ['IP камера уличная','ip' ,'outdoor'],
        path: '/products',
        pic: i1,
        pic_brand: false,
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
        old_coast: '7000₽',
        new: false
    },
]