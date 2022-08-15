/**
 * Use React Router v6
 * =========================
 * 1. Install router -----> yarn add react-router-dom@6
 * 2. Import -> BrowserRouter, Routes, Route
 * 3. <Route path='/home' element={<Home />} />
 * 4. শুধু Link ইউজ করলে মেনুতে ক্লিক একটিভ দেখাবে না । আর যদি NavLink ইউজ করলে একটিভ দেখাবে । -> <NavLink to='contact' className='nav-link' >Contact</NavLink>
 * 5. Nested route করতে চাইলে <Route> এর মাঝে লিখতে হবে </Route> এবং যেখানে দেখাবো সেখানে <Outlet/> component import করে ইউজ করতে হবে । 
 * 6. By Default home পেজে কোন component deal korte chai tahole path ar jaigai index use korte hobe-> <Route index element={<Home />} />
 * 
 * 
 * 
 * 
 * 
 */ 

// First Step: 
function App() {
    const [count, setCount] = useState(0)
  
    return (
      <Container className='mt-5'>
  
        <BrowserRouter>
        <MainNavbar/>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About name='I am obaydulla' />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
    )
  }
  
  export default App