import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/components/providers/modal-provider";

import { Toaster } from "sonner";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
        <Toaster position="bottom-center" />
        <ModalProvider />
        {children}
    </ClerkProvider>
  );
};
export default PlatformLayout;