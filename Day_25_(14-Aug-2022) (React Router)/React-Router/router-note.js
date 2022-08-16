/**
 * Use React Router v6
 * =========================
 * 1. Install router -----> yarn add react-router-dom@6
 * 2. Import -> BrowserRouter, Routes, Route
 * 3. <Route path='/home' element={<Home />} />
 * 4. শুধু Link ইউজ করলে মেনুতে ক্লিক একটিভ দেখাবে না । আর যদি NavLink ইউজ করলে একটিভ দেখাবে । -> <NavLink to='contact' className='nav-link' >Contact</NavLink>
 * 5. Nested route করতে চাইলে <Route> এর মাঝে লিখতে হবে </Route> এবং যেখানে দেখাবো সেখানে <Outlet/> component import করে ইউজ করতে হবে । 
 * 6. By Default home পেজে কোন component deal korte chai tahole path ar jaigai index use korte hobe-> <Route index element={<Home />} />
 * 7. আমরা params এর মাধ্যমে নির্দিষ্ট লিংকে যেতে পারি । এই জন্য যা করতে হবেঃ-
 * 
 * App.jsx:
 * ================
 * <Route path='/about/single-about/:name' element={<SingleAbout />} />
 * 
 * SingleAbout.jsx:
 * ==============================
 * import { useParams } from 'react-router-dom' // This

export default function SingleAbout() {
  const params = useParams() // This
  console.log(params)
  return (
    <>
      <div>SingleAbout</div>
      <h4>{params.name}</h4> // This
    </>
  )
}
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