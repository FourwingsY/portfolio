import { createModalHook, createModalPreloader } from "@reactleaf/modal"

import register from "@/components/modals/register"

export const useModal = createModalHook<typeof register>()
export const preloadModal = createModalPreloader(register)
