// const iu = {
//   name: '아이유',
//   age: 25,
//   gender: 'female'
// }
// const {
//   name,
//   age,
//   gender
// } = iu
// console.log(name, age, gender)

const loginInfo = {
  device: {
    createdAt: "2017-12-06T00:14:04+0000",
    deviceId: "0000000000004Vx",
    deviceType: "desktop"
  },
  user: {
    createdAt: "2017-03-08T18:00:28+0000",
    email: "power4ce@gmail.com",
    name: "정재남",
    nickname: "gomugom",
    phoneNumber: "010-9185-9155"
  }
};

const {
  device,
  user: { name, nickname, phoneNumber: phone }
} = loginInfo;

const phone = {
  name: "iPhone",
  color: undefined
};

const { name: n, version: v = "6+", color: c = "silver" } = phone;
console.log(n, v, c);

const { name, version = "X", color = "black" } = phone;
console.log(name, version, color);
