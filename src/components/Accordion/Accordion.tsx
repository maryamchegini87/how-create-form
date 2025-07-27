import styles from "./Accordion.module.css";
export default function Accordion({
  question,
  showContent,
  onToggle,
  value,
  onChange,
}) {
  const inputRenderers = {
    text: () => (
      <input
        type="text"
        name={question.id}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
    date: () => (
      <input
        type="date"
        name={question.id}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
    radio: () =>
      question.options?.map((option) => (
        <label key={option.key}>
          <input
            type="radio"
            name={question.id}
            value={option.key}
            checked={value === option.key}
            onChange={(e) => onChange(e.target.value)}
          />

          {option.text}
        </label>
      )),
    checkbox: () =>
      question.options?.map((option) => (
        <label key={option.key}>
          <input
            type="checkbox"
            name={`${question.id}-${option.key}`}
            value={option.key}
            checked={value?.includes(option.key)||false}
            onChange={(e) => {
              const isChecked = e.target.checked;
              const newValue = isChecked
              ?[...(value||[]),option.key]
              :(value||[]).filter((v)=>v!== option.key)
              onChange(newValue)
            }}
          />
          {option.text}
        </label>
      )),
    select: () => (
      <select name={question.id} value={value||""}
      onChange={(e)=>onChange(e.target.value)}>
        <option value="">Select...</option>
        {question.options?.map((option) => (
          <option key={option.key} value={option.key}>
            {option.text}
          </option>
        ))}
      </select>
    ),
  };

  const renderInputBytype = () =>
    inputRenderers[question.type]?.() || <p>Unsupported input type!</p>;
  return (
    <>
      <div className={styles.contentainer}>
        <div className={styles.wrapper}>
          <div
            onClick={onToggle}
            className={showContent ? styles.titleContent : styles.title}
          >
            {question.question}
          </div>
          {!showContent && (
            <div className={`${styles.circle} ${styles.blueCircle}`} />
          )}
        </div>
        {showContent && (
          <div className={styles.content}>{renderInputBytype()}</div>
        )}
        <div>
          <button className={styles.mainBtn}>Submit</button>
          <button className={styles.cancleBtn}>Cancel</button>
        </div>
      </div>
    </>
  );
}
