import { useState } from "react"
import { api } from "./lib/axios";
function App() {
  
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  async function insertUser() {
    await api.post("/users", {
        name, email, age
    })
    .then((json) => {
      console.log(json.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  function submit(){
    console.log("click")
    insertUser();
  }

  return (
    <div className="bg-slate-500 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-300 px-20 py-40 flex flex-col gap-10">
        <label htmlFor="" className="flex flex-col font-bold text-black">
          Name
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="" className="flex flex-col font-bold text-black">
          Age
          <input type="text" onChange={(e) => setAge(e.target.value)} />
        </label>
        <label htmlFor="" className="flex flex-col font-bold text-black">
          Email
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button className="bg-blue-800 text-white py-3 rounded-xl font-extrabold" onClick={() => submit()}>Adicionar</button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App
