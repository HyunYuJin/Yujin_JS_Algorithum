// 클래스를 이용하여 게임 캐릭터의 능력치와 파이어볼 출력

function Wizard(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  
    this.attack = function () {
      console.log("파이어볼");
    };
  }
  
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// ------------------------------------------------------

// 정답은 이것!!!
// 내가 해결한 방법은 클래스가 아니라 함수를 이용한 방법.

class Wizard {
    constructor(health, mana, armor) { // 객체를 초기화하기 위해 반드시 있어야한다.
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    attack() {
      console.log("파이어볼");
    }
  }
  
  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();
  