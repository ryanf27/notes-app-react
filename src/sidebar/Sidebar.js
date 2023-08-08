const Sidebar = ({ notes, addNote, deleteNote, activeNote, setActiveNote }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Notes App</h1>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="sidebar-notes">
        {notes.map((note) => (
          <div
            className={`sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              {new Date(note.lastModified).toLocaleDateString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
