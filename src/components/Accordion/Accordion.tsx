import styles from "./Accordion.module.css";
export default function Accordion({ showContent, setShowContent }) {
  return (
    <>
      <hr />
      <div className={styles.contentainer}>
        <div onClick={() => setShowContent(!showContent)}>title</div>
        {showContent && (
          <div className={styles.content}>
            <p>content</p>
          </div>
        )}
      </div>
        <hr />
    </>
  );
}
