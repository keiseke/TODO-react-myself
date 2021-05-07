import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteTodos, setComplete, deleteTodo } = props;
  return (
    <div className="incompleteArea">
      <p>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="listRow">
              <li>{todo}</li>
              <button
                onClick={() => {
                  setComplete(index);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
