export type TodoProps = {
  id: number;
  name: string;
  deadline: string;
};

const deleteTask = async (id:number) => {
  await fetch(`https://gp92tnzloe.execute-api.ap-northeast-1.amazonaws.com/dev/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "bjZwZSUX0c8jUxzB5cSef1L7P4XXf6w66cShZtuN",
    },
  });
}

export const Todo: React.FC<TodoProps> = ({ id, name, deadline }) => {
  return (<>
    <div className="flex justify-between">
    <div className="mt-5 bg-white w-full">
      <div className="rounded-lg shadow-md p-5">
        <p className="font-bold text-gray-600">{name}</p>
        <p className="text-sm text-gray-500">{deadline}</p>
      </div>
    </div>
    <button className="mt-5 text-gray-600 bg-white borde-none" onClick={() => deleteTask(id)}>完了</button>
    </div>
    </>
  );
}

