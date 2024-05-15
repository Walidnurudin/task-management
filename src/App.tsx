import './App.css';
import { useState } from 'react';

import ListTasks from './components/ListTasks';
import FormInput from './components/FormInput';

import PlusIcon from './assets/icons/plus.svg';

function App() {
  const [value, setValue] = useState('');
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [tasksFinished, setTasksFinished] = useState<string[]>([]);

  const [isForm, setIsForm] = useState(false);

  const handleSubmit = (value: string) => {
    setTasksList([...tasksList, value]);
    setValue('');
    setIsForm(false);
    alert('Tugas berhasil ditambahkan');
  }

  const deleteTask = (index: number) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    const newTasksList = tasksList.filter((task, i) => i !== index);
    setTasksList(newTasksList);
  }

  const deleteTaskFinished = (index: number) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    const newTasksFinished = tasksFinished.filter((task, i) => i !== index);
    setTasksFinished(newTasksFinished);
  }

  const checktask = (index: number) => {
    const task = tasksList[index];
    setTasksFinished([...tasksFinished, task]);
    const newTasksList = tasksList.filter((task, i) => i !== index);
    setTasksList(newTasksList);
  }

  const unChecktask = (index: number) => {
    const task = tasksFinished[index];
    setTasksList([task, ...tasksList]);
    const newTasksFinished = tasksFinished.filter((task, i) => i !== index);
    setTasksFinished(newTasksFinished);
  }

  const handlePlus = () => {
    setIsForm(true);
    setValue('');
  }

  return (
    <div className='container'>
      <h1>Manajemen Tugas</h1>

      {isForm ? (
        <FormInput back={() => setIsForm(false)} handleSubmit={handleSubmit} value={value} setValue={setValue} />
      ) : (
        <>
          <div className='wrapper-plus-icon'>
            <img className='plus-icon' src={PlusIcon} alt="add" onClick={handlePlus} />
          </div>

          {tasksList.length === 0 ? (
            <span className='no-data'>Tidak ada tugas</span>
          ) : (
            <ListTasks dataList={tasksList} deleteTask={deleteTask} checkTask={checktask} />
          )}


          <ListTasks dataList={tasksFinished} isChecked={true} deleteTask={deleteTaskFinished} checkTask={unChecktask} />
        </>
      )}


    </div>
  );
}

export default App;
