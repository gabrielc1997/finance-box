type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => (
  <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
    {children}
  </button>
);
