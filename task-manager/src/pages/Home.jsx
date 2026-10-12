// (Penerapan List, Keys, & Conditional Rendering)

import { useState } from 'react';
import TaskCard from '../components/TaskCard';

function Home({ tasks, onDeleteTask, onToggleComplete }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Menyaring data berdasarkan kata kunci pencarian (case-insensitive)
  const filteredTasks = tasks.filter((task) =>
    task.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Tugas Hari Ini</h2>
      
      {/* Controlled Input untuk Pencarian */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text"
          placeholder="Cari tugas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            width: '100%', 
            maxWidth: '300px', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />
      </div>

      {/* Conditional Rendering jika tidak ada hasil pencarian */}
      {filteredTasks.length === 0 && (
        <p>Tidak ada tugas yang cocok dengan pencarian.</p>
      )}

      {/* Render daftar tugas hasil filter */}
      {filteredTasks.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onDelete={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default Home;