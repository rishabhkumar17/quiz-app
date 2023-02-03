// export const Questions = [
//   {
//     prompt: 'Javascript is an ________ language?',
//     optionA: 'Object-Oriented',
//     optionB: 'Object-Based',
//     optionC: 'Procedural',
//     optionD: 'None of the above',
//     answer: 'optionA',
//   },
//   {
//     prompt: 'Which of the following is not a JavaScript framework?',
//     optionA: 'Node',
//     optionB: 'Vue',
//     optionC: 'React',
//     optionD: 'Cassandra',
//     answer: 'optionD',
//   },
// ];

// functional programming
const questionSchema = (
  prompt,
  optionA,
  optionB,
  optionC,
  optionD,
  answer
) => ({
  prompt,
  optionA,
  optionB,
  optionC,
  optionD,
  answer,
});

export const Questions = [
  questionSchema(
    'Javascript is an ________ language?',
    'Object-Oriented',
    'Object-Based',
    'Procedural',
    'None of the above',
    'optionA'
  ),
  questionSchema(
    'Which of the following is not a JavaScript framework?',
    'Node',
    'Vue',
    'React',
    'Cassandra',
    'optionD'
  ),
];
