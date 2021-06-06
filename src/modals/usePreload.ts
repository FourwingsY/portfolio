import { ModalType } from "./types"

/**
 * preload modals
 * this is useful when modal has mounting animation
 * but not useful when modal is big and rarely opened
 * @param modalName
 */
export default function usePreloadModal(modalName: ModalType): void {
  import(`./${modalName}`)
}
