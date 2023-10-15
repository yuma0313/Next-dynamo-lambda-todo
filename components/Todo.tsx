import { type } from "os";

export type TodoProps = {
  name: string;
  deadline: string;
};

export const Todo: React.FC<TodoProps> = ({ name, deadline }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="bg-gray-100 w-80 rounded-lg shadow-md p-5">
        <p className="font-bold text-gray-600">{name}</p>
        <p className="text-sm text-gray-500">{deadline}</p>
      </div>
    </div>
  );
}

