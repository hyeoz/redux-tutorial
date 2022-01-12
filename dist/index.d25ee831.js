// console.log("hello parcel");
// DOM 레퍼런스 만들기
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
// 액션 타입과 액션 생성 함수 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const toggleSwitch = ()=>({
        type: TOGGLE_SWITCH
    })
;
const increase = (difference)=>({
        type: INCREASE,
        difference
    })
;
const decrease = ()=>({
        type: DECREASE
    })
;
// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
};
// 리듀서 함수 정의
function reducer(state = initialState, action) {
    // state가 undefined 일때는 Initialstate 사용
    // action.type 에 따라 다른 작업 처리
    switch(action.type){
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

//# sourceMappingURL=index.d25ee831.js.map
