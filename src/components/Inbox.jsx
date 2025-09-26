import React from "react";

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox_header">
        <h2>Deliciousness to your inbox</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consecte tuipisicing elit, sed do eiusmod
          tempor incidi dunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <form>
        <input type="text" placeholder="Your email address..." />
        <button type="submit">Subscribe</button>
      </form>

      <div className="plate">
        <img loading="lazy" src="/inbox/plate.png" alt="Plate" />
      </div>
      <div className="salad">
        <img loading="lazy" src="/inbox/salad.png" alt="Salad" />
      </div>
      <div className="rucola">
        <img loading="lazy" src="/inbox/rucola.png" alt="Rucola" />
      </div>
    </div>
  );
};

export default Inbox;
