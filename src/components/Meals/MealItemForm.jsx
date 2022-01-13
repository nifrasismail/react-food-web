import classes from './MealItemForm.module.css';
import Input from '../UI/Input/Input';

const MealItemForm = props => {
    return <form className={classes.form}>
    <Input  input={{label :"Amount", type: 'number', id: 'amount', min: '1', max: '5', step: '1', defaultValue: '1'  }}/>
        <button>+ Add</button>
    </form>
}

export default MealItemForm