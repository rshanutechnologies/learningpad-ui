import SequenceViewer from "../features/maths/SequenceViewer";
import AtAGlance from "../features/atAGlance/AtAGlance";
import BrainBuster from "../features/brainBuster/BrainBuster";
import DrawingOverlay from "../features/modelViewer/DrawingOverlay";

function MathsLayout({ topic }) {
  return (
    <div className="maths-wrapper">

      <div className="maths-left">
        <SequenceViewer topic={topic} />
      </div>

      <div className="maths-right">
        <h1>{topic.heading}</h1>
        <AtAGlance data={topic.atAGlance} />
        <BrainBuster data={topic.brainBuster} />
      </div>

      <DrawingOverlay />

    </div>
  );
}

export default MathsLayout;
