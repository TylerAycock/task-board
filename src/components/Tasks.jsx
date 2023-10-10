import "./Tasks.css";
import { BsThreeDots } from "react-icons/bs";
import { BsListNested} from "react-icons/bs";

const Tasks = () => {
  return (
    <div className="container">
      <div className="card-column future-projects">
        <div className="task-heading">
          <h2>Future Projects</h2>
          <BsThreeDots />
        </div>
        <div className="card">
          <div className="rectangle yellow"></div>
          <div className="rectangle green"></div>
          <div className="rectangle blue"></div>
          <div className="rectangle orange"></div>
          <p>Pick Color Trends</p>
          <p class="task-date">4/21/2017</p>
          <BsListNested/>
        </div>
        <div className="card">
          <div className="rectangle yellow"></div>
          <div className="rectangle green"></div>
          <div className="rectangle blue"></div>
          <div className="rectangle orange"></div>
          <p>Source Fabric</p>
        </div>
        <div className="card">
          <div className="rectangle yellow"></div>
          <div className="rectangle green"></div>
          <div className="rectangle blue"></div>
          <div className="rectangle orange"></div>
          <p>Manugacture Clothing</p>
        </div>
        <div className="card">
          <div className="rectangle yellow"></div>
          <div className="rectangle green"></div>
          <div className="rectangle blue"></div>
          <div className="rectangle orange"></div>
          <p>Confirm Structural integrity</p>
        </div>
      </div>
      <div className="card-column active-projects">
        <h2>Active Projects</h2>
      </div>
      <div className="card-column completed-projects">
        <h2>Completed Tasks</h2>
      </div>
    </div>
  );
};

export default Tasks;

// <div class="card future-i">
// 						<div class="rectangle yellow"></div>
// 						<div class="rectangle green"></div>
// 						<div class="rectangle blue"></div>
// 						<div class="rectangle orange"></div>
// 						<p class="task-description">Pick Color Trends</p>
// 						<img class="list-icon" src="https://content.codecademy.com/courses/learn-css-grid/project-ii/Resources/list_icon.svg">
// 						<p class="task-date">4/21/2017</p>
// 					</div>
