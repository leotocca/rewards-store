// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import Routes from "./Routes";
// import Navbar from "./components/Navbar";
// import { Footer } from "./components/Footer";
import storeFactory from "./store";

const store = storeFactory();
console.log({ store: store.getState() });

// export default function App() {
//   return (

//     <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
//       <div className="ml-6 pt-1">
//         <h1 className="text-2xl text-blue-700 leading-tight">
//           Tailwind and Create React App
//         </h1>
//         <p className="text-base text-gray-700 leading-normal">
//           Building apps together
//         </p>
//       </div>
//     </div>
//   );
// }
