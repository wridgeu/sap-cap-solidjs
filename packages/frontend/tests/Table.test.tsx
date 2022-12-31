import { describe, it, expect } from "vitest";
import { render, screen } from "solid-testing-library";
import Table from "../src/components/Table";

describe("Table component", () => {
  it("should assert show our table with one todo", () => {
    render(() => (
      <Table
        colHeaders={["Test", "Demo"]}
        todos={[
          {
            ID: "615bdc3a-c04c-4572-8c22-b1cfa1795f8a",
            modifiedAt: "",
            modifiedBy: "",
            title: "Demo Title",
            completed: false,
            createdAt: "",
            createdBy: "",
          },
        ]}
      />
    ));
    const todoTitle = screen.getByText("Demo Title");
    const todoId = screen.getByText("615bdc3a-c04c-4572-8c22-b1cfa1795f8a");
    expect(todoTitle).toBeInTheDocument();
    expect(todoId).toBeInTheDocument();
  });
});
