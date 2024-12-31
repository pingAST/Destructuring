import extractSpecialAttacks from '../extractSpecialAttacks';

test('should extract special attacks with available descriptions', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      }
    ]
  };

  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  expect(extractSpecialAttacks(character)).toEqual(expected);
});

test('should handle empty special attacks array', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: []
  };

  const expected = [];

  expect(extractSpecialAttacks(character)).toEqual(expected);
});

test('should handle missing description for all attacks', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 1,
        name: 'Атака 1',
        icon: 'http://...',
      },
      {
        id: 2,
        name: 'Атака 2',
        icon: 'http://...',
      }
    ]
  };

  const expected = [
    {
      id: 1,
      name: 'Атака 1',
      icon: 'http://...',
      description: 'Описание недоступно'
    },
    {
      id: 2,
      name: 'Атака 2',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  expect(extractSpecialAttacks(character)).toEqual(expected);
});
