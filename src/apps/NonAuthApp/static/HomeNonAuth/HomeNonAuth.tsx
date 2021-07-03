import * as React from "react";
import { firestore } from "../../../../utilities/firebase";
import { collectIdsAndDocs } from "../../../../utilities/helper-functions";

const HomeNonAuth = () => {
  React.useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await firestore.collection("posts").get();

      const allposts = snapshot.docs.map(collectIdsAndDocs);

      console.log("Were are rusty!", allposts);
    };

    fetchPosts();
  }, []);

  return <div className="Home">I am home baby</div>;
};

export default HomeNonAuth;
