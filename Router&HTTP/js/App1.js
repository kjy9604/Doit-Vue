// #1 todo-footer 컴포넌트 전역 등록
// <p>This is another global child Component</p>를 template로 갖는 컴포넌트 등록

// #1
Vue.component('todo-footer', {
    template: '<p>This is another global child Component</p>'
}) 

// #2
var todoList = {
    template: '<p>This is another local child component</p>'
}



var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },

    // #2 'todo-list' 컴포넌트 지역 등록
    // <p>This is another local child component</p>를 template로 갖는 컴포넌트 등록
    components: {
        'todo-list': todoList
    }
});
