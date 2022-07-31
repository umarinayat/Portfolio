import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/umarinayat" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/umarinaat/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/umar-inayat-643510121/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
