const questions = [
  {
    id: '85365',
    question: 'Nostrum deserunt fugit est nihil est ut veniam.',
    answers: ['voluptate', 'accusantium', 'molestiae', 'minima'],
    key: 'voluptate'
  },
  {
    id: '10048',
    question: 'Molestias id quasi accusamus dolor omnis et dolor excepturi.',
    answers: ['necessitatibus', 'incidunt', 'blanditiis', 'sunt'],
    key: 'incidunt'
  },
  {
    id: '54315',
    question: 'Iusto ab fuga nobis autem asperiores.',
    answers: ['dicta', 'facilis', 'officiis', 'recusandae'],
    key: 'facilis'
  },
  {
    id: '87419',
    question: 'Sit sunt eos saepe enim.',
    answers: ['veniam', 'ea', 'ducimus', 'est'],
    key: 'est'
  },
  {
    id: '98798',
    question: 'Aut earum harum neque qui quas fugiat numquam quis explicabo.',
    answers: ['autem', 'ipsam', 'sed', 'eos'],
    key: 'ipsam'
  },
  {
    id: '12803',
    question: 'Veniam aut magni nobis non et atque ex quibusdam.',
    answers: ['inventore', 'excepturi', 'accusantium', 'labore'],
    key: 'inventore'
  },
  {
    id: '49322',
    question: 'Quis impedit eligendi assumenda qui et harum consequuntur.',
    answers: ['nesciunt', 'aut', 'optio', 'recusandae'],
    key: 'optio'
  },
  {
    id: '14490',
    question: 'Maxime numquam et voluptate et dolorem consequuntur in ut.',
    answers: ['et', 'esse', 'aut', 'similique'],
    key: 'aut'
  },
  {
    id: '33856',
    question: 'Reiciendis minus assumenda assumenda.',
    answers: ['sed', 'voluptates', 'sit', 'quia'],
    key: 'voluptates'
  },
  {
    id: '50930',
    question: 'Nulla nam consequatur quia.',
    answers: ['est', 'dolorem', 'est', 'id'],
    key: 'id'
  },
  {
    id: '27901',
    question: 'Vitae aut atque ipsa.',
    answers: ['nihil', 'expedita', 'quos', 'incidunt'],
    key: 'expedita'
  },
  {
    id: '44686',
    question: 'Assumenda est qui dolorem odit in rerum quia facere.',
    answers: ['perspiciatis', 'et', 'dolores', 'totam'],
    key: 'perspiciatis'
  },
  {
    id: '82916',
    question: 'Recusandae ut illo.',
    answers: ['voluptas', 'a', 'laudantium', 'tempora'],
    key: 'tempora'
  }
]

// Randomly pick out 5 questions.
export default (n = 5) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n))
