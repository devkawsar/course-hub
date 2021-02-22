import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Review from "./components/Review/Review";
import Summary from "./components/Summary/Summary";
import NotFound from "./components/NotFound/NotFound";
import CourseDetail from "./components/CourseDetail/CourseDetail";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Switch>
					<Route path="/courses">
						<Courses></Courses>
					</Route>
					<Route path="/review">
						<Review></Review>
					</Route>
					<Route path="/summary">
						<Summary></Summary>
					</Route>
					<Route exact path="/">
						<Courses></Courses>
					</Route>
					<Route path="/course/:courseId">
						<CourseDetail></CourseDetail>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
