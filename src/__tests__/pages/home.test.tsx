import {
  fireEvent,
  screen,
  waitFor,
  within,
  act,
} from "@testing-library/react";
import Home from "@/pages/index";
import { render } from "../../../testUtils";

describe("Home", () => {
  it("renders page title", async () => {
    render(<Home />);
    const headingElement = await screen.findByText("Hogwarts Schedule App");
    expect(headingElement).toBeInTheDocument();
  });

  it("'renders correctly and responds to attendance change to student", async () => {
    render(<Home />);

    const slughornTeacher = await waitFor(
      () => screen.queryByTestId("teacher-4")!
    );
    const harryPorterStudent = await waitFor(
      () => screen.queryByTestId("student-1")!
    );

    // teacher name should be Horace Slughorn
    expect(slughornTeacher).toHaveTextContent("Horace Slughorn");
    // test teacher initialize attendance is present
    expect(slughornTeacher).toHaveTextContent("Present");
    // test Ron weasley exit in dom tree
    expect(harryPorterStudent).toHaveTextContent("Harry Potter");
    // test initialize teacher to Ron should be Horace Slughorn
    expect(harryPorterStudent).toHaveTextContent("Horace Slughorn");

    // Simulate attendance change
    const select = within(slughornTeacher).getByDisplayValue("Present");

    fireEvent.change(select, { target: { value: "Absent" } });

    const cells = await within(slughornTeacher).findAllByRole("cell");
    expect(cells).toHaveLength(2);

    // Check if the attendance status has been updated
    expect(within(cells[1]).getByDisplayValue("Absent")).toBeInTheDocument();
    // check in hirarchy new teacher assign if current teacher absent
    expect(harryPorterStudent).toHaveTextContent("Rubeus Hagrid");
  });
});
