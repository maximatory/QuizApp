import { ITest } from '@/entities/questions/model/interfaces'

export const testData: ITest = {
  timerSeconds: 300,
  questions: [
    {
      id: '1',
      type: 'SingleChoice',
      questionText: 'Какой предмет школьного обеда обладает магической способностью исчезать первым?',
      options: ['Суп', 'Котлета', 'Пюре', 'Десерт'],
      state: 'waiting'
    },
    {
      id: '2',
      type: 'MultipleChoice',
      questionText: 'Какие из этих существ могут летать?',
      options: ['Кот с крыльями', 'Летающая корова', 'Единорог', 'Пингвин с реактивным ранцем'],
      state: 'waiting'
    },
    {
      id: '3',
      type: 'ShortText',
      questionText: 'Что говорят рыбы, когда их спрашивают, как дела?',
      state: 'waiting'
    },
    {
      id: '4',
      type: 'LongText',
      questionText: 'Опишите, как бы вы обучали дракона не поджигать ваш дом.',
      state: 'waiting'
    },
    {
      id: '5',
      type: 'SingleChoice',
      questionText: 'Какой вид спорта предпочитает Снежный Человек?',
      options: ['Сноуборд', 'Хоккей', 'Фигурное катание', 'Плавание в ледяной воде'],
      state: 'waiting'
    },
    {
      id: '6',
      type: 'MultipleChoice',
      questionText: 'Какие предметы необходимы для успешного школьного дня? (Выберите все подходящие)',
      options: ['Магическая палочка', 'Невидимый плащ', 'Учебник по математике', 'Летающая метла'],
      state: 'waiting'
    },
    {
      id: '7',
      type: 'ShortText',
      questionText: 'Как зовут собаку, которая умеет говорить?',
      state: 'waiting'
    },
    {
      id: '8',
      type: 'LongText',
      questionText: 'Расскажите о своем первом встреченном настоящем пирате. Как он выглядел?',
      state: 'waiting'
    },
    {
      id: '9',
      type: 'SingleChoice',
      questionText: 'Какой фрукт является любимым лакомством для единорогов?',
      options: ['Банан', 'Клубника', 'Ананас', 'Мандарин'],
      state: 'waiting'
    },
    {
      id: '10',
      type: 'MultipleChoice',
      questionText: 'Какие из этих предметов можно найти в сказочном лесу?',
      options: ['Говорящее дерево', 'Летающий ковер', 'Золотая рыбка', 'Замок на облаке'],
      state: 'waiting'
    },
    {
      id: '11',
      type: 'ShortText',
      questionText: 'Что делает человек, когда видит настоящего дракона?',
      state: 'waiting'
    },
    {
      id: '12',
      type: 'LongText',
      questionText: 'Если бы у вас был собственный остров, как бы вы его назвали и почему?',
      state: 'waiting'
    },
    {
      id: '13',
      type: 'SingleChoice',
      questionText: 'Какой предмет лучше всего подходит для ловли облаков?',
      options: ['Бабочколовка', 'Сеть для рыбы', 'Ведро', 'Фотоаппарат'],
      state: 'waiting'
    },
    {
      id: '14',
      type: 'MultipleChoice',
      questionText: 'Какие суперспособности были бы у вас, если бы вы были супергероем? (Выберите все подходящие)',
      options: ['Летать', 'Становиться невидимым', 'Читать мысли', 'Превращать всё в шоколад'],
      state: 'waiting'
    },
    {
      id: '15',
      type: 'ShortText',
      questionText: 'Какое заклинание превращает домашнюю работу в пиццу?',
      state: 'waiting'
    },
    {
      id: '16',
      type: 'LongText',
      questionText: 'Опишите идеальный день супергероя в школе.',
      state: 'waiting'
    },
    {
      id: '17',
      type: 'SingleChoice',
      questionText: 'Что лучше всего помогает в борьбе с драконами?',
      options: ['Меч', 'Щит', 'Книга сказок', 'Чувство юмора'],
      state: 'waiting'
    },
    {
      id: '18',
      type: 'MultipleChoice',
      questionText: 'Какие качества важны для пирата? (Выберите все подходящие)',
      options: ['Сила', 'Хитрость', 'Умение петь пиратские песни', 'Любовь к приключениям'],
      state: 'waiting'
    },
    {
      id: '19',
      type: 'ShortText',
      questionText: 'Что на самом деле хранится на конце радуги?',
      state: 'waiting'
    },
    {
      id: '20',
      type: 'MultipleChoice',
      questionText: 'Если бы животные могли говорить, какие из них были бы лучшими комиками?',
      options: [
        'Жирафы с их длинными историями',
        'Медведи, шутящие о своей зимней спячке',
        'Кошки, рассказывающие о своих девяти жизнях',
        'Утки, потому что... квак'
      ],
      state: 'waiting'
    }
  ]
}
