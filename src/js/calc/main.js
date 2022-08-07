
function getDa(index) {
  var data = [
    // Data set #1
    [{
          "region": "Дагестан",
          "city": "Махачкала",
          "winter": 1.7,
          "summer": 23.5
      },
      {
          "region": "Краснодарский край",
          "city": "Краснодар",
          "winter": 6.6,
          "summer": 22.4
      },
      {
          "region": "Чечня",
          "city": "Грозный",
          "winter": -2,
          "summer": 22.7
      },
      {
          "region": "Ингушения",
          "city": "Магас",
          "winter": -4.1,
          "summer": 20.3
      },
      {
          "region": "Северная Осетия",
          "city": "Владикавказ",
          "winter": -1.4,
          "summer": 19.6
      },
      {
          "region": "Кабардино-Балкария",
          "city": "Нальчик",
          "winter": -1.4,
          "summer": 20.4
      },
      {
          "region": "Адыгея",
          "city": "Майкоп",
          "winter": 0.5,
          "summer": 21.2
      },
      {
          "region": "Ставропольский край",
          "city": "Ставрополь",
          "winter": -1.9,
          "summer": 20.9
      },
      {
          "region": "Калмыкия",
          "city": "Элиста",
          "winter": -3.5,
          "summer": 23.5
      },
      {
          "region": "Астраханская область",
          "city": "Астрахань",
          "winter": -3.1,
          "summer": 24.2
      },
      {
          "region": "Ростовская область",
          "city": "Ростов-на-Дону",
          "winter": -2.6,
          "summer": 22.3
      },
      {
          "region": "Республика Крым",
          "city": "Симферополь",
          "winter": -3,
          "summer": 21.8
      },
      {
          "region": "Калининградская область",
          "city": "Калининград",
          "winter": -1.0,
          "summer": 17.1
      },
      {
          "region": "Волгоградская область",
          "city": "Волгоград",
          "winter": -5.9,
          "summer": 22.2
      },
      {
          "region": "Воронежская область",
          "city": "Воронеж",
          "winter": -5.9,
          "summer": 19.4
      },
      {
          "region": "Белгородская область",
          "city": "Белгород",
          "winter": -5.9,
          "summer": 20.8
      },
      {
          "region": "Курская область",
          "city": "Курск",
          "winter": -5.8,
          "summer": 18.6
      },
      {
          "region": "Липецкая область",
          "city": "Липец",
          "winter": -8.2,
          "summer": 18.5
      },
      {
          "region": "Тульская область",
          "city": "Тула",
          "winter": -6.9,
          "summer": 17.7
      },
      {
          "region": "Орловская область",
          "city": "Орел",
          "winter": -6.1,
          "summer": 18.3
      },
      {
          "region": "Калужская область",
          "city": "Калуга",
          "winter": -7.7,
          "summer": 16.5
      },
      {
          "region": "Брянская область",
          "city": "Брянск",
          "winter": -5.7,
          "summer": 17.8
      },
      {
          "region": "Смоленская область",
          "city": "Смоленск",
          "winter": -5.9,
          "summer": 16.7
      },
      {
          "region": "Москва",
          "city": "Москва",
          "winter": -6.1,
          "summer": 17.7
      },
      {
          "region": "Московская область",
          "city": "Москва",
          "winter": -6.1,
          "summer": 17.7
      },
      {
          "region": "Рязанская область",
          "city": "Рязань",
          "winter": -8.6,
          "summer": 17.9
      },
      {
          "region": "Тамбовская область",
          "city": "Тамбов",
          "winter": -7.2,
          "summer": 19.2
      },
      {
          "region": "Саратовская область",
          "city": "Саратов",
          "winter": -7.4,
          "summer": 21.1
      },
      {
          "region": "Пензенская область",
          "city": "Пенза",
          "winter": -8.6,
          "summer": 18.6
      },
      {
          "region": "Мордовия",
          "city": "Саранск",
          "winter": -8.9,
          "summer": 18.1
      },
      {
          "region": "Ульяновская область",
          "city": "Ульяновск",
          "winter": -9.5,
          "summer": 18.8
      },
      {
          "region": "Самарская область",
          "city": "Самара",
          "winter": -9.4,
          "summer": 20.1
      },
      {
          "region": "Владимирская область",
          "city": "Владимир",
          "winter": -8.0,
          "summer": 17.2
      },
      {
          "region": "Ивановская область",
          "city": "Иваново",
          "winter": -9.7,
          "summer": 17.5
      },
      {
          "region": "Ярославская область",
          "city": "Ярославль",
          "winter": -9.5,
          "summer": 16.6
      },
      {
          "region": "Тверская область",
          "city": "Тверь",
          "winter": -7.0,
          "summer": 17.2
      },
      {
          "region": "Псковская область",
          "city": "Псков",
          "winter": -4.9,
          "summer": 16.9
      },
      {
          "region": "Новгородская область",
          "city": "Великий Новгород",
          "winter": -7.8,
          "summer": 16.1
      },
      {
          "region": "Ленинградская область",
          "city": "Санкт-Петербург",
          "winter": -5.0,
          "summer": 17.2
      },
      {
          "region": "Санкт-Петербург",
          "city": "Санкт-Петербург",
          "winter": -5.0,
          "summer": 17.2
      },
      {
          "region": "Карелия",
          "city": "Петрозаводск",
          "winter": -8.5,
          "summer": 15.1
      },
      {
          "region": "Мурманская область",
          "city": "Мурманск",
          "winter": -9.3,
          "summer": 11.1
      },
      {
          "region": "Архангельская область",
          "city": "Архангельск",
          "winter": -11.3,
          "summer": 14.1
      },
      {
          "region": "Вологодская область",
          "city": "Вологда",
          "winter": -9.7,
          "summer": 15.8
      },
      {
          "region": "Костромская область",
          "city": "Кострома",
          "winter": -8.6,
          "summer": 17
      },
      {
          "region": "Нижегородская область",
          "city": "Нижний Новгород",
          "winter": -8.3,
          "summer":  17.9
      },
      {
          "region": "Чувашия",
          "city": "Чебоксары",
          "winter": -10.9,
          "summer": 17.3
      },
      {
          "region": "Марий Эл",
          "city": "Йошкар-Ола",
          "winter": -10.7,
          "summer": 17.4
      },
      {
          "region": "Татарстан",
          "city": "Казань",
          "winter": -9.7,
          "summer": 18.7 
      },
      {
          "region": "Кировская область",
          "city": "Киров",
          "winter": -10.9,
          "summer": 17
      },
      {
          "region": "Удмуртия",
          "city": "Ижевск",
          "winter": -11.6,
          "summer": 17.3
      },
      {
          "region": "Оренбургская область",
          "city": "Оренбург",
          "winter": -10.9,
          "summer": 21.1
      },
      {
          "region": "Башкортостан",
          "city": "Уфа",
          "winter":  -11.6,
          "summer": 18.3
      },
      {
          "region": "Челябинская область",
          "city": "Челябинск",
          "winter": -13.4,
          "summer": 17.6
      },
      {
          "region": "Пермский край",
          "city": "Пермь",
          "winter": -11.8,
          "summer": 16.8
      },
      {
          "region": "Коми",
          "city": "Сыктывкар",
          "winter": -12.8,
          "summer": 15.3
      },
      {
          "region": "Ненецкий автономный округ",
          "city": "Нарьян-Мар",
          "winter": -15.9,
          "summer": 10.9
      },
      {
          "region": "Свердловская область",
          "city": "Екатеринбург",
          "winter": -11.5,
          "summer": 17.4
      },
      {
          "region": "Курганская область",
          "city": "Курган",
          "winter": -14.1,
          "summer": 18.5
      },
      {
          "region": "Курганская область",
          "city": "Курган",
          "winter": -14.1 ,
          "summer": 18.5
      },
      {
          "region": "Тюменская область",
          "city": "Тюмень",
          "winter": -13.7,
          "summer": 17.2
      },
      {
          "region": "Ханты-мансийский автономный округ",
          "city": "Сургут",
          "winter": -18.8,
          "summer": 15.7
      },
      {
          "region": "Ямало-Ненецкий автономный округ",
          "city": "Салехард",
          "winter": -21.6,
          "summer": 12.3
      },
      {
          "region": "Омская область",
          "city": "Омск",
          "winter": -15.0,
          "summer": 18.2
      },
      {
          "region": "Новосибирская область",
          "city": "Новосибирск",
          "winter": -14.7 ,
          "summer": 17.5
      },
      {
          "region": "Томская область",
          "city": "Томск",
          "winter": -15.6,
          "summer": 16.7
      },
      {
          "region": "Алтайский край",
          "city": "Барнаул",
          "winter": -14.0,
          "summer": 18.3
      },
      {
          "region": "Кемеровская область",
          "city": "Кемерово",
          "winter": -15.4,
          "summer": 17.2
      },
      {
          "region": "Хакасия",
          "city": "Абакан",
          "winter": -16.3,
          "summer": 18
      },
      {
          "region": "Красноярский край",
          "city": "Красноярск",
          "winter": -13.9,
          "summer": 16.8
      },
      {
          "region": "Тыва",
          "city": "Кызыл",
          "winter": -25.8,
          "summer": 18.6
      },
      {
          "region": "Иркутская область",
          "city": "Иркутск",
          "winter": -16.0,
          "summer": 16.5
      },
      {
          "region": "Бурятия",
          "city": "Улан-Удэ",
          "winter": -20.2,
          "summer": 17.9
      },
      {
          "region": "Забайкальский край",
          "city": "Чита",
          "winter": -22.1,
          "summer": 17
      },
      {
          "region": "Саха (Якутия)",
          "city": "Якутск",
          "winter": -36.7,
          "summer": 17 
      },
      {
          "region": "Амурская область",
          "city": "Благовещенск",
          "winter": -19.2,
          "summer":  20.2
      },
      {
          "region": "Еврейская автономная область",
          "city": "Биробиджан",
          "winter": -19.2,
          "summer": 19.7
      },
      {
          "region": "Приморский край",
          "city": "Владивосток",
          "winter": -9.9,
          "summer": 17.8
      },
      {
          "region": "Сахалинская область",
          "city": "Южно-Сахалинск",
          "winter": -10.8,
          "summer": 15.3
      },
      {
          "region": "Хабаровский край",
          "city": "Хабаровск",
          "winter": -17.6,
          "summer": 19.8
      },
      {
          "region": "Магаданская область",
          "city": "Магадан",
          "winter": -15.6,
          "summer": 10.5
      },
      {
          "region": "Камчатский край",
          "city": "Петропавловск-Камчатский",
          "winter": -6.9,
          "summer": 11.1
      },
      {
          "region": "Чукотский автономный округ",
          "city": "Анадырь",
          "winter": -21.3,
          "summer": 9.3
      },
      {
          "region": "Севастополь",
          "city": "Севастополь",
          "winter": -3,
          "summer": 21.8
      },

  ],
    // Data set #2
    [{
  "year": "янв",
  "one": 90,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 10,
  
},{
  "year": "фев",
  "one": 90,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 10,
  
},{
  "year": "мар",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 85,
  
},{
  "year": "апр",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 95,
  
},{
  "year": "май",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 95,
  
},{
  "year": "июн",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 99,
  "six": 10,
  
},{
  "year": "июл",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 85,
  "five": 30,
  "six": 10,
  
},{
  "year": "авг",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 10,
  
},{
  "year": "сен",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 95,
  "six": 10,
  
},{
  "year": "окт",
  "one": 70,
  "two": 60,
  "three": 50,
  "four": 40,
  "five": 30,
  "six": 99,
  
},{
  "year": "ноя",
  "one": 90,
  "two": 90,
  "three": 90,
  "four": 90,
  "five": 90,
  "six": 90,
  
},{
  "year": "дек",
  "one": 10,
  "two": 10,
  "three": 10,
  "four": 10,
  "five": 10,
  "six": 10,
  
} ]
];

  return data[index];
}

console.log(getDa(1));