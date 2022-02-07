import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a fork of an open source version of the word guessing game we
        all know and love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the original code here
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Modification made by marantle -{' '}
        <a
          href="https://github.com/Marantle/ffxiv-wordle"
          className="underline font-bold"
        >
          check out the modification here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
