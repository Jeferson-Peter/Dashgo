import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { RiGitMergeLine } from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: string;
}
export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignment="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
