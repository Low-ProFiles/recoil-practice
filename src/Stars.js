import { useRecoilValue } from "recoil";
import { getStars } from "./atoms/LookupGit";

const Stars = ({ className }) => {
  const userRepoStars = useRecoilValue(getStars);

  const stars = userRepoStars ? `${userRepoStars} 개` : "";
  return <div className={className}>{stars}</div>;
};

export default Stars;
