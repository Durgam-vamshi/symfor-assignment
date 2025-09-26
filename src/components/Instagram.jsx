
import { GoDotFill } from "react-icons/go";

const posts = [
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    src: "/instagram/Rectangle.png",
    category: "Healthy",
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    src: "/instagram/Rectangle (1).png",
    category: "Western",
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    src: "/instagram/Rectangle (2).png",
    category: "Healthy",
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    src: "/instagram/Rectangle (3).png",
    category: "Eastern",
  },
];

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="instagram_header">
        <h2>Check out @foodieland on Instagram</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla,
          maxime culpa dicta odio eius provident molestiae perferendis qui nobis
          cumque dignissimos.
        </p>
      </div>

      <div className="box">
        {posts.map((recipe, index) => (
          <div className="card" key={index}>
            <div className="card_header">
              <div className="card_header_left">
                <img loading="lazy" src="/instagram/Oval.png" alt="instagram" />
                <div className="card_header_info">
                  <div>
                    <h5>Foodieland.</h5>
                    <img
                      loading="lazy"
                      src="/instagram/Official Icon.png"
                      alt="tick"
                    />
                  </div>
                  <p>Tokyo, Japan</p>
                </div>
              </div>
              <div>...</div>
            </div>

            <img loading="lazy" src={recipe.src} alt={recipe.title} />

            <div className="content">
              <ul>
                <li className="actions">
                  {/* Heart, comment, share icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z"
                      fill="#262626"
                    />
                  </svg>
                  {/* Add other SVG icons here similarly */}
                </li>

                <li className="dots">
                  <GoDotFill className="blueDot" />
                  <GoDotFill className="grayDot" />
                  <GoDotFill className="grayDot" />
                </li>

                <li>
                  {/* Bookmark icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z"
                      fill="#262626"
                    />
                  </svg>
                </li>
              </ul>

              <div className="likes">
                <img loading="lazy" src="/instagram/profile.png" alt="profile" />
                Liked by <strong>craig_love</strong> and <strong>44,686</strong>{" "}
                others
              </div>

              <div>
                <strong>Foodieland.</strong> The vegetables dishes need to have
                certain vitamin for those people
              </div>

              <small>September 19</small>
            </div>

            <div className="slides">1/3</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
