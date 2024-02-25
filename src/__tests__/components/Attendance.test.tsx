import { fireEvent, screen, within } from "@testing-library/react";
import { Attendance } from "@/components/Attendance";
import { render } from "../../../testUtils";
import { AttendanceRow } from "@/components/AttendanceRow";

describe("Attendance", () => {
  it("renders page title", async () => {
    const { container } = render(<Attendance />);

    const headingElement = container.getElementsByTagName("h3");

    expect(headingElement[0].innerHTML).toContain("Attendance");

    const selectBox = await screen.findAllByRole("combobox");
    expect(selectBox).toHaveLength(8);

    const headmasterElement = await screen.findByText("Professor Dumbledore");

    const headmistressEl = await screen.findByText("Minerva McGonagall");

    expect(headmasterElement).toBeInTheDocument();
    expect(headmistressEl).toBeInTheDocument();
  });

  it("'renders correctly and responds to attendance change", async () => {
    const { container } = render(<Attendance />);

    const tableBody = container.querySelector("tbody")!;

    const rows = within(tableBody).getAllByRole("row");

    expect(rows).toHaveLength(8);

    const cells = within(rows[0]).getAllByRole("cell");
    expect(cells).toHaveLength(2);

    expect(cells[0]).toHaveTextContent("Professor Dumbledore");
    expect(cells[1]).toHaveTextContent("Present");

    // Simulate attendance change
    const select = within(cells[1]).getByDisplayValue("Present");
    fireEvent.change(select, { target: { value: "Absent" } });

    // Check if the attendance status has been updated
    expect(within(cells[1]).getByDisplayValue("Absent")).toBeInTheDocument();
  });
});
