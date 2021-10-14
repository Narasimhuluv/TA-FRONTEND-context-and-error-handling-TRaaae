import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ErrorBoundaries from "./ErrorBoundaries";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
      <ErrorBoundaries render={() => <h2>Something went wrong! Reload the page</h2>}>
          <SectionOne />
        </ErrorBoundaries>
        <ErrorBoundaries render={() => <h2>An Error Occured!</h2>}>
          <SectionTwo />
        </ErrorBoundaries>
        <ErrorBoundaries render={() => <h2>Something went wrong!</h2>}>
          <Location />
        </ErrorBoundaries>
      </div>
    </section>
  );
}

export default Main;
