import { Outlet } from "react-router-dom";

// O Outlet é pra demonstrar onde será mostraddo o conteúdo da Página,

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
