import { useApp } from '../../context/AppContext';
import {
  LimeZigzag,
  WhiteZigzag,
  WhiteCone,
  LimeDonut,
  LimeCone,
  WhiteCylinder
} from './HeroOrnaments';
import '../../styles/creatorStripe.css';

export const CreatorStripe = () => {
  const { navigateTo } = useApp();

  return (
    <section className="creator-stripe-section">
      {/* 3D Floating Ornaments matching Figma */}
      <div className="stripe-ornament stripe-tl-zigzag">
        <LimeZigzag />
      </div>
      <div className="stripe-ornament stripe-tl-white-zigzag">
        <WhiteZigzag />
      </div>
      <div className="stripe-ornament stripe-bl-cone">
        <WhiteCone />
      </div>
      <div className="stripe-ornament stripe-bl-donut">
        <LimeDonut />
      </div>
      <div className="stripe-ornament stripe-tr-cone">
        <LimeCone />
      </div>
      <div className="stripe-ornament stripe-tr-cylinder">
        <WhiteCylinder />
      </div>
      <div className="stripe-ornament stripe-br-zigzag">
        <LimeZigzag />
      </div>

      {/* Center Content */}
      <div className="creator-stripe-container">
        <h2 className="creator-stripe-headline">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="creator-stripe-subtext">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        <button
          className="creator-stripe-btn"
          onClick={() => navigateTo('signup')}
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
};
