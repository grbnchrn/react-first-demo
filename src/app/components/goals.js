const GOAL = [
  {
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
];

export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>TITLE : {title}</h2>
      <p>DESCRIPTION : {description}</p>
    </li>
  );
}

export default function CourseGoalContent() {
  return (
    <section>
      <div>
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
          <CourseGoal {...GOAL[0]} />
          <CourseGoal {...GOAL[1]} />
        </ul>
      </div>
    </section>
  );
}
