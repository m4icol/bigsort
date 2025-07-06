type ButtonRandomProps = {
  onClick?: () => void;
};

export default function ButtonRandom({ onClick }: ButtonRandomProps) {
  return (
    <button
      aria-label="Generate random numbers"
      onClick={onClick}
      className="px-3 py-2.5 flex cursor-pointer justify-center items-center rounded-lg border-1
      text-WM-subtext bg-WM-sidebar  border-WM-border hover:text-WM-text hover:border-WM-subtext
      dark:text-BM-subtext dark:bg-BM-sidebar dark:border-BM-border dark:hover:text-BM-text dark:hover:border-BM-subtext"
    >
      <svg
        width={18}
        height={(18 * 12) / 14}
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.777778 10.2857C0.571498 10.2857 0.373667 10.1954 0.227806 10.0347C0.0819442 9.87392 0 9.6559 0 9.42857C0 9.20124 0.0819442 8.98323 0.227806 8.82248C0.373667 8.66173 0.571498 8.57143 0.777778 8.57143H2.33333L4.66667 6L2.33333 3.42857H0.777778C0.577516 3.4187 0.388426 3.32408 0.249881 3.16442C0.111337 3.00475 0.0340143 2.79235 0.0340143 2.57143C0.0340143 2.35051 0.111337 2.13811 0.249881 1.97844C0.388426 1.81878 0.577516 1.72416 0.777778 1.71429H3.11111L6.22222 5.14286L9.33333 1.71429H10.8889V0L14 2.57229L10.8889 5.14286V3.42857H10.1111L7.77778 6L10.1111 8.57143H10.8889V6.85714L14 9.42857L10.8889 12V10.2857H9.33333L6.22222 6.85714L3.11111 10.2857H0.777778Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
