import styles from "./ImageGrid.module.css";

interface Props {
  columns?: 2 | 3 | "2" | "3";
  gap?: string;
  children: React.ReactNode;
}

export default function ImageGrid({ columns = 2, gap, children }: Props) {
  const cols = Number(columns);

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        ...(gap ? { gap } : {}),
      }}
    >
      {children}
    </div>
  );
}
