import { useRouter } from 'next/router';
import { toSlug } from '../lib/utils';
import styles from '../styles/components/multi-select.module.css';

type MultiSelectProps = {
  label: string;
  values: string[];
};

const MultiSelect = ({ label , values}: MultiSelectProps) => {
  const router = useRouter();

  const showCheckboxes = (e: any) => {
    e.preventDefault();
    e.target.blur();
    window.focus();
    var checkboxes = document.getElementById(label);
    console.log(checkboxes?.style.display);
    if (checkboxes?.style.display === 'block') {
      if (checkboxes) checkboxes.style.display = 'none';
    } else {
      if (checkboxes) checkboxes.style.display = 'block';
    }
  }

  const isChecked = (value: string) => {
    return router.query[toSlug(label)]?.includes(toSlug(value));
  }

  const updateUrl = () => {
    const slug: string = toSlug(label);
    const form: HTMLFormElement = document.getElementById(slug) as HTMLFormElement;
    router.query[slug] = Array.from(new FormData(form).keys());
    router.push({
      pathname: router.pathname,
      query: router.query
    });
  }

  return(
    <form className={styles.multiselect} id={toSlug(label)}>
      <select className={styles.multiselectTitle} onMouseDown={showCheckboxes}>
        <option>{label}</option>
      </select>
      <div className={styles.multiselectCheckboxes} id={label}>
        {
          values.map((value: string, index: number) => (
            <label className={styles.multiselectLabel} htmlFor={toSlug(value)} key={toSlug(value)}><input className={styles.multiselectInput} type="checkbox" id={toSlug(value)} name={toSlug(value)} onClick={updateUrl} defaultChecked={isChecked(value)} />{value}</label>
          ))
        }
      </div>
    </form>
  )
};

export default MultiSelect;
