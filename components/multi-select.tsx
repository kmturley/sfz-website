import styles from '../styles/components/multi-select.module.css';

type MultiSelectProps = {
  label: string;
  values: string[];
};

const MultiSelect = ({ label , values}: MultiSelectProps) => {
  let expanded = false;

  const showCheckboxes = (e: any) => {
    e.preventDefault();
    e.target.blur();
    window.focus();
    var checkboxes = document.getElementById(label);
    if (!expanded) {
      if (checkboxes) checkboxes.style.display = 'block';
      expanded = true;
    } else {
      if (checkboxes) checkboxes.style.display = 'none';
      expanded = false;
    }
  }

  return(
    <form className={styles.multiselect}>
      <select className={styles.multiselectTitle} onMouseDown={showCheckboxes}>
        <option>{label}</option>
      </select>
      <div className={styles.multiselectCheckboxes} id={label}>
        {
          values.map((value: string, index: number) => (
            <label className={styles.multiselectLabel} htmlFor={value}><input className={styles.multiselectInput} type="checkbox" id={value} />{value}</label>
          ))
        }
      </div>
    </form>
  )
};

export default MultiSelect;
