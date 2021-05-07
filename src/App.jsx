import { useState } from "react";
import "./styles.css";
import { InputArea } from "./component/InputArea";
import { IncompleteArea } from "./component/IncompleteArea";
import { CompleteArea } from "./component/CompleteArea";

export default function App() {
  /* 
  ==============state==============
 */
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "ううううう",
    "えええええ"
  ]);

  /* 
  ==============関数==============
 */
  //inputエリア入力時の処理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  //追加ボタン押下時の処理
  const setIncomplete = () => {
    if (todoText === "") return;
    addTodo(incompleteTodos, todoText, setIncompleteTodos);
    setTodoText("");
  };

  //削除ボタン押下時の処理
  const deleteTodo = (index) => {
    removeTodo(incompleteTodos, index, setIncompleteTodos);
  };

  //完了ボタン押下時の処理
  const setComplete = (index) => {
    //追加処理
    addTodo(completeTodos, incompleteTodos[index], setCompleteTodos);
    //削除処理
    removeTodo(incompleteTodos, index, setIncompleteTodos);
  };

  //戻すボタン押下時の処理
  const returnComplete = (index) => {
    //追加処理
    addTodo(incompleteTodos, completeTodos[index], setIncompleteTodos);
    //削除処理
    removeTodo(completeTodos, index, setCompleteTodos);
  };

  //追加処理
  const addTodo = (array, addContent, func) => {
    const newTodos = [...array, addContent];
    func(newTodos);
  };

  //削除処理
  const removeTodo = (array, index, func) => {
    const deleteTodos = [...array];
    deleteTodos.splice(index, 1);
    func(deleteTodos);
  };

  return (
    <>
      <InputArea
        onChangeTodoText={onChangeTodoText}
        todoText={todoText}
        setIncomplete={setIncomplete}
        todoListCount={incompleteTodos.length <= 5}
      />
      {incompleteTodos.length <= 5 || (
        <p style={{ color: "red" }}>
          ６個までだお～未完了終わらせてからだお～(´ﾟ c_,ﾟ｀)ﾌﾟｯ
        </p>
      )}
      <IncompleteArea
        incompleteTodos={incompleteTodos}
        setComplete={setComplete}
        deleteTodo={deleteTodo}
      />

      <CompleteArea
        completeTodos={completeTodos}
        returnComplete={returnComplete}
      />
    </>
  );
}
