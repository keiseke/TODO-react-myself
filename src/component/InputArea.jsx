import React from "react";

export const InputArea = (props) => {
  const { onChangeTodoText, todoText, setIncomplete, todoListCount } = props;
  return (
    <div className="inputArea">
      <input
        onChange={onChangeTodoText}
        value={todoText}
        placeholder="TODOを入力してください"
        type="text"
        disabled={!todoListCount}
      />
      <button onClick={setIncomplete} disabled={!todoListCount}>
        追加
      </button>
    </div>
  );
};
