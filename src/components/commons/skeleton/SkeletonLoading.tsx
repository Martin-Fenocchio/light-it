import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonLoading() {
  return (
    <div className="skeleton">
      <Skeleton />
    </div>
  );
}

export default SkeletonLoading;
