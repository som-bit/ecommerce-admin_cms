'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/Modal";

export const StroreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and category"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future create store form
        </Modal>
    )
}

