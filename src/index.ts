type PlayerA = {
  // type은 interface와 다르게, 아예 값을 지정해줄 수 있음
  // ex) name: "Kang_Seong_il"
  name: string;
};

// type의 property 추가 방법(상속)
type PlayerAA = PlayerA & {
  lastName: string;
};

const playerA: PlayerAA = {
  name: "Seong_il",
  lastName: "Kang",
};

interface PlayerB {
  name: string;
}

// interface의 property 추가 방법(상속)
interface PlayerBB extends PlayerB {
  lastName: string;
}

// interface의 property 추가 방법 2(중복 추가)
interface PlayerB {
  health: number;
}

const playerB: PlayerBB = {
  name: "Seong_il",
  lastName: "Kang",
  health: 10,
};

console.log(playerA);
console.log(playerB);
