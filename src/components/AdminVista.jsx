import React from 'react';
import '../css/admin.css';

const sampleProfessors = [
  {
    id: 1,
    name: 'Dr. Ana López',
    subjects: ['Matemáticas I', 'Álgebra Lineal'],
    schedule: [
      { day: 'Lunes', time: '08:00 - 10:00', subject: 'Matemáticas I' },
      { day: 'Miércoles', time: '10:00 - 12:00', subject: 'Álgebra Lineal' },
    ],
  },
  {
    id: 2,
    name: 'Prof. Carlos García',
    subjects: ['Física II', 'Mecánica'],
    schedule: [
      { day: 'Martes', time: '09:00 - 11:00', subject: 'Física II' },
      { day: 'Jueves', time: '11:00 - 13:00', subject: 'Mecánica' },
    ],
  },
  {
    id: 3,
    name: 'Mtra. Isabel Fernández',
    subjects: ['Programación', 'Estructuras de Datos'],
    schedule: [
      { day: 'Lunes', time: '14:00 - 16:00', subject: 'Programación' },
      { day: 'Viernes', time: '08:00 - 10:00', subject: 'Estructuras de Datos' },
    ],
  },
];

export default function AdminView() {
  const adminName = 'Administrador: Juan Pérez';

  return (
    <div className="admin-layout">
      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-left">
          <img src="/img/logo.png" alt="Logo universidad" className="campus-logo" />
          <span className="app-title">Universidad UTC</span>
        </div>
        <div className="topbar-right">
          <span className="admin-name">{adminName}</span>
        </div>
      </header>

      <div className="main-area">
        {/* Sidebar */}
        <nav className="sidebar">
          <ul>
            <li className="active">Profesores</li>
            <li>Salones</li>
            <li>Registro de profesores</li>
            <li>Asignaturas</li>
            <li>Horarios</li>
            <li className="logout">Cerrar sesión</li>
          </ul>
        </nav>

        {/* Content */}
        <main className="admin-container">
          <h1>Profesores y horarios</h1>

          <div className="table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Profesor</th>
                  <th>Asignaturas</th>
                  <th>Horario</th>
                </tr>
              </thead>
              <tbody>
                {sampleProfessors.map((p) => (
                  <tr key={p.id}>
                    <td className="prof-name">{p.name}</td>
                    <td className="prof-subjects">{p.subjects.join(', ')}</td>
                    <td className="prof-schedule">
                      {p.schedule.map((s, i) => (
                        <div key={i} className="schedule-row">
                          <strong>{s.day}</strong>: {s.time} — <em>{s.subject}</em>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="notes">
            <p>
              Esta es una vista estática de ejemplo. Puedes conectar los datos a una API
              o a un estado global para mostrar el contenido real de tu base de
              datos.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
