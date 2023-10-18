export async function getTodos () {
  const response = await fetch(process.env.NEXT_PUBLIC_URL || "", {
      method: 'GET',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || "",
      },
  });

  const todos = await response.json();

  return todos;
}

export async function createTodo(name: string, deadline: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    body: JSON.stringify({ name, deadline }),
  });

  return await response.json();
}

export async function deleteTodo(id:string) {
  await fetch(`${process.env.NEXT_PUBLIC_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  });
}