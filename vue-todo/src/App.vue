<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader';
  import TodoInput from './components/TodoInput';
  import TodoList from './components/TodoList';
  import TodoFooter from './components/TodoFooter';
  export default {
    data() {
      return {
        todoItems: []
      }
    },
    // 페이지가 생성될 때 로컬스토리지에서 쌓인 Todo 목록을 가져옴
    created() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                  this.todoItems.push(localStorage.key(i));
                }
            }
        }
    },
    methods: {
      // 로컬 스토리지에 데이터를 추가하는 로직
      addTodo(todoItem) {
        localStorage.setItem(todoItem, todoItem)
        this.todoItems.push(todoItem);
      },

      removeTodo(todoItem, index) {
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      },

      clearAll() {
        localStorage.clear();
        this.todoItems = [];
      }
    },
    components: {
      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter
    },
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>