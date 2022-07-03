const Home = (props: { name: string }) => {
  return (
    <div>
      {props.name === "" || typeof props.name === "undefined" ? (
        <h2>
          Hello &#9995; If you're an Auth App member, please{" "}
          <a href="/login">login</a>.
          <br />
          <br />
          If you're not, would you like to <a href="/signup">signup</a>?
        </h2>
      ) : (
        <h2>Hello {props.name} &#9995;</h2>
      )}
    </div>
  );
};

export default Home;
