import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Toast from "../components/Toast";
import "../components/Feedback.css";

import {
  getAllNotes,
  saveNote,
  updateNote,
  deleteNote,
} from "../services/notesService";

import {
  logoutUser,
  getToken,
} from "../services/authService";

function Dashboard() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Notes");

  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [toast, setToast] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "React",
  });

  const categories = [
    "All Notes",
    "Pinned",
    "React",
    "JavaScript",
    "CSS",
    "Projects",
  ];

  // =========================
  // GET ALL NOTES
  // =========================
  const fetchNotes = async () => {
    if (!getToken()) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      const result = await getAllNotes();

      const backendNotes = result.data || [];

      const formattedNotes = backendNotes.map((note) => ({
        id: note.id,
        title: note.title,
        content: note.description,
        category: note.category,
        date: "Today",
        color: "purple",
        pinned: false,
      }));

      setNotes(formattedNotes);
    } catch (error) {
      const message = error.message?.toLowerCase();

      if (
        message?.includes("unauthorized") ||
        message?.includes("forbidden") ||
        message?.includes("jwt") ||
        message?.includes("token")
      ) {
        logoutUser();
        navigate("/login");
        return;
      }

      setToast({
        message: error.message || "Failed to load notes",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // =========================
  // FILTER NOTES
  // =========================
  const filteredNotes = notes.filter((note) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      note.title.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText);

    let matchesCategory = true;

    if (activeCategory === "Pinned") {
      matchesCategory = note.pinned;
    } else if (activeCategory !== "All Notes") {
      matchesCategory = note.category === activeCategory;
    }

    return matchesSearch && matchesCategory;
  });

  // =========================
  // CREATE MODAL
  // =========================
  const openCreateModal = () => {
    setEditingNote(null);

    setForm({
      title: "",
      content: "",
      category: "React",
    });

    setShowModal(true);
  };

  // =========================
  // EDIT MODAL
  // =========================
  const openEditModal = (note) => {
    setEditingNote(note);

    setForm({
      title: note.title,
      content: note.content,
      category: note.category,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingNote(null);
  };

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // CREATE / UPDATE
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.content.trim()) {
      setToast({
        message: "Please fill all fields",
        type: "error",
      });
      return;
    }

    if (!getToken()) {
      navigate("/login");
      return;
    }

    try {
      setSaving(true);

      if (editingNote) {
        await updateNote(
          editingNote.id,
          form.title,
          form.category,
          form.content
        );

        setToast({
          message: "Note updated successfully",
          type: "success",
        });
      } else {
        await saveNote(
          form.title,
          form.category,
          form.content
        );

        setToast({
          message: "Note created successfully",
          type: "success",
        });
      }

      closeModal();

      // Backend se fresh data
      await fetchNotes();
    } catch (error) {
      setToast({
        message: error.message || "Something went wrong",
        type: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = async (id) => {
    if (!getToken()) {
      navigate("/login");
      return;
    }

    try {
      setDeletingId(id);

      await deleteNote(id);

      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== id)
      );

      setToast({
        message: "Note deleted successfully",
        type: "success",
      });
    } catch (error) {
      setToast({
        message: error.message || "Failed to delete note",
        type: "error",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // =========================
  // PIN
  // =========================
  const togglePin = (id) => {
    const note = notes.find((item) => item.id === id);

    setNotes((prevNotes) =>
      prevNotes.map((item) =>
        item.id === id
          ? {
              ...item,
              pinned: !item.pinned,
            }
          : item
      )
    );

    setToast({
      message: note?.pinned
        ? "Note unpinned"
        : "Note pinned",
      type: "success",
    });
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <Link to="/" className="sidebar-brand">
          <span className="sidebar-logo">N</span>
          <span>NoteFlow</span>
        </Link>

        <div className="sidebar-section">
          <p className="sidebar-label">Workspace</p>

          <button
            className={`sidebar-item ${
              activeCategory === "All Notes"
                ? "active"
                : ""
            }`}
            onClick={() => setActiveCategory("All Notes")}
          >
            <span>▤</span>
            All Notes
            <span className="note-count">
              {notes.length}
            </span>
          </button>

          <button
            className={`sidebar-item ${
              activeCategory === "Pinned"
                ? "active"
                : ""
            }`}
            onClick={() => setActiveCategory("Pinned")}
          >
            <span>☆</span>
            Pinned
          </button>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-label">Categories</p>

          {categories.slice(2).map((category) => (
            <button
              key={category}
              className={`sidebar-item ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              <span className="category-dot"></span>
              {category}
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="user-card">
            <div className="avatar">A</div>

            <div className="user-info">
              <strong>Anand</strong>
              <span>anand@example.com</span>
            </div>

            <button
              className="logout-icon"
              onClick={handleLogout}
              title="Logout"
            >
              ↪
            </button>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="welcome-text">
              Good evening, Anand 👋
            </p>

            <h1>My Notes</h1>
          </div>

          <button
            className="add-note-btn"
            onClick={openCreateModal}
          >
            <span>+</span>
            New Note
          </button>
        </header>

        <div className="dashboard-toolbar">
          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search your notes..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}
          </div>

          <div className="view-info">
            {filteredNotes.length}{" "}
            {filteredNotes.length === 1
              ? "note"
              : "notes"}
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="empty-state">
            <div className="loader"></div>
            <h2>Loading notes...</h2>
          </div>
        ) : filteredNotes.length > 0 ? (
          <div className="notes-grid">
            {filteredNotes.map((note) => (
              <article
                className={`note-card note-${note.color}`}
                key={note.id}
              >
                <div className="note-card-top">
                  <span className="note-category">
                    {note.category}
                  </span>

                  <div className="note-actions">
                    {note.pinned && (
                      <span>📌</span>
                    )}

                    <button
                      onClick={() =>
                        togglePin(note.id)
                      }
                      title="Pin note"
                    >
                      ☆
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(note.id)
                      }
                      title="Delete note"
                      disabled={
                        deletingId === note.id
                      }
                    >
                      {deletingId === note.id
                        ? "..."
                        : "🗑"}
                    </button>
                  </div>
                </div>

                <h2>{note.title}</h2>

                <p>{note.content}</p>

                <div className="note-footer">
                  <span>{note.date}</span>

                  <button
                    className="edit-note"
                    onClick={() =>
                      openEditModal(note)
                    }
                  >
                    Edit
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">⌕</div>

            <h2>No notes found</h2>

            <p>
              Try searching for something else or
              choose another category.
            </p>
          </div>
        )}
      </main>

      {/* CREATE / EDIT MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="note-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="modal-header">
              <div>
                <h2>
                  {editingNote
                    ? "Edit Note"
                    : "Create Note"}
                </h2>

                <p>
                  {editingNote
                    ? "Update your note"
                    : "Add something to your notes"}
                </p>
              </div>

              <button
                className="close-modal"
                onClick={closeModal}
                disabled={saving}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-form-group">
                <label>Title</label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Enter note title"
                  autoFocus
                  disabled={saving}
                />
              </div>

              <div className="modal-form-group">
                <label>Category</label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  disabled={saving}
                >
                  <option>React</option>
                  <option>JavaScript</option>
                  <option>CSS</option>
                  <option>Projects</option>
                  <option>Career</option>
                  <option>Personal</option>
                </select>
              </div>

              <div className="modal-form-group">
                <label>Content</label>

                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleFormChange}
                  placeholder="Write your note..."
                  rows="6"
                  disabled={saving}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                  disabled={saving}
                >
                  {saving
                    ? editingNote
                      ? "Saving..."
                      : "Creating..."
                    : editingNote
                    ? "Save Changes"
                    : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default Dashboard;
