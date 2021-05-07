import React from "react";

export const CompleteArea = (props) => {
  const { completeTodos, returnComplete } = props;
  return (
    <div className="completeArea">
      <p>完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="listRow">
              <li>{todo}</li>
              <button
                onClick={() => {
                  returnComplete(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
