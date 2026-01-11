function App() {
  return (
       <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
            </Routes>
            <Footer /> 
        </>
  )
}

export default App
