/*
 * 절차지향적으로 작성된 코드를 함수형으로 변경하면서 함수형 자바스크립트의 실용성을 알아 보자.
 */

// 1.2.1 회원 목록 중 여러 명 찾기
var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age < 30) temp_users.push(users[i]);
}
//console.log(temp_users.length);
// 4

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age);
}
//console.log(ages);
// [ 25, 28, 27, 24 ]

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age >= 30) temp_users.push(users[i]);
}
//console.log(temp_users.length);
// 3

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  names.push(temp_users[i].name);
}
//console.log(names);
// [ 'ID', 'BJ', 'JM' ]

/*
 * 위 코드에서 중복을 제거하자.
 */
/* filter 사용 */
function filter(list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

var users_under_30 = filter(users, function(users) {
  return users.age < 30;
});
console.log(users_under_30.length);
// 4

var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
  ages.push(users_under_30[i].age);
}
console.log(ages);
// [ 25, 28, 27, 24 ]

var under_over_30 = filter(users, function(user) {
  return user.age >= 30;
});
console.log(under_over_30.length);
// 3

var names = [];
for (var i = 0, len = under_over_30.length; i < len; i++) {
  names.push(under_over_30[i].name);
}
console.log(names);
// [ 'ID', 'BJ', 'JM' ]
