import { useEffect, useState } from "react";
import { comment, commentsProps } from "../components/comments";

export const useCommentSort = (comments: comment[]) => {
  const [sortedComments, setSortedComments] = useState<comment[]>();
  useEffect(() => {
    const result = comments.sort(function (a, b) {
      if (a.group > b.group) {
        return 1;
      }
      if (a.group === b.group) {
        if (a.sequence > b.sequence) {
          return 1;
        }
        if (a.sequence < b.sequence) {
          return -1;
        }
      }
      if (a.group < b.group) {
        return -1;
      }
      return 0;
    });
    setSortedComments(result);
  }, [comments]);

  return sortedComments;
};
