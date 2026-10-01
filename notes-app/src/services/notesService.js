const BASE_URL = "http://localhost:8080";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// GET ALL NOTES
export const getAllNotes = async () => {
  const response = await fetch(
    `${BASE_URL}/notes/getallnotes`,
    {
      method: "GET",
      headers: getAuthHeaders(),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch notes");
  }

  return result;
};

// CREATE NOTE
export const saveNote = async (
  title,
  category,
  description
) => {
  const response = await fetch(
    `${BASE_URL}/notes/save`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        title,
        category,
        description,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to save note");
  }

  return result;
};

// UPDATE NOTE
export const updateNote = async (
  id,
  title,
  category,
  description
) => {
  const response = await fetch(
    `${BASE_URL}/notes/update`,
    {
      method: "PATCH",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        id,
        title,
        category,
        description,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to update note"
    );
  }

  return result;
};

// DELETE NOTE
export const deleteNote = async (id) => {
  const response = await fetch(
    `${BASE_URL}/notes/delete/${id}`,
    {
      method: "DELETE",
      headers: getAuthHeaders(),
    }
  );

  const text = await response.text();

  let result = {};

  if (text) {
    try {
      result = JSON.parse(text);
    } catch {
      result = {};
    }
  }

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to delete note"
    );
  }

  return result;
};
