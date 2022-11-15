
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import UploadImage from './components/UploadImage';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <UploadImage/>
        
      },
      {
        path: '/signUp', element: <SignUpForm></SignUpForm>
      },
      {
        path: '/login', element: <SignInForm></SignInForm>
      },
      

    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
