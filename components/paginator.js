import styles from "../styles/Paginator.module.css";
import { useRouter } from "next/router";
const Paginator = ({ currentPage = 1 }) => {
  const router = useRouter();
  return (
    <div className={styles.paginator}>
      <button
        disabled={currentPage <= 1}
        onClick={() => router.push(`/feed/${currentPage - 1}`)}
      >
        Previous
      </button>
      <span className={styles.currentPage}>#{currentPage}</span>
      <button
        disabled={currentPage >= 5}
        onClick={() => router.push(`/feed/${currentPage + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
