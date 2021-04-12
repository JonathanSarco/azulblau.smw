import React from "react";
import SINGLE_1 from '../../assets/single_mural/single_1.png';
import SINGLE_2 from '../../assets/single_mural/single_2.png';
import SINGLE_3 from '../../assets/single_mural/single_3.png';
import SINGLE_4 from '../../assets/single_mural/single_4.png';
import "./mural-image.scss";

function MuralImage(props) {
  console.log("ID: ", props);

  return (
    <div className="single-mural-container">
      <div className="mural-image">
        <div className="mural-image__item">
          <img src={SINGLE_1} alt="First" />
        </div>
        <div className="mural-image__item">
          <img src={SINGLE_2} alt="First" />
        </div>
        <div className="mural-image__item">
          <img src={SINGLE_3} alt="First" />
        </div>
        <div className="mural-image__item">
          <img src={SINGLE_4} alt="First" />
        </div>
      </div>

      <div className="mural-text">
        <div className="mural-text__date">
          <h2>DATE</h2>
          <span>April 30, 2020</span>
        </div>

        <div className="mural-text__tags">
          <h2>TAGS</h2>
          <span>Australia, Mexico, New Zealand, Uganda</span>
        </div>

        <div className="mural-text__main">
          <h1>george rose</h1>
          <p>
            Melbourne-based artist George Rose spends most of her time climbing
            up ladders and painting murals. Since abandoning her formal design
            training, George has pursued a multidisciplinary art practice using
            colour, gradients and type to spread her message. George travels
            from one project to another, rarely in one city for longer then a
            few months completing art commissions for a diverse range of
            clients. She has recently worked with CURVY, Good Cycles, Jansport,
            Starbucks and YHA Australia to name a few. If she’s not completing
            work for commercial projects, she’s on the global festival circuit
            including First Coat, Perfect Match, Roskilde, Tropica, Wall to Wall
            and Wonderwalls.
          </p>
        </div>

        <div className="mural-text__extra">
          <h2 className="mural-text__extra__title">Milabirra</h2>
          <p>
            Milabirra. It means Woman kind in Larrakia and is a powerful word
            that attracts good feminine energy. ⁣ I cant thank Tony (Tee) Lee
            and Nadine enough for working with me to find the right word from
            the Larrakia language for this wall as a part of the
            @darwinstreetartfestival. For this particular wall I really wanted
            to celebrate the diversity of language spoken by traditional owners
            of Australia, (Up to 363 languages belonging to an estimated 28
            language families and isolates) and pay my respect to the Larrakia
            Nation. I think language can be such an important connection to
            identity, culture and history and I think it's important to make
            visible the language we have so as not to loose that connection.
            Beyond #type the wall also features Blue Lotus and Sturt's Desert
            Rose #flowers for the Northern Territory.⁣ Honestly Love this wall
            so much. ⁣ Thank you to to @uncledevoid @t_dog_ @j_b_dewing
            @soleveins @eddiezammit and the whole Darwin crew for all your hard
            work and support on this one! Much love to my family up north.⁣ ⁣
            Pic courtesy of lady love @shannynhiggins
          </p>
        </div>
      </div>
    </div>
  );
}

export default MuralImage;
