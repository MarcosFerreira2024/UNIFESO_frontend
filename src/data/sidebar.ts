import type { ButtonSidebarProps } from "../components/SideBar/Button";
import { handleSignOut } from "../utils/handleSignOut";

export const createSidebarData = (
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
): ButtonSidebarProps[] => [
  {
    alt: 'Produtos',
    src: 'ui/product.svg',
    title: 'Ver Produtos',
    href: '/dashboard'
  },
  {
    alt: 'Adicionar Produtos',
    src: 'ui/addProduct.svg',
    title: 'Adicionar Produtos',
    action: () => setIsOpenModal(true)
  },
  {
    alt: 'Pedidos',
    src: 'ui/order.svg',
    title: 'Ver Pedidos',
    href: '/pedidos'
  },
  {
    alt: 'Sair',
    src: 'ui/profile.svg',
    title: 'Sair da Conta',
    action: handleSignOut
  }
];