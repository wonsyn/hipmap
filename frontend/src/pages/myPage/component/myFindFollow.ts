export const myFindFollow = (
  following: {
    userId: number;
    followUserName: string;
    proImgSrc: string;
  }[],
  id: number
): boolean => {
  const result = following.find((e) => {
    if (id === e.userId) {
      return true;
    } else {
      return false;
    }
  });
  if (result) {
    return true;
  } else {
    return false;
  }
};

export const myFindFollows = (
  following: {
    userId: number;
    followUserName: string;
    proImgSrc: string;
  }[],
  follower: {
    userId: number;
    followUserName: string;
    proImgSrc: string;
  }[]
): boolean[] | undefined => {
  const result = follower.map((e) => {
    return myFindFollow(following, e.userId);
  });
  if (result !== undefined) {
    return result;
  } else {
    return undefined;
  }
};
