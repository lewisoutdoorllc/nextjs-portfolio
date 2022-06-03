const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <br />
      <p>

      </p>
      <br />
      <p>

      </p>
      <br />
      <p> 
      
      </p>
      <br />
      <ul>
        <li>NextJS</li>
        <li>ReactJS/Redux</li>
        <li>HTML5/CSS</li>
        <li>JavaScript ES5/ES6</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>jQuery</li>
        <li>Rust</li>
        <li>SQL/MySQL</li>
        <li>Git/GitHub</li>
        <li>Jest</li>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
