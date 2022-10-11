import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Feed';
import WritePost from './WritePost';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyPost from './WritePost'

 function Router() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/Feed" element={<Feed/>}/>
            <Route path="/WritePost" element={<WritePost/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/MyPost" element={<MyPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;