
import { TokenAllocationItem } from './types';
import TokenAllocationChart from './TokenAllocationChart';
import TokenAllocationList from './TokenAllocationList';

interface AllocationTabProps {
  tokenAllocation: TokenAllocationItem[];
}

const AllocationTab = ({ tokenAllocation }: AllocationTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
      <TokenAllocationChart tokenAllocation={tokenAllocation} />
      <TokenAllocationList tokenAllocation={tokenAllocation} />
    </div>
  );
};

export default AllocationTab;
