import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Have a word suggestion? you can drop it at{' '}
        <a href="https://discord.gg/YAPBWmJbkV" className="underline font-bold">
          discord
        </a>
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Creator's twitter
        <a
          href="https://twitter.com/kornostaka"
          className="underline font-bold"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <svg
              className="w-6 h-6 text-blue-300 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </div>
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        FFXIVrdle version is a fork of a OSS version of the popular word game -{' '}
        <a
          href="https://github.com/Marantle/ffxivrdle"
          className="underline font-bold"
        >
          check out the fork here
        </a>
        {` and `}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the original code here
        </a>
      </p>
    </BaseModal>
  )
}
