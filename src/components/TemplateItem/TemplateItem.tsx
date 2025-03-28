import { Rating } from "@mui/material";
import { loremIpsum } from "./loremIpsum";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function TemplateItem() {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => router.replace("/templates/2")}
    >
      <div className={styles.coverImg} />
      <div className={styles.name}>Morcegos</div>
      <div className={styles.description}>
        {(() => {
          const maxLength = 80;
          let trimmedText = loremIpsum.substring(0, maxLength);
          if (loremIpsum.length > maxLength) {
            trimmedText += "...";
          }
          return trimmedText;
        })()}
      </div>
      <div className={styles.ratingContainer}>
        <Rating size="medium" defaultValue={2.5} readOnly precision={0.5} />
      </div>
    </div>
  );
}
