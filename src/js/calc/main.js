
function getDa(index) {
    var data = [
      // Data set #1
      [{
    "year": "янв",
    "one": 90,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 10,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "фев",
    "one": 90,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 10,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "мар",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 85,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "апр",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 95,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "май",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 95,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "июн",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 99,
    "six": 10,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "июл",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 85,
    "five": 30,
    "six": 10,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "авг",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 10,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "сен",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 95,
    "six": 10,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "окт",
    "one": 70,
    "two": 60,
    "three": 50,
    "four": 40,
    "five": 30,
    "six": 99,
    "oneA": 80,
    "twoA": 70,
    "threeA": 40,
    "fourA": 30,
    "fiveA": 20,
    "sixA": 20,
  },{
    "year": "ноя",
    "one": 90,
    "two": 90,
    "three": 90,
    "four": 90,
    "five": 90,
    "six": 90,
    "oneA": 90,
    "twoA": 90,
    "threeA": 90,
    "fourA": 90,
    "fiveA": 90,
    "sixA": 90,
  },{
    "year": "дек",
    "one": 10,
    "two": 10,
    "three": 10,
    "four": 10,
    "five": 10,
    "six": 10,
    "oneA": 10,
    "twoA": 10,
    "threeA": 10,
    "fourA": 10,
    "fiveA": 10,
    "sixA": 10,
  }],
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
    
  } ],
  [{
    "year": "янв",
  },{
    "year": "фев",
  },{
    "year": "мар",
  },{
    "year": "апр",
  },{
    "year": "май",
  },{
    "year": "июн",
  },{
    "year": "июл",
  },{
    "year": "авг",
  },{
    "year": "сен",
  },{
    "year": "окт",
  },{
    "year": "ноя",
  },{
    "year": "дек",
  }]];
  
    return data[index];
  }
  
  console.log(getDa(1));