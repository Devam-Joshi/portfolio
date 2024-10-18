import React, { useEffect, useState } from "react";
import { database } from "../../firebase/Firebase";
import { ref, set, onValue, runTransaction, push } from "firebase/database";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    incrementVisitorCount();
    fetchVisitorCount();
  }, []);

  const incrementVisitorCount = () => {
    const countRef = ref(database, "visitorCount");
    runTransaction(countRef, (currentCount) => {
      if (currentCount === null || currentCount === undefined) {
        return 1;
      } else {
        return currentCount + 1;
      }
    }).then(() => {
      storeVisitTimestamp();
    });
  };

  const storeVisitTimestamp = () => {
    const timestampRef = ref(database, "visitTimestamps");
    const newTimestampRef = push(timestampRef);
    const timestamp = new Date().toISOString();
    set(newTimestampRef, { timestamp });
  };

  const fetchVisitorCount = () => {
    const countRef = ref(database, "visitorCount");
    onValue(countRef, (snapshot) => {
      const count = snapshot.val();
      setVisitorCount(count);
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Devam Joshi</p>
        {/* Display the visitor count */}
        {/* <div className="counter">Total Visitors: {visitorCount}</div> */}
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
