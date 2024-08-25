import { collection, doc, getDocs, addDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const getTodos = async () => {
  try {
    const todosRef = await getDocs(collection(db, "todos"));
    
    return todosRef.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
  } catch (e) {
    console.error("Error fetching todos: ", e);
  }
}

const addTodo = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo,
      timestamp: serverTimestamp()
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const deleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, "todos", id));

    console.log("Document deleted with ID: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

export { getTodos, addTodo, deleteTodo };