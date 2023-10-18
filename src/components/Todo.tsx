import { deleteTodo } from "@/libs/todo";

export type TodoProps = {
  id: string;
  name: string;
  deadline: string;
  onDelete: (id: string) => void;
};

export const deleteTask = async (id:string) => {
  await deleteTodo(id);
}

export const Todo: React.FC<TodoProps> = ({ id, name, deadline, onDelete }) => {
  const handleDeleteClick = async () => {
    await deleteTask(id);
    onDelete(id);
  }

  return (<>
    <div className="flex justify-between">
      <div className="mt-5 bg-white w-full">
        <div className="rounded-lg shadow-md p-5">
          <p className="font-bold text-gray-600">{name}</p>
          <p className="text-sm text-gray-500">{deadline}</p>
        </div>
      </div>
      <button className="w-1/6 rounded-lg mt-5 ml-1 text-gray-600 bg-white border-none shadow-md" onClick={handleDeleteClick}>完了</button>
    </div>
    </>
  );
}