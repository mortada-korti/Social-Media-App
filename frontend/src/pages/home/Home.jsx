import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <Stories />
        <Share />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
