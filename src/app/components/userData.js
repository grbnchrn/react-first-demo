const userData = {
  firstName: "Maximilian",
  lastName: "Schwarzmüller",
  title: "Instructor",
};

export default function User() {
  return (
    <section>
      <div id="user" data-testid="user">
        <h2>
          {userData.firstName} {userData.lastName}
        </h2>
        <p>{userData.title} </p>
      </div>
    </section>
  );
}
