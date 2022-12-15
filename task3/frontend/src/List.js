import TaskItem from "./TaskItem.js";

function List({ todoList }) {
  return (
    <>
      <ul>
        {todoList.length > 0 &&
          todoList.map((item) => {
            return <TaskItem task={item.content} key={item.id} />;
          })}
      </ul>
    </>
  );
}

export default List;
