import { useState } from "react"

function App() {
  
  const [users, setUser] = useState([]);



  return (
    <div className="bg-slate-500 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-300 px-20 py-40 flex flex-col gap-10">
        <label htmlFor="" className="flex flex-col font-bold text-black">
          Name
          <input type="text" />
        </label>
        <label htmlFor="" className="flex flex-col font-bold text-black">
          Age
          <input type="text" />
        </label>
        <label htmlFor="" className="flex flex-col font-bold text-black">
          Email
          <input type="text" />
        </label>
        <button className="bg-blue-800 text-white py-3 rounded-xl font-extrabold">Adicionar</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
