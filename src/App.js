import { useState, useEffect } from "react";
import { Box, Container, Typography, Button, TextField, CircularProgress, List } from "@mui/material";
import Todo from './components/Todo';
import { getTodos, addTodo } from "./actions/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const arr = await getTodos();
      setTodos(arr);
    }
    fetchTodos();
  }, [todos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  //console.log(todos);

  return (
    <Box sx={{ height: 1 }}>
      <Container fixed maxWidth="sm" sx={{ py: 3, display: 'flex', flexDirection: 'column', gap: 3, height: 1 }}>
        <Typography align="center" component="h1" variant="h3">TODO React Firebase</Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} noValidate autoComplete="off">
          <TextField fullWidth label="Write a TODO title" value={input} onChange={e => setInput(e.target.value)} />
          <Button 
            disableElevation
            size="large"
            type="submit" 
            onClick={handleSubmit} 
            variant="contained" 
            color="primary"
            sx={{ width: 1, height: 1 }}
            disabled={!input}
          >
            Add New Todo
          </Button>
        </Box>
        {todos.length ? (
          <List sx={{flexGrow: 1, overflow: 'auto', alignItems: 'center', justifyContent: 'center' }}>
            {todos.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.todo} />)}
          </List>
        ) : (
          <Box sx={{flexGrow: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <CircularProgress />
          </Box>  
        )}
      </Container>  
    </Box>

  );
}
export default App;
