import _ from 'underscore';

export const wordList = [
  {
    word: 'daiquiri',
    hint: 'tropical rum drink'
  },
  { 
    word:'bonjour',
    hint: 'Greeting'
  }, 
  {
    word:'vino',
    hint: 'Afternoon drink'
  },
  { 
    word:'javascript',
    hint: 'Computer language'
  },
  { 
    word: 'array',
    hint: 'A list of things'
  },
  { 
    word:'garbanzo',
    hint: 'Type of bean'
  },
  { 
    word:'edamame',
    hint: 'Type of bean'
  },
  { 
    word:'coffee',
    hint: 'Morning drink'
  },
  { 
    word:'computer',
    hint: 'machine in which all things are possible'
  },
  { 
    word:'excelsior',
    hint: "Stan Lee's life motto"
  },
  { 
    word:'supercalifragilisticexpealodocious',
    hint: 'Even though the sound of it is something quite atrocious'
  },
  { 
    word:'component',
    hint: 'keeps react modular'
  },
  { 
    word:'abstraction',
    hint: 'Makes code re-usable'
  },
  { 
    word:'dictionary',
    hint: 'A list of pairs'
  },
  { 
    word:'modelviewcontroller',
    hint: 'otherwise known as MVC'
  },
];

export const getWord = ()=> {
  const randomKey =  _.sample(wordList);
  return randomKey; //obj
};

