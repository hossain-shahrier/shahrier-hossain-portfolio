import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('max-w-screen-xl w-full mx-auto px-3 md:px-24', className)}
    >
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
