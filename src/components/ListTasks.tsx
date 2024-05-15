import TrashIcon from '../assets/icons/trash.svg';
import CheckIcon from '../assets/icons/check.svg';
import UncheckIcon from '../assets/icons/uncheck.svg';

type ListTasksProps = {
  dataList: string[];
  isChecked?: boolean;
  deleteTask: (index: number) => void;
  checkTask: (index: number) => void;
}

const ListTasks = ({ dataList = [], isChecked = false, deleteTask = () => { }, checkTask = () => { } }: ListTasksProps) => {
  return (
    <ul className='list'>
      <span>{!isChecked && "Daftar tugas"}</span>
      <span>{isChecked && dataList.length !== 0 && "Tugas selesai"}</span>

      {dataList?.map((task, index) => (
        <li key={index} className='list-item'>
          {!isChecked ? (
            <img src={UncheckIcon} alt="uncheck" onClick={() => checkTask(index)} />
          ) : (
            <img src={CheckIcon} alt="check" onClick={() => checkTask(index)} />
          )}
          <span style={{
            textDecoration: isChecked ? 'line-through' : 'none'
          }}>{task}</span>
          <img src={TrashIcon} alt="delete" onClick={() => deleteTask(index)} />
        </li>
      ))}
    </ul>
  )
}

export default ListTasks