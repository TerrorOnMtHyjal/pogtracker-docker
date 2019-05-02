import React from "react";
import styles from "./ReplayIDForm.module.scss";

interface ReplayIDFormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  processForm: (e: any) => void; // TODO
}

const ReplayIDForm = ({ input, setInput, processForm }: ReplayIDFormProps) => (
  <form onSubmit={processForm} className={styles.ReplayIDForm}>
    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
    <input type="submit" value="Submit Replay" />
  </form>
);

export default ReplayIDForm;
