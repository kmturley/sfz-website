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
    var checkboxes = document.getElementById('checkboxes');
    if (!expanded) {
      if (checkboxes) checkboxes.style.display = "block";
      expanded = true;
    } else {
      if (checkboxes) checkboxes.style.display = "none";
      expanded = false;
    }
    console.log('expanded', expanded);
  }

  return(
    <form className={styles.multiselect}>
      <select className={styles.multiselectTitle} onMouseDown={showCheckboxes}>
        <option>{label}</option>
      </select>
      <div className={styles.multiselectCheckboxes} id="checkboxes">
        {
          values.map((value: string, index: number) => (
            <label className={styles.multiselectLabel} htmlFor={value}><input type="checkbox" id={value} />{value}</label>
          ))
        }
      </div>
    </form>
  )
};

export default MultiSelect;
