// TODO: write your code here
import extractSpecialAttacks from './extractSpecialAttacks';
import sum from './basic';

console.log('worked');
console.log(sum([1, 2]));


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
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...' // описание отсутствует
    }
  ]
};

const attacks = extractSpecialAttacks(character);
console.log(attacks);
