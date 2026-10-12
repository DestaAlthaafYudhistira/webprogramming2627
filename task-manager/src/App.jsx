import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  // State Utama dengan properti isCompleted
  const [tasks, setTasks] = useState([
    { id: 1, judul: 'Mempelajari State dan Props', kategori: 'Belajar', isCompleted: false },
    { id: 2, judul: 'Membuat Navbar dengan React Router', kategori: 'Pekerjaan', isCompleted: true }
  ]);

  const handleAddTask = (newTask) => {
    // Memastikan tugas baru yang ditambahkan memiliki isCompleted: false
    setTasks((prevTasks) => [...prevTasks, { ...newTask, isCompleted: false }]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Handler untuk mengubah status penyelesaian tugas
  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              tasks={tasks} 
              onDeleteTask={handleDeleteTask} 
              onToggleComplete={handleToggleComplete} 
            />
          } 
        />
        <Route path="/tambah" element={<AddTask onAddTask={handleAddTask} />} />
        <Route path="/about" element={<About />} />
        
        {/* Rute Wildcard untuk menangkap URL tidak terdaftar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;