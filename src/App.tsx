// src/App.tsx
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import { Route, Router, Switch } from "wouter";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotPassword" component={ForgotPassword} />
      </Switch>
    </Router>
  );
};

export default App;


// import React from "react";
// import './App.css';
// import PasswordInput from "./PasswordInput";

// const App: React.FC = () => {
//   function handleClick() {
//     window.location.href = '/ForgotPassword';
//   }

//   return (
//     // <div className="min-h-screen bg-gray-100">
//     <div className="min-h-screen">
//       <header className="bg-white py-6">
//         <div className="flex justify-center">
//           <img src="../src/assets/ATALogo.png" alt="ATA logo" className="h-20" />
//         </div>
//         <div>
//           <h1 className="text-1xl font-bold">Talent Pool Database</h1>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-0 max-w-md">
//         <div className="bg-white p-6 rounded shadow-md">
//           <form action="">
//             <div className="mb-4">
//               <input type="email" placeholder="E-mail" className="w-full border border-black p-1 rounded" />
//             </div>
//             <div>
//               <PasswordInput />
//             </div>
//             <p onClick={handleClick} className="text-right text-sm text-blue-500 underline mt-2" >Forgot your password?</p>
//             <div className="mt-4">
//               <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded" >Login</button>
//             </div>
//           </form>
//           <div className="flex items-center my-4 mx-6">
//             <div className="border-t border-gray-900 flex-grow mr-3"></div>
//             <span className="text-gray-900">OR</span>
//             <div className="border-t border-gray-900 flex-grow ml-3"></div>
//           </div>
//           <p>Don’t have an account?
//             <span className="text-blue-500 underline ml-2">SIGN UP</span>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
// import ForgotPassword from "./ForgotPassword"; // Import ForgotPassword component
// import { Link, Route, Router, Switch } from "wouter";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <header className="bg-white py-6">
//           <div className="flex justify-center">
//             <img src="../src/assets/ATALogo.png" alt="ATA logo" className="h-20" />
//           </div>
//           <div>
//             <h1 className="text-1xl font-bold">Talent Pool Database</h1>
//           </div>
//         </header>
//         <main className="container mx-auto px-4 py-0 max-w-md">
//           <div className="bg-white p-6 rounded shadow-md">
//             <Switch>
//               <Route path="/ForgotPassword" component={ForgotPassword} /> {/* Route to ForgotPassword component */}
//               {/* Other routes */}
//             </Switch>
//           </div>
//         </main>
//       </div>
//       <div className="text-right text-sm text-blue-500 underline mt-2">
//         <Link to="/ForgotPassword">Forgot your password?</Link>
//       </div>
//     </Router>
//   );
// };

// export default App;

