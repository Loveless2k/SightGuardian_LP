import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock the EmailForm component to avoid server action issues
jest.mock("@/app/_components/EmailForm", () => ({
  EmailForm: () => (
    <form data-testid="email-form">
      <input placeholder="Escribe tu correo electrónico" />
      <button type="submit">Activa la protección visual</button>
    </form>
  ),
}));

describe("Landing Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    expect(screen.getByText(/De la impotencia a la/)).toBeInTheDocument();
    expect(screen.getByText(/tranquilidad/)).toBeInTheDocument();
  });

  it("renders the subheadline", () => {
    render(<Home />);

    expect(
      screen.getByText(/Nuestra app transforma la pantalla/),
    ).toBeInTheDocument();
  });

  it("renders the email form", () => {
    render(<Home />);

    expect(screen.getByTestId("email-form")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Escribe tu correo electrónico"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Activa la protección visual" }),
    ).toBeInTheDocument();
  });

  it("renders trust indicators", () => {
    render(<Home />);

    expect(screen.getByText("Protección Científica")).toBeInTheDocument();
    expect(screen.getByText("Fácil de Usar")).toBeInTheDocument();
    expect(screen.getByText("Tranquilidad Total")).toBeInTheDocument();
  });

  it("renders footer", () => {
    render(<Home />);

    expect(screen.getByText(/© 2025 SightGuardian AI/)).toBeInTheDocument();
  });
});
