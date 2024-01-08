import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './assets/Layout.jsx'
import Home from './assets/Components/Home/Home.jsx'
import About from './assets/Components/About/About.jsx'
import Contact from './assets/Components/Contact/Contact.jsx'
import User from './assets/Components/User/User.jsx'
import Github from './assets/Components/Github/Github.jsx'

// const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }
//       ]
//     }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home> }/>
      <Route path='about' element={<About></About>} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User></User>}  />
      <Route path='github' element={<Github></Github>}  />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
