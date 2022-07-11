const arr = [1,2,3,4];

// 원본 배열의 인덱스 1부터
// 2개의 요소를 제거하고
// 그 자리에 새로운 요소 20,30을 삽입
const result = arr.splice(1,2,20,30);

// 제거한 요소가 배열로 반환
console.log(result);
// splice 메서드는 원본 배열을 직접 변경
console.log(arr);
