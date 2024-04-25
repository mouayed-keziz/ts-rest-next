"use client"

import Image from "next/image";
import { client } from "./providers";

export default function Home() {
  const { isLoading, isSuccess, data } = client.getPost.useQuery(['posts'], // <- queryKey
    { params: { id: "1" } }, // <- Query params, Params, Body etc (all typed)
  )

  const y = client.createPost.useMutation()

  return (
    <main className="bg-red-300 w-full h-screen flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold text-black capitalize">
        {isLoading && <div>loading</div>}
        {isSuccess && <div>{data.body?.body}</div>}
      </div>
    </main>
  );
}
