import { FaLightbulb } from "react-icons/fa";

function QuickTips() {
  return (
    <div className="tips-card">
      <div className="tips-title">
        <FaLightbulb />
        <h3>Quick Tips</h3>
      </div>

      <ul>
        <li>✔ All students are Present by default.</li>
        <li>✔ Click the status button to mark Absent.</li>
        <li>✔ Verify attendance before submitting.</li>
        <li>✔ Save Draft if you want to finish later.</li>
      </ul>
    </div>
  );
}

export default QuickTips;