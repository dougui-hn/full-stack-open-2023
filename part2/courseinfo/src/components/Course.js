import React from "react";

const Header = ({course}) => {
	return (
		<h2>{course}</h2>
	);
};
  
const Part = ({part, exercises}) => {
	return (
		<p>{part} {exercises}</p>
	);
};
  
const Content = ({parts}) => {
	return (
		<>
			{parts.map(part => (<Part key={part.id} part={part.name} exercises={part.exercises} />))}
		</>
	);
};
  
const Total = ({parts}) => {
	const total = parts.reduce((sum, part) => sum + part.exercises, 0);
	return (
		<p><strong>Number of exercises {total}</strong></p>
	);
};
  
const Course = ({courses}) => {
	return (
		courses.map((course) => (
			<div key={course.id}>
				<Header course={course.name} />
				<Content parts={course.parts} />
				<Total parts={course.parts} />
			</div>))
	);
};

export default Course;