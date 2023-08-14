"use client";
import jwtDecode from "jwt-decode";
import Header from "./components/Header";
import TaskTable from "./components/TaskTable";
import { Payload } from "@/types/payload";
import { Task } from "@/types/task";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "@/queries/taskQueries";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

export default function Home() {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<Payload>(token);
      setUserId(decodedToken.sub);
    }
  }, []);

  const { data } = useQuery<{ getTasks: Task[] }>(GET_TASKS, {
    variables: { userId },
    skip: !userId, // userIdがnullの場合、クエリをスキップ
  });

  return (
    <>
      <Header />
      <Stack>
        <AddTask userId={userId!} />
        <TaskTable tasks={data?.getTasks} userId={userId} />
      </Stack>
    </>
  );
}
