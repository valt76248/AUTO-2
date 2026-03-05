const carsData = [
    {
        id: "ferrari-348",
        brand: "Ferrari",
        model: "348 Spider",
        year: 1994,
        mileage: "59 000",
        tagline: "Итальянская легенда. Коллекционный кабриолет V8.",
        shortSpecs: "3.4 V8 • 320 л.с. • Механика • Задний",
        color: "Жёлтый",
        body: "Кабриолет",
        country: "Италия",
        condition: "Отличное",
        accidents: false,
        ownerCount: "По ДКП",
        heroImage: "images/ferrari-348/Скриншот 26-02-2026 17.03.49.png",
        photos: [
            "images/ferrari-348/Скриншот 26-02-2026 17.03.03.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.03.49.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.04.08.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.04.22.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.05.21.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.05.39.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.06.40.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.07.06.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.07.22.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.07.37.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.07.52.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.08.09.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.08.29.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.08.42.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.08.59.png",
            "images/ferrari-348/Скриншот 26-02-2026 17.10.08.png",
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "3 405 см³",
                cylinders: "8 (V-образный)",
                power: "320 л.с. при 7200 об/мин",
                torque: "324 Н·м при 5000 об/мин",
            },
            transmission: {
                gearbox: "Механика",
                drive: "Задний",
            },
            performance: {
                acceleration: "5.3 с",
                topSpeed: "280 км/ч",
                fuelCity: "20 л/100 км",
                fuelHighway: "9.6 л/100 км",
                fuelCombined: "12.7 л/100 км",
            },
            dimensions: {
                length: "4 230 мм",
                height: "1 170 мм",
                wheelbase: "2 450 мм",
                frontTrack: "1 502 мм",
                rearTrack: "1 578 мм",
                clearance: "120 мм",
                trunk: "200 л",
            },
            chassis: {
                frontBrakes: "Дисковые",
                rearBrakes: "Дисковые",
                frontTires: "215/50/R17",
                rearTires: "255/45/R17",
            },
        },
    },
    {
        id: "ram-1500-rho",
        brand: "Ram",
        model: "1500 RHO",
        year: 2025,
        mileage: "50",
        tagline: "Зверь на 540 л.с. Новый. Полный привод. Абсолютная мощь.",
        shortSpecs: "3.0 Twin-Turbo • 540 л.с. • Автомат • Полный",
        color: "Серый",
        body: "Пикап",
        country: "США",
        condition: "Новый",
        accidents: false,
        ownerCount: "Первый",
        heroImage: "images/ram-1500-rho/1200x900n.webp",
        photos: [
            "images/ram-1500-rho/1200x900n.webp",
            "images/ram-1500-rho/1200x900n (1).webp",
            "images/ram-1500-rho/1200x900n (13).webp",
            "images/ram-1500-rho/1200x900n (2).webp",
            "images/ram-1500-rho/1200x900n (3).webp",
            "images/ram-1500-rho/1200x900n (4).webp",
            "images/ram-1500-rho/1200x900n (5).webp",
            "images/ram-1500-rho/1200x900n (6).webp",
            "images/ram-1500-rho/1200x900n (7).webp",
            "images/ram-1500-rho/1200x900n (8).webp",
            "images/ram-1500-rho/1200x900n (9).webp",
            "images/ram-1500-rho/1200x900n (10).webp",
            "images/ram-1500-rho/1200x900n (11).webp",
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "2 993 см³",
                cylinders: "6 (Рядный)",
                power: "540 л.с. (397 кВт) при 5700 об/мин",
                torque: "707 Н·м при 3500 об/мин",
                turbo: "Турбонаддув (Twin-Turbo)",
            },
            transmission: {
                gearbox: "Автомат",
                drive: "Полный",
            },
            performance: {
                acceleration: "4.6 с",
                topSpeed: "190 км/ч",
                fuelCity: "15.7 л/100 км",
                fuelHighway: "11.2 л/100 км",
                fuelCombined: "13.8 л/100 км",
            },
            dimensions: {
                length: "5 936 мм",
                width: "2 235 мм",
                height: "2 079 мм",
                wheelbase: "3 686 мм",
                clearance: "300 мм",
                trunk: "1 523 л",
            },
            chassis: {
                wheels: "325/65 R18",
            },
        },
    },
    {
        id: "audi-q5",
        brand: "Audi",
        model: "Q5 Sportback",
        year: 2025,
        mileage: "50",
        tagline: "Новейший кроссовер. TFSI quattro. Немецкая точность.",
        shortSpecs: "2.0 TFSI • 204 л.с. • Робот S tronic • Полный quattro",
        color: "Серый",
        body: "Кроссовер",
        country: "Германия",
        condition: "Новый",
        accidents: false,
        ownerCount: "Первый",
        heroImage: "images/audi-q5/1200x900n.webp",
        photos: [
            "images/audi-q5/1200x900n.webp",
            "images/audi-q5/1200x900n (1).webp",
            "images/audi-q5/1200x900n (2).webp",
            "images/audi-q5/1200x900n (3).webp",
            "images/audi-q5/1200x900n (4).webp",
            "images/audi-q5/1200x900n (5).webp",
            "images/audi-q5/1200x900n (6).webp",
            "images/audi-q5/1200x900n (7).webp",
            "images/audi-q5/1200x900n (8).webp",
            "images/audi-q5/1200x900n (9).webp",
            "images/audi-q5/1200x900n (10).webp",
            "images/audi-q5/1200x900n (11).webp",
            "images/audi-q5/1200x900n (12).webp",
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "1 984 см³",
                cylinders: "4",
                power: "204 л.с. (150 кВт) при 6000 об/мин",
                torque: "340 Н·м при 4000 об/мин",
                turbo: "Турбонаддув",
            },
            transmission: {
                gearbox: "Робот (S tronic)",
                drive: "Полный (quattro)",
            },
            performance: {
                acceleration: "7.2 с",
                topSpeed: "226 км/ч",
                fuelCombined: "7.9 л/100 км",
            },
            dimensions: {
                length: "4 717 мм",
                width: "1 900 мм",
                height: "1 619 мм",
                wheelbase: "2 828 мм",
                trunk: "515/1 415 л",
            },
            chassis: {
                wheels: "235/60 R18",
            },
        },
    },
    {
        id: "ram-1500-crew",
        brand: "Ram",
        model: "1500 Crew Cab",
        year: 2025,
        mileage: "50",
        tagline: "Полноразмерный пикап. 420 л.с. Рестайлинг 2025.",
        shortSpecs: "3.0 Twin-Turbo • 420 л.с. • Автомат • Полный",
        color: "Чёрный",
        body: "Пикап",
        country: "США",
        condition: "Новый",
        accidents: false,
        ownerCount: "Первый",
        heroImage: "images/ram-1500-crew/1200x900n.webp",
        photos: [
            "images/ram-1500-crew/1200x900n.webp",
            "images/ram-1500-crew/1200x900n (1).webp",
            "images/ram-1500-crew/1200x900n (2).webp",
            "images/ram-1500-crew/1200x900n (3).webp",
            "images/ram-1500-crew/1200x900n (4).webp",
            "images/ram-1500-crew/1200x900n (5).webp",
            "images/ram-1500-crew/1200x900n (6).webp",
            "images/ram-1500-crew/1200x900n (7).webp",
            "images/ram-1500-crew/1200x900n (8).webp",
            "images/ram-1500-crew/1200x900n (9).webp",
            "images/ram-1500-crew/1200x900n (10).webp",
            "images/ram-1500-crew/1200x900n (12).webp",
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "2 993 см³",
                cylinders: "6 (Рядный)",
                power: "420 л.с. (308 кВт)",
                torque: "635 Н·м",
                turbo: "Турбонаддув (Twin-Turbo)",
            },
            transmission: {
                gearbox: "Автомат",
                drive: "Полный",
            },
            performance: {
                fuelCity: "12.2 л/100 км",
                fuelHighway: "9.7 л/100 км",
                fuelCombined: "11.0 л/100 км",
            },
            dimensions: {
                length: "5 903 мм",
                width: "2 062 мм",
                height: "1 968 мм",
                wheelbase: "3 672 мм",
                clearance: "219 мм",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые",
                frontSuspension: "Независимая, пружинная",
                rearSuspension: "Зависимая, пружинная",
            },
        },
    },
    {
        id: "nissan-370z",
        brand: "Nissan",
        model: "370Z",
        year: 2016,
        mileage: "117 500",
        tagline: "Японский спорткар. V6 на 331 л.с. Задний привод. Чистый драйв.",
        shortSpecs: "3.7 V6 • 331 л.с. • Автомат • Задний",
        color: "Жёлтый",
        body: "Купе",
        country: "Япония",
        condition: "Отличное",
        accidents: false,
        ownerCount: "Впервые на Авто.ру",
        heroImage: "images/nissan-370z/1200x900n.webp",
        photos: [
            "images/nissan-370z/1200x900n.webp",
            "images/nissan-370z/1200x900n (1).webp",
            "images/nissan-370z/1200x900n (2).webp",
            "images/nissan-370z/1200x900n (3).webp",
            "images/nissan-370z/1200x900n (4).webp",
            "images/nissan-370z/1200x900n (5).webp",
            "images/nissan-370z/1200x900n (6).webp",
            "images/nissan-370z/1200x900n (7).webp",
            "images/nissan-370z/1200x900n (11).webp",
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "3 696 см³",
                cylinders: "6 (V-образный)",
                power: "331 л.с.",
                torque: "366 Н·м",
            },
            transmission: {
                gearbox: "Автомат",
                drive: "Задний",
            },
            performance: {
                acceleration: "5.6 с",
                topSpeed: "250 км/ч",
                fuelCity: "15.3 л/100 км",
                fuelHighway: "7.8 л/100 км",
                fuelCombined: "10.5 л/100 км",
            },
            dimensions: {
                length: "4 250 мм",
                width: "1 845 мм",
                height: "1 310 мм",
                wheelbase: "2 550 мм",
                clearance: "120 мм",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                frontSuspension: "Независимая, пружинная",
                rearSuspension: "Независимая, пружинная",
            },
        },
    },
    {
        id: "genesis-g70",
        brand: "Genesis",
        model: "G70 Premier",
        year: 2019,
        mileage: "130 000",
        tagline: "Премиальный седан. Полный привод. Комплектация Premier.",
        shortSpecs: "2.0 Turbo • 197 л.с. • Автомат • Полный",
        color: "Белый",
        body: "Седан",
        country: "Южная Корея",
        condition: "Не требует ремонта",
        accidents: "Информация об участии в ДТП",
        ownerCount: "2 владельца",
        heroImage: "images/genesis-g70/photo_59@24-02-2026_10-39-35.jpg",
        photos: [
            "images/genesis-g70/photo_59@24-02-2026_10-39-35.jpg",
            "images/genesis-g70/photo_60@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_61@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_62@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_63@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_64@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_65@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_66@24-02-2026_10-40-08.jpg",
            "images/genesis-g70/photo_67@24-02-2026_10-40-08.jpg",
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "1 998 см³",
                cylinders: "4",
                power: "197 л.с.",
                torque: "353 Н·м",
                turbo: "Турбонаддув",
            },
            transmission: {
                gearbox: "Автомат",
                drive: "Полный",
            },
            performance: {
                acceleration: "8.3 с",
                topSpeed: "228 км/ч",
                fuelCity: "13.5 л/100 км",
                fuelHighway: "6.8 л/100 км",
                fuelCombined: "9.3 л/100 км",
                fuelType: "АИ-95",
            },
            dimensions: {
                length: "4 685 мм",
                width: "1 850 мм",
                height: "1 400 мм",
                wheelbase: "2 835 мм",
                clearance: "150 мм",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                frontSuspension: "Независимая, пружинная",
                rearSuspension: "Независимая, пружинная",
                wheels: "225/45 R18",
            },
        },
    },
    {
        id: "bmw-530i-xdrive",
        brand: "BMW",
        model: "530i xDrive M Sport",
        year: 2025,
        mileage: "1 270",
        tagline: "Новое поколение G60. M Sport Пакет. В наличии в Москве.",
        shortSpecs: "2.0 Бензин • Автомат • Полный",
        color: "Шварцкарбон",
        body: "Седан",
        country: "Германия",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/bmw-530i-xdrive/1.jpg",
        photos: [
            "images/bmw-530i-xdrive/1.jpg",
            "images/bmw-530i-xdrive/2.jpg",
            "images/bmw-530i-xdrive/3.jpg",
            "images/bmw-530i-xdrive/4.jpg",
            "images/bmw-530i-xdrive/5.jpg",
            "images/bmw-530i-xdrive/6.jpg",
            "images/bmw-530i-xdrive/7.jpg",
            "images/bmw-530i-xdrive/8.jpg",
            "images/bmw-530i-xdrive/9.jpg",
            "images/bmw-530i-xdrive/10.jpg",
            "images/bmw-530i-xdrive/11.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "1 998 см³",
                cylinders: "4 (Рядный)",
                power: "258 л.с. при 4700 об/мин",
                torque: "400 Н·м при 1600 об/мин",
                turbo: "Турбонаддув",
            },
            transmission: {
                gearbox: "8-АКПП (Steptronic)",
                drive: "Полный (xDrive)",
            },
            performance: {
                acceleration: "6.1 с",
                topSpeed: "250 км/ч",
                fuelCombined: "6.4 л/100 км",
                fuelType: "АИ-95",
            },
            dimensions: {
                length: "5 060 мм",
                width: "1 900 мм",
                height: "1 515 мм",
                wheelbase: "2 995 мм",
                clearance: "154 мм",
                trunk: "520 л",
            },
            chassis: {
                frontBrakes: "М Sport дисковые вентилируемые",
                rearBrakes: "М Sport дисковые вентилируемые",
                frontSuspension: "Независимая, М Спортивная подвеска",
                rearSuspension: "Независимая, многорычажная",
            },
        },
        description: `BMW 530i xDrive M Sport
Цвет - Шварцкарбон. Автомобиль в наличии в Москве.
Комплектация включает:
- Дистанционный запуск двигателя
- Обогрев рулевого колеса
- Система комфортного доступа
- M Sport Пакет и M Sport тормоза
- Панорамная стеклянная крыша
- Активная вентиляция и подогрев сидений
- 4-зонный климат-контроль
- Адаптивные светодиодные фары
- Hi-Fi акустика Harman Kardon
И многие другие опции для комфорта и безопасности.`
    },
    {
        id: "volvo-s60-2005",
        brand: "Volvo",
        model: "S60",
        year: 2005,
        mileage: "105 000",
        tagline: "Легендарная надежность. 300 л.с., полный привод и история без ДТП.",
        shortSpecs: "2.5 Бензин • 300 л.с. • Автомат • Полный",
        color: "Синий",
        body: "Седан",
        country: "Швеция",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "3 владельца",
        heroImage: "images/volvo-s60-2005/1.jpg",
        photos: [
            "images/volvo-s60-2005/1.jpg",
            "images/volvo-s60-2005/2.jpg",
            "images/volvo-s60-2005/3.jpg",
            "images/volvo-s60-2005/4.jpg",
            "images/volvo-s60-2005/5.jpg",
            "images/volvo-s60-2005/6.jpg",
            "images/volvo-s60-2005/7.jpg",
            "images/volvo-s60-2005/8.jpg",
            "images/volvo-s60-2005/9.jpg",
            "images/volvo-s60-2005/10.jpg",
            "images/volvo-s60-2005/11.jpg",
            "images/volvo-s60-2005/12.jpg",
            "images/volvo-s60-2005/13.jpg",
            "images/volvo-s60-2005/14.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "2 521 см³",
                cylinders: "5 (Рядный)",
                power: "300 л.с. при 5500 об/мин",
                torque: "400 Н·м при 1950 об/мин",
                turbo: "Турбонаддув",
            },
            transmission: {
                gearbox: "5-АКПП (Geartronic)",
                drive: "Полный (AWD AWD Haldex)",
            },
            performance: {
                acceleration: "7.5 с",
                topSpeed: "250 км/ч",
                fuelCity: "15.3 л/100 км",
                fuelHighway: "8.4 л/100 км",
                fuelCombined: "10.9 л/100 км",
            },
            dimensions: {
                length: "4 606 мм",
                width: "1 804 мм",
                height: "1 431 мм",
                wheelbase: "2 715 мм",
                clearance: "130 мм",
                trunk: "424 л",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                frontSuspension: "Независимая, пружинная (McPherson)",
                rearSuspension: "Независимая, многорычажная",
            },
        },
        description: `Volvo S60 I рестайлинг (2004—2009)
Комплектация - базовая, левый руль.
Автомобиль в отличном состоянии, не битый.
Оригинал ПТС.`
    },
    {
        id: "dodge-challenger-2019",
        brand: "Dodge",
        model: "Challenger",
        year: 2019,
        mileage: "66 000",
        tagline: "Воплощение американской мечты о свободе и мощи.",
        shortSpecs: "3.6 Бензин • 309 л.с. • Автомат • Задний",
        color: "Серый",
        body: "Купе",
        country: "США",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/dodge-challenger-2019/1.jpg",
        photos: [
            "images/dodge-challenger-2019/1.jpg",
            "images/dodge-challenger-2019/2.jpg",
            "images/dodge-challenger-2019/3.jpg",
            "images/dodge-challenger-2019/4.jpg",
            "images/dodge-challenger-2019/5.jpg",
            "images/dodge-challenger-2019/6.jpg",
            "images/dodge-challenger-2019/7.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "3 604 см³",
                cylinders: "6 (V-образный)",
                power: "309 л.с. при 6350 об/мин",
                torque: "363 Н·м при 4800 об/мин",
            },
            transmission: {
                gearbox: "8-АКПП (TorqueFlite)",
                drive: "Задний",
            },
            performance: {
                acceleration: "6.8 с",
                topSpeed: "250 км/ч",
                fuelCity: "12.4 л/100 км",
                fuelHighway: "7.8 л/100 км",
                fuelCombined: "10.2 л/100 км",
            },
            dimensions: {
                length: "5 027 мм",
                width: "1 923 мм",
                height: "1 460 мм",
                wheelbase: "2 950 мм",
                clearance: "130 мм",
                trunk: "459 л",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые",
                wheels: "245/45 R20",
            },
        },
        description: `Dodge Challenger 2019 года выпуска, в благородном сером цвете.
Это не просто автомобиль — это воплощение американской мечты о свободе и мощи. Серый цвет придает образу сдержанную агрессию и элегантность: он не кричит, но заявляет о себе уверенно и со вкусом.

За рулем этого купе вы чувствуете связь с дорогой и контроль над каждой ситуацией. Просторный салон, премиальные материалы и продуманная эргономика создают атмосферу комфорта, которая не утомляет даже в долгих поездках. Это автомобиль для тех, кто ценит индивидуальность и не готов растворяться в потоке.
Пробег 66 000 км — это золотая середина: автомобиль уже прошел первичную обкатку, все возможные «детские болезни» устранены, а ресурс основных узлов только начал раскрываться. Состояние полностью соответствует заявленному: бережная эксплуатация, своевременное обслуживание и прозрачная история (4 записи в отчете Автотеки).`
    },
    {
        id: "chevrolet-corvette-2023",
        brand: "Chevrolet",
        model: "Corvette Stingray",
        year: 2023,
        mileage: "23 000",
        tagline: "Воплощение американской мечты и инженерного триумфа. Эффектный бордовый цвет.",
        shortSpecs: "6.2 Бензин • 495 л.с. • Робот • Задний",
        color: "Бордовый",
        body: "Кабриолет",
        country: "США",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/chevrolet-corvette-2023/1.jpg",
        photos: [
            "images/chevrolet-corvette-2023/1.jpg",
            "images/chevrolet-corvette-2023/2.jpg",
            "images/chevrolet-corvette-2023/3.jpg",
            "images/chevrolet-corvette-2023/4.jpg",
            "images/chevrolet-corvette-2023/5.jpg",
            "images/chevrolet-corvette-2023/6.jpg",
            "images/chevrolet-corvette-2023/7.jpg",
            "images/chevrolet-corvette-2023/8.jpg",
            "images/chevrolet-corvette-2023/9.jpg",
            "images/chevrolet-corvette-2023/10.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "6 162 см³",
                cylinders: "8 (V-образный LT2)",
                power: "495 л.с. при 6450 об/мин",
                torque: "637 Н·м при 5150 об/мин",
            },
            transmission: {
                gearbox: "8-РКПП (Tremec)",
                drive: "Задний",
            },
            performance: {
                acceleration: "2.9 с",
                topSpeed: "312 км/ч",
                fuelCity: "15.7 л/100 км",
                fuelHighway: "9.8 л/100 км",
                fuelCombined: "12.4 л/100 км",
            },
            dimensions: {
                length: "4 630 мм",
                width: "1 933 мм",
                height: "1 234 мм",
                wheelbase: "2 723 мм",
                clearance: "135 мм",
                trunk: "357 л",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                frontSuspension: "Независимая, пружинная, на двойных поперечных рычагах",
                rearSuspension: "Независимая, пружинная, на двойных поперечных рычагах",
            },
        },
        description: `Chevrolet Corvette C8 (2020—2025) Stingray (3LT Z51 Performance Package)
Это не просто автомобиль — это воплощение американской мечты и инженерного триумфа. Модель, которая изменила представление о суперкарах, сохранив при этом свою легендарную душу. Бордовый цвет здесь не случайность, это дань уважения истории и заявление о вашем характере.

За рулем этого автомобиля каждый выезд превращается в событие. Идеальная развесовка и мгновенная реакция на педаль газа дарят ощущения, доступные лишь в мире большой автомобильной лиги. Салон встречает кокпитом пилота, где каждая кнопка находится на своем месте, а технологии работают на ваше удовольствие.
Автомобиль 2023 года — это вершина эволюции модели. Состояние идеальное, гарантия активна, история прозрачна. Это редкая возможность стать владельцем современного суперкара без компромиссов и ожидания поставки.`
    },
    {
        id: "ford-mustang-2018",
        brand: "Ford",
        model: "Mustang",
        year: 2018,
        mileage: "81 000",
        tagline: "Икона свободы, воплощенная в металле. Сдержанная агрессия и элегантность.",
        shortSpecs: "2.3 Бензин • 317 л.с. • Автомат • Задний",
        color: "Серый",
        body: "Кабриолет",
        country: "США",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/ford-mustang-2018/1.jpg",
        photos: [
            "images/ford-mustang-2018/1.jpg",
            "images/ford-mustang-2018/2.jpg",
            "images/ford-mustang-2018/3.jpg",
            "images/ford-mustang-2018/4.jpg",
            "images/ford-mustang-2018/5.jpg",
            "images/ford-mustang-2018/6.jpg",
            "images/ford-mustang-2018/7.jpg",
            "images/ford-mustang-2018/8.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "2 261 см³",
                cylinders: "4 (Рядный)",
                power: "317 л.с. при 5500 об/мин",
                torque: "432 Н·м при 3000 об/мин",
                turbo: "Турбонаддув (EcoBoost)",
            },
            transmission: {
                gearbox: "10-АКПП",
                drive: "Задний",
            },
            performance: {
                acceleration: "5.8 с",
                topSpeed: "233 км/ч",
                fuelCity: "14.1 л/100 км",
                fuelHighway: "7.7 л/100 км",
                fuelCombined: "10.0 л/100 км",
            },
            dimensions: {
                length: "4 784 мм",
                width: "1 916 мм",
                height: "1 381 мм",
                wheelbase: "2 720 мм",
                clearance: "143 мм",
                trunk: "332 л",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
            },
        },
        description: `Ford Mustang VI рестайлинг (2017—2023)
Это не просто автомобиль — это икона свободы, воплощенная в металле. Серый цвет придает этому мускулистому купе сдержанную агрессию и элегантность: он не кричит, но говорит о вашем вкусе громче любых слов.

За рулем этого Mustang вы чувствуете связь с дорогой, которая рождает уверенность в каждом повороте. Салон встречает атмосферой настоящего драйва: эргономика, созданная для водителя, и материалы, которые приятно касаться. Это автомобиль для тех, кто ценит индивидуальность и не готов растворяться в потоке.

Пробег 81 000 км — это честная цифра для автомобиля, который жил полной жизнью. Регулярное обслуживание, бережное отношение и прозрачная история делают его надежным спутником для нового владельца. Машина, которая уже доказала свою состоятельность, но еще полна сил дарить эмоции.`
    },
    {
        id: "dodge-challenger-srt-2021",
        brand: "Dodge",
        model: "Challenger SRT 392",
        year: 2021,
        mileage: "8 600",
        tagline: "Исключительный экземпляр SRT 392. Состояние нового. 492 л.с.",
        shortSpecs: "6.4 AT • 492 л.с. • Автомат • Задний",
        color: "Светло-серый",
        body: "Купе",
        country: "США",
        condition: "Не битый",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/dodge-challenger-srt-2021/1.jpg",
        photos: [
            "images/dodge-challenger-srt-2021/1.jpg",
            "images/dodge-challenger-srt-2021/2.jpg",
            "images/dodge-challenger-srt-2021/3.jpg",
            "images/dodge-challenger-srt-2021/4.jpg",
            "images/dodge-challenger-srt-2021/5.jpg",
            "images/dodge-challenger-srt-2021/6.jpg",
            "images/dodge-challenger-srt-2021/7.jpg",
            "images/dodge-challenger-srt-2021/8.jpg",
            "images/dodge-challenger-srt-2021/9.jpg",
            "images/dodge-challenger-srt-2021/10.jpg",
            "images/dodge-challenger-srt-2021/11.jpg",
            "images/dodge-challenger-srt-2021/12.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "6 424 см³",
                cylinders: "8 (V-образный HEMI)",
                power: "492 л.с. при 6000 об/мин",
                torque: "644 Н·м при 4200 об/мин",
            },
            transmission: {
                gearbox: "8-АКПП",
                drive: "Задний",
            },
            performance: {
                acceleration: "4.4 с",
                topSpeed: "289 км/ч",
                fuelCity: "15.7 л/100 км",
                fuelHighway: "9.4 л/100 км",
                fuelCombined: "13.1 л/100 км",
            },
            dimensions: {
                length: "5 027 мм",
                width: "1 923 мм",
                height: "1 416 мм",
                wheelbase: "2 950 мм",
                clearance: "130 мм",
                trunk: "459 л",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые (Brembo 6-поршневые)",
                rearBrakes: "Дисковые вентилируемые",
                wheels: "275/40 R20",
            },
        },
        description: `Представляем исключительный экземпляр Dodge Challenger SRT 2021 года выпуска, в благородном светло-сером цвете. 

Это не просто маслкар — это вершина инженерной мысли американской школы. Версия SRT с двигателем 6.4 литра обладает характером, который невозможно спутать ни с чем другим. Глубокий, уверенный звук и динамика, которая прижимает к сиденью, доступны вам уже сегодня. 

Пробег всего 8 600 км — это редчайшее предложение на рынке. Автомобиль практически новый, но лишен рисков первичной обкатки. Светло-серый оттенок кузова выглядит современно и дорого, подчеркивая мускулистые линии и агрессивный стиль модели. Салон не знает износа, каждая деталь сияет чистотой. 

Идеальный выбор для коллекционера или ценителя, который хочет наслаждаться вождением сразу, без вложений и ожиданий. Вы покупаете не просто машину, а готовую легенду в идеальном состоянии. Полная юридическая чистота, прозрачная история и гарантия того, что вы становитесь вторым владельцем автомобиля, который берегли как зеницу ока.`
    },
    {
        id: "jeep-gladiator-2022",
        brand: "Jeep",
        model: "Gladiator Sport",
        year: 2022,
        mileage: "32 200",
        tagline: "Ультимативный пикап-внедорожник. Свобода без границ. 285 л.с.",
        shortSpecs: "3.6 V6 • 285 л.с. • Автомат • Полный",
        color: "Синий",
        body: "Пикап",
        country: "США",
        condition: "Не битый",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/jeep-gladiator-2022/1.jpg",
        photos: [
            "images/jeep-gladiator-2022/1.jpg",
            "images/jeep-gladiator-2022/2.jpg",
            "images/jeep-gladiator-2022/3.jpg",
            "images/jeep-gladiator-2022/4.jpg",
            "images/jeep-gladiator-2022/5.jpg",
            "images/jeep-gladiator-2022/6.jpg",
            "images/jeep-gladiator-2022/7.jpg",
            "images/jeep-gladiator-2022/8.jpg",
            "images/jeep-gladiator-2022/9.jpg",
            "images/jeep-gladiator-2022/10.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "3 604 см³",
                cylinders: "6 (V-образный Pentastar)",
                power: "285 л.с. при 6400 об/мин",
                torque: "353 Н·м при 4400 об/мин",
            },
            transmission: {
                gearbox: "8-АКПП",
                drive: "Полный (Command-Trac)",
            },
            performance: {
                acceleration: "8.1 с",
                topSpeed: "160 км/ч",
                fuelCity: "13.8 л/100 км",
                fuelHighway: "10.7 л/100 км",
                fuelCombined: "12.4 л/100 км",
            },
            dimensions: {
                length: "5 591 мм",
                width: "1 894 мм",
                height: "1 843 мм",
                wheelbase: "3 487 мм",
                clearance: "253 мм",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые",
                wheels: "245/75 R17",
            },
        },
        description: `Jeep Gladiator 2022 года — это больше, чем просто пикап. Это легендарный наследник Wrangler, объединивший в себе непревзойденные внедорожные способности и практичность грузовой платформы. В эффектном синем цвете этот автомобиль притягивает взгляды как в городском потоке, так и на диком бездорожье.

Под капотом — проверенный временем 3.6-литровый двигатель V6 мощностью 285 л.с., который в паре с надежным автоматом и честным полным приводом готов к любым испытаниям. Пробег 32 200 км гарантирует отличное техническое состояние: автомобиль прошел обкатку и готов к полноценной эксплуатации.

Комплектация Sport предлагает всё необходимое для комфортных приключений. Один владелец по электронному ПТС, бережная эксплуатация и отсутствие ДТП делают это предложение одним из лучших на рынке. Съемная крыша и двери позволяют за считанные минуты превратить закрытый пикап в настоящий кабриолет для экспедиций. Чистая история и полная готовность к новым маршрутам.`
    },
    {
        id: "chevrolet-camaro-2019",
        brand: "Chevrolet",
        model: "Camaro",
        year: 2019,
        mileage: "57 000",
        tagline: "Стильный американский кабриолет. 275 л.с. Идеальное состояние.",
        shortSpecs: "2.0 Turbo • 275 л.с. • Автомат • Задний",
        color: "Красный",
        body: "Кабриолет",
        country: "США",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/chevrolet-camaro-2019/1.jpg",
        photos: [
            "images/chevrolet-camaro-2019/1.jpg",
            "images/chevrolet-camaro-2019/2.jpg",
            "images/chevrolet-camaro-2019/3.jpg",
            "images/chevrolet-camaro-2019/4.jpg",
            "images/chevrolet-camaro-2019/5.jpg",
            "images/chevrolet-camaro-2019/6.jpg",
            "images/chevrolet-camaro-2019/7.jpg",
            "images/chevrolet-camaro-2019/8.jpg",
            "images/chevrolet-camaro-2019/9.jpg",
            "images/chevrolet-camaro-2019/10.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "1 998 см³",
                cylinders: "4 (Рядный)",
                power: "275 л.с. при 5600 об/мин",
                torque: "400 Н·м при 3000 об/мин",
                turbo: "Турбонаддув",
            },
            transmission: {
                gearbox: "8-АКПП",
                drive: "Задний",
            },
            performance: {
                acceleration: "5.9 с",
                topSpeed: "240 км/ч",
                fuelCity: "11.1 л/100 км",
                fuelHighway: "7.6 л/100 км",
                fuelCombined: "8.1 л/100 км",
                fuelType: "АИ-95",
            },
            dimensions: {
                length: "4 784 мм",
                width: "1 897 мм",
                height: "1 340 мм",
                wheelbase: "2 812 мм",
                clearance: "120 мм",
                trunk: "206 л",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                wheels: "245/40 R20",
            },
        },
        description: `Chevrolet Camaro VI рестайлинг (2018—2025) в кузове кабриолет. 
Яркий красный цвет подчеркивает спортивный характер легендарного американского pony-car. 

Основные характеристики:
- Год выпуска: 2019
- Пробег: 57 000 км (родной пробег)
- Владельцы: 1 по ПТС (оригинал)
- Состояние: отличное, не битый, готов к проверкам.

Оснащен тяговитым турбомотором 2.0 (275 л.с.) и классическим автоматом. Задний привод дарит истинное удовольствие от вождения. Базовая комплектация включает всё необходимое для комфортных прогулок с открытым верхом. Руль левый.`
    },
    {
        id: "tesla-model-3-2021",
        brand: "Tesla",
        model: "Model 3 Long Range AWD",
        year: 2021,
        mileage: "21 000",
        tagline: "Электрическая мощь и инновации. Long Range AWD. Состояние нового.",
        shortSpecs: "Электро • Long Range • Автомат • Полный",
        color: "Чёрный",
        body: "Седан",
        country: "США",
        condition: "Не требует ремонта",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/tesla-model-3-2021/1.jpg",
        photos: [
            "images/tesla-model-3-2021/1.jpg",
            "images/tesla-model-3-2021/2.jpg",
            "images/tesla-model-3-2021/3.jpg",
            "images/tesla-model-3-2021/4.jpg",
            "images/tesla-model-3-2021/5.jpg",
            "images/tesla-model-3-2021/6.jpg",
            "images/tesla-model-3-2021/7.jpg",
            "images/tesla-model-3-2021/8.jpg",
            "images/tesla-model-3-2021/9.jpg",
            "images/tesla-model-3-2021/10.jpg"
        ],
        specs: {
            engine: {
                type: "Электро",
                power: "441 л.с. (суммарно)",
                torque: "493 Н·м",
                powerBattery: "75 кВт⋅ч",
            },
            transmission: {
                gearbox: "Автомат (Редуктор)",
                drive: "Полный (Dual Motor)",
            },
            performance: {
                acceleration: "4.4 с",
                topSpeed: "233 км/ч",
                range: "580 км (WLTP)",
            },
            dimensions: {
                length: "4 694 мм",
                width: "1 849 мм",
                height: "1 443 мм",
                wheelbase: "2 875 мм",
                clearance: "140 мм",
                trunk: "425 л (сзади) + 88 л (спереди)",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                wheels: "235/45 R18",
            },
        },
        description: `Tesla Model 3 в модификации Long Range Dual Motor AWD. 
Эффектный глубокий чёрный цвет и минималистичный дизайн. 

Ключевые особенности:
- Минимальный пробег: 21 000 км
- 1 владелец по электронному ПТС
- Идеальное состояние: не битый, без окрасов.
- Полный привод AWD обеспечивает уверенность на любой дороге.

Tesla — это не просто электромобиль, это гаджет на колесах с потрясающей динамикой (4.4 сек до 100 км/ч) и запасом хода более 500 км. Передовые технологии безопасности, автопилот и регулярные обновления ПО. Руль левый.`
    },
    {
        id: "tesla-model-3-red-2021",
        brand: "Tesla",
        model: "Model 3 Long Range AWD",
        year: 2021,
        mileage: "34 000",
        tagline: "Яркий красный электрокар. Электронный ПТС, отличное состояние.",
        shortSpecs: "Электро • Long Range • Автомат • Полный",
        color: "Красный",
        body: "Седан",
        country: "США",
        condition: "Не битый",
        accidents: false,
        ownerCount: "2 владельца",
        heroImage: "images/tesla-model-3-red-2021/1.jpg",
        photos: [
            "images/tesla-model-3-red-2021/1.jpg",
            "images/tesla-model-3-red-2021/2.jpg",
            "images/tesla-model-3-red-2021/3.jpg",
            "images/tesla-model-3-red-2021/4.jpg",
            "images/tesla-model-3-red-2021/5.jpg",
            "images/tesla-model-3-red-2021/6.jpg",
            "images/tesla-model-3-red-2021/7.jpg",
            "images/tesla-model-3-red-2021/8.jpg",
            "images/tesla-model-3-red-2021/9.jpg",
            "images/tesla-model-3-red-2021/10.jpg"
        ],
        specs: {
            engine: {
                type: "Электро",
                power: "441 л.с. (суммарно)",
                torque: "493 Н·м",
                powerBattery: "75 кВт⋅ч",
            },
            transmission: {
                gearbox: "Автомат (Редуктор)",
                drive: "Полный (Dual Motor)",
            },
            performance: {
                acceleration: "4.4 с",
                topSpeed: "233 км/ч",
                range: "580 км (WLTP)",
            },
            dimensions: {
                length: "4 694 мм",
                width: "1 849 мм",
                height: "1 443 мм",
                wheelbase: "2 875 мм",
                clearance: "140 мм",
            },
            chassis: {
                wheels: "235/45 R18",
            },
        },
        description: `Tesla Model 3 2021 года выпуска, в ярком красном исполнении.
Поколение I (2017—2023). Модификация Long Range AWD.
ПТС - электронный, комплектация - базовая, руль левый.`
    },
    {
        id: "infiniti-q50-2016",
        brand: "Infiniti",
        model: "Q50 Sport + NAVI",
        year: 2016,
        mileage: "93 900",
        tagline: "Спортивный седан на 405 л.с. Оригинальный ПТС, один владелец.",
        shortSpecs: "3.0 Бензин • 405 л.с. • Автомат • Полный",
        color: "Серый",
        body: "Седан",
        country: "Япония",
        condition: "Не битый",
        accidents: false,
        ownerCount: "1 владелец",
        heroImage: "images/infiniti-q50-2016/1.jpg",
        photos: [
            "images/infiniti-q50-2016/1.jpg",
            "images/infiniti-q50-2016/2.jpg",
            "images/infiniti-q50-2016/3.jpg",
            "images/infiniti-q50-2016/4.jpg",
            "images/infiniti-q50-2016/5.jpg",
            "images/infiniti-q50-2016/6.jpg",
            "images/infiniti-q50-2016/7.jpg",
            "images/infiniti-q50-2016/8.jpg",
            "images/infiniti-q50-2016/9.jpg",
            "images/infiniti-q50-2016/10.jpg"
        ],
        specs: {
            engine: {
                type: "Бензиновый",
                displacement: "2 997 см³",
                cylinders: "6 (V-образный Twin-Turbo)",
                power: "405 л.с. при 6400 об/мин",
                torque: "475 Н·м при 1600–5200 об/мин",
            },
            transmission: {
                gearbox: "7-АКПП",
                drive: "Полный",
            },
            performance: {
                acceleration: "5.4 с",
                topSpeed: "250 км/ч",
                fuelCombined: "9.3 л/100 км",
            },
            dimensions: {
                length: "4 800 мм",
                width: "1 820 мм",
                height: "1 455 мм",
                wheelbase: "2 850 мм",
                clearance: "135 мм",
            },
            chassis: {
                frontBrakes: "Дисковые вентилируемые",
                rearBrakes: "Дисковые вентилируемые",
                wheels: "245/40 R19",
            },
        },
        description: `Infiniti Q50 2016 года выпуска, Серый цвет.
Поколение I (2013—2017). Модификация 3.0 4WD AT (405 л.с.).
Оригинальный ПТС, один владелец. Комплектация Sport + NAVI. Руль левый.`
    },
    {
        id: "sea-doo-switch-2022",
        brand: "BRP",
        model: "Sea-Doo Switch Cruise 21",
        year: 2022,
        mileage: "Б/У",
        tagline: "Технологичный тримаран и конструктор для вашего отдыха.",
        shortSpecs: "Водомёт Rotax 1630 • 230 л.с. • 9-11 мест",
        color: "Не указан",
        body: "Катер",
        country: "Канада",
        condition: "Б/У",
        accidents: false,
        ownerCount: "-",
        heroImage: "images/sea-doo-switch-2022/1.jpg",
        photos: [
            "images/sea-doo-switch-2022/1.jpg",
            "images/sea-doo-switch-2022/2.jpg",
            "images/sea-doo-switch-2022/3.jpg",
            "images/sea-doo-switch-2022/4.jpg",
            "images/sea-doo-switch-2022/5.jpg",
            "images/sea-doo-switch-2022/6.jpg",
            "images/sea-doo-switch-2022/7.jpg",
            "images/sea-doo-switch-2022/8.jpg"
        ],
        specs: {
            engine: {
                type: "Водомёт (Rotax 1630)",
                power: "230 л.с.",
            },
            transmission: {
            },
            performance: {
            },
            dimensions: {
                length: "6.5 м",
                width: "2.4 м",
                clearance: "Осадка 0.6 м",
            },
            chassis: {
                material: "стеклопластик",
            },
        },
        description: `В продаже технологичный тримаран Sea-Doo Switch Cruise 21, модель 2022 года.

Это не просто понтон, а конструктор для вашего отдыха. Уникальная система модулей позволяет менять конфигурацию салона за считанные минуты: сегодня это просторная зона для загара, завтра — уютная гостиная для ужина на воде, а послезавтра — открытая площадка для вечеринки. 
Вместимость подтверждена делом: хотя в документах указано 9 мест, эргономика корпуса позволяет с комфортом разместить до 11 человек. Это значит, что в следующее путешествие сможет отправиться вся большая компания без исключений. 
За динамику отвечает надежный водомёт Rotax 1630 мощностью 230 л.с. Он гарантирует уверенный ход и безопасность для тех, кто решит искупаться рядом с бортом. Катер в отличном состоянии, полностью готов к сезону и новым впечатлениям.

Прицеп в комплекте.

Свяжитесь с нами: @Boris_christmas`
    }
];

export default carsData;
