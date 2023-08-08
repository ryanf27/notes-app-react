const Main = ({ activeNote, onUpdateNote }) => {
  const onEditFIeld = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">No note selected</div>;
  }

  return (
    <div className="main">
      <div className="main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditFIeld("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write Your Note Here..."
          value={activeNote.body}
          onChange={(e) => onEditFIeld("body", e.target.value)}
        ></textarea>
      </div>
      <div className="main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.body}</div>
      </div>
    </div>
  );
};

export default Main;
