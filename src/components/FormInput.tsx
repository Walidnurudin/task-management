import PlusIcon from '../assets/icons/plus.svg'
import BackIcon from '../assets/icons/back.svg'

type FormInputProps = {
    back: () => void;
    handleSubmit: (value: string) => void;
    value: string;
    setValue: (value: string) => void;
}

const FormInput = ({ back = () => { }, handleSubmit = () => { }, value = '', setValue = () => { } }: FormInputProps) => {
    return (
        <div className='form'>
            <img src={BackIcon} alt="back" onClick={back} />
            <input type="text" required placeholder="Masukan tugas" onChange={e => setValue(e.target.value)} value={value} />
            <img src={PlusIcon} alt="add" onClick={() => handleSubmit(value)} />
        </div>
    )
}

export default FormInput