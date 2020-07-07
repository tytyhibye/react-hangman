import _ from 'underscore';

export const wordList = [
  {
    word: 'travis',
    hint: 'Instructor'
  },
  { 
    word:'hello',
    hint: 'Greeting'
  }, 
  {
    word:'wine',
    hint: 'Afternoon drink'
  },
  { 
    word:'code',
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
];

export const getWord = ()=> {
  const randomKey =  _.sample(wordList);
  return randomKey;
};

